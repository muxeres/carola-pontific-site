# Portafolio + Startup PONTIFIC (Render Static Site)

Este paquete contiene:
- `index.html`: Portafolio principal con tu foto (`assets/foto-carola.png`), experiencia, selector de idioma (`ES` / `EN` / `PT`) y cargador en vivo de repositorios de GitHub con filtro por lenguaje.
- `pontific.html`: Segunda página dedicada a la startup **PONTIFIC** (Misión y Visión alineadas con tu mapa y perfil + Constructor Interactivo de Agentes AI en Español, Inglés y Portugués).
- `styles.css`: Estilo dinámico en tonos naranja y amarillo con tipografía blanca tipo Comic Sans.
- `src/*.ts` y `dist/*.js`: Módulos TypeScript y JavaScript compilado para interactividad, i18n, motor de GitHub y generador de agentes AI.

## Paso a paso para subir y publicar en Render

1. **Prepara tu foto y código**:
   - Reemplaza `assets/foto-carola.png` por tu fotografía real (manteniendo el nombre `foto-carola.png` o actualizando el `src` en `index.html` y `pontific.html`).
2. **Sube la carpeta a GitHub**:
   - Crea un repositorio nuevo en GitHub (por ejemplo `portafolio-pontific`).
   - Sube todos los archivos y carpetas (`index.html`, `pontific.html`, `styles.css`, `assets/`, `src/`, `dist/`, `tsconfig.json`) a la rama `main`.
3. **Crea el Static Site en Render**:
   - Entra a [Render](https://render.com) e inicia sesión.
   - Haz clic en **New +** -> **Static Site**.
   - Conecta tu cuenta de GitHub y selecciona el repositorio `portafolio-pontific`.
4. **Configura el despliegue en Render**:
   - **Name**: `carola-pontific-portfolio`
   - **Branch**: `main`
   - **Build Command**: `npx tsc || echo "Using prebuilt dist/"` (o déjalo en `echo "Ready"` ya que `dist/` ya viene listo).
   - **Publish Directory**: `.` (punto, para publicar desde la raíz donde están `index.html` y `pontific.html`).
5. **Publica y verifica**:
   - Haz clic en **Create Static Site**.
   - Una vez que el estado pase a **Live**, abre tu URL de Render y prueba tanto la página principal como `/pontific.html`, el cambio de idioma (`ES` / `EN` / `PT`), el filtro de GitHub y el Constructor de Agentes AI.
