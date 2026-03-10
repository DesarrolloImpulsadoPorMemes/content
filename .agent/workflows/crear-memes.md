---
description: Proceso automatizado para generar entradas MDX de memes con SEO optimizado y copy para redes sociales.
---

Este workflow debe activarse cada vez que el usuario suba nuevas imágenes a `public/images/content/` o solicite la creación de nuevas entradas de memes.

### 🛠 Pasos del Workflow

1.  **Identificación de Medios**: 
    - Listar el contenido de `public/images/content/`.
    - Comparar con las entradas existentes en `src/content/posts/` para identificar qué imágenes no tienen aún un archivo MDX.

2.  **Análisis Técnico y Humorístico**:
    - Usar `view_file` para analizar visualmente cada imagen identificada.
    - Extraer el contexto técnico (lenguajes, frameworks, situaciones dev) y el "punchline" del meme.

3.  **Generación de Metadatos (Frontmatter)**:
    - **title**: Crear un titular SEO potente pero divertido (ej: "El Gato de Schrödinger del Debugging").
    - **imageAlt**: Redactar una descripción técnica detallada para accesibilidad y SEO.
    - **copy**: Generar un resumen de alto impacto (máx. 300 caracteres) que incluya hashtags relevantes (#MemeDev, #Programacion, etc.).
    - **date**: Usar la fecha actual.
    - **category**: Asignar una categoría coherente (Frontend, Backend, IA, DevOps, etc.).

4.  **Redacción del Cuerpo (Body)**:
    - Escribir 2 o 3 párrafos expandiendo el chiste técnico.
    - **IMPORTANTE**: Usar exclusivamente texto plano. No usar asteriscos, negritas (`**`), cursivas o cualquier otro formato Markdown.

5.  **Ejecución y Limpieza**:
    - Crear el archivo `.mdx` en `src/content/posts/` con un slug amigable.
    - Verificar que el archivo se ha creado correctamente y que no hay placeholders.

### ⚠️ Reglas Críticas
- **No duplicar**: Si una imagen ya tiene post, no crear otro.
- **Calidad Visual**: Si la imagen tiene texto, transcribirlo en el `imageAlt`.
- **Identidad**: Mantener el tono "DesarrolloImpulsadoPorMemes" en todo momento.