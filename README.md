# CV en línea

Instalación y build 
1) Instala dependencias: `npm install`
2) Construye la salida: `npm run build`
3) Abre `dist/index.html` en el navegador

Desarrollo 
- Ejecuta `npm run build` una vez para copiar HTML y assets.
- Luego `npm run dev` para ver cambios de TS y SCSS en tiempo real.
- Visualiza siempre `dist/index.html`.

Datos del CV
- Archivo de datos: `src/info.json`
  - `profile.name`, `profile.role`, `profile.about`
  - `skills[]`, `languages[]`, `education[]`, `projects[]`
  - `contact.email`, `contact.phone`, `contact.location`, `contact.avatar`

Formulario de contacto
- El correo de destino se toma de `contact.email` en `src/info.json`.
- El script configura el action automáticamente a: `https://formsubmit.co/<tu-email>`.

Estructura de estilos (SCSS)
- Parciales en `src/styles/`:
  - `_variables.scss`, `_mixins.scss`, `_base-cv.scss`, `_estructura.scss`, `_componentes-cv.scss`
  - Entrada principal: `style.scss` (genera `dist/style.css`)

Scripts npm
- `npm run dev`: compila TypeScript y Sass.
- `npm run build`: usa el TS, compila Sass y copia HTML/JSON/imagenes a `dist/`.

