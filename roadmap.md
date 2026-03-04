# Roadmap do Design System (Conty)

Este documento consolida o plano de acao do Design System da Conty com foco em:

- adocao segura no `conty-web`;
- escalabilidade para produtos futuros;
- governanca e qualidade desde o inicio;
- portabilidade real entre Web (TypeScript/React) e Mobile (Flutter/Dart).

---

## 1) Contexto atual

- O monorepo ja esta estruturado com Storybook e pacotes separados de `tokens`, `ui` e `design-system`.
- O `conty-web` (projeto prioritario) esta em Next.js 16 + React 19 + TypeScript 5.
- Stack visual atual: Tailwind 4 + shadcn/ui + Radix UI.
- Storybook ja foi atualizado para `10.x` e o `@storybook/addon-mcp` ja esta habilitado.

Direcao estrategica:
- migrar de forma incremental (sem big-bang);
- usar Storybook como ambiente oficial de desenvolvimento e validacao de UI;
- tratar tokens como contrato cross-platform.

---

## 2) Objetivo do programa

Construir um Design System que:

1. reduza inconsistencias visuais e comportamentais entre projetos;
2. acelere o desenvolvimento de componentes e telas novas;
3. permita migracao gradual de base legada sem regressao critica;
4. mantenha contrato estavel entre Web e Mobile via `tokens.json`;
5. tenha ciclo previsivel de contribuicao, teste e release.

---

## 3) Principios de implementacao

### 3.1 Storybook-first
- Todo componente nasce e evolui via Storybook.
- Stories nao sao so documentacao: sao tambem casos de teste (render + interacao + a11y + visual).

### 3.2 Token-first (sem hardcode visual)
- Nenhum valor visual novo (cor, spacing, radius, tipografia, sombra, motion) deve ser hardcoded no componente.
- O valor deve existir em `tokens.json` e ser referenciado no componente.

### 3.3 Incremental sem parar o produto
- Migracao por ondas e por dominio.
- Feature flag e fallback para componente legado em fluxos sensiveis.

### 3.4 Contrato semantico estavel
- Nome de token define intencao, nao implementacao.
- Mesmo nome semantico entre TypeScript e Dart.
- Evitar renomear token em uso; preferir deprecacao com janela de migracao.

---

## 4) Fases do roadmap

## Fase 1 - Fundacao minima (Semana 1)

Objetivo:
- alinhar padroes de contribuicao, estrutura de componente e regra de qualidade.

Escopo:
- consolidar contratos publicos de `@conty/tokens`, `@conty/ui` e `@conty/design-system`;
- definir Definition of Done (DoD) de componente;
- reforcar guia de integracao com `conty-web` para cenarios reais (ordem de CSS, temas, SSR, rollout);
- padronizar formato de stories (CSF3, `Meta` + `StoryObj`, args reutilizaveis);
- definir padrao de `decorators` e `parameters` globais para tema/i18n/providers.

Entregaveis:
- guia de contribuicao de componente;
- checklist de DoD;
- guia de integracao atualizado;
- template base de componente + template base de story.

Criterio de saida:
- todo novo componente segue o checklist unico de contribuicao e qualidade.

---

## Fase 2 - Tokens escalaveis (Semana 2)

Objetivo:
- estabelecer uma base de tokens semanticos reutilizavel no Web e no Mobile.

Escopo:
- estruturar tokens em camadas:
  - `core`: valores primitivos;
  - `semantic`: intencao de uso (tema/contexto);
  - `component`: necessidade local quando realmente necessario;
- definir `tokens.json` como fonte canonica de valores visuais;
- mapear light/dark e integracao com `next-themes`;
- criar regra explicita de nomenclatura semantica.

Entregaveis:
- arquivo `tokens.json` inicial com categorias essenciais;
- guideline de nomenclatura;
- exemplos de consumo de tokens em componente TSX;
- diretriz de portabilidade de nomes para Flutter/Dart.

Criterio de saida:
- ao menos 2 componentes consumindo tokens semanticos;
- estrutura inicial do `tokens.json` validada para Web e Dart.

---

## Fase 3 - Piloto no conty-web (Semanas 2-3)

Objetivo:
- provar adocao real com baixo risco operacional.

Escopo:
- selecionar 2-3 componentes de baixo risco e alto uso (`Button`, `Badge`, `Callout`);
- criar mapeamento `legado -> design-system`;
- aplicar rollout incremental por modulo com fallback;
- medir impacto visual, a11y e estabilidade.

Entregaveis:
- matriz de migracao priorizada por impacto x risco;
- componentes piloto aplicados em telas reais;
- relatorio de aprendizados do piloto.

Criterio de saida:
- piloto em producao sem regressao critica;
- padrao de migracao pronto para escalar.

---

## Fase 4 - Kit essencial + escala (Semanas 3-6)

Objetivo:
- transformar o DS na opcao padrao para telas novas.

Escopo:
- priorizar componentes de fundacao:
  - Input, Textarea, Select, Checkbox, Radio, Switch, Dialog, Tooltip, Tabs, Table;
- migrar por dominio:
  - auth/onboarding -> dashboard/feed -> billing/pagamentos -> areas avancadas;
- incluir stories de estado real (erro, loading, disabled, validacao);
- manter consistencia de API com padroes existentes do shadcn.

Entregaveis:
- primeiro lote robusto de componentes fundacionais;
- aplicacao incremental nos dominios do `conty-web`;
- padrao de API coeso entre componentes.

Criterio de saida:
- 60-70% das telas novas usando Design System por padrao.

---

## Fase 5 - Governanca, qualidade e adocao futura (Semanas 6+)

Objetivo:
- garantir previsibilidade de evolucao e reuso entre produtos.

Escopo:
- automatizar gates de CI (lint, typecheck, build, testes de componente, a11y e visual regression);
- definir politica de versionamento, deprecacao e breaking changes;
- publicar Storybook continuamente para review de produto/design;
- formalizar fluxo de exportacao/consumo de tokens para Flutter/Dart;
- criar playbook de onboarding para novos projetos.

Entregaveis:
- esteira de qualidade automatica;
- playbook de contribuicao e release;
- guia de consumo para projetos Web e Mobile.

Criterio de saida:
- processo previsivel de contribuicao e release para qualquer time consumidor.

---

## 5) Trilha cross-platform (Web + Flutter/Dart)

Regra principal:
- componente novo so entra se usar token para valor visual.

Fluxo oficial:
1. criar o componente TSX no Storybook;
2. identificar valores visuais usados;
3. registrar/atualizar em `tokens.json`;
4. referenciar token no componente;
5. manter mesmo nome semantico para consumo em Dart;
6. documentar token novo com significado e exemplo de uso.

Padrao de nomenclatura:
- usar nomes semanticos (`brand.primary`, `text.muted`, `surface.default`, `space.4`, `radius.md`);
- evitar nome acoplado a implementacao (`purple500`, `buttonBlue`);
- preferir estabilidade de nome; mudanca deve ser via deprecacao gradual.

---

## 6) Trilha Storybook (boas praticas oficiais)

- Stories como fonte de verdade do componente.
- `play` tests para interacoes criticas.
- `@storybook/addon-vitest` para executar stories como testes de componente em browser real.
- CI com script dedicado de Storybook tests (`vitest --project=storybook`) em ambiente com Playwright.
- A11y automatizado com addon de acessibilidade.
- Visual regression em PR (Chromatic ou equivalente).
- Publicacao continua do Storybook para revisao e historico.
- Em pipelines de velocidade, considerar `build-storybook -- --test`.
- Cobertura como barometro de risco (nao perseguir 100% cego).

---

## 7) Trilha MCP no Storybook

- Manter `@storybook/addon-mcp` ativo no Storybook.
- Validar endpoint MCP em `http://localhost:6006/mcp`.
- Definir guideline para agentes: consultar MCP antes de gerar/alterar stories de UI.
- Incluir verificacao do MCP no checklist de setup local.

---

## 8) Criterios minimos por componente (Definition of Done)

Para um componente ser considerado pronto:

1. existe story de render basico (smoke);
2. existem variacoes de estado relevantes (ex.: disabled/loading/erro);
3. existe ao menos 1 `play` test para interacao principal (quando aplicavel);
4. passou checks de a11y sem violacao critica aberta;
5. esta coberto por revisao visual em PR;
6. usa tokens para valores visuais (sem hardcode);
7. tem documentacao de uso e limitacoes.

---

## 9) Ondas de migracao no conty-web

- Onda 0: inventario e classificacao de componentes legados.
- Onda 1: acao/feedback (`Button`, `Badge`, `Alert`, `Toast`).
- Onda 2: formularios (`Input`, `Select`, `Checkbox`, `Radio`, `Switch`).
- Onda 3: navegacao/layout (`Tabs`, `Dialog`, `Popover`, `Tooltip`).
- Onda 4: componentes complexos (tabelas, rich text, pagamentos).

Regra de progresso:
- uma onda so avanca quando regressao visual e a11y estiverem dentro do limite acordado.

---

## 10) Metricas de sucesso

- Adocao: percentual de telas novas no `conty-web` usando DS.
- Qualidade: regressoes visuais por release + issues de acessibilidade.
- Velocidade: tempo medio para criar e estabilizar novo componente.
- Reuso: numero de projetos consumindo `@conty/design-system`.
- Saude Storybook: percentual de stories verdes (component tests + a11y + visual).
- Portabilidade: percentual de tokens consumiveis em Dart sem adaptacao manual.

---

## 11) Riscos e mitigacoes

- Migracao rapida demais e quebra em fluxos criticos
  - Mitigacao: rollout por dominio, feature flag e fallback.
- DS virar apenas "biblioteca de componentes"
  - Mitigacao: DoD, ownership e governanca de release.
- Divergencia entre Storybook e produto real
  - Mitigacao: visual tests, piloto real e exemplos em contexto de negocio.
- Deriva de nomes entre Web e Mobile
  - Mitigacao: contrato unico em `tokens.json`, revisao de nomenclatura em PR e deprecacao gradual.

---

## 12) Backlog inicial recomendado (ordem pratica)

1. Atualizar guia de integracao com `conty-web` para cenario real de producao.
2. Definir template oficial de componente e story.
3. Criar `tokens.json` inicial com convencao semantica.
4. Implementar lote inicial de componentes fundacionais.
5. Estruturar matriz de migracao do legado.
6. Automatizar gates minimos de qualidade no CI.

---

## 13) Resultado esperado

Ao final das fases iniciais, a Conty deve ter:

- um fluxo consistente para criar componentes com qualidade;
- tokens semanticos estaveis e reutilizaveis em Web e Flutter;
- migracao do `conty-web` em progresso sem travar entregas;
- base de governanca para escalar Design System em novos produtos.
