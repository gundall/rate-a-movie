# Rate-a-Movie.
Web app para buscar películas, calificarlas con un sistema basado en estrellas, y llevar un recuento de dichas calificaciones. En este [enlace](https://rate-a-movie.netlify.app) puedes ver cómo se ve Rate My Movie.

## Sobre la App.
Se ha elegido una paleta de colores básica: negro y blanco. Esto es así porque, lo primero que me vino a la cabeza al pensar en el buscador fue, ni más ni menos, una claqueta de cine.

Se han mantenido las estrellas de color amarillo para romper con la monotonía de la paleta.

También se ha tenido que añadir una imagen por defecto para aquellas películas que no proporcionasen una.

Hablando de las películas, se ha usado la API proporcionada por [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) para obtener los siguientes listados:

- lista de películas mejor valoradas.
- lista de películas basada en la búsqueda del usuario.

## Sobre el desarrollo de la App.
En el aspecto técnico, esta app está basada en React JS, y se ha creado mediante la utilidad "create-react-app".

### Librerías adicionales.
El desarrollo de la app también se ha apoyado en las siguientes librerías:

- _react-redux_: para la gestión del estado global de la aplicación.
- _redux-thunk_: utilidad de redux que proporciona herramientas para la actualización asíncrona del estado global de la aplicación.
- _react-router_: para la gestión de la navegación y enrutamiento dentro de la app.
- _styled-components_: proporciona herramientas para poder crear componentes de React enriquecidos con CSS.
- _GSAP_: librería para la creación de animaciones.
- _prop-types_ para la gestión de las props recibidas por los componentes.
- todas las demás librerías.

## To do.
Tras la entrega, se quedan cosas en el tintero, como:
- persistencia de los datos, tanto a nivel local como remoto. Un ejemplo es el que se puede ver [aquí](https://dev.to/link2twenty/react-redux-and-localstorage-2lih).
- basar las búsquedas en el idioma del usuario.
- la posibilidad de aplicar temas a la web, y cambiar el esquema de colores.
- localización y sistema de almacenamiento de los textos de la aplicación.
- optimizacion del rendimiento de la web.
- mejoras del diseño y maquetación.
- página de bienvenida, tutorial de uso.
- y lo que de de sí la imaginación...