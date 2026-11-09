import { Link } from '@tanstack/react-router'
import { DEMO_NOTICE, DEV_CREDIT, SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-cta">
        <p>Tem um terreno, uma reforma ou um apartamento novo?</p>
        <Link to="/contato" hash="briefing">
          Conte para a gente
        </Link>
      </div>
      <div className="wrap footer-grid">
        <Logo light />
        <div>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.district}
            <br />
            {SITE.address.city}
          </p>
        </div>
        <div>
          <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
            WhatsApp {SITE.whatsapp}
          </a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>Instagram {SITE.instagram}</span>
        </div>
        <nav aria-label="Rodapé">
          <Link to="/projetos">Projetos</Link>
          <Link to="/estudio">Estúdio</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/privacidade">Privacidade</Link>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {SITE.fullName} · {SITE.architect}, {SITE.register}. {DEMO_NOTICE}
        </p>
        <p className="credit">
          {DEV_CREDIT.text}{' '}
          <a href={DEV_CREDIT.url} target="_blank" rel="noopener noreferrer">
            <strong>{DEV_CREDIT.name}</strong>
          </a>
        </p>
      </div>
    </footer>
  )
}
