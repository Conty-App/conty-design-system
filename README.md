# Conty Design System

Monorepo do Design System da Conty.

Projeto inicial: a ideia é construir em publico, com contribuicoes pequenas e frequentes.

## Pacotes

- `@conty/design-system`: pacote de entrada para consumo externo.
- `@conty/tokens`: tokens e tema base.
- `@conty/ui`: componentes React reutilizaveis.
- `@conty/eslint-config`: configuracoes compartilhadas de lint.
- `@conty/tsconfig`: presets de TypeScript.
- `@conty/storybook`: catalogo visual e ambiente de desenvolvimento.

## Requisitos

- Node.js `>=20`
- npm

## Comecar localmente

```bash
npm install
npm run storybook
```

## Scripts principais

- `npm run storybook`: inicia o Storybook local.
- `npm run build`: builda todos os pacotes.
- `npm run lint`: executa lint em todos os pacotes.
- `npm run typecheck`: valida tipagem em todos os pacotes.

## Como contribuir (fluxo simples)

1. Crie uma branch com uma mudanca pequena.
2. Rode localmente:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build`
3. Abra PR explicando contexto, o que mudou e como testar.

## Release

- `npm run changeset`: cria changeset.
- `npm run version-packages`: aplica versionamento.
- `npm run release`: publica pacotes via Changesets.

## Atalhos de documentacao

- `docs/roadmap-publico.md`: visao simples do que estamos construindo e como contribuir.
- `docs/como-contribuir.md`: fluxo de contribuicao e checklist de PR.
- `docs/seguranca.md`: regras basicas de seguranca para codigo e release.
- `docs/qualidade.md`: checks minimos de qualidade.
- `docs/organizacao-repo.md`: convencoes de organizacao do monorepo.
- `docs/release-process.md`: passo a passo de release.
- `docs/button.md`: contrato atual e guia rapido do componente Button.

## Cursor Rules

As regras usadas pelo Cursor ficam em `.cursor/rules/`:

- `.cursor/rules/como-trabalhar.mdc`
- `.cursor/rules/seguranca.mdc`
- `.cursor/rules/qualidade.mdc`
- `.cursor/rules/organizacao-repo.mdc`

Essas regras ajudam a manter contribuicoes simples, claras e consistentes.

## Roadmap

- Publico (comunidade): `docs/roadmap-publico.md`
