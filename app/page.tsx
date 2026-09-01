'use client';

import { FormEvent, useRef, useState } from 'react';
import { BadgeCheck, CheckCircle2, Clock3, Droplets, Heart, LockKeyhole, MessageCircle, ScanFace, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { siteContent, whatsappBaseUrl } from '@/content/site-content';

const serviceIcons = { facial: ScanFace, bruxismo: Heart, hiperhidrosis: Droplets, cuello: Sparkles };

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'error' | 'ready'>('idle');
  const loadedAt = useRef(Date.now());

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get('sitio_web') ?? '') || Date.now() - loadedAt.current < 2500 || !form.checkValidity()) {
      setStatus('error');
      form.reportValidity();
      return;
    }

    const nombre = String(data.get('nombre') ?? '').trim().slice(0, 60);
    const telefono = String(data.get('telefono') ?? '').replace(/[^\d+\s()-]/g, '').trim().slice(0, 24);
    const interes = String(data.get('interes') ?? '').trim().slice(0, 60);
    const horario = String(data.get('horario') ?? '').trim().slice(0, 30);
    const mensaje = String(data.get('mensaje') ?? '').trim().slice(0, 280);
    const text = [
      'Hola Daniela, completé el formulario de tu sitio web.', '',
      `Nombre: ${nombre}`, `Mi WhatsApp: ${telefono}`, `Me interesa: ${interes}`, `Horario preferido: ${horario}`,
      mensaje ? `Consulta general: ${mensaje}` : null, '',
      'Entiendo que este contacto no reemplaza una evaluación clínica y que no debo enviar antecedentes médicos sensibles por este medio.',
    ].filter(Boolean).join('\n');

    setStatus('ready');
    window.open(`${whatsappBaseUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark"><Sparkles size={17} /></span><span>{siteContent.professional.name}</span></a>
        <nav aria-label="Navegación principal"><a href="#tratamientos">Tratamientos</a><a href="#contacto">Contacto</a><a className="button button-small" href="#contacto">Quiero consultar</a></nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><Heart size={17} /> {siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="hero-description">{siteContent.hero.description}</p>
          <div className="hero-actions"><a className="button" href="#contacto">Solicitar orientación</a><a className="text-link" href={whatsappBaseUrl} target="_blank" rel="noreferrer">Hablar por WhatsApp</a></div>
          <div className="trust-list" aria-label="Características del servicio"><span><ShieldCheck size={17} /> Evaluación previa</span><span><MessageCircle size={17} /> Seguimiento posterior</span><span><Stethoscope size={17} /> Enfermera</span></div>
        </div>
        <figure className="portrait"><img src="/daniela-palma-profesional.webp" alt={`Retrato profesional de ${siteContent.professional.name}`} /><figcaption><BadgeCheck size={18} /> {siteContent.professional.name} · {siteContent.professional.role}</figcaption></figure>
      </section>

      <section className="section" id="tratamientos">
        <p className="section-kicker">Tratamientos</p><h2>¿Para qué se utiliza la toxina botulínica?</h2>
        <p className="section-intro">Relaja determinados músculos de forma controlada y puede utilizarse con fines estéticos o funcionales. La indicación y los resultados esperables dependen de una evaluación profesional.</p>
        <div className="services">{siteContent.services.map(({ id, title, description }) => { const Icon = serviceIcons[id]; return <article className="service" key={id}><Icon size={22} /><h3>{title}</h3><p>{description}</p></article>; })}</div>
        <div className="benefits" aria-label="Aspectos del tratamiento"><span><CheckCircle2 size={18} /> Aplicación sujeta a evaluación</span><span><Clock3 size={18} /> Resultados temporales y ajustables</span><span><MessageCircle size={18} /> Indicaciones y seguimiento</span></div>
      </section>

      <section className="section contact" id="contacto">
        <div className="contact-copy"><p className="section-kicker">Primer contacto</p><h2>Conversemos sobre lo que buscas</h2><p>Completa tus datos básicos y luego prepararemos la consulta para enviarla mediante WhatsApp. No incluyas diagnósticos, fotografías ni antecedentes médicos sensibles.</p><div className="contact-details"><span><Clock3 size={18} /> Respuesta dentro del horario de atención</span><span><LockKeyhole size={18} /> La web no almacena la consulta</span><a href={whatsappBaseUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp: {siteContent.contact.whatsappDisplay}</a></div></div>
        <form onSubmit={handleSubmit} action="/#contacto" method="post" noValidate>
          <div className="honeypot" aria-hidden="true"><label>Deja este campo vacío<input name="sitio_web" tabIndex={-1} autoComplete="off" /></label></div>
          <div className="form-grid">
            <label htmlFor="nombre">Nombre<input id="nombre" required name="nombre" autoComplete="name" maxLength={60} placeholder="Tu nombre" /></label>
            <label htmlFor="telefono">WhatsApp<input id="telefono" required name="telefono" autoComplete="tel" inputMode="tel" maxLength={24} pattern="[+0-9 ()-]{8,24}" placeholder="+56 9 …" aria-describedby="telefono-ayuda" /><small id="telefono-ayuda">Incluye el código de país si corresponde.</small></label>
            <label htmlFor="interes">¿Qué te interesa?<select id="interes" required name="interes" defaultValue=""><option value="" disabled>Selecciona una opción</option>{siteContent.services.map(service => <option key={service.id} value={service.title}>{service.title}</option>)}<option>Otra consulta</option></select></label>
            <label htmlFor="horario">Horario preferido<select id="horario" name="horario" defaultValue="Indistinto"><option>Mañana</option><option>Tarde</option><option>Indistinto</option></select></label>
            <label className="full" htmlFor="mensaje">Mensaje general opcional<textarea id="mensaje" name="mensaje" maxLength={280} aria-describedby="mensaje-ayuda" placeholder="Cuéntanos brevemente qué información general necesitas." /><small id="mensaje-ayuda">Máximo 280 caracteres. No incluyas antecedentes médicos sensibles.</small></label>
            <label className="consent full"><input required name="consentimiento" type="checkbox" /> <span>Acepto que estos datos se utilicen para preparar el mensaje que enviaré por WhatsApp. He leído el <a href="/privacidad">borrador de privacidad</a>.</span></label>
            <button className="button submit full" type="submit">Continuar en WhatsApp</button>
          </div>
          <p className={`form-status ${status === 'error' ? 'form-error' : ''}`} role="status" aria-live="polite">{status === 'ready' ? 'Consulta preparada. Revisa el mensaje en WhatsApp antes de enviarlo.' : status === 'error' ? 'Revisa los campos obligatorios e inténtalo nuevamente.' : ''}</p>
          <p className="form-note">El envío sólo se completa cuando confirmas el mensaje dentro de WhatsApp.</p>
        </form>
      </section>
      <footer><span>© 2026 {siteContent.professional.name} · {siteContent.professional.role}</span><span>{siteContent.professional.specialty} · {siteContent.contact.whatsappDisplay}</span><span className="footer-links"><a href="/privacidad">Privacidad</a><a href="/terminos">Condiciones</a></span></footer>
    </main>
  );
}
