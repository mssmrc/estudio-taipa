import { Link } from '@tanstack/react-router'
import { PROJECTS } from '~/content/projects'
import { SERVICES } from '~/content/site'
import { Photo } from '../Photo'
import { ProjectIndex } from '../ProjectIndex'

export function HomePage() {
  const [first, second] = PROJECTS

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>
            Casas e interiores
            <br />
            para o clima do sul.
          </h1>
        </div>
        <div className="hero-image">
          <Photo k="hero" eager />
        </div>
        <div className="wrap hero-foot">
          <p>
            Somos um estúdio de arquitetura em Florianópolis. Projetamos casas, reformas, apartamentos e pequenos
            comércios com ventilação natural, luz bem resolvida e materiais que aguentam a maresia.
          </p>
          <Link to="/projetos" className="btn btn--blue">
            Ver projetos
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head-row">
            <h2 className="h2">Projetos</h2>
            <Link to="/projetos" className="link">
              Índice completo
            </Link>
          </div>
          <ProjectIndex />
        </div>
      </section>

      {first && second && (
        <section className="section section--flush">
          <div className="wrap duo">
            {[first, second].map((p) => (
              <Link key={p.slug} to="/projetos/$slug" params={{ slug: p.slug }} className="duo-item">
                <div className="duo-photo">
                  <Photo k={p.images[0]} />
                </div>
                <h3>{p.name}</h3>
                <p>
                  {p.type}, {p.area} m², {p.year}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="section section--ink">
        <div className="wrap services">
          <h2 className="h2">O que fazemos</h2>
          <dl>
            {SERVICES.map((s) => (
              <div key={s.name}>
                <dt>{s.name}</dt>
                <dd>{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap quote">
          <blockquote>
            “Antes de desenhar, passamos um dia no terreno. Vemos de onde vem o vento, onde bate o sol às quatro da tarde
            e o que o vizinho vai ver da sua janela.”
          </blockquote>
          <p>Marina Taipa, arquiteta</p>
          <Link to="/estudio" className="link">
            Conheça o estúdio e o processo
          </Link>
        </div>
      </section>
    </>
  )
}
