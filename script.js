const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",

    "hero.available": "Cloud • DevOps • Infrastructure",
    "hero.greeting": "Hi, I'm",
    "hero.lead": "I build, automate and improve cloud infrastructure with a strong focus on AWS, Infrastructure as Code, Kubernetes and reliable operations.",
    "hero.viewProjects": "View projects",
    "hero.focus": "Focus",
    "hero.location": "Based in",

    "about.kicker": "About",
    "about.title": "Infrastructure with purpose.",
    "about.p1": "I enjoy turning complex infrastructure problems into simpler, repeatable and well-documented solutions.",
    "about.p2": "My work is centered around cloud infrastructure, automation and platform reliability. I like combining hands-on engineering with clear architecture, reproducible deployments and practical operational improvements.",
    "about.card1Title": "Repeatable",
    "about.card1Text": "Infrastructure should be versioned, reviewable and easy to reproduce.",
    "about.card2Title": "Observable",
    "about.card2Text": "Good systems make their state, risks and failures visible.",
    "about.card3Title": "Practical",
    "about.card3Text": "The best solution is the one teams can actually operate and improve.",

    "experience.kicker": "Experience",
    "experience.title": "What I work on.",
    "experience.cloudTitle": "Cloud Architecture & AWS",
    "experience.cloudText": "Designing and operating AWS environments with networking, compute, storage, security, observability and cost-awareness in mind.",
    "experience.iacTitle": "Infrastructure as Code",
    "experience.iacText": "Building modular, reusable infrastructure and deployment workflows with Terraform, Terragrunt and Git-based review processes.",
    "experience.platformTitle": "Containers & Platforms",
    "experience.platformText": "Deploying and troubleshooting containerized workloads with Kubernetes, Helm, Docker and AWS container services.",
    "experience.automationTitle": "Automation & Operations",
    "experience.automationText": "Creating scripts and tooling that reduce repetitive work, improve visibility and make day-to-day operations safer.",

    "projects.kicker": "Selected projects",
    "projects.title": "Things I've built and improved.",
    "projects.migrationLabel": "Cloud Migration",
    "projects.migrationTitle": "AWS Migration & Modernization",
    "projects.migrationText": "Migration-focused infrastructure patterns for moving workloads from on-premises environments to AWS with repeatability, security and operational readiness.",
    "projects.iacLabel": "Infrastructure as Code",
    "projects.iacTitle": "Reusable AWS Infrastructure",
    "projects.iacText": "Reusable Terraform components and environment patterns for networking, compute, IAM, automation and multi-environment deployments.",
    "projects.ecsLabel": "Containers",
    "projects.ecsTitle": "ECS Application Architecture",
    "projects.ecsText": "AWS ECS architecture with services distributed across public and private networks, ALB ingress, ECR images and tightly scoped security-group communication.",
    "projects.networkLabel": "Networking & Visibility",
    "projects.networkTitle": "AWS Network Traffic Visualizer",
    "projects.networkText": "Python tooling to inspect ENIs and VPC Flow Logs and transform network activity into a visual relationship map of IPs, ports and AWS interfaces.",
    "projects.k8sLabel": "Platform Engineering",
    "projects.k8sTitle": "Kubernetes Application Stack",
    "projects.k8sText": "Containerized application environments with frontend, backend and data services, packaged and deployed with Kubernetes and Helm.",
    "projects.automationLabel": "Automation",
    "projects.automationTitle": "AWS Operations Tooling",
    "projects.automationText": "Python and serverless automation for AWS operations, resource management, scheduling and infrastructure visibility.",
    "projects.note": "Next step: each project can become its own case-study page with architecture diagrams, screenshots, decisions and lessons learned.",

    "certifications.kicker": "Certifications",
    "certifications.title": "Continuous learning.",
    "certifications.claudeText": "Foundations in effective, responsible and practical use of Claude and AI-assisted workflows.",
    "certifications.more": "Add AWS and other certifications here.",

    "contact.kicker": "Contact",
    "contact.title": "Let's build something useful.",
    "contact.text": "If you'd like to talk about cloud infrastructure, DevOps, automation or a technical project, LinkedIn is the best place to reach me for now.",
    "contact.linkedin": "Open LinkedIn",
    "contact.backTop": "Back to top"
  },

  es: {
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.certifications": "Certificaciones",
    "nav.contact": "Contacto",

    "hero.available": "Cloud • DevOps • Infraestructura",
    "hero.greeting": "Hola, soy",
    "hero.lead": "Diseño, automatizo y mejoro infraestructura cloud con foco en AWS, Infrastructure as Code, Kubernetes y operaciones confiables.",
    "hero.viewProjects": "Ver proyectos",
    "hero.focus": "Especialidad",
    "hero.location": "Ubicación",

    "about.kicker": "Sobre mí",
    "about.title": "Infraestructura con propósito.",
    "about.p1": "Me gusta transformar problemas complejos de infraestructura en soluciones más simples, repetibles y bien documentadas.",
    "about.p2": "Mi trabajo se centra en infraestructura cloud, automatización y confiabilidad de plataformas. Me gusta combinar ingeniería práctica con arquitectura clara, despliegues reproducibles y mejoras operativas concretas.",
    "about.card1Title": "Repetible",
    "about.card1Text": "La infraestructura debería estar versionada, ser revisable y fácil de reproducir.",
    "about.card2Title": "Observable",
    "about.card2Text": "Los buenos sistemas hacen visibles su estado, sus riesgos y sus fallas.",
    "about.card3Title": "Práctico",
    "about.card3Text": "La mejor solución es la que el equipo realmente puede operar y mejorar.",

    "experience.kicker": "Experiencia",
    "experience.title": "En qué trabajo.",
    "experience.cloudTitle": "Arquitectura Cloud & AWS",
    "experience.cloudText": "Diseño y operación de entornos AWS considerando networking, cómputo, storage, seguridad, observabilidad y costos.",
    "experience.iacTitle": "Infrastructure as Code",
    "experience.iacText": "Infraestructura modular y reutilizable con Terraform, Terragrunt y procesos de revisión basados en Git.",
    "experience.platformTitle": "Contenedores & Plataformas",
    "experience.platformText": "Despliegue y troubleshooting de workloads contenerizados con Kubernetes, Helm, Docker y servicios de contenedores de AWS.",
    "experience.automationTitle": "Automatización & Operaciones",
    "experience.automationText": "Scripts y herramientas para reducir tareas repetitivas, mejorar la visibilidad y hacer más seguras las operaciones del día a día.",

    "projects.kicker": "Proyectos seleccionados",
    "projects.title": "Cosas que construí y mejoré.",
    "projects.migrationLabel": "Migración Cloud",
    "projects.migrationTitle": "Migración & Modernización en AWS",
    "projects.migrationText": "Patrones de infraestructura orientados a migraciones desde entornos on-premises hacia AWS, priorizando repetibilidad, seguridad y preparación operativa.",
    "projects.iacLabel": "Infrastructure as Code",
    "projects.iacTitle": "Infraestructura AWS reutilizable",
    "projects.iacText": "Componentes Terraform y patrones por ambiente para networking, cómputo, IAM, automatización y despliegues multi-entorno.",
    "projects.ecsLabel": "Contenedores",
    "projects.ecsTitle": "Arquitectura de Aplicaciones en ECS",
    "projects.ecsText": "Arquitectura AWS ECS con servicios distribuidos entre redes públicas y privadas, ingreso mediante ALB, imágenes en ECR y comunicación restringida mediante security groups.",
    "projects.networkLabel": "Networking & Visibilidad",
    "projects.networkTitle": "Visualizador de Tráfico de Red en AWS",
    "projects.networkText": "Herramienta en Python para analizar ENIs y VPC Flow Logs y transformar la actividad de red en un mapa visual de relaciones entre IPs, puertos e interfaces AWS.",
    "projects.k8sLabel": "Platform Engineering",
    "projects.k8sTitle": "Stack de aplicaciones en Kubernetes",
    "projects.k8sText": "Entornos contenerizados con frontend, backend y servicios de datos, empaquetados y desplegados con Kubernetes y Helm.",
    "projects.automationLabel": "Automatización",
    "projects.automationTitle": "Herramientas operativas para AWS",
    "projects.automationText": "Automatización con Python y servicios serverless para operaciones AWS, gestión de recursos, scheduling y visibilidad de infraestructura.",
    "projects.note": "Próximo paso: convertir cada proyecto en un caso de estudio con diagramas de arquitectura, screenshots, decisiones y aprendizajes.",

    "certifications.kicker": "Certificaciones",
    "certifications.title": "Aprendizaje continuo.",
    "certifications.claudeText": "Fundamentos para el uso efectivo, responsable y práctico de Claude y workflows asistidos por IA.",
    "certifications.more": "Agregar aquí certificaciones de AWS y otras tecnologías.",

    "contact.kicker": "Contacto",
    "contact.title": "Construyamos algo útil.",
    "contact.text": "Si querés hablar sobre infraestructura cloud, DevOps, automatización o algún proyecto técnico, por ahora LinkedIn es la mejor forma de contactarme.",
    "contact.linkedin": "Abrir LinkedIn",
    "contact.backTop": "Volver arriba"
  }
};

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");
const header = document.querySelector(".site-header");

const savedTheme = localStorage.getItem("theme");
const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
root.dataset.theme = savedTheme || (systemPrefersLight ? "light" : "dark");

let currentLanguage = localStorage.getItem("language") || "en";

function applyLanguage(language) {
  currentLanguage = language;
  root.lang = language;
  languageToggle.textContent = language === "en" ? "ES" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[language]?.[key];

    if (translated) {
      element.textContent = translated;
    }
  });

  localStorage.setItem("language", language);
}

applyLanguage(currentLanguage);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "es" : "en");
});

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
