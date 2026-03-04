# @conty/design-system

Pacote de entrada (entry package) do Conty Design System.

Ele reúne os pacotes principais:

- `@conty/ui`
- `@conty/tokens`

## Instalação

```bash
pnpm add @conty/design-system
```

Ou com npm:

```bash
npm install @conty/design-system
```

## Peer dependencies

Este pacote requer:

- `react@^19`
- `react-dom@^19`

## Uso rápido

```tsx
import "@conty/design-system/styles.css"
import { Button, Badge } from "@conty/design-system"

export function Example() {
  return (
    <div>
      <Button variant="solid">Enviar</Button>
      <Badge variant="soft">Beta</Badge>
    </div>
  )
}
```

## Links

- npm: [@conty/design-system](https://www.npmjs.com/package/@conty/design-system)
- repositório: [Conty Design System](https://github.com/Conty-App/conty-design-system)
