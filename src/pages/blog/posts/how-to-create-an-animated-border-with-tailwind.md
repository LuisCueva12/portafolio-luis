---
layout: /src/layouts/MarkdownPostLayout.astro
title: Crea un Borde Animado con Tailwind CSS
author: Fernando López
description: "Añade un toque dinámico a tus diseños con un borde animado en Tailwind CSS. Aprende a usar conic-gradient y animaciones para lograr un efecto visual impresionante. 🚀✨"
image:
  url: "/images/posts/animated-borders-tailwind.webp"
  alt: "Ejemplo de bordes animados con Tailwind CSS en un diseño oscuro, con un fondo de gradiente de colores vibrantes."
pubDate: 2025-03-27
tags:
  [
    "CSS", "Tailwind", "Animación", "Frontend", "UI"
  ]
languages: ["tailwind", "html"]
---

La propiedad `border` en CSS no puede animarse de forma nativa. Sin embargo, podemos simular este efecto usando un `div` con un fondo animado y colocando el contenido dentro de un elemento hijo con `padding`, que actuará como el "grosor" del borde.

## Tipos de Gradientes en CSS

Para lograr nuestro efecto de borde animado, necesitamos conocer los diferentes tipos de gradientes en CSS:

- **Gradiente Lineal:** Gradiente que sigue una dirección específica.
  - [Documentación](https://developer.mozilla.org/es/docs/Web/CSS/gradient/linear-gradient)
- **Gradiente Radial:** Gradiente que se expande desde un punto central.
  - [Documentación](https://developer.mozilla.org/es/docs/Web/CSS/gradient/radial-gradient)
- **Gradiente Cónico:** Gradiente que gira alrededor de un punto central, creando un efecto de "rueda".
  - [Documentación](https://developer.mozilla.org/es/docs/Web/CSS/gradient/conic-gradient)

Para nuestro borde animado, usaremos **gradiente cónico**, ya que nos permite crear un efecto de giro.

## Implementación del Borde Animado

```html
<div class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black rounded-2xl p-px">
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold">
      Fondo del contenedor padre
    </p>
  </div>
</div>