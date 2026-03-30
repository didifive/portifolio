# Runbook — Exemplos de execução

Este runbook mostra exemplos práticos de como usar o `ProjectMaintainer` e os subagentes. Prompts prontos são fornecidos em Português (entrada) e o fluxo interno usa Inglês para os subagentes.

1) Revisar documentação + atualizar dependências seguras + rodar testes

- Prompt (PT) para `ProjectMaintainer`:

  "Revise a documentação em `docs/` (thoroughness=medium), analise `package.json` e aplique upgrades seguros (policy=safe-only). Rode build e testes. Gere patches e um resumo das mudanças em português."

- O agente fará:
  - `pt-en-translator` (PT→EN)
  - `docs-review` (medium)
  - `deps-update` (safe-only)
  - rodar localmente `npm run build` e `npm test` (se solicitado)
  - agregar resultados e traduzir resumo final para PT (já que o input foi em PT)

- Observação sobre aplicação de alterações: por padrão os subagentes podem aplicar as alterações sugeridas diretamente no workspace (criar/atualizar arquivos ou salvar patches). Se você quiser apenas explicações ou resumos sem que os arquivos sejam alterados, inclua explicitamente no prompt as palavras "somente explicação" ou "somente resumo".

2) Solicitar revisão de código com foco SonarQube e Copilot

- Prompt (PT):

  "Revise o código em `src/` com foco em security e performance; inclua correções para mitigar alertas comuns do SonarQube e gere prompts curtos para usar com GitHub Copilot."

- Saída esperada:
  - Lista de problemas por arquivo com severidade
  - Patch(es) sugeridos (unified diffs)
  - Para cada patch: SonarQube rule id/categoria, razão, e prompt Copilot sugerido

3) Gerar testes unitários para um componente específico

- Prompt (PT):

  "Crie testes unitários (Jest + React Testing Library) para `src/components/ui/Button/Button.tsx` cobrindo: states, sizes, disabled, and asChild. Gere arquivo de teste e comandos para executar."

- Saída esperada:
  - Patch com `Button.spec.tsx` (novo/atualizado)
  - Instruções para executar testes: `npm test -- src/components/ui/Button/Button.spec.tsx`

Como aplicar patches gerados

1. Salve o diff em `updates.patch` (o agente pode criar o conteúdo). 
2. Aplicar localmente:

```bash
git apply updates.patch
# verificar mudanças
npm run build
npm test
```

Notas de segurança
- Os agentes NÃO realizarão commits nem pushs. Sempre revise patches antes de aplicar.

Dicas de prompts Copilot (curtos)
- Refatorar função com complexidade alta:

  "Refactor function `foo` to reduce cyclomatic complexity to <= 4. Keep behavior identical. Show only the patch. Context: [3-6 lines]."

Uso com GitHub Copilot Chat
- Cole o prompt Copilot gerado pelo subagente `code-review` no Copilot Chat para obter sugestões de código interativas. Em seguida, compare com o patch sugerido pelo agente.
