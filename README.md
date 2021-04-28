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
2. Dirigirte dentro de la carpeta que clonaste y ejecuta:
3. `npm install` para instalar las dependencias del proyecto
4. `npm run start` para probar el proyecto
5. Automáticamente se abrirá la app en tu navegador por defecto. En caso contrario, abre el navegador y escribe en la barra de búsqueda `localhost:3000`

## Explicación de los componentes:

- **index.js**: Inyecta la app en el HTML
- **App:** Raíz de la aplicación. Contiene los componentes de _MediaPlayer_ y _Stadistic_. También incluye una sección de botones para indicar cuando el usuario quiera ver o quitar las estadísticas de la tabla de video.
- **MediaPlayer:** Reproductor de video. Tiene los componentes que son Vídeo y _ControlsVideo_
- **Video:** Muestra el video a reproducir
- **ControlsVideo:** Contiene los botones para pasar al siguiente video o volver al anterior, muestra la información del video(Likes, Dislikes, Views y Nombre del video) y los botones de Like (Corazón) y dislike (Corazón roto)
- **Stadistic:** Contiene los datos de la tabla y su sección para ordenarlo por diferentes tipos
- **StadisticTable:** Contiene todos la información para plasmar en la tabla de estadisticas. Esta dividido por Pais, Rango Etario, Fecha y Views

## Explicacion de funcion de cada carpeta dentro de src

- **Components**: Contiene los componentes de la app
- **Data**: Contiene la base de datos (de prueba) para la app
- **Video**: Contiene los videos de la app
- Dentro de la carpeta _Componentes_ existe una carpeta llamada css. Ahi se encuentran los estilos de la app

## Probar la base de datos

La base de datos se encuentra en Data.
Los archivos .json son la base de datos ~~(Lo se, hubiera sido genial haber trabajado con una base de datos real)~~.

El archivo:

- **csvjson.json** contiene los datos del csv que me mandaron pero en formato json.
- **DataTable.json** contiene los datos del archivo que me mandaron pero solo 47 elementos como ejemplos.
- **VideoData** contiene los datos de los videos. Use varios valores como ejemplo
