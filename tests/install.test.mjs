import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

const ROOT = path.resolve(import.meta.dirname, '..');
const INSTALL = path.join(ROOT, 'scripts', 'install.sh');
const SOURCE = path.join(ROOT, 'dist', 'claude-code', 'agents');

test('install refuses conflicts before writing unless --force is explicit', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), '200-agent-install-'));
  const destination = path.join(home, '.claude', 'agents');
  const names = fs.readdirSync(SOURCE).filter((name) => name.endsWith('.md')).sort();
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(path.join(destination, names[0]), 'keep me\n');

  const blocked = spawnSync('bash', [INSTALL, 'claude-code'], {
    cwd: ROOT,
    env: { ...process.env, HOME: home },
    encoding: 'utf8',
  });
  assert.notEqual(blocked.status, 0);
  assert.match(`${blocked.stdout}${blocked.stderr}`, /冲突/);
  assert.equal(fs.readFileSync(path.join(destination, names[0]), 'utf8'), 'keep me\n');
  assert.equal(fs.existsSync(path.join(destination, names[1])), false);

  const forced = spawnSync('bash', [INSTALL, 'claude-code', '--force'], {
    cwd: ROOT,
    env: { ...process.env, HOME: home },
    encoding: 'utf8',
  });
  assert.equal(forced.status, 0, forced.stderr);
  assert.equal(fs.readdirSync(destination).filter((name) => name.endsWith('.md')).length, 200);
  assert.notEqual(fs.readFileSync(path.join(destination, names[0]), 'utf8'), 'keep me\n');
});

test('--force never follows a destination symlink outside the agent directory', () => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), '200-agent-symlink-'));
  const destination = path.join(home, '.claude', 'agents');
  const name = fs.readdirSync(SOURCE).find((item) => item.endsWith('.md'));
  const outside = path.join(home, 'outside.md');
  fs.mkdirSync(destination, { recursive: true });
  fs.writeFileSync(outside, 'outside\n');
  fs.symlinkSync(outside, path.join(destination, name));

  const result = spawnSync('bash', [INSTALL, 'claude-code', '--force'], {
    cwd: ROOT,
    env: { ...process.env, HOME: home },
    encoding: 'utf8',
  });
  assert.notEqual(result.status, 0);
  assert.match(`${result.stdout}${result.stderr}`, /符号链接/);
  assert.equal(fs.readFileSync(outside, 'utf8'), 'outside\n');
});
