<h1>Formación React con Alura Latam</h1>

En esta formación en dos de los cursos de React se procedio a construir una página web o aplicación utilizando React, JavaScript y CSS, siguiendo los pasos del instructor a cargo de los dos cursos de React (React: desarrollando con JavaScript) y (React: como los componentes funcionan).

Pasos seguidos

Con React contruimos una carpeta llamada componentes donde se crearon mas carpetas y en cada una se añadieron los documentos de JavaScript y CSS necesarios para construir el proyecto y a continuación se describe carpeta lo que se hiso en cada una:

<h2>Boton</h2>
# Descripción

- El componente Boton es un componente reutilizable de botón en React que aplica estilos personalizados a través de un archivo CSS. Este componente permite que se pasen elementos hijos (children) para mostrar el contenido dentro del botón.

<h4>Uso</h4>

 - Este componente se utiliza en la aplicación para crear botones estilizados de manera consistente. Se puede usar en cualquier parte de la aplicación pasando el contenido del botón como hijos (children).

<h2>Campo</h2>
# Descripción

- El componente Campo es un componente reutilizable en React que representa un campo de entrada de formulario. Permite la entrada de datos del usuario y puede ser configurado con diferentes propiedades como tipo, título y requisito de campo obligatorio. Además, este componente utiliza estilos personalizados definidos en un archivo CSS.

<h4>Uso</h4>

 - Este componente se utiliza para crear campos de entrada de formulario en la aplicación. Se puede configurar con diferentes tipos de campos (por ejemplo, texto, contraseña) y se puede especificar si es obligatorio o no.

<h2>Colaborador</h2>

<h4>Descripción</h4>

- El componente Colaborador representa un elemento individual de un equipo o lista de colaboradores. Este componente muestra información básica sobre un colaborador, como su nombre, puesto y foto, y también proporciona la funcionalidad para eliminar o marcar como favorito al colaborador. Además, utiliza íconos de React para proporcionar interactividad.

<h4>Uso</h4>

 - Este componente se utiliza para mostrar información de cada colaborador en la lista de colaboradores o en la página del equipo. Permite eliminar un colaborador y marcarlo como favorito.

<h2>Equipo</h2>

<h4>Descripción</h4>

- El componente Equipo representa un conjunto de colaboradores que trabajan juntos en un equipo específico. Este componente muestra el título del equipo y una lista de colaboradores que pertenecen a ese equipo. Permite personalizar el color de fondo del equipo y el color del título mediante la interacción del usuario. Además, este componente utiliza el componente Colaborador para mostrar la información de cada colaborador.

<h4>Uso</h4>

 - Este componente se utiliza para mostrar la información de un equipo específico, incluidos los colaboradores que forman parte de él. Permite personalizar el color de fondo del equipo y el color del título mediante la interacción del usuario.

<h2>Footer</h2>

<h4>Descripción</h4>

- El componente Footer representa el pie de página de la aplicación. Proporciona enlaces a perfiles sociales como GitHub y LinkedIn, junto con el logotipo de la organización y una declaración de autoría. Además, utiliza un archivo de imagen como fondo del pie de página.

<h4>Uso</h4>

 - Este componente se utiliza al final de la aplicación para mostrar información adicional, enlaces a perfiles sociales y atribución del desarrollador.

<h2>Formulario</h2>

<h4>Descripción</h4>

- El componente Formulario es una sección de la aplicación donde los usuarios pueden ingresar información para crear un nuevo colaborador o un nuevo equipo. Proporciona campos de entrada para nombre, puesto, foto y equipo del colaborador, así como también para título y color del equipo. Este componente utiliza los componentes Campo, ListaOpciones y Boton para recopilar y enviar la información del formulario.

<h4>Uso</h4>

 - Este componente se utiliza en la aplicación para recopilar información y crear nuevos colaboradores y equipos. Los usuarios pueden completar los campos requeridos y enviar el formulario para registrar la información.

<h2>Header</h2>

<h4>Descripción</h4>

- El componente Header representa la cabecera de la aplicación. Muestra el logotipo de la organización o una imagen representativa en la parte superior de la página. Este componente proporciona una identidad visual a la aplicación y puede contener elementos adicionales como un menú de navegación o enlaces importantes.

<h4>Uso</h4>

 - Este componente se utiliza al principio de la aplicación para mostrar el logotipo o una imagen representativa de la organización.

<h2>ListaOpciones</h2>

<h4>Descripción</h4>

- El componente ListaOpciones es un componente de selección en forma de lista desplegable en React. Permite a los usuarios seleccionar entre diferentes opciones de equipos disponibles. Este componente recibe una lista de equipos como prop y proporciona una forma de seleccionar un equipo específico.

<h4>Uso</h4>

 - Este componente se utiliza en el formulario para permitir a los usuarios seleccionar un equipo al que pertenecerá el nuevo colaborador.

<h2>MiOrg</h2>

<h4>Descripción</h4>

- El componente MiOrg representa una sección de la aplicación que muestra información sobre la organización del usuario. Incluye un título y un botón de agregar que permite al usuario realizar acciones relacionadas con la organización. Este componente puede tener funcionalidades adicionales que pueden ser controladas mediante el estado.

<h4>Uso</h4>

 - Este componente se utiliza en la aplicación para mostrar información sobre la organización del usuario, como el título y el botón de agregar.

<h2>Publicación del proyecto</h2>

- El proyecto se ha optimizado y preparado para su publicación en GitHub utilizando Vercel. Después de ejecutar el comando "npm run build" para optimizar el código, se generó la carpeta "build" que contiene los archivos HTML, CSS y JavaScript listos para desplegar en los navegadores. La carpeta "build" se utilizó para configurar el proyecto en Vercel. Tras vincular la cuenta de GitHub con Vercel, se establecieron los comandos de construcción y despliegue en la plataforma. Vercel se encargó de desplegar automáticamente el proyecto, proporcionando una URL única para acceder a él en internet. 

------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
