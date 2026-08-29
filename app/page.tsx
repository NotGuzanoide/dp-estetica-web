'use client';

import { FormEvent, useState } from 'react';
import { BadgeCheck, CheckCircle2, Clock3, Droplets, Heart, LockKeyhole, MessageCircle, ScanFace, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';

const whatsappUrl = 'https://wa.me/56977160198';
const services = [
  { title: 'Aplicación facial', description: 'Evaluación de frente, entrecejo, patas de gallo y nariz para suavizar líneas de expresión manteniendo un resultado natural.', icon: ScanFace },
  { title: 'Bruxismo', description: 'Puede ayudar a disminuir la tensión muscular mandibular y molestias asociadas, siempre tras una evaluación individual.', icon: Heart },
  { title: 'Hiperhidrosis', description: 'Tratamiento orientado al control de la sudoración excesiva en zonas como axilas y manos.', icon: Droplets },
  { title: 'Cuello', description: 'Evaluación de bandas musculares del cuello y alternativas para mejorar visualmente el contorno.', icon: Sparkles },
];

export default function Home() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span className="brand-mark"><Sparkles size={17} /></span><span>Daniela Palma Carrasco</span></a>
        <nav aria-label="Navegación principal"><a href="#tratamientos">Tratamientos</a><a href="#contacto">Contacto</a><a className="button button-small" href="#contacto">Quiero consultar</a></nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><Heart size={17} /> Atención cercana y personalizada</p>
          <h1>Una expresión fresca, cuidando lo que te hace única.</h1>
          <p className="hero-description">Enfermera dedicada a medicina estética y urgencia. Orientación profesional en tratamientos con toxina botulínica, con evaluación individual y acompañamiento antes y después de cada procedimiento.</p>
          <div className="hero-actions"><a className="button" href="#contacto">Solicitar orientación</a><a className="text-link" href={whatsappUrl}>Hablar por WhatsApp</a></div>
          <div className="trust-list" aria-label="Características del servicio"><span><ShieldCheck size={17} /> Evaluación previa</span><span><MessageCircle size={17} /> Seguimiento posterior</span><span><Stethoscope size={17} /> Enfermera</span></div>
        </div>
        <figure className="portrait"><img src="/daniela-palma-profesional.png" alt="Retrato profesional de Daniela Palma Carrasco" /><figcaption><BadgeCheck size={18} /> Daniela Palma Carrasco · Enfermera</figcaption></figure>
      </section>

      <section className="section" id="tratamientos">
        <p className="section-kicker">Tratamientos</p><h2>¿Para qué se utiliza la toxina botulínica?</h2>
        <p className="section-intro">Relaja determinados músculos de forma controlada y puede utilizarse con fines estéticos o funcionales. La indicación y los resultados esperables dependen de una evaluación profesional.</p>
        <div className="services">{services.map(({ title, description, icon: Icon }) => <article className="service" key={title}><Icon size={22} /><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="benefits" aria-label="Aspectos del tratamiento"><span><CheckCircle2 size={18} /> Aplicación sujeta a evaluación</span><span><Clock3 size={18} /> Resultados temporales y ajustables</span><span><MessageCircle size={18} /> Indicaciones y seguimiento</span></div>
      </section>

      <section className="section contact" id="contacto">
        <div className="contact-copy"><p className="section-kicker">Primer contacto</p><h2>Conversemos sobre lo que buscas</h2><p>Déjanos tus datos básicos y disponibilidad. Daniela te contactará para orientar el siguiente paso; este formulario no reemplaza una evaluación clínica.</p><div className="contact-details"><span><Clock3 size={18} /> Respuesta dentro del horario de atención</span><span><LockKeyhole size={18} /> Datos usados solo para responder</span><a href={whatsappUrl}><MessageCircle size={18} /> WhatsApp: +56 9 7716 0198</a></div></div>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>Nombre<input required name="nombre" autoComplete="name" placeholder="Tu nombre" /></label>
            <label>WhatsApp<input required name="telefono" autoComplete="tel" inputMode="tel" placeholder="+56 9 …" /></label>
            <label>¿Qué te interesa?<select required name="interes" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Aplicación facial</option><option>Bruxismo</option><option>Hiperhidrosis</option><option>Cuello</option><option>Otra consulta</option></select></label>
            <label>Horario preferido<select name="horario" defaultValue="Indistinto"><option>Mañana</option><option>Tarde</option><option>Indistinto</option></select></label>
            <label className="full">Mensaje opcional<textarea name="mensaje" placeholder="Cuéntanos brevemente qué información necesitas. No incluyas antecedentes médicos sensibles." /></label>
            <label className="consent full"><input required type="checkbox" /> <span>Acepto que me contacten para responder esta consulta.</span></label>
            <button className="button submit full" type="submit">Enviar consulta</button>
          </div>
          <p className="form-status" aria-live="polite">{sent ? 'Demostración: la consulta quedó lista. Aún no se envían datos.' : ''}</p>
          <p className="form-note">Primera versión: el formulario es demostrativo y no almacena información.</p>
        </form>
      </section>
      <footer><span>© 2026 Daniela Palma Carrasco · Enfermera</span><span>Medicina estética y urgencia · +56 9 7716 0198</span></footer>
    </main>
  );
}

