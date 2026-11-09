import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { PROJECTS, TYPES, type ProjectType } from '~/content/projects'
import { Photo } from './Photo'

/**
 * Índice de projetos em forma de tabela (ano, nome, tipo, área). Ao passar o mouse ou focar uma
 * linha, a foto do projeto aparece ao lado. Com `filter`, mostra botões por tipo.
 */
export function ProjectIndex({ filter = false }: { filter?: boolean }) {
  const [type, setType] = useState<ProjectType | 'Todos'>('Todos')
  const list = PROJECTS.filter((p) => type === 'Todos' || p.type === type)
  const [active, setActive] = useState(list[0]?.slug ?? '')
  const current = PROJECTS.find((p) => p.slug === active) ?? list[0]

  return (
    <div className="index">
      {filter && (
        <div className="index-filter" role="group" aria-label="Filtrar por tipo">
          {(['Todos', ...TYPES] as const).map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={type === t}
              onClick={() => {
                setType(t)
                const first = PROJECTS.find((p) => t === 'Todos' || p.type === t)
                if (first) setActive(first.slug)
              }}
            >
              {t}
              <span>{t === 'Todos' ? PROJECTS.length : PROJECTS.filter((p) => p.type === t).length}</span>
            </button>
          ))}
        </div>
      )}
      <div className="index-grid">
        <ul className="index-list">
          <li className="index-head" aria-hidden="true">
            <span>Ano</span>
            <span>Projeto</span>
            <span>Tipo</span>
            <span>Área</span>
          </li>
          {list.map((p) => (
            <li key={p.slug}>
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className={`index-row${p.slug === current?.slug ? ' is-active' : ''}`}
                onMouseEnter={() => setActive(p.slug)}
                onFocus={() => setActive(p.slug)}
              >
                <span className="index-year">{p.year}</span>
                <span className="index-name">
                  {p.name}
                  <small>{p.place}</small>
                </span>
                <span className="index-type">{p.type}</span>
                <span className="index-area">{p.area} m²</span>
              </Link>
            </li>
          ))}
        </ul>
        {current && (
          <div className="index-preview" aria-hidden="true">
            <Photo k={current.images[0]} />
            <p>{current.summary}</p>
          </div>
        )}
      </div>
    </div>
  )
}
