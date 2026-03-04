# @conty/ui

Biblioteca de componentes React do Conty Design System.

## Instalação

```bash
pnpm add @conty/ui @conty/tokens
```

Ou com npm:

```bash
npm install @conty/ui @conty/tokens
```

## Peer dependencies

Este pacote requer:

- `react@^19`
- `react-dom@^19`

## Uso rápido

Importe os estilos dos tokens e dos componentes no ponto de entrada da aplicação:

```tsx
import "@conty/tokens/theme.css"
import "@conty/ui/styles.css"
```

Depois use os componentes:

```tsx
import { Button, Badge, Callout, CalloutDescription, CalloutIcon } from "@conty/ui"

export function Example() {
  return (
    <div>
      <Button variant="solid" size="2">Salvar</Button>
      <Badge variant="soft" size="2">Novo</Badge>
      <Callout variant="info">
        <CalloutIcon>i</CalloutIcon>
        <CalloutDescription>Componente pronto para uso.</CalloutDescription>
      </Callout>
    </div>
  )
}
```

## Componentes disponíveis

- `Button`
- `Badge`
- `Callout`
- `CalloutIcon`
- `CalloutTitle`
- `CalloutDescription`

## Links

- npm: [@conty/ui](https://www.npmjs.com/package/@conty/ui)
- repositório: [Conty Design System](https://github.com/Conty-App/conty-design-system)
