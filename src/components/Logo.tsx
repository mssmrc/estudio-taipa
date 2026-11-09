/** Logo provisório: camadas de taipa (terra socada) + nome. Troque pelo logo real quando houver. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? ' logo--light' : ''}`}>
      <svg viewBox="0 0 28 28" aria-hidden="true" className="logo-mark">
        <rect x="0" y="2" width="28" height="5" fill="currentColor" />
        <rect x="0" y="10" width="28" height="5" fill="var(--blue)" />
        <rect x="0" y="18" width="28" height="5" fill="currentColor" />
        <rect x="0" y="25" width="28" height="2" fill="currentColor" />
      </svg>
      <span className="logo-text">
        <b>Taipa</b>
        <small>arquitetura e interiores</small>
      </span>
    </span>
  )
}
