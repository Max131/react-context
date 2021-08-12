# Uso e implementación de useContext en React JS

Referencias:

- [Context Api Vídeo](https://www.youtube.com/watch?v=b2psfRzk-r8)
- [Context Api Repo](https://github.com/luismcabrera/Context-API)
- [Guía simple](https://github.com/Max131/notes/issues/20)

Con useContext podemos definir un "proveedor" de información para nuestra aplicación de React. Este proveedor tiene la función de poder hacer accesible cualquier dato, estado o función que deseemos (y que estén de definidos en el "provider"), a todos aquellos componentes de nuestra aplicación que se encuentren dentro de un componente contenedor del "context". Al hacer esto, no importa si los componentes son hijos, hermanos o nietos entre ellos, haciendo así la tarea más sencilla de compartir información y métodos sin tener que heredarlos de un componente a otro.
