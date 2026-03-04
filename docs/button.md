# Button (`@conty/ui`)

Guia rapido com o contrato atual do componente `Button`.

## API principal

- `variant`: `"surface" | "solid" | "soft" | "ghost"` (padrao: `"surface"`).
- `size`: `"1" | "2" | "3" | "4"` (padrao: `"2"`).
- `disabled`: desabilita interacao e aplica estilo visual de inatividade.
- `loading`: bloqueia interacao, ativa `aria-busy` e mostra spinner.
- `asChild`: renderizacao via `Slot` para composicao com outros elementos.
- `className`: extensao visual do componente.

## Comportamentos importantes

- `button` nativo usa `type="button"` por padrao para evitar submit acidental em forms.
- Em `asChild`, o componente bloqueia clique/teclado quando indisponivel (`disabled` ou `loading`) e aplica `aria-disabled`.
- Em `loading`, o botao mantem o layout sem shift.
- Com classe `with-icons`, o loading substitui apenas o icone (lado esquerdo), mantendo o texto visivel.

## Classe utilitaria

- `.with-icons`: organiza icone + texto com icone na esquerda.
- Recomendada para botoes com icone no inicio do conteudo.

## Stories de referencia

Arquivo: `apps/storybook/src/button.stories.tsx`

- `Default`
- `Variant Grid`
- `Size`
- `Disabled`
- `Loading`
- `WithIcons`
- `With Icons Loading`

## Tokenizacao

- O componente usa tokens semânticos de `button` via CSS vars em `packages/tokens/src/theme.css`.
- Principais grupos:
  - `--button-surface-*`
  - `--button-solid-*`
  - `--button-soft-*`
  - `--button-ghost-*`
  - `--button-disabled-*`
- O preview de tema no Storybook (`Button Theme` no toolbar) sobrescreve essas variáveis, sem hardcode direto no seletor do botão.
- Fonte dos valores semânticos: `packages/tokens/src/tokens.json` em `semantic.color.button.*`.
- Regra de evolucao: sempre preferir criar/ajustar token semântico antes de alterar visual com hardcode.
- Hardcode visual em `Button` e stories deve ser tratado como excecao temporaria e documentada no PR.

## Validacao local recomendada

```bash
npm run lint
npm run typecheck
npm run build
```
