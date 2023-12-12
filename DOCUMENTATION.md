# Documentación del proyecto

Imágenes usadas -> ./assets

## HTML

## CSS

El CSS se ha dividido en diferentes partes:

- ./styles.css

  - Fuentes importadas desde Google Fonts
  - Estilos generales (variables de CSS)
  - Estilos que se apliquen a todos los elementos, así como a la etiqueta HTML

- ./src/components/nav/nav.css

  - Estilos de la barra de navegación

- ./src/components/nav/body-main.css
  - Los estilos del main dentro del body
    - Estilos del timeline de imágenes
    - Estilos del show more

- ./src/components/nav/filters.css
  - Los estilos del apartado de los filtros

- ./src/components/nav/show-more-button.css
  - Los estilos del botón para mostrar más imágenes

- ./src/components/footer
  - Los estilos del footer

## JS

- ./main.js
  - Imports específicos de cada sección, tanto CSS como JS
  - Variables principales del proyecto
  - Elementos del DOM
  - Funciones principales:
    - handleEnter
    - printImage
    - fetchImages
    - addTenMorePictures
    - showMenuMobile

- ./src/components/functions => Cada archivo .js lleva el nombre de la función que contiene
  - handle-functions: funciones que manejan eventos
  - math_functions: funciones de carácter matemático
  - prints: funciones que pintan elementos dentro del DOM
  - resets: funciones que restauran valores

## API

![Alt text](src/assets/img/image.png)
![Alt text](src/assets/img/image2.png)
