# 🦇 THE BATMAN — Sitio Web de Fan

**Proyecto educativo de portafolio** inspirado en *The Batman* (2022) de Matt Reeves.

---

## Estructura del Proyecto

```
BatmanWeb/
├── index.html          → Página de inicio (hero, reviews, reparto)
├── sobre.html          → La Película (sinopsis, personajes, producción)
├── historia.html       → Gotham City (línea de tiempo narrativa)
├── galeria.html        → Galería con lightbox interactivo
├── premios.html        → Premios y reconocimientos con contador animado
├── riddler.html        → The Riddler (acertijos interactivos)
├── contacto.html       → Formulario temático estilo GCPD
├── 404.html            → Página de error temática
├── css/
│   └── styles.css      → Hoja de estilos completa (noir/oscuro)
├── js/
│   └── script.js       → Lógica interactiva general
└── img/
    ├── galeria/        → Imágenes para la galería (Foto1.jpg … Foto12.jpg)
    ├── audio/          → Audio opcional (musica.mp3)
    ├── Gotham.mp4      → Video de fondo para el hero
    ├── BatmanPoster.jpg
    ├── Pattinson.jpg
    ├── Kravitz.jpg
    ├── Dano.jpg
    ├── Farrell.jpg
    ├── Turturro.jpg
    ├── Wright.jpg
    ├── Icono.webp
    ├── DC.png
    ├── Warner.png
    ├── Dolby.png
    ├── imax.png
    └── rated-pg13.png
```

---

## Imágenes necesarias

Las imágenes **no están incluidas** en este proyecto (derechos de autor). Necesitás agregar:

| Archivo | Descripción |
|---|---|
| `img/Gotham.mp4` | Video de fondo del hero (lluvia, ciudad) |
| `img/BatmanPoster.jpg` | Afiche o imagen principal |
| `img/Pattinson.jpg` | Robert Pattinson como Batman |
| `img/Kravitz.jpg` | Zoë Kravitz como Catwoman |
| `img/Dano.jpg` | Paul Dano como The Riddler |
| `img/Farrell.jpg` | Colin Farrell como The Penguin |
| `img/Turturro.jpg` | John Turturro como Falcone |
| `img/Wright.jpg` | Jeffrey Wright como Gordon |
| `img/galeria/Foto1.jpg … Foto12.jpg` | Capturas/stills de la película |
| `img/DC.png` | Logo DC Studios |
| `img/Warner.png` | Logo Warner Bros. |
| `img/Dolby.png` | Logo Dolby Atmos |
| `img/imax.png` | Logo IMAX |
| `img/rated-pg13.png` | Clasificación PG-13 |
| `img/oscar.webp` | Ícono de trofeo (galardón) |
| `img/Icono.webp` | Favicon del sitio |

> **Tip:** Todos los `<img>` tienen atributo `onerror` que carga una imagen de placeholder de Unsplash si el archivo local no existe. El sitio funciona sin imágenes.

---

## Características

- 🎨 **Diseño noir oscuro** inspirado en la estética de la película
- 🌧 **Lluvia animada en canvas** en todas las páginas
- ⏱ **Contador en tiempo real** desde el estreno (4 de marzo de 2022)
- 🎬 **Modal de tráiler** con YouTube embed
- 🖼 **Lightbox interactivo** en la galería con navegación por teclado
- 🔢 **Contador animado** de premios (Intersection Observer)
- ❓ **Acertijos interactivos** en la página de The Riddler
- 📱 **Totalmente responsive** con menú hamburguesa
- ♿ **Accesible**: aria-labels, roles, navegación por teclado

---

## Cómo usar

1. Cloná o descargá el proyecto
2. Agregá tus propias imágenes en la carpeta `img/`
3. Abrí `index.html` en tu navegador (no requiere servidor)

---

## Tecnologías

- HTML5 semántico
- CSS3 (variables, animaciones, grid, flexbox, clip-path)
- JavaScript vanilla (sin dependencias externas)
- Google Fonts: Bebas Neue, Crimson Text, Courier Prime, Montserrat

---

## Aviso legal

Proyecto **educativo de portafolio**, sin fines comerciales.  
No afiliado con Warner Bros. Pictures, DC Studios ni Matt Reeves.  
*The Batman* © 2022 Warner Bros. Entertainment Inc. Todos los derechos reservados.
