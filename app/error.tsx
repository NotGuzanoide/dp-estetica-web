'use client';

export default function ErrorPage({ reset }: { reset: () => void }) {
  return <main className="state-page"><span className="brand-mark" aria-hidden="true">✦</span><p className="section-kicker">Ocurrió un problema</p><h1>No pudimos mostrar esta página</h1><p>Intenta nuevamente. Si el problema continúa, puedes regresar al inicio.</p><div className="hero-actions"><button className="button" onClick={reset}>Intentar nuevamente</button><a className="text-link" href="/">Volver al inicio</a></div></main>;
}
