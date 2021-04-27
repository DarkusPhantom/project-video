# Aplicación de Interfaz de Análisis de vídeo

## Acerca de la App

Esta app consiste en diseñar una aplicación web para informar acerca de la calidad de un video y la cantidad de reproducciones que tuvo en ciertas partes del mundo.

En el set de datos, se encuentran las siguientes variables:
● ID del video: código identificador del video para el que se miden las observaciones
● País: país al que pertenecen las mediciones
● Rango etario: generación a la que el público pertenece (millennials, generación X o
baby boomers)
● Reproducciones: cantidad de reproducciones del video.
● Fecha: fecha en que se miden las reproducciones.

## Pasos para probar ejecutar la app

1. Clonar este repositorio.
2. Dirigirte dentro de la carpeta que clonaste y ejecuta: `npm run start` para probar el proyecto

Automáticamente se abrirá la app en tu navegador por defecto. En caso contrario, abre el navegador y escribe en la barra de búsqueda `localhost:3000`

## Explicación de los componentes:

- **index.js**: Inyecta la app en el HTML
- **App:** Raíz de la aplicación. Contiene los componentes de _MediaPlayer_ y _Stadistic_. También incluye una sección de botones para indicar cuando el usuario quiera ver o quitar las estadísticas de la tabla de video.
- **MediaPlayer:** Reproductor de video. Tiene los componentes que son Vídeo y _ControlsVideo_
- **Video:** Muestra el video a reproducir
- **ControlsVideo:** Contiene los botones para pasar al siguiente video o volver al anterior, muestra la información del video(Likes, Dislikes, Views y Nombre del video) y los botones de Like (Corazón) y dislike (Corazón roto)
- **Stadistic:** Contiene los datos de la tabla y su sección para ordenarlo por diferentes tipos
- **NavbarTable:** Contiene los botones para indicar como va ordenar la tabla de estadisticas. Sea por pais, generación o views
- **StadisticTable:** Contiene todos la información para plasmar en la tabla de estadisticas. Esta dividido por Pais, Rango Etario, Fecha y Views

