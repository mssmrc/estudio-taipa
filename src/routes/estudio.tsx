import { Link, createFileRoute } from '@tanstack/react-router'
import { Faq } from '~/components/Faq'
import { Photo } from '~/components/Photo'
import { FAQ, PROCESS, SITE } from '~/content/site'

export const Route = createFileRoute('/estudio')({
  head: () => ({
    meta: [
      { title: `Estúdio e processo · ${SITE.name}` },
      { name: 'description', content: 'Conheça a arquiteta Marina Taipa, o processo de projeto em cinco etapas e as perguntas frequentes.' },
    ],
  }),
  component: StudioPage,
})

function StudioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap studio">
          <div>
            <h1 className="h1">Estúdio</h1>
            <p className="lead">
              O Taipa foi fundado em 2014 pela arquiteta Marina Taipa, depois de dez anos em escritórios de São Paulo e
              Lisboa. Somos uma equipe de quatro pessoas, e cada projeto é acompanhado pela Marina do primeiro croqui à
              entrega da obra.
            </p>
            <p className="studio-reg">
              {SITE.architect} · {SITE.register}
            </p>
          </div>
          <div className="studio-photo">
            <Photo k="arquiteta" eager />
          </div>
        </div>
      </section>
      <div className="wrap studio-wide">
        <Photo k="estudio" />
      </div>
      <section className="section">
        <div className="wrap">
          <h2 className="h2">Processo</h2>
          <ol className="process">
            {PROCESS.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                <span>{s.time}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section--line">
        <div className="wrap faq-wrap">
          <h2 className="h2">Perguntas frequentes</h2>
          <Faq items={FAQ} />
        </div>
        <div className="wrap studio-cta">
          <Link to="/contato" hash="briefing" className="btn btn--blue">
            Começar um projeto
          </Link>
        </div>
      </section>
    </>
  )
}
