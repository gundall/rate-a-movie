# Rate-a-Movie.
Web app para buscar películas, calificarlas con un sistema basado en estrellas, y llevar un recuento de dichas calificaciones. En este [enlace](https://rate-a-movie.netlify.app) puedes ver cómo se ve Rate My Movie.

![vista ppal](https://user-images.githubusercontent.com/27724595/163631047-fc5844e1-9cd1-4692-b655-93f6344b882e.png)

## Sobre la App.
Se ha elegido una paleta de colores básica: negro y blanco. Esto es así porque, lo primero que me vino a la cabeza al pensar en el buscador fue, ni más ni menos, una claqueta de cine. Eso sí, se han mantenido las estrellas de color amarillo para romper con la monotonía de la paleta.

También se ha tenido que añadir una imagen por defecto para aquellas películas que no proporcionasen una.

Hablando de las películas, se ha usado la API proporcionada por [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction) para obtener los siguientes listados:

- lista de películas mejor valoradas.
- lista de películas basada en la búsqueda del usuario.

No hay persistencia de datos, ni siquiera a nivel local. Por tanto, cada recarga implicará tener que volver a votar. Tampoco hay implementada aún ninguna forma de eliminar las valoraciones de las películas.

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
- borrado de valoraciones.
- basar las búsquedas en el idioma del usuario.
- la posibilidad de aplicar temas a la web, y cambiar el esquema de colores.
- localización y sistema de almacenamiento de los textos de la aplicación.
- optimizacion del rendimiento de la web.
- mejoras del diseño y maquetación.
- página de bienvenida, tutorial de uso.
- y lo que de de sí la imaginación...

## Capturas.

### Móvil.
![vista ppal-movil](https://user-images.githubusercontent.com/27724595/163631165-42765fd3-36f2-4119-bdf4-6b69cb3e094a.png)
![vista menu abierto](https://user-images.githubusercontent.com/27724595/163631175-09777bfc-3708-499a-9d41-1506c0f48a79.png)
![vista modal-movil](https://user-images.githubusercontent.com/27724595/163631179-43d8c9ee-cc5e-4a22-b015-6b17b0042c95.png)
![vista no movies-movil](https://user-images.githubusercontent.com/27724595/163631184-612fd494-b8c7-4b46-b236-6e82dd03cdb0.png)
![vista votadas-movil](https://user-images.githubusercontent.com/27724595/163631187-01991b1b-1e2d-4b7c-b8d5-be38ff44fdb6.png)

### Desktop.
![vista no movies](https://user-images.githubusercontent.com/27724595/163631089-3f74a795-ce75-4a0d-9398-34d5d5cd5954.png)
![vista modal](https://user-images.githubusercontent.com/27724595/163631097-32901803-fc98-4801-9d29-4514b0b98146.png)
![vista votadas](https://user-images.githubusercontent.com/27724595/163631135-5b7a1b66-bb47-4573-bd17-efc741015fb9.png)
