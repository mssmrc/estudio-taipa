# Especificação — Estúdio Taipa (case)

## Objetivo

Mostrar a arquitetos e designers de interiores como um site pode **funcionar como portfólio** e
**qualificar o cliente antes da primeira reunião**, com um briefing que já pergunta tipo, área,
investimento e prazo.

## Público do site

Famílias que vão construir ou reformar, compradores de apartamento novo e pequenos comerciantes na
Grande Florianópolis, que comparam portfólios antes de pedir orçamento.

## Páginas

| Página   | Conteúdo principal                                                           |
| -------- | ---------------------------------------------------------------------------- |
| Início   | Título grande, foto em largura total, índice de projetos, destaques, serviços |
| Projetos | Índice completo com filtro (Residencial, Interiores, Comercial)              |
| Projeto  | Ficha (tipo, local, área, ano), texto, galeria e link para o próximo         |
| Estúdio  | Arquiteta responsável, processo em cinco etapas com prazos e FAQ             |
| Contato  | Briefing em duas partes (você e o projeto), endereço e mapa                  |
| Privacidade | Modelo de política (LGPD)                                                 |

## Funcionalidades

- **Índice de projetos**: tabela com ano, nome, tipo e área; a foto ao lado muda ao passar o mouse
  ou navegar pelo teclado. No celular, vira uma lista simples.
- **Páginas de projeto** com rota dinâmica e 404 para endereços inexistentes.
- **Briefing pelo WhatsApp** com tipo de projeto, área, faixa de investimento e prazo.

## Identidade visual

| Token        | Valor     | Uso                                          |
| ------------ | --------- | -------------------------------------------- |
| `--concrete` | `#e9e8e4` | Fundo (concreto claro)                        |
| `--ink`      | `#23272b` | Texto, linhas, faixa escura e rodapé          |
| `--blue`     | `#2f4da8` | Azul de prancha: links, botões, item ativo    |

- **Tipografia:** Archivo em duas larguras: expandida (125%) nos títulos e normal no texto.
- **Marca visual:** o índice de projetos e os títulos largos. Espaços reservados de imagem em papel
  milimetrado azul, como uma prancha.
