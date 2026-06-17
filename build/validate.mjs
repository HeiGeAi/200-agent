// 200-agent 校验器:CI 守门。硬卡数量=200、slug 唯一、必填字段齐、域合法;触发词撞车给警告。
import { loadAgents, DOMAIN_IDS, EXPECT_COUNT, asList, triggersOf } from './lib.mjs'

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

// 3. 必填字段 + 域合法 + 正文非空
const REQUIRED = ['name', 'nameZh', 'nameEn', 'domain', 'description', 'triggers_zh', 'merged_from']
for (const a of agents) {
  for (const k of REQUIRED) {
    const v = a[k]
    const empty = v === undefined || v === '' || (Array.isArray(v) && v.length === 0)
    if (empty && !(k === 'merged_from')) errors.push(`${a._file} 缺字段 ${k}`)
  }
  if (a.domain && !DOMAIN_IDS.includes(a.domain)) errors.push(`${a._file} 域非法:${a.domain}`)
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

console.log(`校验 ${agents.length} 个 agent`)
warns.forEach(w => console.log(`  ⚠ ${w}`))
if (errors.length) {
  console.error(`\n✗ 失败 ${errors.length} 项:`)
  errors.forEach(e => console.error(`  ✗ ${e}`))
  process.exit(1)
}
console.log(`\n✓ 通过:${agents.length} 个 agent、slug 唯一、必填齐全、域合法。警告 ${warns.length} 条(非阻断)。`)
