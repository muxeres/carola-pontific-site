# Carola Guerrero Luco × PONTIFIC

Portafolio creativo de doble página + laboratorio de startup PONTIFIC. Dos páginas conectadas, frontend original, responsive y sin backend obligatorio.

## Qué funciona realmente

- `index.html`: cuaderno de doble página con fotografía; cuatro proyectos **ejecutables dentro del mismo portafolio** mediante pestañas: flujo de agente, ETL de datos ilustrativos, automatización RPA simulada y gráfico SPC sintético interactivo.
- `pontific.html`: identidad, misión, visión y valores de PONTIFIC; constructor de blueprint de agente con configuración, cuatro etapas, vistas JSON/TypeScript y exportación `.ts`.
- Idiomas español, inglés y portugués en las dos páginas; GitHub público consultado mediante la API pública de GitHub y filtrado por lenguaje.
- Animaciones, estados del flujo, elementos interactivos y estilos adaptables a pantallas pequeñas.

**Transparencia:** los laboratorios de agentes, RPA, ETL y SPC utilizan datos o procesos ilustrativos en el navegador, no infraestructura de producción. El código `.ts` exportado es un *scaffold* tipado, no un agente conectado a LLM. Para conectar sistemas reales se necesita backend seguro, autenticación e integraciones. Ningún secreto de API se debe poner en el frontend.

## Tipografía y contenido

Paleta solicitada: `#FFF1A8`, `#FFD166`, `#FCA311`, `#F77F00`, `#D62828`.

La familia `Eric Machat Script` figura como primera opción CSS para títulos; **no se incluye su archivo**, porque no se aportó una licencia/archivo autorizados. Se utiliza `Caveat` desde Google Fonts como sustituto manuscrito, y Comic Sans como familia secundaria. Si cuentas con licencia, carga los archivos de la fuente en `public/fonts/` y define `@font-face` en `public/css/site.css`.

Textos basados en el CV y los documentos de perfil/propósito aportados. Los documentos personales (incluyendo histórico académico completo y puntuaciones sensibles) **no se publican** en el sitio. Se muestra solo información profesional relevante. La fotografía se incluye como `public/assets/carola.jpg`.

## Desarrollo local

Requisitos: Node.js 20+.

```bash
npm install
npm run build
npm run dev
```

Abre `http://localhost:4173` (puedes navegar a `/pontific.html`). Para revisar el código sin generar los JS: `npm run check`.

## Despliegue en Render — paso a paso

1. Descomprime el ZIP; entra en la carpeta `pontific-final`. **No subas el ZIP directamente como una web**: debes subir el contenido a un repositorio Git.
2. Crea un repositorio GitHub nuevo. Desde la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Publish PONTIFIC portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En [dashboard.render.com](https://dashboard.render.com), selecciona **New → Static Site**.
4. Conecta GitHub, selecciona el repositorio y la rama `main`.
5. Configura **Build Command**: `npm install --no-audit --no-fund && npm run build`.
6. Configura **Publish Directory**: `public`.
7. No añadas variables de entorno; el sitio no necesita ninguna. Pulsa **Create Static Site**. Render publicará una URL `https://...onrender.com`.
8. Comprueba tanto `/` como `/pontific.html`, el selector ES/EN/PT, las cuatro pestañas de proyectos y la descarga `.ts`.

El archivo `render.yaml` incluye la configuración equivalente si prefieres **New → Blueprint**.

**Personalización antes de publicar:** verifica enlaces, nombre del usuario GitHub y la información profesional; reemplaza el enlace de contacto si lo deseas. La API pública de GitHub puede imponer un límite de solicitudes o no encontrar un usuario; el frontend enseña mensajes de estado en esos casos.

## Estructura

- `public/index.html`: portafolio
- `public/pontific.html`: startup PONTIFIC
- `public/css/site.css`: diseño
- `src/main.ts`: lógica tipada de UI y demos
- `public/js/main.js`: JavaScript generado por `npm run build`
- `public/assets/`: imágenes optimizadas
- `render.yaml`: Render Static Site

No hay dependencias en tiempo de ejecución del sitio; el único paquete de desarrollo es TypeScript.
