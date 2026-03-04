# @conty/ui

## 0.1.0

### Minor Changes

- Add a token-first `Callout` with semantic variants and size scale in `@conty/ui`.
  Refresh `Badge` in `@conty/ui` to align with Button variants (`surface`, `solid`, `soft`, `ghost`), add size scale (`1`-`4`), and introduce semantic color options (`purple`, `cyan`, `orange`, `pink`, `success`, `warning`, `danger`).
  Add matching callout and badge semantic tokens plus theme CSS variables in `@conty/tokens`.

### Patch Changes

- Updated dependencies
  - @conty/tokens@0.0.2

## 0.0.1

### Patch Changes

- Tokeniza os estilos do Button para suportar variantes/estados via tokens semanticos e reduz hardcodes visuais no componente e no preview do Storybook.

  Ajusta stories/config de Storybook para manter lint/typecheck/build verdes com a nova API de tamanhos e importacoes recomendadas.

- Updated dependencies
  - @conty/tokens@0.0.1
