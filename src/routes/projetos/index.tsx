import { createFileRoute } from '@tanstack/react-router'
import { ProjectIndex } from '~/components/ProjectIndex'
import { SITE } from '~/content/site'

export const Route = createFileRoute('/projetos/')({
  head: () => ({
    meta: [
      { title: `Projetos · ${SITE.name}` },
      { name: 'description', content: 'Casas, apartamentos, reformas e projetos comerciais do Estúdio Taipa.' },
    ],
  }),
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Projetos</h1>
          <p className="lead">Uma seleção de obras concluídas entre 2023 e 2025. Passe o mouse para ver cada uma.</p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap">
          <ProjectIndex filter />
        </div>
      </section>
    </>
  )
}
