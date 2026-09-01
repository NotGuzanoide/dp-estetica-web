export const siteContent = {
  professional: { name: 'Daniela Palma Carrasco', shortName: 'Daniela Palma', role: 'Enfermera', specialty: 'Medicina estética y urgencia' },
  contact: { whatsappDisplay: '+56 9 7716 0198', whatsappNumber: '56977160198' },
  hero: {
    eyebrow: 'Atención cercana y personalizada',
    title: 'Una expresión fresca, cuidando lo que te hace única.',
    description: 'Enfermera dedicada a medicina estética y urgencia. Orientación profesional en tratamientos con toxina botulínica, con evaluación individual y acompañamiento antes y después de cada procedimiento.',
  },
  services: [
    { id: 'facial', title: 'Aplicación facial', description: 'Evaluación de frente, entrecejo, patas de gallo y nariz para suavizar líneas de expresión manteniendo un resultado natural.' },
    { id: 'bruxismo', title: 'Bruxismo', description: 'Puede ayudar a disminuir la tensión muscular mandibular y molestias asociadas, siempre tras una evaluación individual.' },
    { id: 'hiperhidrosis', title: 'Hiperhidrosis', description: 'Tratamiento orientado al control de la sudoración excesiva en zonas como axilas y manos.' },
    { id: 'cuello', title: 'Cuello', description: 'Evaluación de bandas musculares del cuello y alternativas para mejorar visualmente el contorno.' },
  ],
  pendingValidation: { socialNetworks: true, openingHours: true, location: true, professionalCredentials: true, finalClinicalCopy: true },
} as const;

export const whatsappBaseUrl = `https://wa.me/${siteContent.contact.whatsappNumber}`;
