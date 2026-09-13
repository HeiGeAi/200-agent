// 200-agent 校验器:CI 守门。硬卡数量=200、slug 唯一、必填字段齐、域合法;触发词撞车给警告。
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { loadAgents, DOMAIN_IDS, DOMAINS, EXPECT_COUNT, asList, triggersOf, ROOT } from './lib.mjs'

const agents = loadAgents()
const errors = []
const warns = []

// 1. 数量硬卡
if (agents.length !== EXPECT_COUNT) errors.push(`agent 数量=${agents.length},必须=${EXPECT_COUNT}`)

// 2. slug 全局唯一
const seen = new Map()
for (const a of agents) {
  if (seen.has(a.slug)) errors.push(`slug 撞名:${a.slug}(${a._file} 与 ${seen.get(a.slug)})`)
  else seen.set(a.slug, a._file)
}

// 3. 必填字段 + 域合法 + 正文非空(merged_from 允许为空,只做警告,不入必填)
const REQUIRED = ['name', 'nameZh', 'nameEn', 'domain', 'description', 'descriptionEn', 'triggers_zh']
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/
for (const a of agents) {
  for (const k of REQUIRED) {
    const v = a[k]
    const empty = v === undefined || v === '' || (Array.isArray(v) && v.length === 0)
    if (empty) errors.push(`${a._file} 缺字段 ${k}`)
  }
  if (a.domain && !DOMAIN_IDS.includes(a.domain)) errors.push(`${a._file} 域非法:${a.domain}`)
  // 格式硬检查(约定见 docs/SCHEMA.md):值禁「半角冒号+空格」、name 即文件名、slug 必须 kebab-case、触发词禁逗号/竖线
  for (const [k, v] of Object.entries(a)) {
    if (k === 'body' || k === '_file') continue
    for (const item of Array.isArray(v) ? v : [v]) {
      if (typeof item === 'string' && item.includes(': ')) errors.push(`${a._file} 字段 ${k} 的值含半角冒号+空格,会破坏下游 YAML 解析`)
    }
  }
  if (a.name && a.name !== a._file.replace(/\.md$/, '')) errors.push(`${a._file} name(${a.name}) 与文件名不一致`)
  if (a.name && !KEBAB.test(a.name)) errors.push(`${a._file} slug 非 kebab-case:${a.name}`)
  for (const t of triggersOf(a)) {
    if (/[,|]/.test(t)) errors.push(`${a._file} 触发词含逗号或竖线:「${t}」`)
  }
  if (!a.body || a.body.length < 200) warns.push(`${a._file} 正文偏短(${a.body ? a.body.length : 0} 字符)`)
  if (asList(a.merged_from).length === 0) warns.push(`${a._file} merged_from 为空(原创 agent 可忽略)`)
}

// 4. 触发词撞车(警告)
const trig = new Map()
for (const a of agents) for (const t of triggersOf(a)) {
  if (!trig.has(t)) trig.set(t, [])
  trig.get(t).push(a.slug)
}
let collide = 0
for (const [t, owners] of trig) if (owners.length > 3) { collide++; if (collide <= 15) warns.push(`触发词「${t}」被 ${owners.length} 个 agent 共用:${owners.slice(0, 4).join(', ')}…`) }

// 5. README.md 的 14 域数量表在自动生成区块之外、靠手工维护,这里与 agents/ 实际数量对账
const readmeFile = join(ROOT, 'README.md')
if (existsSync(readmeFile)) {
  const lines = readFileSync(readmeFile, 'utf8').split('\n').map(l => l.replace(/\s/g, ''))
  for (const [id, name] of DOMAINS) {
    const expect = agents.filter(a => a.domain === id).length
    const row = lines.find(l => l.startsWith(`|${name}|`))
    const got = row ? parseInt(row.split('|')[2], 10) : NaN
    if (got !== expect) errors.push(`README.md 域数量表「${name}」=${row ? got : '缺失'},应为 ${expect}`)
  }
}

console.log(`校验 ${agents.length} 个 agent`)
warns.forEach(w => console.log(`  ⚠ ${w}`))
if (errors.length) {
  console.error(`\n✗ 失败 ${errors.length} 项:`)
  errors.forEach(e => console.error(`  ✗ ${e}`))
  process.exit(1)
}
console.log(`\n✓ 通过:${agents.length} 个 agent、slug 唯一、必填齐全、域合法。警告 ${warns.length} 条(非阻断)。`)
