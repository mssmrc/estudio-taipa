import { createFileRoute } from '@tanstack/react-router'
import { BriefingForm } from '~/components/BriefingForm'
import { SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'

export const Route = createFileRoute('/contato')({
  head: () => ({
    meta: [
      { title: `Contato · ${SITE.name}` },
      { name: 'description', content: `Envie o briefing do seu projeto. ${SITE.address.district}, ${SITE.address.city}.` },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&output=embed`
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1 className="h1">Vamos conversar sobre o seu projeto</h1>
          <p className="lead">
            Quanto mais você contar, mais útil será a primeira reunião. Respondemos em até dois dias úteis com uma proposta
            de conversa.
          </p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="wrap contact">
          <div id="briefing">
            <BriefingForm />
          </div>
          <aside className="contact-info">
            <h2>Estúdio</h2>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.district}, {SITE.address.city}
            </p>
            <p>{SITE.hours}</p>
            <h2>Direto</h2>
            <p>
              <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
                WhatsApp {SITE.whatsapp}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <iframe className="map" title={`Mapa: ${SITE.address.mapQuery}`} src={map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </aside>
        </div>
      </section>
    </>
  )
}
