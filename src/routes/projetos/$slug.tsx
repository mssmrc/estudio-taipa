import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { Photo } from '~/components/Photo'
import { PROJECTS, getProject } from '~/content/projects'
import { SITE } from '~/content/site'

export const Route = createFileRoute('/projetos/$slug')({
  loader: ({ params }) => {
    const project = getProject(params.slug)
    if (!project) throw notFound()
    return project
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [{ title: `${loaderData.name} · ${SITE.name}` }, { name: 'description', content: loaderData.summary }]
      : [],
  }),
  component: ProjectPage,
})

function ProjectPage() {
  const p = Route.useLoaderData()
  const i = PROJECTS.findIndex((x) => x.slug === p.slug)
  const next = PROJECTS[(i + 1) % PROJECTS.length]

  return (
    <article>
      <section className="page-hero">
        <div className="wrap">
          <Link to="/projetos" className="back">
            Todos os projetos
          </Link>
          <h1 className="h1">{p.name}</h1>
          <dl className="facts">
            <div>
              <dt>Tipo</dt>
              <dd>{p.type}</dd>
            </div>
            <div>
              <dt>Local</dt>
              <dd>{p.place}</dd>
            </div>
            <div>
              <dt>Área</dt>
              <dd>{p.area} m²</dd>
            </div>
            <div>
              <dt>Conclusão</dt>
              <dd>{p.year}</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="project-cover">
        <Photo k={p.images[0]} eager />
      </div>
      <section className="section">
        <div className="wrap project-body">
          <p className="project-summary">{p.summary}</p>
          <div>
            {p.text.map((t, n) => (
              <p key={n}>{t}</p>
            ))}
          </div>
        </div>
        <div className="wrap project-gallery">
          <Photo k={p.images[1]} />
          <Photo k={p.images[2]} />
        </div>
      </section>
      {next && (
        <section className="section section--flush">
          <div className="wrap">
            <Link to="/projetos/$slug" params={{ slug: next.slug }} className="next">
              <span>Próximo projeto</span>
              <b>{next.name}</b>
            </Link>
          </div>
        </section>
      )}
    </article>
  )
}
