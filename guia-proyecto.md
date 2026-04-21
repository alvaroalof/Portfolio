# 📖 Guía del Proyecto - Portfolio de Álvaro Alonso Fernández

## 🎯 Descripción General
Portfolio profesional de alto rendimiento desarrollado con **React**, **TypeScript** y **Tailwind CSS**. Es un sitio web personal de una sola página (SPA) que presenta la trayectoria profesional, habilidades, educación y proyectos de Álvaro Alonso Fernández, Desarrollador Full-Stack.

**Ubicación del proyecto**: `c:\Users\A8-05m\Documents\programacion\portfolioalvaro`

---

## 🚀 Características Principales

### 1. **Diseño Moderno y Responsivo**
- Tema oscuro con acentos en cyan (`#00dbe7`)
- Diseño glassmorphism con efectos de backdrop blur
- Totalmente responsivo: móvil, tablet y escritorio
- Tipografías profesionales: Inter, Space Grotesk y JetBrains Mono

### 2. **Navegación Avanzada**
- **Header fijo** con efecto de scroll (cambia de altura y fondo)
- **Sidebar lateral** (solo en escritorio) con navegación a todas las secciones
- **Menú móvil** con animaciones de entrada/salida
- Scroll suave entre secciones

### 3. **Secciones del Portfolio**

#### 🏠 **Hero** (`Hero.tsx`)
- Sección de presentación a pantalla completa
- Título impactante con efecto de glow
- Botones de acción: Ver CV y Contactar
- Indicador de disponibilidad laboral

#### 💡 **Habilidades Técnicas** (`Skills.tsx`)
- **Habilidades principales** con barras de progreso animadas:
  - Kotlin (85%)
  - Java (80%)
  - C# (75%)
  - Python (80%)
  - PHP (70%)
- **Otras habilidades** con iconos:
  - JavaScript
  - HTML & CSS
  - Bootstrap
  - SQL (Bases de Datos)
- Indicador de idiomas: **Español nativo** | **Inglés B1**

#### 💼 **Experiencia Laboral** (`Experience.tsx`)
- Timeline vertical con dos experiencias:
  - **EUROWINDSOFTGEN S.L.** (Marzo 2025 - Junio 2025)
    - Prácticas en programación web e IA
    - Tags: WEB, IA
  - **ICSRed** (Octubre 2022 - Diciembre 2022)
    - Prácticas en Python
    - tags: PYTHON
- Animaciones de entrada escalonadas

#### 🎓 **Educación** (`Education.tsx`)
- Historial académico completo con timeline:
  - **Fedeto Formacion** (Actual) - Plan de Capacitación Joven en IA y Empleabilidad Digital
  - **Universidad Alfonso X El Sabio** (2024-2025) - CFGS Desarrollo de Aplicaciones Web
  - **IES Azarquiel** (2020-2023) - CFGS Desarrollo de Aplicaciones Multiplataforma
  - **IES Julio Verne** (2017-2020) - CFGM Sistemas Microinformáticos y Redes

#### 📚 **Aprendiendo** (`Learning.tsx`)
- Sección de aprendizaje continuo:
  - **Arquitectura de Microservicios** - Patrones escalables y colas de mensajes
  - **Inteligencia Artificial Aplicada** - Integración de LLMs y modelos predictivos
  - **Cloud Computing (AWS/Azure)** - Despliegue y servicios serverless

#### 📄 **Currículum Vitae** (`CVSection.tsx`)
- Representación visual completa del CV en formato papel
- Sidebar azul con foto, contacto e idiomas
- Secciones: perfil personal, experiencia, educación, información adicional
- Botón para descargar PDF

#### 🌟 **Proyectos de GitHub** (`Projects.tsx`)
- **Integración dinámica con API de GitHub**
- Endpoint: `https://api.github.com/users/alvaroalof/repos`
- Carga automática de repositorios públicos (máximo 6, excluye forks)
- Muestra: estrellas, forks, lenguajes, descripción
- Carrusel horizontal con scroll infinito
- Botones de navegación izquierda/derecha
- Estado de carga con spinner animado

#### 📬 **Contacto** (`Contact.tsx`)
- Tarjetas de contacto interactivas:
  - **Email**: alvaroaf221@gmail.com
  - **Teléfono**: 601 33 53 67
- Animaciones hover con elevación
- Iconos de Lucide React

#### 🔗 **Footer** (`Footer.tsx`)
- Enlaces a GitHub y LinkedIn
- Copyright 2026

---

## 🛠️ Stack Tecnológico

### Dependencias Principales
| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| React | ^19.0.0 | Framework UI |
| TypeScript | ~5.8.2 | Tipado estático |
| Vite | ^6.2.0 | Bundler y dev server |
| Tailwind CSS | ^4.1.14 | Framework de estilos |
| Motion | ^12.23.24 | Animaciones |
| Lucide React | ^0.546.0 | Iconografía |
| @google/genai | ^1.29.0 | API de Gemini (configurada) |
| Express | ^4.21.2 | Backend (disponible) |
| dotenv | ^17.2.3 | Variables de entorno |

### Scripts Disponibles
```bash
npm run dev       # Inicia servidor de desarrollo en puerto 3000
npm run build     # Construye para producción
npm run preview   # Previsualiza build de producción
npm run clean     # Elimina carpeta dist
npm run lint      # Verificación de tipos TypeScript (tsc --noEmit)
```

---

## 📂 Estructura del Proyecto

```
portfolioalvaro/
├── .env.example              # Variables de entorno de ejemplo
├── .gitignore                # Archivos ignorados por Git
├── index.html                # HTML principal
├── metadata.json             # Metadatos del proyecto
├── package.json              # Dependencias y scripts
├── README.md                 # Documentación principal
├── tsconfig.json             # Configuración de TypeScript
├── vite.config.ts            # Configuración de Vite
├── guia-proyecto.md          # ESTA GUÍA (documentación completa)
└── src/
    ├── main.tsx              # Punto de entrada de la aplicación
    ├── App.tsx               # Componente principal
    ├── index.css             # Estilos globales y tema
    └── components/
        ├── Header.tsx        # Barra de navegación superior
        ├── Sidebar.tsx       # Menú lateral (desktop)
        ├── Hero.tsx          # Sección de presentación
        ├── Skills.tsx        # Habilidades técnicas
        ├── Experience.tsx    # Experiencia laboral
        ├── Education.tsx     # Historial académico
        ├── Learning.tsx      # Sección de aprendizaje
        ├── CVSection.tsx     # Currículum visual
        ├── Projects.tsx      # Proyectos de GitHub
        ├── Contact.tsx       # Sección de contacto
        └── Footer.tsx        # Pie de página
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores (definida en `index.css`)
| Token | Valor | Uso |
|-------|-------|-----|
| Background | `#0a0a0c` | Fondo principal |
| Surface | `#111113` | Superficies |
| Surface Low | `#131315` | Superficies secundarias |
| Surface High | `#1c1c1e` | Superficies elevadas |
| Surface Highest | `#242426` | Superficies más elevadas |
| Primary Container | `#00dbe7` | **Color de acento cyan brillante** |
| On Primary Container | `#00363a` | Texto sobre primary container |
| On Surface | `#e1e2e5` | Texto principal |
| On Surface Variant | `#b9bacb` | Texto secundario |
| Outline Variant | `#2a2a2c` | Bordes |

### Clases Personalizadas
- **`.glass`**: Efecto glassmorphism con backdrop blur
  ```css
  @apply bg-surface/70 backdrop-blur-md border border-outline-variant/30;
  ```

- **`.glow-primary`**: Sombra brillante cyan
  ```css
  box-shadow: 0 0 20px rgba(0, 219, 231, 0.15);
  ```

- **`.text-glow`**: Texto con resplandor
  ```css
  text-shadow: 0 0 10px rgba(0, 219, 231, 0.3);
  ```

- **`.scrollbar-hide`**: Oculta barras de scroll

- **`.project-card`**: Tarjeta de proyecto responsiva
  - Mobile: 100% ancho
  - Tablet: 50% ancho
  - Desktop: 33% ancho

### Tipografías
| Familia | Uso |
|---------|-----|
| **Space Grotesk** | Headlines y títulos |
| **Inter** | Texto body y UI |
| **JetBrains Mono** | Código y elementos técnicos |

### Animaciones (Motion)
- **Entrada**: `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- **Hover**: `whileHover={{ scale: 1.05 }}` o `whileHover={{ y: -5 }}`
- **Click**: `whileTap={{ scale: 0.95 }}`
- **Viewport**: `viewport={{ once: true }}` (animación una sola vez)

---

## 🔌 Integraciones Externas

### API de GitHub
| Detalle | Valor |
|---------|-------|
| **Endpoint** | `https://api.github.com/users/alvaroalof/repos` |
| **Parámetros** | `sort=updated&per_page=10` |
| **Filtros** | Excluye forks, muestra máximo 6 repos |
| **Datos obtenidos** | nombre, descripción, estrellas, forks, lenguaje, topics |
| **Orden** | Por última actualización |
| **Usuario** | `alvaroalof` |

### API de Google Gemini
| Detalle | Valor |
|---------|-------|
| **Variable** | `GEMINI_API_KEY` |
| **Configuración** | Inyectada mediante Vite en `vite.config.ts` |
| **Archivo** | `.env.example` disponible |

---

## 🌐 Despliegue

### Desarrollo Local
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```
Acceder a: `http://localhost:3000`

### Producción
```bash
# Construir para producción
npm run build

# Previsualizar build
npm run preview
```
Los archivos se generan en `/dist`

### Configuración de Vite
- **Puerto**: 3000
- **Host**: 0.0.0.0 (accesible desde red)
- **Alias**: `@/*` → raíz del proyecto
- **HMR**: Controlado por variable `DISABLE_HMR`
- **Plugin React**: @vitejs/plugin-react
- **Plugin Tailwind**: @tailwindcss/vite

---

## 👤 Información de Contacto

| Canal | Enlace/Valor |
|-------|--------------|
| **Email** | alvaroaf221@gmail.com |
| **Teléfono** | 601 33 53 67 |
| **GitHub** | https://github.com/alvaroalof/ |
| **LinkedIn** | https://www.linkedin.com/in/%C3%A1lvaro-alonso-fern%C3%A1ndez-4a304a283/ |
| **Dirección** | C/ Costanilla de San Lazaro 4, 3D |

---

## 📝 Notas Adicionales

- El proyecto está configurado para **desarrollo sin HMR** en ciertos entornos (variable `DISABLE_HMR`)
- Usa **alias de rutas** con `@/*` apuntando a la raíz
- Compatible con **módulos ES** (`"type": "module"`)
- Certificado de discapacidad del 33% mencionado en el portfolio (sin impacto laboral)
- **Idioma del portfolio**: Español
- **Disponibilidad**: Abierto a oportunidades laborales

---

## 🔧 Configuración de TypeScript

| Opción | Valor |
|--------|-------|
| target | ES2022 |
| module | ESNext |
| jsx | react-jsx |
| moduleResolution | bundler |
| noEmit | true |
| allowImportingTsExtensions | true |
| experimentalDecorators | true |

---

**Desarrollado con ❤️ por Álvaro Alonso Fernández**  
**Última actualización**: Abril 2026
