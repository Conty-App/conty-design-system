import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@conty/ui"

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"]
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Plano Pro</CardTitle>
        <CardDescription>
          Ideal para equipes que precisam de colaboracao.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Inclui componentes, tokens e suporte prioritario.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="1">Selecionar plano</Button>
      </CardFooter>
    </Card>
  )
}

export const MutedSurface: Story = {
  render: () => (
    <Card className="w-[360px] bg-muted">
      <CardHeader>
        <CardTitle>Estado muted</CardTitle>
        <CardDescription>Exemplo para areas de apoio.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Usado para destacar informacoes secundarias.
        </p>
      </CardContent>
    </Card>
  )
}
