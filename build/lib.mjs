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
  ['micro-merchants', '个体工商户与小微商家'],
  ['sme-boss-mgmt', '中小企业主与创始人'],
  ['cross-function-staff', '职场基础员工与通用职能'],
  ['enterprise-function', '大中型企业职能岗'],
  ['gov-public-sector', '体制内与政务数字化'],
  ['teacher-edu', '教育工作者'],
  ['students-career', '学生与升学就业'],
  ['content-livestream', '内容创作者与直播电商'],
  ['manufacturing-crossborder', '制造外贸与跨境电商'],
  ['local-life-services', '本地生活服务'],
  ['pro-services-finlaw', '专业服务·财税法律医疗保险房产'],
  ['software-ai-eng', '软件研发与AI工程与设计'],
  ['agri-county', '农业与县域经济'],
  ['personal-life-growth', '个人生活与成长'],
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
