# Prueba Técnica - Explicación de la Arquitectura

En esta prueba técnica, se utilizó la última versión de **Next.js v13** para resolver el reto propuesto. A continuación, se detallan las generalidades de cómo se resolvió el desafío y la arquitectura propuesta.

## Tecnologías Utilizadas

- **App Router:** Se utilizó el enrutador de aplicaciones (app router) proporcionado por Next.js para gestionar la navegación dentro de la aplicación.

- **Dynamic Next.js:** Se hizo uso de la funcionalidad "dynamic" de Next.js para mejorar la página y optimizar la carga de componentes.

- **Patrón de Diseño Contenedor y Visualizador:** Se aplicó el patrón de diseño contenedor (container) y visualizador (presentational) para separar la lógica de negocio de la visualización de los datos. El contenedor se encarga de manejar la lógica y los estados de la aplicación, mientras que los componentes visuales se enfocan en mostrar los datos y responder a las interacciones del usuario.

- **Principios SOLID:** Se aplicó el primer principio SOLID (Single Responsibility Principle), para lograr una mejor organización y modularidad del código. Cada componente y función tiene una única responsabilidad, lo que facilita su mantenimiento y reutilización.

- **React Query:** Se utilizó React Query para gestionar el estado del API en la aplicación. React Query es una biblioteca de gestión de estados que simplifica el manejo de los datos provenientes de una API. Facilita la obtención, actualización y manejo de la caché de los datos, mejorando la eficiencia y la experiencia del usuario.

- **Axios:** Se utilizó Axios como cliente HTTP para realizar las solicitudes a la API.

- **Cypress:** Se utilizó Cypress para las pruebas unitarias. Se crearon pruebas simples en la carpeta "componentes" para verificar el correcto funcionamiento de los componentes individuales.

Una buena práctica es hacer 1 commit por cada funcionalidad, utilizando commits pequeños pero frecuentes.

Esto significa que en lugar de realizar un solo commit con todos los cambios de una vez, es preferible realizar varios commits más pequeños a medida que se avanza en el desarrollo de una funcionalidad. Cada commit debería representar un cambio o una adición significativa y estar relacionado con una sola funcionalidad o tarea.
