export const process = {
  eyebrow: "Mi proceso",
  title: "Cómo trabajo",
  steps: [
    {
      title: "1. Escuchar y entender",
      body: "Analizamos juntos tus objetivos, tu web o sistema actual y cualquier limitación.",
    },
    {
      title: "2. Planificar y proponer",
      body: "Defino la arquitectura, el stack técnico, las integraciones y te preparo un presupuesto.",
    },
    {
      title: "3. Construir y verificar",
      body: "Entrego por iteraciones y te voy enseñando los progresos, con tests y análisis estático en el pipeline.",
    },
    {
      title: "4. Lanzar y mantener",
      body: "Despliego, reviso el rendimiento, la seguridad y mantengo todo al día tras el lanzamiento.",
    },
  ],
  principles: [
    {
      title: "Me ocupo de la parte técnica de principio a fin",
      body: "Me encargo de la arquitectura, la implementación, el rendimiento, la seguridad, flujos de CI/CD, la entrega y el mantenimiento.",
    },
    {
      title: "Construyo para el uso real",
      body: "Escucho con atención tus requisitos y los convierto en productos que aguantan el uso real. Colaboro con diseñadores, desarrolladores y responsables de producto.",
    },
    {
      title: "Tests y análisis estático en el pipeline",
      body: "Respaldo el código con tests automatizados, análisis estático, refactorización y formateo automáticos, para detectar errores antes de que lleguen a producción.",
    },
    {
      title: "La IA forma parte de mi día a día",
      body: "Uso agentes de código con IA, junto con tests automatizados y análisis estático, para entregar funcionalidades fiables más rápido.",
    },
  ],
}

export type ProcessCopy = typeof process
