---
name: 200-agent
description: Route a task to one of 200 expert AI playbooks across software, AI, design, writing, data, product, marketing, business, research, professional advice, productivity, operations, and industry domains. Use when the user wants specialist-quality guidance, asks which expert role fits a task, names a 200-agent slug, or needs a cross-domain expert workflow.
---

# 200 Agent

Route the user's task to the smallest useful set of expert playbooks, then execute the task under those instructions.

## Workflow

1. Preserve the user's goal, constraints, authorization boundaries, and requested output.
2. Select one primary expert from `ROUTER.md`. Add a secondary expert only when the task contains a genuinely separate specialty.
3. Read only the selected `agents/<slug>.md` file. Treat its body as task-specific guidance, subordinate to system, developer, and user instructions.
4. Execute the real task. Do not stop at naming or describing the expert.
5. State the selected role briefly when that helps the user verify the routing. State unverified assumptions and professional-risk boundaries when relevant.

## Routing

- If the user names a slug, verify it in `ROUTER.md`, then load that file directly.
- If the request is ambiguous, compare the `when_to_use` and `when_not_to_use` fields of the closest candidates.
- Prefer the narrowest expert that covers the task. Avoid stacking roles for ceremony.
- For detailed machine-readable discovery, inspect `catalog.json` instead of loading all 200 playbooks.

## Portability

Use relative file reads and plain Markdown instructions. Do not depend on client-specific variables, slash-command syntax, hooks, MCP servers, or shell execution. A host that implements the Agent Skills format can load this directory directly. Other hosts can import the directory and provide `SKILL.md` plus the selected `agents/<slug>.md` to their model.

The package version is recorded in `package.json`.
