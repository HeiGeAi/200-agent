import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILL = path.join(ROOT, 'dist', 'agent-skills', '200-agent');
const INSTALL = path.join(ROOT, 'scripts', 'install.sh');

test('build emits a complete portable Agent Skill', () => {
  const frontmatter = fs.readFileSync(path.join(SKILL, 'SKILL.md'), 'utf8');
  const pkg = JSON.parse(fs.readFileSync(path.join(SKILL, 'package.json'), 'utf8'));
  const agents = fs.readdirSync(path.join(SKILL, 'agents')).filter((name) => name.endsWith('.md'));

  assert.match(frontmatter, /^---\nname: 200-agent\ndescription: [^\n]+\n---/);
  assert.doesNotMatch(frontmatter, /\$ARGUMENTS|~\/\.|\.claude|\.codex|\.codebuddy/);
  assert.equal(pkg.version, '0.2.0');
  assert.equal(agents.length, 200);
  assert.equal(fs.existsSync(path.join(SKILL, 'agents', 'openai.yaml')), true);
});

test('standard installer supports generic, Claude, Codex, and CodeBuddy skill homes', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), '200-agent-skill-install-'));
  const targets = new Map([
    ['standard', '.agents/skills/200-agent'],
    ['claude-skill', '.claude/skills/200-agent'],
    ['codex-skill', '.codex/skills/200-agent'],
    ['codebuddy', '.codebuddy/skills/200-agent'],
  ]);

  for (const [target, destination] of targets) {
    const result = spawnSync('bash', [INSTALL, target], {
      cwd: ROOT,
      env: { ...process.env, HOME: home },
      encoding: 'utf8',
    });
    assert.equal(result.status, 0, `${target}: ${result.stderr}`);
    assert.equal(fs.existsSync(path.join(home, destination, 'SKILL.md')), true);
  }
});

test('standard installer replaces only its owned skill directory with --force', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), '200-agent-skill-conflict-'));
  const destination = path.join(home, '.codex', 'skills', '200-agent');
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(path.join(destination, 'keep-me'), 'existing\n');

  const blocked = spawnSync('bash', [INSTALL, 'codex-skill'], {
    cwd: ROOT,
    env: { ...process.env, HOME: home },
    encoding: 'utf8',
  });
  assert.notEqual(blocked.status, 0);
  assert.equal(fs.readFileSync(path.join(destination, 'keep-me'), 'utf8'), 'existing\n');

  const forced = spawnSync('bash', [INSTALL, 'codex-skill', '--force'], {
    cwd: ROOT,
    env: { ...process.env, HOME: home },
    encoding: 'utf8',
  });
  assert.equal(forced.status, 0, forced.stderr);
  assert.equal(fs.existsSync(path.join(destination, 'keep-me')), false);
  assert.equal(fs.existsSync(path.join(destination, 'SKILL.md')), true);
});
