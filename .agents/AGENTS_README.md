# Agents model for repository maintenance

This folder contains agent and subagent model files used to coordinate repository maintenance tasks such as documentation review, code review, dependency analysis, testing, and frontend work.

Files
- `ProjectMaintainer.agent.md` — main orchestration agent.
- `subagents/docs-review.agent.md` — documentation review.
- `subagents/code-review.agent.md` — code analysis and refactor suggestions.
- `subagents/deps-update.agent.md` — dependency analysis and safe updates.
- `subagents/unit-tests.agent.md` — unit test creation and review.
- `subagents/frontend-nx.agent.md` — Next.js frontend specialist.
- `subagents/pt-en-translator.agent.md` — translation rules for PT↔EN.

Usage (manual)
1. Read the agent specs to understand prompts and inputs.
2. Use the `pt-en-translator` for user inputs in Portuguese.
3. Invoke subagents as needed and aggregate outputs in the `ProjectMaintainer` flow.
4. Apply suggested patches locally and run build/tests.

Notes & Safety
- Agents should never perform git commits or pushes automatically. They may generate patches and exact CLI commands for maintainers to run.
- Default file-edit policy: agents and subagents are allowed to apply suggested edits to workspace files by default (create/update files or write/apply patches). If you prefer no file changes, include the phrase "somente explicação" or "somente resumo" in your prompt and agents will only provide diffs/explanations without modifying files.

GitHub Copilot integration
- The agents are designed to supply concise prompt snippets and small context blocks to be used with GitHub Copilot or Copilot Chat. These snippets help Copilot propose code changes or tests which the maintainer can then review. Use the `code-review` subagent prompts as Copilot-ready instructions.

Runbook
- See [.agents/RUNBOOK.md](.agents/RUNBOOK.md) for example execution flows and ready-to-use prompts in Portuguese and English.
