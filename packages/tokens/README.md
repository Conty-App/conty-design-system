# @conty/tokens

Pacote de design tokens do Conty Design System.

## Instalação

```bash
pnpm add @conty/tokens
```

Ou com npm:

```bash
npm install @conty/tokens
```

## O que este pacote exporta

- `@conty/tokens/theme.css`: variáveis CSS de tema (light/dark) prontas para uso.
- `@conty/tokens/tokens.json`: catálogo de tokens semânticos e base.
- export JS/TS de conveniência via `@conty/tokens`.

## Uso rápido (CSS)

```tsx
import "@conty/tokens/theme.css"
```

Depois utilize as variáveis CSS no seu app:

```css
.card {
  background: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

## Uso rápido (JSON)

```ts
import tokens from "@conty/tokens/tokens.json"

console.log(tokens.semantic.color.brand.primary.light)
```

## Links

- npm: [@conty/tokens](https://www.npmjs.com/package/@conty/tokens)
- repositório: [Conty Design System](https://github.com/Conty-App/conty-design-system)
