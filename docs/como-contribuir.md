# Como Contribuir

Padrao simples para contribuir com qualidade sem travar velocidade.

## Fluxo rapido
1. Criar branch com escopo pequeno.
2. Implementar a mudanca com foco no problema.
3. Rodar:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build`
4. Abrir PR com contexto, mudanca e validacao.

## Checklist de PR
- [ ] Escopo pequeno e objetivo.
- [ ] Sem alteracao acidental fora do escopo.
- [ ] Impacto em API publica documentado (se houver).
- [ ] Passos de teste local descritos.
- [ ] Changeset criado (se a mudanca for versionavel).
- [ ] Valores visuais novos foram implementados via tokens (sem hardcode sem justificativa).

## Boas praticas para devs
- Comecar pelo mais simples que resolve o problema.
- Usar nomes claros e diretos para variaveis, funcoes, componentes e arquivos.
- Evitar abreviacoes confusas e nomes genericos como `data`, `temp` e `utils`.
- Manter uma ideia por funcao/modulo; se cresceu demais, quebrar em partes.
- Escrever codigo para o proximo dev entender rapido, nao para ser "esperto".
