# dp-estetica-web

Primera versión de la web profesional de **Daniela Palma Carrasco**, enfermera dedicada a medicina estética y urgencia.

## Objetivo

Presentar los servicios, facilitar el contacto por WhatsApp y validar el flujo de captación antes de implementar almacenamiento de datos o agenda.

## Stack

- React 19 y TypeScript
- Vinext/Vite
- Tailwind CSS y componentes shadcn
- Despliegue objetivo: Cloudflare
- Evolución prevista: Worker para formularios, Turnstile y Supabase

## Estado

- Landing responsive y fotografía profesional
- Formulario demostrativo: no envía ni almacena datos
- Enlace directo a WhatsApp
- Diagramas C4: [C1](docs/c1-contexto.md) y [C2](docs/c2-contenedores.md)

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Próximas etapas

1. Confirmar comuna, horarios y acreditaciones publicables.
2. Implementar envío seguro, Turnstile y política de privacidad.
3. Conectar notificaciones y almacenamiento restringido.
4. Publicar en dominio propio.

