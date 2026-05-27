# THE BATMAN — Sitio Web de Fan

**Proyecto educativo de portafolio** inspirado en *The Batman* (2022) de Matt Reeves.

---

## Estructura del Proyecto

```
TpProg4IA/
├── index.html          → Página de inicio (hero, datos, reparto, críticas, tráiler)
├── sobre.html          → La Película (sinopsis, personajes, detrás de cámara)
├── historia.html       → Gotham City (línea de tiempo narrativa)
├── galeria.html        → Galería con lightbox interactivo
├── premios.html        → Premios y reconocimientos con contador animado
├── riddler.html        → The Riddler (acertijos interactivos)
├── contacto.html       → Formulario temático con validación (estilo GCPD)
├── 404.html            → Página de error temática
├── css/
│   └── styles.css      → Hoja de estilos completa (tema noir/azul Gotham)
├── js/
│   └── script.js       → Lógica interactiva general
└── img/
    ├── galeria/        → Todas las imágenes del proyecto
    │   ├── BatmanLogo2.webp
    │   ├── BatmanLogo.webp
    │   ├── Batman2.webp
    │   ├── BatmanPJ(2022).webp
    │   ├── BatmanAndCatwoman.webp
    │   ├── BruceWayne2022.webp
    │   ├── GondonAndBatman.webp
    │   ├── GothamCity.webp
    │   ├── LosWayne.webp
    │   ├── DiarioGothamTimes.webp
    │   ├── MattReeves.webp
    │   ├── ThePenguin2022.webp
    │   ├── Batisenal.webp
    │   ├── robertpattinson.webp
    │   ├── zoekravitz.webp
    │   ├── pauldano.webp
    │   ├── colinfarrell.webp
    │   ├── johnturturro.webp
    │   └── jeffreywright.webp
    └── riddler/
        └── Riddler2022.webp
```

---

## Características

- 🎨 **Diseño noir** con paleta azul eléctrico inspirada en la estética de la película
- 🌧 **Lluvia animada en canvas** en la página de inicio
- 🎬 **Modal de tráiler** con YouTube embed (requiere servidor web o GitHub Pages)
- 🖼 **Lightbox interactivo** en la galería con navegación por teclado y flechas
- 🔢 **Contador animado** de premios con Intersection Observer
- ❓ **Acertijos interactivos** en la página de The Riddler (click para revelar)
- 📋 **Formulario validado** en contacto: campos obligatorios, formato de email, contador de caracteres y mensajes de error en tiempo real
- 📱 **Totalmente responsive** con menú hamburguesa y dropdown funcional en mobile
- 🔽 **Menú desplegable** en "La Película" con acceso directo a cada sección
- ♿ **Accesible**: aria-labels, roles semánticos, navegación por teclado

---

## Cómo usar

1. Cloná o descargá el proyecto
2. Abrí `index.html` en tu navegador

> **Nota:** El tráiler de YouTube solo funciona desde un servidor web. Para verlo localmente usá la extensión **Live Server** de VS Code o ejecutá `python -m http.server 8000` en la terminal y abrí `http://localhost:8000`.

---

## Tecnologías

- HTML5 semántico
- CSS3 (custom properties, animaciones, grid, flexbox, clip-path, mask)
- JavaScript vanilla (sin dependencias externas)
- Canvas API (lluvia animada)
- Google Fonts: Bebas Neue, Crimson Text, Courier Prime, Montserrat

---

## Páginas

| Página | Descripción |
|---|---|
| `index.html` | Hero con video de fondo, datos del film, reparto, críticas y tráiler |
| `sobre.html` | Sinopsis, personajes principales y detrás de cámara |
| `historia.html` | Línea de tiempo narrativa de Gotham City |
| `galeria.html` | Galería fotográfica con lightbox |
| `premios.html` | Premios y nominaciones con contador animado |
| `riddler.html` | Página temática del Acertijo con enigmas interactivos |
| `contacto.html` | Formulario de contacto con imagen y validación completa |
| `404.html` | Página de error personalizada |

---

## Aviso legal

Proyecto **educativo de portafolio**, sin fines comerciales.  
No afiliado con Warner Bros. Pictures, DC Studios ni Matt Reeves.  
*The Batman* © 2022 Warner Bros. Entertainment Inc. Todos los derechos reservados.
