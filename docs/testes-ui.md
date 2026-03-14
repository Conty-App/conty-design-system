# Testes de UI com Vitest

Guia rapido para entender o que foi adicionado no PR de cobertura de componentes e como continuar escrevendo testes em `@conty/ui`.

## O que foi feito

- Configurado `Vitest` no pacote `@conty/ui`.
- Configurado ambiente `jsdom` para renderizar componentes React em testes.
- Adicionado setup com `@testing-library/jest-dom` para matchers como `toBeInTheDocument`.
- Adicionado script `test` no root do monorepo para executar testes em workspaces.
- Integrado `npm run test` no workflow de qualidade do CI.
- Criados testes para:
  - `Button`
  - `Badge`
  - `Callout` (incluindo subcomponentes)

## Arquivos principais

- `packages/ui/vitest.config.ts`: configuracao do Vitest.
- `packages/ui/src/test-setup.ts`: setup global dos testes.
- `packages/ui/src/components/__tests__/*.test.tsx`: arquivos de teste dos componentes.
- `packages/ui/package.json`: scripts e devDependencies de teste no pacote UI.
- `package.json`: script `test` no workspace root.
- `.github/workflows/quality.yml`: etapa de testes no pipeline.

## Como rodar

No root do projeto:

```bash
npm run test
```

Apenas no pacote UI:

```bash
npm run test --workspace @conty/ui
```

Modo watch no pacote UI:

```bash
npm run test:watch --workspace @conty/ui
```

## Padrao de escrita de testes

Para componentes visuais, cobrir no minimo:

- Renderizacao basica.
- Props principais (variant, size, color, etc).
- Estados especiais (disabled, loading, aria, data attributes).
- Comportamentos de interacao (`onClick`, teclado quando aplicavel).
- Variantes de composicao (`asChild`, subcomponentes, composicao completa).

## Exemplo minimo

```tsx
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Button } from "../button"

describe("Button", () => {
  it("renderiza com variant padrao", () => {
    render(<Button>Salvar</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-variant", "surface")
  })
})
```

## Boas praticas

- Prefira seletores acessiveis (`getByRole`, `getByLabelText`) antes de `querySelector`.
- Mantenha testes curtos, com nomes objetivos focados no comportamento.
- Evite acoplar teste a detalhes internos de implementacao (classes especificas, estrutura exata do DOM) quando nao necessario.
- Ao adicionar novo componente em `@conty/ui`, incluir testes no mesmo PR.
