# docs-review — Documentation Reviewer Subagent

Purpose
- Review Markdown files (`.md`) across the repository and suggest improvements: clarity, structure, code examples, TOC, SEO, and required new docs.

Inputs
- `paths`: list of markdown files or `all`.
- `thoroughness`: `quick|medium|thorough`.

Outputs
- Summary of findings (EN), prioritized list of issues, unified diff patch with suggested edits, and a short changelog per file.
- Default behavior: unless the user explicitly requests "somente explicação" or "somente resumo", this subagent will produce and may apply suggested edits to the workspace (creating patch files or writing updated Markdown files). If the user requests only explanations/summaries, provide diffs and recommendations but do NOT modify files.

Prompt template (EN)
"Review the following markdown files: [paths]. Use [thoroughness]. Check: headings, code blocks, runnable examples, links, images, grammar, and README clarity. Output: 1) short summary, 2) list of issues, 3) unified diff patch with recommended edits. Keep explanations concise."

Notes
- Preserve code blocks exactly. Mark any ambiguous translation needs for the translator subagent.
