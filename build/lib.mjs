// 200-agent 构建工具核心库(零依赖,纯 Node ESM)
// 负责:解析 canonical agent 源文件的 frontmatter、加载全部 agent、提供域元数据。
import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
export const AGENTS_DIR = join(ROOT, 'agents')
export const DIST_DIR = join(ROOT, 'dist')

// 锁定的 14 个域(id -> 中文名 + 展示顺序),用于 ROUTER 分组与校验
export const DOMAINS = [
  ['software-engineering', '软件工程'],
  ['ai-engineering', 'AI工程与智能体'],
  ['ai-visual-creation', 'AI视觉创作'],
  ['design-ux', '设计与体验'],
  ['writing-content', '写作与内容'],
  ['data-analytics', '数据与分析'],
  ['product-growth', '产品与增长'],
  ['marketing-brand', '营销与品牌'],
  ['business-strategy', '商业与战略'],
  ['research-learning', '研究与学习'],
  ['professional-advisors', '专业领域顾问'],
  ['career-productivity', '职业与个人效能'],
  ['ops-pm-sales', '运营·项目·销售'],
  ['vertical-industries', '行业垂直'],
]
export const DOMAIN_NAMES = Object.fromEntries(DOMAINS)
export const DOMAIN_IDS = DOMAINS.map(([id]) => id)
export const EXPECT_COUNT = 200

// 容错的 frontmatter 解析:支持 `key: value` 与 `key: [a, b]`。
// 设计上要求 canonical 源文件的 frontmatter 值不含半角冒号,故按首个 ": " 切分。
export function parseFrontmatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: text.trim() }
  const data = {}
  for (const raw of m[1].split('\n')) {
    const line = raw.replace(/\s+$/, '')
    if (!line.trim() || line.trim().startsWith('#')) continue
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    if (val.startsWith('[') && val.endsWith(']')) {
      data[key] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
    } else {
      data[key] = val.replace(/^["']|["']$/g, '')
    }
  }
  return { data, body: m[2].trim() }
}

export function loadAgents() {
  const files = readdirSync(AGENTS_DIR).filter(f => f.endsWith('.md')).sort()
  return files.map(f => {
    const { data, body } = parseFrontmatter(readFileSync(join(AGENTS_DIR, f), 'utf8'))
    return { ...data, body, _file: f, slug: data.name || basename(f, '.md') }
  })
}

export const asList = v => Array.isArray(v) ? v : (v ? [v] : [])
export const triggersOf = a => [...asList(a.triggers_zh), ...asList(a.triggers_en)]
