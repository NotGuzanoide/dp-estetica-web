import Link from 'next/link';

export default function NotFound() {
  return <main className="state-page"><span className="brand-mark" aria-hidden="true">✦</span><p className="section-kicker">Error 404</p><h1>Esta página no está disponible</h1><p>Puede que el enlace haya cambiado o esté incompleto.</p><Link className="button" href="/">Volver al inicio</Link></main>;
}
