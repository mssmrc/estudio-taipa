import type { ImageKey } from './images'

export const TYPES = ['Residencial', 'Interiores', 'Comercial'] as const
export type ProjectType = (typeof TYPES)[number]

export type Project = {
  slug: string
  name: string
  type: ProjectType
  year: number
  area: number
  place: string
  summary: string
  text: string[]
  images: [ImageKey, ImageKey, ImageKey]
}

/** Projetos FICTÍCIOS para o case. */
export const PROJECTS: Project[] = [
  {
    slug: 'casa-lagoa',
    name: 'Casa Lagoa',
    type: 'Residencial',
    year: 2024,
    area: 320,
    place: 'Lagoa da Conceição',
    summary: 'Casa térrea em volta de um jardim, com brises de madeira que controlam o sol da tarde.',
    text: [
      'O terreno em declive voltado para a lagoa pedia uma casa baixa, que não disputasse a paisagem. Organizamos os ambientes em L ao redor de um jardim interno, que traz ventilação cruzada para todos os quartos.',
      'Na fachada oeste, brises de cumaru filtram o sol da tarde sem fechar a vista. Concreto aparente, piso de pedra e madeira compõem uma paleta que envelhece bem com a maresia.',
    ],
    images: ['casa-lagoa-1', 'casa-lagoa-2', 'casa-lagoa-3'],
  },
  {
    slug: 'apartamento-beira-mar',
    name: 'Apartamento Beira-Mar',
    type: 'Interiores',
    year: 2025,
    area: 140,
    place: 'Beira-Mar Norte',
    summary: 'Reforma completa para integrar sala e cozinha e abrir a vista para o mar.',
    text: [
      'Os clientes queriam receber amigos sem ficar isolados na cozinha. Retiramos duas paredes, criamos uma ilha de 3 metros e levamos a marcenaria de carvalho do hall até a varanda.',
      'A iluminação foi pensada em camadas: trilhos para a arte, fitas na marcenaria e pendentes sobre a ilha, todos em circuitos separados.',
    ],
    images: ['apartamento-beira-mar-1', 'apartamento-beira-mar-2', 'apartamento-beira-mar-3'],
  },
  {
    slug: 'casa-pinheiros',
    name: 'Casa Pinheiros',
    type: 'Residencial',
    year: 2023,
    area: 210,
    place: 'Urubici',
    summary: 'Refúgio de serra com janela facetada voltada para a mata de araucárias.',
    text: [
      'Uma casa de fim de semana para o inverno da serra catarinense. A janela facetada da sala acompanha o desenho das copas e captura o sol baixo do inverno.',
      'Paredes de pedra local, lareira central e piso aquecido garantem conforto térmico com baixo consumo de energia.',
    ],
    images: ['casa-pinheiros-1', 'casa-pinheiros-2', 'casa-pinheiros-3'],
  },
  {
    slug: 'restaurante-mare',
    name: 'Restaurante Maré',
    type: 'Comercial',
    year: 2024,
    area: 180,
    place: 'Ribeirão da Ilha',
    summary: 'Restaurante de frutos do mar em um antigo galpão de pesca.',
    text: [
      'Preservamos a estrutura de madeira do galpão e a abrimos para a baía com grandes portas de correr. O salão comporta 60 lugares e se estende para um deck sobre a água.',
      'Cerâmica artesanal, cordas e luminárias de fibra fazem referência à cultura açoriana da região.',
    ],
    images: ['restaurante-mare-1', 'restaurante-mare-2', 'restaurante-mare-3'],
  },
  {
    slug: 'loft-centro',
    name: 'Loft Centro',
    type: 'Interiores',
    year: 2023,
    area: 85,
    place: 'Centro',
    summary: 'Antiga sala comercial transformada em loft com mezanino.',
    text: [
      'O pé-direito de 4,5 metros permitiu criar um mezanino para o quarto, liberando o térreo para estar, cozinha e home office.',
      'Estantes do piso ao teto resolvem o armazenamento e funcionam como guarda-corpo do mezanino.',
    ],
    images: ['loft-centro-1', 'loft-centro-2', 'loft-centro-3'],
  },
  {
    slug: 'residencia-campeche',
    name: 'Residência Campeche',
    type: 'Residencial',
    year: 2025,
    area: 260,
    place: 'Campeche',
    summary: 'Casa de praia branca, com pergolado e área externa como centro da vida da família.',
    text: [
      'A área de lazer é o coração da casa: piscina, deck e cozinha externa sob um pergolado de eucalipto tratado.',
      'Paredes caiadas, esquadrias de alumínio branco e piso cimentício resistem à areia e à umidade com pouca manutenção.',
    ],
    images: ['residencia-campeche-1', 'residencia-campeche-2', 'residencia-campeche-3'],
  },
]

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)
