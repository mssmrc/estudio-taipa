import { useState, type FormEvent } from 'react'
import { SERVICES, SITE } from '~/content/site'
import { buildMessage, whatsappLink } from '~/lib/whatsapp'

const BUDGETS = ['Até R$ 100 mil', 'R$ 100 a 300 mil', 'R$ 300 a 800 mil', 'Acima de R$ 800 mil', 'Ainda não sei']

/** Briefing inicial: monta a mensagem e abre o WhatsApp do visitante. Nada vai para servidor. */
export function BriefingForm() {
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    if (!get('nome') || get('telefone').replace(/\D/g, '').length < 10) {
      setError('Preencha seu nome e um WhatsApp com DDD.')
      return
    }
    setError('')
    const area = get('area')
    const message = buildMessage(`Olá! Quero conversar sobre um projeto com o ${SITE.name}.`, [
      ['Nome', get('nome')],
      ['WhatsApp', get('telefone')],
      ['E-mail', get('email')],
      ['Tipo de projeto', get('tipo')],
      ['Cidade do imóvel', get('cidade')],
      ['Área aproximada', area ? `${area} m²` : ''],
      ['Investimento previsto na obra', get('orcamento')],
      ['Quando quer começar', get('prazo')],
      ['Sobre o projeto', get('mensagem')],
    ])
    window.open(whatsappLink(SITE.whatsappNumber, message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <fieldset className="form-group">
        <legend>Você</legend>
        <label>
          Nome
          <input name="nome" autoComplete="name" required />
        </label>
        <div className="form-row">
          <label>
            WhatsApp com DDD
            <input name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(48) 90000-0000" required />
          </label>
          <label>
            E-mail (opcional)
            <input name="email" type="email" autoComplete="email" />
          </label>
        </div>
      </fieldset>
      <fieldset className="form-group">
        <legend>O projeto</legend>
        <div className="type-grid">
          {SERVICES.map((s, i) => (
            <label key={s.name} className="type">
              <input type="radio" name="tipo" value={s.name} defaultChecked={i === 0} />
              <span>{s.name}</span>
            </label>
          ))}
        </div>
        <div className="form-row">
          <label>
            Cidade do imóvel
            <input name="cidade" placeholder="Ex.: Florianópolis" />
          </label>
          <label>
            Área aproximada (m²)
            <input name="area" inputMode="numeric" placeholder="Ex.: 180" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Investimento previsto na obra
            <select name="orcamento" defaultValue="">
              <option value="">Prefiro não informar</option>
              {BUDGETS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </label>
          <label>
            Quando quer começar
            <select name="prazo" defaultValue="">
              <option value="">Sem pressa</option>
              <option>Nos próximos 3 meses</option>
              <option>Em 3 a 6 meses</option>
              <option>Daqui a mais de 6 meses</option>
            </select>
          </label>
        </div>
        <label>
          Conte um pouco do que você imagina
          <textarea name="mensagem" rows={4} placeholder="Ex.: casa de 3 quartos para família com dois filhos, terreno de esquina" />
        </label>
      </fieldset>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {sent && !error && (
        <p className="form-ok" role="status">
          Abrimos o WhatsApp com seu briefing. É só tocar em enviar.
        </p>
      )}
      <button className="btn btn--blue" type="submit">
        Enviar briefing pelo WhatsApp
      </button>
    </form>
  )
}
