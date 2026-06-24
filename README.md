# 🚌 Terminal Central de Transporte - Logic Solutions

Este repositorio contiene la **Actividad 3 – Proyecto Integrador**, desarrollado por el equipo de **Logic Solutions**. Consiste en un portal web centralizado que unifica distintos medios de transporte y facilita la consulta de recorridos a lo largo de Argentina, integrando los proyectos individuales de cada uno de los 5 miembros del equipo.

## 🚀 Objetivo del Proyecto

Desarrollar un centro de transporte interactivo y responsivo que actúe como "Hub" principal (Stitch). La plataforma respeta un **Design System** unificado y permite a los usuarios:
* Simular la búsqueda de viajes por origen, destino y fecha.
* Acceder a información sobre servicios y accesibilidad de la terminal.
* Ser redirigidos de manera fluida a los micro-sitios de transporte específicos desarrollados por cada integrante (ej. Líneas de la Costa Atlántica, rutas de la Patagonia, etc.).

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido pura y exclusivamente con tecnologías nativas del lado del cliente, sin dependencias externas:
* **HTML5:** Estructura semántica y accesible.
* **CSS3:** Diseño responsivo utilizando Flexbox y CSS Grid. Implementación de variables nativas (`:root`) para mantener la coherencia del Design System.
* **JavaScript (Vanilla JS):** Lógica de interacción del DOM, simulador del buscador de viajes y manejo de eventos.

## 📁 Estructura del Proyecto

```text
/proyecto-integrador
│── index.html                 # Página principal (Terminal / Logic Solutions)
│── /css
│   └── styles.css             # Hoja de estilos global del Design System
│── /js
│   └── app.js                 # Lógica del buscador y alertas
└── /transportes               # Directorio con los sitios de la Actividad 2
    │── costa.html             # Ruta: Costa Atlántica
    │── sur.html               # Ruta: Patagonia
    │── noroeste.html          # Ruta: Noroeste
    │── centro.html            # Ruta: Centro
    └── cuyo.html              # Ruta: Cuyo
