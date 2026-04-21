/**
 * Datos centralizados del portfolio
 * Facilita el mantenimiento y actualizaciones de contenido
 */

// ============ INFORMACIÓN PERSONAL ============

export const personalInfo = {
  name: 'Álvaro Alonso Fernández',
  firstName: 'Álvaro',
  lastName: 'Alonso Fernández',
  title: 'Desarrollador Full-Stack',
  email: 'alvaroaf221@gmail.com',
  phone: '601 33 53 67',
  phoneRaw: '+34601335367',
  address: 'C/ Costanilla de San Lazaro 4, 3D',
  github: 'https://github.com/alvaroalof/',
  githubUsername: 'alvaroalof',
  linkedin: 'https://www.linkedin.com/in/%C3%A1lvaro-alonso-fern%C3%A1ndez-4a304a283/',
  disability: '33% de discapacidad (sin impacto laboral)',
  languages: {
    spanish: 'Nativo',
    english: 'B1'
  },
  available: true
} as const;

// ============ HABILIDADES TÉCNICAS ============

export interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

export const mainSkills: (Skill & { level: number })[] = [
  { name: 'Kotlin', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'C#', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'PHP', level: 70 }
];

export const otherSkills: Skill[] = [
  { name: 'JavaScript' },
  { name: 'HTML & CSS' },
  { name: 'Bootstrap' },
  { name: 'SQL (Bases de Datos)' }
];

export const skillIcons: Record<string, string> = {
  'JavaScript': 'Code2',
  'HTML & CSS': 'Layout',
  'Bootstrap': 'Palette',
  'SQL (Bases de Datos)': 'Database'
};

// ============ EXPERIENCIA LABORAL ============

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  startDate: string;
  endDate?: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    period: 'Marzo 2025 — Junio 2025',
    title: 'Programación Web',
    company: 'EUROWINDSOFTGEN S.L.',
    description: 'Desarrollo de aplicaciones web y formación especializada en tecnologías modernas.',
    tags: ['WEB', 'FRONT-END'],
    startDate: '2025-03',
    endDate: '2025-06'
  },
  {
    period: 'Octubre 2022 — Diciembre 2022',
    title: 'Programación en Python (Prácticas)',
    company: 'ICSRed',
    description: 'Apoyo en tareas de desarrollo utilizando el lenguaje Python y automatización.',
    tags: ['PYTHON', 'AUTOMATION'],
    startDate: '2022-10',
    endDate: '2022-12'
  }
];

// ============ EDUCACIÓN ============

export interface Education {
  period: string;
  title: string;
  institution: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
}

export const education: Education[] = [
  {
    period: 'Actual',
    title: 'Plan de Capacitación Joven en Inteligencia Artificial y Empleabilidad Digital',
    institution: 'Fedeto Formación',
    startDate: '2025',
    current: true
  },
  {
    period: '2024 — 2025',
    title: 'CFGS Desarrollo de Aplicaciones Web',
    institution: 'Universidad Alfonso X El Sabio',
    startDate: '2024-09',
    endDate: '2025-06'
  },
  {
    period: '2020 — 2023',
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
    institution: 'IES Azarquiel',
    startDate: '2020-09',
    endDate: '2023-06'
  },
  {
    period: '2017 — 2020',
    title: 'CFGM Sistemas Microinformáticos y Redes',
    institution: 'IES Julio Verne',
    startDate: '2017-09',
    endDate: '2020-06'
  }
];

// ============ APRENDIZAJE CONTINUO ============

export interface LearningTopic {
  title: string;
  description: string;
  icon: string;
  status: 'En progreso' | 'Fase inicial' | 'Próximamente';
}

export const learningTopics: LearningTopic[] = [
  {
    title: 'Arquitectura de Microservicios',
    description: 'Explorando patrones de diseño escalables y comunicación entre servicios mediante colas de mensajes.',
    icon: 'Rocket',
    status: 'En progreso'
  },
  {
    title: 'Inteligencia Artificial Aplicada',
    description: 'Profundizando en la integración de LLMs y modelos predictivos en aplicaciones web modernas.',
    icon: 'Brain',
    status: 'Fase inicial'
  },
  {
    title: 'Cloud Computing (AWS/Azure)',
    description: 'Aprendiendo sobre despliegue, gestión de contenedores y servicios serverless en la nube.',
    icon: 'Sparkles',
    status: 'Próximamente'
  }
];

// ============ NAVEGACIÓN ============

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Perfil', icon: 'User' },
  { id: 'skills', label: 'Stack Técnico', icon: 'Zap' },
  { id: 'work', label: 'Experiencia', icon: 'History' },
  { id: 'education', label: 'Educación', icon: 'School' },
  { id: 'learning', label: 'Aprendiendo', icon: 'BookOpen' },
  { id: 'projects', label: 'Proyectos', icon: 'FolderKanban' }
];

// ============ REDES SOCIALES ============

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { icon: 'Github', label: 'Github', href: 'https://github.com/alvaroalof/' },
  { icon: 'Linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%C3%A1lvaro-alonso-fern%C3%A1ndez-4a304a283/' }
];

// ============ HERO ============

export const heroContent = {
  headline: 'Pasión por el código y el trabajo en equipo.',
  highlight: 'trabajo en equipo.',
  description: 'Amante de la programación, siempre abierto a explorar nuevos lenguajes y tecnologías. Me motiva aprender y mejorar constantemente para aportar valor en proyectos innovadores.'
} as const;

// ============ CONTACTO ============

export const contactContent = {
  title: 'Contacto',
  description: 'Estoy siempre abierto a discutir nuevas oportunidades, arquitectura técnica o colaboraciones interesantes.'
} as const;

// ============ CV ============

export const cvContent = {
  title: 'Currículum Vitae',
  description: 'Visualiza mi trayectoria profesional completa o descarga una copia en formato PDF.',
  pdfUrl: '/CV_Alvaro.pdf',
  personalProfile: 'Amante de la programación y del trabajo en equipo, siempre abierto a explorar nuevos lenguajes y tecnologías. Me motiva aprender y mejorar constantemente.'
} as const;

// ============ PROYECTOS ============

export const projectsContent = {
  title: 'Proyectos de GitHub',
  description: 'Sincronizados en tiempo real con mi actividad en GitHub',
  viewAll: 'VER TODO EN GITHUB',
  noDescription: 'Sin descripción disponible en el repositorio.',
  loading: 'Cargando proyectos...'
} as const;

// ============ SECCIONES ============

export const sectionTitles = {
  skills: 'Habilidades Técnicas',
  skillsSubtitle: 'Stack tecnológico y herramientas de desarrollo',
  experience: 'Experiencia Laboral',
  education: 'Historial Académico',
  learning: 'Aprendiendo',
  learningDescription: 'La tecnología no se detiene, y yo tampoco. Estas son las áreas en las que estoy profundizando mis conocimientos actualmente.'
} as const;
