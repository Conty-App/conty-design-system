# Qualidade

Politica minima para manter estabilidade com crescimento rapido.

## Checks de codigo
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Para UI e tokens
- Toda mudanca relevante em componente deve ter story atualizada.
- Tokens sao o padrao oficial para valores visuais novos (cor, sombra, espacamento, raio e tipografia).
- Hardcode visual novo deve ser evitado; so usar em excecao documentada com justificativa tecnica.
- Validar estados essenciais quando aplicavel.

## Para release
- Mudanca versionavel deve incluir changeset.
- Changelog e impacto devem estar claros.
