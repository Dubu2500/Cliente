# Aplicación CV en línea


Instalación
1) Instala dependencias: `npm install`
2) Compila todo: `npm run build`
3) Abre `dist/index.html` en el navegador

Desarrollo (watch)
- `npm run dev`
  - Compila TypeScript y Sass en modo watch
  - Copia HTML y assets cuando ejecutes `npm run build` (o vuelve a correr si cambias archivos estáticos)

Estructura
- `src/` código fuente (HTML, SCSS parciales, TS, JSON)
- `dist/` salida final (HTML, CSS, JS, JSON, imágenes)

Cambiar datos del CV
- Edita `src/data.json`
  - `profile.name`, `profile.role`, `profile.about`
  - `skills[]`, `projects[]`
  - `contact.email`, `contact.phone`, `contact.location`, `contact.avatar`
- Guarda y ejecuta `npm run build`; abre `dist/index.html`

Formulario de contacto
- El email de destino se define en `src/data.json` en `contact.email`
- El script asigna la acción del formulario a FormSubmit automáticamente:
  - `https://formsubmit.co/<tu-email>`

Sass
- Parciales en `src/styles/` (`_base.scss`, `_layout.scss`, `_components.scss`, `_variables.scss`, `_mixins.scss`)
- Variables en `_variables.scss`
- Media queries en `_base.scss` y `_layout.scss`
- Mixins y funciones en `_mixins.scss` (`container`, `rem()`)
- Uso de `@extend` en `_components.scss` para botones

Scripts npm
- `npm run dev`: TS y Sass en watch
- `npm run build`: transpila TS, compila Sass, copia HTML y assets a `dist/`

