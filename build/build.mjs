// 200-agent 构建器:从 agents/*.md 单一真相,转译出三套工具产物 + 索引。
//   dist/claude-code/agents/<slug>.md   Claude Code subagent
//   dist/codex/prompts/<slug>.md        OpenAI Codex 自定义提示 + AGENTS.md 索引
//   dist/openclaw/agents/<slug>.md      OpenClaw agent
//   catalog.json                        机器可读索引
//   ROUTER.md                           人读路由表(按域分组)
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { ROOT, DIST_DIR, DOMAINS, DOMAIN_NAMES, loadAgents, asList, triggersOf } from './lib.mjs'

const agents = loadAgents()
console.log(`加载 ${agents.length} 个 canonical agent`)

rmSync(DIST_DIR, { recursive: true, force: true })
const dirs = {
  cc: join(DIST_DIR, 'claude-code', 'agents'),
  codex: join(DIST_DIR, 'codex', 'prompts'),
  claw: join(DIST_DIR, 'openclaw', 'agents'),
}
Object.values(dirs).forEach(d => mkdirSync(d, { recursive: true }))

const strip = s => (s || '').replace(/[。.\s]+$/, '')
const ccDesc = a => {
  const t = triggersOf(a).join('、')
  const d = strip(a.description || a.nameZh)
  const w = strip(a.when_to_use)
  return (w ? `${d}。何时用:${w}。触发词:${t}` : `${d}。触发词:${t}`).replace(/\n/g, ' ')
}

for (const a of agents) {
  const body = a.body || ''
  // ---- Claude Code:name + description 驱动自动路由,正文即系统提示词 ----
  const cc = `---\nname: ${a.slug}\ndescription: ${ccDesc(a)}\ncolor: ${a.color || 'blue'}\n---\n\n${body}\n`
  writeFileSync(join(dirs.cc, `${a.slug}.md`), cc)

  // ---- Codex:自定义提示,/<slug> 调用 ----
  const codex = `---\ndescription: ${a.description || a.nameZh}\n---\n# ${a.nameZh}（${a.nameEn || ''}）\n\n` +
    `- 触发词:${triggersOf(a).join('、')}\n- 何时用:${a.when_to_use || ''}\n- 何时别用:${a.when_not_to_use || ''}\n\n${body}\n`
  writeFileSync(join(dirs.codex, `${a.slug}.md`), codex)

  // ---- OpenClaw:frontmatter + 正文(与 CC 约定相近,触发字段独立保留) ----
  const claw = `---\nname: ${a.slug}\nnameZh: ${a.nameZh}\ndescription: ${a.description || a.nameZh}\ntriggers: [${triggersOf(a).join(', ')}]\nwhen_to_use: ${a.when_to_use || ''}\n---\n\n${body}\n`
  writeFileSync(join(dirs.claw, `${a.slug}.md`), claw)
}

// ---- Codex AGENTS.md 索引 ----
let agItems = ''
for (const [id, name] of DOMAINS) {
  const list = agents.filter(a => a.domain === id)
  agItems += `\n## ${name}（${id}）\n\n` + list.map(a => `- \`/${a.slug}\` — ${a.nameZh}:${a.description || ''}`).join('\n') + '\n'
}
writeFileSync(join(DIST_DIR, 'codex', 'AGENTS.md'), `# 200 agent · Codex 提示索引\n\n共 ${agents.length} 个,放入 ~/.codex/prompts/ 后用 /<slug> 调用。\n${agItems}`)

// ---- catalog.json ----
const catalog = agents.map(a => ({
  slug: a.slug, nameZh: a.nameZh, nameEn: a.nameEn, domain: a.domain,
  description: a.description, audience: asList(a.audience),
  triggers_zh: asList(a.triggers_zh), triggers_en: asList(a.triggers_en),
  when_to_use: a.when_to_use, when_not_to_use: a.when_not_to_use, merged_from: asList(a.merged_from),
}))
writeFileSync(join(ROOT, 'catalog.json'), JSON.stringify({ total: agents.length, domains: DOMAINS.map(([id, name]) => ({ id, name, count: agents.filter(a => a.domain === id).length })), agents: catalog }, null, 2))

// ---- ROUTER.md ----
let router = `# 200 agent · 路由总表\n\n共 **${agents.length}** 个 agent,按 14 域分组。\`slug\` 即各工具的调用名 / 文件名。\n`
for (const [id, name] of DOMAINS) {
  const list = agents.filter(a => a.domain === id)
  router += `\n## ${name}（${list.length}）\n\n| slug | 中文名 | 一句话 | 触发词 |\n|---|---|---|---|\n`
  router += list.map(a => `| \`${a.slug}\` | ${a.nameZh} | ${(a.description || '').replace(/\|/g, '/')} | ${triggersOf(a).slice(0, 5).join('、')} |`).join('\n') + '\n'
}
writeFileSync(join(ROOT, 'ROUTER.md'), router)

console.log(`构建完成:`)
console.log(`  Claude Code -> dist/claude-code/agents/ (${agents.length})`)
console.log(`  Codex       -> dist/codex/prompts/ (${agents.length}) + AGENTS.md`)
console.log(`  OpenClaw    -> dist/openclaw/agents/ (${agents.length})`)
console.log(`  索引        -> catalog.json, ROUTER.md`)
