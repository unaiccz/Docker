# Guía de Uso y Explicación de docker

## Descripción

Este proyecto es una aplicación simple de Node.js con MongoDB. Utiliza Docker para la gestión de contenedores y facilita el desarrollo y despliegue de la aplicación.

## Estructura del Proyecto

### Archivos y Directorios Principales

- **data/.mongodb/mongosh/snippets/package.json**: Archivo de configuración para los snippets de MongoDB Shell.
- **docker-compose-dev.yml**: Archivo de configuración de Docker Compose para el entorno de desarrollo.
- **docker-compose.yml**: Archivo de configuración de Docker Compose para el entorno de producción.
- **Dockerfile**: Archivo de configuración de Docker para construir la imagen de producción.
- **dockerfile.dev**: Archivo de configuración de Docker para construir la imagen de desarrollo.
- **index.js**: Archivo principal de la aplicación Node.js.
- **package.json**: Archivo de configuración de npm que incluye las dependencias y scripts del proyecto.
- **README.md**: Archivo de documentación del proyecto.

## Requisitos Previos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (opcional para desarrollo local)

## Configuración y Ejecución

### Desarrollo

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd simple-node-mongo-app
    ```

2. Construye y levanta los contenedores de Docker para desarrollo:
    ```sh
    docker-compose -f docker-compose-dev.yml up --build
    ```

3. La aplicación estará disponible en `http://localhost:3000`.

### Producción

1. Construye y levanta los contenedores de Docker para producción:
    ```sh
    docker-compose up --build
    ```

2. La aplicación estará disponible en `http://localhost:3000`.
