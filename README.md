# Proyecto Final: Ecommerce Kawaii Store


## Instalación

Para poder correr el proyecto necesitas realizar los siguientes pasos:
 - Descarga el proyecto y ábrelo en vsCode.
 - Ejecuta el comando ```npm install ``` (para instalar dependencias necesarias para el proyecto).
 - Ejecuta el comando ```npm run start ``` (para levantar el proyecto).

## Descripción
Proyecto FrontEnd realizado con React y Firebase para terminar el curso de React en CoderHouse. Para el desarrollo se utilizaron las siguientes librerías:
 -  react-bootstrap: Libreria de componentes y estilos basados en Bootstrap para estilizar la aplicación.
 -   react-icons: Libreria que ofrece distintos iconos que fueron usados en la aplicacion.
 -   Firebase: 	Es una plataforma de desarrollo de aplicaciones móviles y web que proporciona una variedad de servicios en la nube. La libreria proporciona los metodos y funciones para poder interactuar con la Base de datos Firestore utilizada en este proyecto.
 -   react-router-dom: Es una librería que te permite manejar el enrutamiento en aplicaciones de React.
# Funcionalidades de la aplicacion
 - Navbar con categorias desplegables: Puede seleccionar una categoría y mostrara solo los productos pertenecientes a la misma.
 - Buscador de producto: En el navbar se proporciona un buscador de producto el cual entregara los productos que incluyan la cadena de caracteres ingresada en el nombre o en la descripción.
 - Widget Carrito: El widget del carro de compras actualiza en tiempo real la cantidad de productos agregados y, si se pincha sobre el lleva a la vista de carro de compras.
 - Buscador de productos: Busca los productos que coincidan en el nombre o en la descripción con la cadena de caracteres ingresada.
 - Vista detalle: Proporciona una vista de detalle del producto seleccionado detallando su descripción, su valor unitario y permitiendo agregar al carro la cantidad deseada, si se presiona agregar al carrito se habilita el boton de terminar compra el cual cargara la vista carrito.
 - Vista Carrito: se puede acceder a ella pinchando el widget de carrito de compras o el boton terminar compra en la vista detalle del producto. Se proporciona el listado de productos agregados con su cantidad, precio unitario, subtotal y se tiene el icono de tarro de basura para eliminar cualquiera de ellos. Tambien muestra el total de la compra, proporciona un boton para limpiar el carro por completo y un boton de checkout que llevara a finalizar la compra.
 - Limpiar carro: Si se presiona este boton se limpia el carro de compras eliminando de la vista el detalle de lo que se tenia e indicando que no hay productos en el carro. Tambien se habilitara un boton para volver a los productos.
 - Checkout: Este boton carga un formulario que pedirá algunos datos del cliente para poder realizar la generación de la orden de compra. Solo se pasara a la vista del formulario si se tiene productos en el carro. Los campos están validados y no se generara orden alguna si estos campos están incorrectos.

