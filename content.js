const portfolioContent = {
  en: {
    professionalPrinciples: [
      "Responsibility",
      "Professionalism",
      "Calm under pressure",
      "Teamwork",
      "Helping others overcome obstacles"
    ],
    career: [
      {
        company: "Caylent",
        location: "Mendoza, Argentina",
        roles: [
          { role: "Senior Cloud Engineer", period: "May 2026 — Present" },
          { role: "Cloud Engineer", period: "Jun 2025 — Present" }
        ],
        summary: "Current stage of my career focused on cloud engineering. My LinkedIn profile lists AWS cloud migration, CDK and TypeScript among my main skills.",
        technical: [
          "AWS cloud migration",
          "AWS CDK",
          "TypeScript",
          "Cloud engineering"
        ],
        professional: [
          "Growing into a senior cloud engineering role",
          "Responsibility and professionalism",
          "Teamwork and collaboration"
        ]
      },
      {
        company: "Netrix Global",
        location: "Argentina",
        roles: [
          { role: "Sr. Cloud Engineer", period: "Sep 2022 — Jun 2025" }
        ],
        summary: "Senior cloud engineering role. The exported LinkedIn profile does not include detailed responsibilities for this position.",
        technical: [
          "Cloud engineering"
        ],
        professional: [
          "Senior-level cloud engineering experience",
          "Further development of cloud-focused responsibilities"
        ]
      },
      {
        company: "3XM Group",
        location: "Argentina",
        roles: [
          { role: "DevOps", period: "Jan 2022 — Sep 2022" }
        ],
        summary: "DevOps role. The exported LinkedIn profile does not include detailed responsibilities for this position.",
        technical: [
          "DevOps"
        ],
        professional: [
          "Transition toward cloud and DevOps-focused work"
        ]
      },
      {
        company: "Accenture",
        location: "Argentina",
        roles: [
          { role: "Tech Arch Delivery Sr Analyst", period: "Nov 2020 — Dec 2021" }
        ],
        summary: "AWS administration, deployment coordination, CI/CD, Windows administration, monitoring and team coordination.",
        technical: [
          "AWS: S3, ElastiCache, CloudFront, Route 53, Lambda and Secrets Manager",
          "Azure DevOps CI/CD",
          "Windows Server 2013 / 2016 administration",
          "Datadog monitoring",
          "ServiceNow"
        ],
        professional: [
          "Plan, coordinate and execute application deployments",
          "Team coordination",
          "Operational monitoring and change execution"
        ]
      },
      {
        company: "EY",
        location: "Argentina",
        roles: [
          { role: "SharePoint Infrastructure Systems Management & Support", period: "Dec 2018 — Mar 2020" }
        ],
        summary: "Infrastructure management and support for SharePoint environments with Windows Server and log troubleshooting.",
        technical: [
          "SharePoint infrastructure management and support",
          "SharePoint patching",
          "SharePoint Designer 2010 / 2013",
          "InfoPath 2013",
          "Windows Server 2012 / 2016",
          "Splunk for log troubleshooting"
        ],
        professional: [
          "Production infrastructure support",
          "Patch and maintenance discipline",
          "Troubleshooting using operational logs"
        ]
      },
      {
        company: "Softtek",
        location: "Buenos Aires, Argentina",
        roles: [
          { role: "SharePoint Infrastructure / Developer", period: "Sep 2016 — Dec 2018" }
        ],
        summary: "A hybrid infrastructure and development role across SharePoint, Windows Server, SQL Server and Azure.",
        technical: [
          "SharePoint 2010 / 2013 / 2016 infrastructure analysis, implementation and administration",
          "HTML, CSS, Bootstrap, AngularJS, jQuery and JavaScript",
          "SharePoint Designer 2010 / 2013",
          "SQL Server 2012 / 2016",
          "Windows Server 2012 / 2016 administration and implementation",
          "Azure tenant administration"
        ],
        professional: [
          "Combining infrastructure and development perspectives",
          "Implementation and administration across multiple technology layers"
        ]
      },
      {
        company: "Solnik S.A.",
        location: "",
        roles: [
          { role: "Technical Support", period: "Jun 2015 — Aug 2016" }
        ],
        summary: "Hands-on technical support and infrastructure implementation.",
        technical: [
          "Active Directory user administration",
          "Structured cabling",
          "Kaspersky antivirus maintenance",
          "Infrastructure implementation and support",
          "Windows Server 2008 R2 / 2012",
          "IP telephony"
        ],
        professional: [
          "Hands-on infrastructure support",
          "User and endpoint administration",
          "Working across physical and server infrastructure"
        ]
      },
      {
        company: "Readymind IT",
        location: "Buenos Aires, Argentina",
        roles: [
          { role: "Technical Support", period: "Oct 2013 — Feb 2015" }
        ],
        summary: "Early professional experience supporting infrastructure, hardware, software and client environments across multiple industries.",
        technical: [
          "Windows Server 2008 / 2012 support and infrastructure implementation",
          "Structured cabling",
          "Hardware and software support",
          "IP telephony"
        ],
        professional: [
          "Client support across different business environments",
          "Problem solving in varied customer contexts",
          "Building a strong infrastructure and support foundation"
        ]
      }
    ],

    cases: [
      {
        featured: true,
        category: "Migration",
        title: "Enterprise Workload Migration to AWS",
        challenge: "Move production workloads from on-premises environments to AWS while reducing cutover risk and keeping the process repeatable.",
        decision: "Separate discovery, replication or pre-seeding, infrastructure preparation, validation and final cutover into explicit stages.",
        solution: "Combine AWS migration and data-transfer patterns with Terraform-managed infrastructure, validation checkpoints and controlled DNS cutover.",
        outcome: "A clearer migration runbook, lower operational risk and a pattern that can improve from one migration to the next.",
        services: ["AWS","EC2","MGN","S3","EBS","VPC","Terraform","Route 53"],
        diagram: ["On-prem","Replication / Seed","AWS Landing","Validation","DNS Cutover"]
      },
      {
        category: "Infrastructure as Code",
        title: "Multi-Environment Terraform Platform",
        challenge: "Keep dev, QA and production consistent without turning every environment into copy-paste infrastructure.",
        decision: "Separate reusable modules from environment configuration and expose infrastructure changes through Git-based review.",
        solution: "Terraform and Terragrunt with environment-specific inputs, remote state and pull-request-driven change management.",
        outcome: "More predictable deployments, easier reviews and less configuration drift.",
        services: ["Terraform","Terragrunt","AWS","Git","Azure DevOps"],
        diagram: ["Git / PR","Terragrunt","Terraform Modules","Dev · QA · Prod"]
      },
      {
        category: "Architecture",
        title: "ECS Service Architecture",
        challenge: "Expose application traffic safely while keeping internal service communication tightly scoped.",
        decision: "Separate ingress from service-to-service traffic and use security-group relationships instead of broad network access.",
        solution: "Public ALB, ECS services, ECR images and private service communication governed by security groups.",
        outcome: "A clearer traffic model with explicit trust boundaries.",
        services: ["ECS","EC2","ALB","ECR","VPC","Security Groups"],
        diagram: ["Internet","ALB","ECS Frontend","ECS Backend"]
      },
      {
        category: "Automation",
        title: "AWS Operations Automation",
        challenge: "Reduce repetitive operational work such as scheduled instance actions and infrastructure-state checks.",
        decision: "Move recurring tasks into event-driven, auditable serverless workflows.",
        solution: "EventBridge schedules, Lambda, Boto3 and S3-driven configuration for EC2 lifecycle and operational actions.",
        outcome: "Less manual work and workflows that are versioned, reviewed and reusable.",
        services: ["Lambda","EventBridge","Python","Boto3","S3","EC2"],
        diagram: ["Schedule / Config","EventBridge","Lambda","AWS APIs"]
      },
      {
        category: "Observability",
        title: "Cross-Account AWS Observability",
        challenge: "Centralize visibility while keeping workloads and permissions separated across AWS accounts.",
        decision: "Use role assumption for cross-account access instead of duplicating monitoring infrastructure.",
        solution: "Grafana in AWS with IAM roles and controlled cross-account access to target metrics.",
        outcome: "Centralized dashboards with a cleaner permission model.",
        services: ["Grafana","IAM","STS","CloudWatch","ECS Fargate"],
        diagram: ["Grafana","AssumeRole","Target Accounts","CloudWatch"]
      },
      {
        category: "Networking",
        title: "AWS Network Traffic Visualizer",
        challenge: "Make VPC traffic relationships easier to inspect than raw Flow Log records.",
        decision: "Transform network telemetry into a visual model centered around AWS network interfaces.",
        solution: "Python and Boto3 to enrich ENIs with VPC Flow Log data and map IP/port relationships.",
        outcome: "A more intuitive way to investigate connectivity and traffic patterns.",
        services: ["Python","Boto3","VPC Flow Logs","ENI","Networking"],
        diagram: ["VPC Flow Logs","Python / Boto3","ENI Context","Traffic Map"]
      }
    ],

    certifications: [
      { issuer: "AWS", name: "Well-Architected Proficient", badge: "AWS", url: "" },
      { issuer: "AWS", name: "AWS API Security", badge: "AWS", url: "" },
      { issuer: "Anthropic", name: "Claude Certified Associate — Foundations", badge: "AI", url: "" },
      { issuer: "", name: "Scrum Foundation Professional Certificate (SFPC) — Spanish", badge: "S", url: "" },
      { issuer: "AWS", name: "AWS Partner: Cloud Economics Accreditation", badge: "AWS", url: "" }
    ],

    education: [
      {
        institution: "Instituto Superior Tecnologico Empresarial Argentino (ISTEA)",
        program: "Higher Education — Information Technology",
        period: "2020 — 2024"
      },
      {
        institution: "Ingeniero Eduardo Latzina",
        program: "High School — Computer Technician",
        period: "2006 — 2013"
      }
    ],

    skills: [
      { title: "Core AWS & Architecture", level: "Primary focus", items: ["AWS","AWS Cloud Migration","Cloud Architecture","VPC","EC2","ECS","Lambda","S3","IAM","Route 53"] },
      { title: "Infrastructure as Code", level: "Primary focus", items: ["Terraform","Terragrunt","AWS CDK","TypeScript","Git","CI/CD"] },
      { title: "Automation & Operations", level: "Primary focus", items: ["Python","Boto3","Shell","EventBridge","Linux","Grafana","Datadog"] },
      { title: "Containers & Platform", level: "Complementary", items: ["Docker","ECR","Kubernetes","Helm","EKS","PostgreSQL"] },
      { title: "Earlier Infrastructure Foundation", level: "Background", items: ["Windows Server","Active Directory","SharePoint","SQL Server","Splunk","Azure"] }
    ]
  },

  es: {
    professionalPrinciples: [
      "Responsabilidad",
      "Profesionalismo",
      "Calma bajo presión",
      "Trabajo en equipo",
      "Ayudar a otros a superar obstáculos"
    ],
    career: [
      {
        company: "Caylent",
        location: "Mendoza, Argentina",
        roles: [
          { role: "Senior Cloud Engineer", period: "May 2026 — Actualidad" },
          { role: "Cloud Engineer", period: "Jun 2025 — Actualidad" }
        ],
        summary: "Etapa actual de mi carrera enfocada en cloud engineering. Mi perfil de LinkedIn lista migración a la nube de AWS, CDK y TypeScript entre mis aptitudes principales.",
        technical: [
          "Migración a la nube de AWS",
          "AWS CDK",
          "TypeScript",
          "Cloud engineering"
        ],
        professional: [
          "Crecimiento hacia un rol senior de cloud engineering",
          "Responsabilidad y profesionalismo",
          "Trabajo en equipo y colaboración"
        ]
      },
      {
        company: "Netrix Global",
        location: "Argentina",
        roles: [
          { role: "Sr. Cloud Engineer", period: "Sep 2022 — Jun 2025" }
        ],
        summary: "Rol de senior cloud engineering. El PDF exportado de LinkedIn no incluye responsabilidades detalladas para esta posición.",
        technical: [
          "Cloud engineering"
        ],
        professional: [
          "Experiencia senior en ingeniería cloud",
          "Mayor desarrollo de responsabilidades orientadas a cloud"
        ]
      },
      {
        company: "3XM Group",
        location: "Argentina",
        roles: [
          { role: "DevOps", period: "Ene 2022 — Sep 2022" }
        ],
        summary: "Rol DevOps. El PDF exportado de LinkedIn no incluye responsabilidades detalladas para esta posición.",
        technical: [
          "DevOps"
        ],
        professional: [
          "Transición hacia trabajo enfocado en cloud y DevOps"
        ]
      },
      {
        company: "Accenture",
        location: "Argentina",
        roles: [
          { role: "Tech Arch Delivery Sr Analyst", period: "Nov 2020 — Dic 2021" }
        ],
        summary: "Administración AWS, coordinación de deployments, CI/CD, administración Windows, monitoreo y coordinación de equipo.",
        technical: [
          "AWS: S3, ElastiCache, CloudFront, Route 53, Lambda y Secrets Manager",
          "Azure DevOps CI/CD",
          "Administración Windows Server 2013 / 2016",
          "Monitoreo con Datadog",
          "ServiceNow"
        ],
        professional: [
          "Planificación, coordinación y ejecución de deployments",
          "Coordinación de equipo",
          "Monitoreo operativo y ejecución de cambios"
        ]
      },
      {
        company: "EY",
        location: "Argentina",
        roles: [
          { role: "SharePoint Infrastructure Systems Management & Support", period: "Dic 2018 — Mar 2020" }
        ],
        summary: "Gestión y soporte de infraestructura SharePoint con Windows Server y troubleshooting de logs.",
        technical: [
          "Gestión y soporte de infraestructura SharePoint",
          "Patching de SharePoint",
          "SharePoint Designer 2010 / 2013",
          "InfoPath 2013",
          "Windows Server 2012 / 2016",
          "Splunk para troubleshooting de logs"
        ],
        professional: [
          "Soporte de infraestructura productiva",
          "Disciplina de mantenimiento y patching",
          "Troubleshooting a partir de logs operativos"
        ]
      },
      {
        company: "Softtek",
        location: "Buenos Aires, Argentina",
        roles: [
          { role: "SharePoint Infrastructure / Developer", period: "Sep 2016 — Dic 2018" }
        ],
        summary: "Rol híbrido de infraestructura y desarrollo sobre SharePoint, Windows Server, SQL Server y Azure.",
        technical: [
          "Análisis, implementación y administración de SharePoint 2010 / 2013 / 2016",
          "HTML, CSS, Bootstrap, AngularJS, jQuery y JavaScript",
          "SharePoint Designer 2010 / 2013",
          "SQL Server 2012 / 2016",
          "Administración e implementación Windows Server 2012 / 2016",
          "Administración de tenant en Azure"
        ],
        professional: [
          "Combinar perspectivas de infraestructura y desarrollo",
          "Implementación y administración en múltiples capas tecnológicas"
        ]
      },
      {
        company: "Solnik S.A.",
        location: "",
        roles: [
          { role: "Technical Support", period: "Jun 2015 — Ago 2016" }
        ],
        summary: "Soporte técnico e implementación de infraestructura de forma práctica.",
        technical: [
          "Administración de usuarios en Active Directory",
          "Cableado estructurado",
          "Mantenimiento de antivirus Kaspersky",
          "Implementación y soporte de infraestructura",
          "Windows Server 2008 R2 / 2012",
          "Telefonía IP"
        ],
        professional: [
          "Soporte de infraestructura hands-on",
          "Administración de usuarios y endpoints",
          "Trabajo sobre infraestructura física y servidores"
        ]
      },
      {
        company: "Readymind IT",
        location: "Buenos Aires, Argentina",
        roles: [
          { role: "Technical Support", period: "Oct 2013 — Feb 2015" }
        ],
        summary: "Primera experiencia profesional dando soporte de infraestructura, hardware, software y entornos de clientes de distintos rubros.",
        technical: [
          "Soporte e implementación Windows Server 2008 / 2012",
          "Cableado estructurado",
          "Soporte de hardware y software",
          "Telefonía IP"
        ],
        professional: [
          "Soporte a clientes de distintos rubros",
          "Resolución de problemas en contextos variados",
          "Construcción de una base sólida de infraestructura y soporte"
        ]
      }
    ],

    cases: [
      {
        featured: true,
        category: "Migración",
        title: "Migración de Workloads Empresariales a AWS",
        challenge: "Mover workloads productivos desde on-premises hacia AWS reduciendo el riesgo del cutover y manteniendo un proceso repetible.",
        decision: "Separar discovery, replicación o pre-seeding, preparación de infraestructura, validación y cutover final en etapas explícitas.",
        solution: "Combinar patrones de migración y transferencia de datos de AWS con infraestructura administrada por Terraform, checkpoints de validación y cutover DNS controlado.",
        outcome: "Un runbook más claro, menor riesgo operativo y un patrón mejorable migración tras migración.",
        services: ["AWS","EC2","MGN","S3","EBS","VPC","Terraform","Route 53"],
        diagram: ["On-prem","Replicación / Seed","Landing AWS","Validación","Cutover DNS"]
      },
      {
        category: "Infrastructure as Code",
        title: "Plataforma Terraform Multi-Ambiente",
        challenge: "Mantener dev, QA y producción consistentes sin convertir cada ambiente en infraestructura copiada.",
        decision: "Separar módulos reutilizables de configuración por ambiente y revisar cambios mediante Git.",
        solution: "Terraform y Terragrunt con inputs por ambiente, remote state y cambios mediante pull requests.",
        outcome: "Despliegues más predecibles, mejor revisión y menos drift.",
        services: ["Terraform","Terragrunt","AWS","Git","Azure DevOps"],
        diagram: ["Git / PR","Terragrunt","Módulos Terraform","Dev · QA · Prod"]
      },
      {
        category: "Arquitectura",
        title: "Arquitectura de Servicios en ECS",
        challenge: "Exponer tráfico de aplicación de forma segura manteniendo la comunicación interna estrictamente controlada.",
        decision: "Separar ingreso de tráfico y comunicación entre servicios, usando relaciones entre security groups.",
        solution: "ALB público, servicios ECS, imágenes ECR y comunicación privada gobernada por security groups.",
        outcome: "Un modelo de tráfico más claro con límites de confianza explícitos.",
        services: ["ECS","EC2","ALB","ECR","VPC","Security Groups"],
        diagram: ["Internet","ALB","ECS Frontend","ECS Backend"]
      },
      {
        category: "Automatización",
        title: "Automatización de Operaciones AWS",
        challenge: "Reducir tareas repetitivas como acciones programadas sobre instancias y chequeos de infraestructura.",
        decision: "Mover tareas recurrentes a workflows serverless orientados a eventos y auditables.",
        solution: "EventBridge, Lambda, Boto3 y configuración desde S3 para ciclo de vida de EC2 y operaciones.",
        outcome: "Menos trabajo manual y workflows versionados, revisables y reutilizables.",
        services: ["Lambda","EventBridge","Python","Boto3","S3","EC2"],
        diagram: ["Schedule / Config","EventBridge","Lambda","AWS APIs"]
      },
      {
        category: "Observabilidad",
        title: "Observabilidad AWS Cross-Account",
        challenge: "Centralizar visibilidad manteniendo workloads y permisos separados entre cuentas AWS.",
        decision: "Usar role assumption en lugar de duplicar infraestructura de monitoreo.",
        solution: "Grafana en AWS con roles IAM y acceso cross-account controlado a métricas.",
        outcome: "Dashboards centralizados con un modelo de permisos más claro.",
        services: ["Grafana","IAM","STS","CloudWatch","ECS Fargate"],
        diagram: ["Grafana","AssumeRole","Cuentas AWS","CloudWatch"]
      },
      {
        category: "Networking",
        title: "Visualizador de Tráfico de Red en AWS",
        challenge: "Hacer más fácil investigar relaciones de tráfico que leyendo VPC Flow Logs crudos.",
        decision: "Transformar telemetría de red en un modelo visual centrado en interfaces AWS.",
        solution: "Python y Boto3 para enriquecer ENIs con VPC Flow Logs y mapear relaciones de IPs y puertos.",
        outcome: "Una forma más intuitiva de investigar conectividad y patrones de tráfico.",
        services: ["Python","Boto3","VPC Flow Logs","ENI","Networking"],
        diagram: ["VPC Flow Logs","Python / Boto3","Contexto ENI","Mapa de Tráfico"]
      }
    ],

    certifications: [
      { issuer: "AWS", name: "Well-Architected Proficient", badge: "AWS", url: "" },
      { issuer: "AWS", name: "AWS API Security", badge: "AWS", url: "" },
      { issuer: "Anthropic", name: "Claude Certified Associate — Foundations", badge: "AI", url: "" },
      { issuer: "", name: "Scrum Foundation Professional Certificate (SFPC) — Spanish", badge: "S", url: "" },
      { issuer: "AWS", name: "AWS Partner: Cloud Economics Accreditation", badge: "AWS", url: "" }
    ],

    education: [
      {
        institution: "Instituto Superior Tecnologico Empresarial Argentino (ISTEA)",
        program: "Educación superior — Information Technology",
        period: "2020 — 2024"
      },
      {
        institution: "Ingeniero Eduardo Latzina",
        program: "Secundario — Técnico en Computación",
        period: "2006 — 2013"
      }
    ],

    skills: [
      { title: "AWS & Arquitectura", level: "Foco principal", items: ["AWS","Migración a AWS","Cloud Architecture","VPC","EC2","ECS","Lambda","S3","IAM","Route 53"] },
      { title: "Infrastructure as Code", level: "Foco principal", items: ["Terraform","Terragrunt","AWS CDK","TypeScript","Git","CI/CD"] },
      { title: "Automatización & Operaciones", level: "Foco principal", items: ["Python","Boto3","Shell","EventBridge","Linux","Grafana","Datadog"] },
      { title: "Contenedores & Plataforma", level: "Complementario", items: ["Docker","ECR","Kubernetes","Helm","EKS","PostgreSQL"] },
      { title: "Base de Infraestructura", level: "Experiencia previa", items: ["Windows Server","Active Directory","SharePoint","SQL Server","Splunk","Azure"] }
    ]
  }
};
