import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { SITE } from '~/content/site'
import { Logo } from './Logo'

const NAV = [
  { to: '/projetos', label: 'Projetos' },
  { to: '/estudio', label: 'Estúdio' },
  { to: '/contato', label: 'Contato' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="header">
        <div className="wrap header-in">
          <Link to="/" aria-label={`${SITE.name}, página inicial`} onClick={close} className="header-logo">
            <Logo />
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Principal">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={close} activeProps={{ className: 'active', 'aria-current': 'page' }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contato" hash="briefing" className="nav-cta" onClick={close}>
              Começar um projeto
            </Link>
          </nav>
          <button
            className="burger"
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="nav"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </header>
    </>
  )
}
