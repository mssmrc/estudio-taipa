/** Dados gerais do estúdio (FICTÍCIOS — troque pelos dados reais do cliente). */

export const SITE = {
  name: 'Estúdio Taipa',
  fullName: 'Estúdio Taipa Arquitetura e Interiores',
  architect: 'Marina Taipa',
  register: 'CAU A000000-0',
  tagline: 'Arquitetura residencial e de interiores feita para o clima, a luz e o jeito de viver de cada cliente.',
  description:
    'Escritório de arquitetura e design de interiores em Florianópolis. Casas, reformas, apartamentos e pequenos comércios.',
  whatsapp: '(48) 99999-0000',
  whatsappNumber: '5548999990000',
  email: 'contato@exemplo.com.br',
  instagram: '@estudio.taipa',
  address: {
    street: 'Rua Exemplo, 321',
    district: 'Santo Antônio de Lisboa',
    city: 'Florianópolis — SC',
    mapQuery: 'Santo Antônio de Lisboa, Florianópolis - SC',
  },
  hours: 'Segunda a sexta, 9h às 18h, com hora marcada',
} as const

/** Texto obrigatório nos sites de case. */
export const DEMO_NOTICE = 'Site demonstrativo. Escritório, projetos, registro e contatos são fictícios.'
export const DEV_CREDIT = {
  name: 'Runa Web',
  text: 'Desenvolvido por',
  url: 'https://runaweb.com.br',
} as const

export const SERVICES: { name: string; text: string }[] = [
  { name: 'Projeto de arquitetura', text: 'Casas novas, do estudo de terreno ao projeto executivo e aprovação na prefeitura.' },
  { name: 'Reforma', text: 'Levantamento do existente, novo layout, compatibilização de instalações e acompanhamento da obra.' },
  { name: 'Interiores', text: 'Marcenaria, iluminação, revestimentos e mobiliário, com caderno de compras e orçamentos.' },
  { name: 'Comercial', text: 'Restaurantes, lojas e consultórios com foco em fluxo, identidade e custo de manutenção.' },
]

export const PROCESS: { name: string; text: string; time: string }[] = [
  { name: 'Briefing e visita', text: 'Entendemos a rotina da família, o terreno ou imóvel e o orçamento disponível.', time: '1 semana' },
  { name: 'Estudo preliminar', text: 'Plantas, volumetria 3D e referências de materiais para aprovar o conceito.', time: '3 a 4 semanas' },
  { name: 'Anteprojeto', text: 'Ajustes, definição de materiais e estimativa de custo da obra.', time: '3 semanas' },
  { name: 'Projeto executivo', text: 'Desenhos técnicos, detalhamentos e compatibilização com engenharia.', time: '4 a 6 semanas' },
  { name: 'Acompanhamento de obra', text: 'Visitas periódicas para garantir que o construído seja o projetado.', time: 'durante a obra' },
]

export const FAQ: [string, string][] = [
  [
    'Como é cobrado o projeto?',
    'Por metro quadrado, com valor fechado em proposta após o briefing. O pagamento é dividido por etapa entregue.',
  ],
  [
    'Vocês atendem fora de Florianópolis?',
    'Sim. Projetos de interiores e reformas são feitos à distância com reuniões por vídeo. Para obras novas fora da Grande Florianópolis, combinamos as visitas.',
  ],
  ['Quanto tempo leva um projeto de casa?', 'Em média de 3 a 4 meses, do briefing ao projeto executivo, dependendo do tamanho e das aprovações.'],
  ['Vocês fazem a obra?', 'Não executamos a obra, mas indicamos construtoras parceiras, ajudamos na concorrência e acompanhamos a execução.'],
]
