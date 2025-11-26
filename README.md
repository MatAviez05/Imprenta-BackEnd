# Imprenta - BackEnd

## Tabla de contenidos
- [Informacion del Proyecto](#informacion-del-proyecto)
- [Objetivo del proyecto](#objetivos)
- [Diagrama de flujo](#diagrama-de-flujo)
- [Diagrama de entidad-relacion](#diagrama-de-entidad-relacion)
- [Cronograma de tareas en JIRA](#cronograma-de-tareas-en-jira)
- [Tecnologias a utilizadas](#tecnologias-a-utilizar)
- [Software necesario para el proyecto](#software-necesario-para-el-proyecto)
- [Configurar Base de Datos MongoDB](#configurar-base-de-datos-mongodb)
- [Construccion e inicializacion del proyecto del proyecto](#construccion-e-inicializacion-del-proyecto-del-proyecto)
- [Integrantes del grupo de proyecto](#integrantes-del-proyecto)

## Informacion Del Proyecto

El proyecto consiste en el desarrollo de un Programa de Gestión de datos y facturación para
una imprenta, orientado a optimizar y centralizar los procesos administrativos y operativos de
la empresa. El sistema busca ofrecer una herramienta intuitiva y eficiente que permita
administrar clientes, pedidos, reportes y facturación automatizada.

La aplicación está gestionada en cuatro módulos principales: Gestión de clientes, Gestión de
pedidos, Reportes y Facturación, de esta manera optimizando el ciclo de operaciones de la
imprenta. Con esto se podría simplificar el flujo de trabajo y agilizar la generación de
documentos a la AFIP, así como generar reportes mensuales claros y actualizados.

## Objetivos:

1. Implementar un módulo de Gestión de Clientes que permita el alta, consulta,
modificación, eliminación y filtrado de clientes.

2. Desarrollar un módulo de Gestión de Pedidos que posibilite la creación de pedidos
asociados a clientes existentes o nuevos, con opciones de filtrado por nombre, estado
y estado de pago, además de permitir su modificación y eliminación.

3. Incorporar un módulo de Reportes que genere estadísticas de trabajos según su
estado, así como reportes de ingresos mensuales y anuales.

4. Integrar un módulo de Facturación automatizado, conectado con la AFIP, para la
generación directa de facturas desde el sistema.

5. Mejorar la eficiencia en la administración de la imprenta mediante un software de uso
sencillo, con interfaz clara y procesos optimizados.

## Diagrama de flujo:

En el siguiente enlace se puede acceder a el diagrama de flujo de la aplicación en el cual
están graficadas todas las funcionalidades del programa (Abrir con: draw.io):

https://drive.google.com/file/d/1_lbu4Pmp9Hrnmg77LiZAOCDALmjubfxu/view?usp=sharing

## Diagrama de entidad-relacion:

En el siguiente enlace se puede acceder a el diagrama de entidad-relacion de la aplicación (Abrir con: draw.io):

https://drive.google.com/file/d/1QVFK_N8JGtAWdvVuAURdi3TFIro7Lfsq/view?usp=sharing

## Cronograma de tareas en JIRA:
https://ramirogabeiras1998.atlassian.net/jira/software/projects/KAN/list?jql=project+%3D+%22KAN%22+ORDER+BY+created+DESC&atlOrigin=eyJpIjoiNDY1N2QyY2IzYTZkNGIwMmI4OGZkNGFlYmVhMmQzNmYiLCJwIjoiaiJ9

## Tecnologias a utilizar:

### Backend - API:
- Typescript
- Node Js
- Express + Mongoose

### Bibliotecas: 
- Zod 
- Express

### Base de datos: 
- MongoDB

### Repositorios: 
- Github

## Software necesario para el proyecto:

- **Node.js**: Versión 18 o superior
  - Descargar desde: https://nodejs.org/

- **MongoDB**: Versión 6.0 o superior (Leer el siguiente paso!)
  - Descargar desde: https://www.mongodb.com/try/download/community
  - O usar MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

- **Git**: Para clonar el repositorio (opcional)
  - Descargar desde: https://git-scm.com/

## Configurar Base de Datos MongoDB

**POR DEFECTO:** El proyecto ya viene configurado con MongoDB Atlas (Cloud). No necesitas hacer nada.

#### Opción Alternativa: MongoDB Local

Si prefieres usar MongoDB local en lugar de Atlas:

1. Instalar MongoDB desde https://www.mongodb.com/try/download/community

2. Iniciar el servicio de MongoDB:

**Windows:**
```bash
net start MongoDB
```

**Linux/Mac:**
```bash
sudo systemctl start mongod
```

3. Actualizar el archivo `.env` del backend:
```env
URL_DATABASE=mongodb://localhost:27017/barberia
```
## Construccion e inicializacion del proyecto del proyecto:

1. Clonar el repositorio
```bash
git clone <URL_REPOSITORIO>
```

2. Entrar a la carpeta del backend
```bash
cd backend
```

3. Usar el archivo `.env.example` para agregar las variables de entorno y luego renombrar al archivo a `.env` 

4. Instalar dependecias
```bash
npm i
```

5. construir (carpeta dist)
```bash
npm run build
```

6. levantar la API
```bash
npm run dev
```

## Integrantes del Proyecto:

- Mateo Avila Baez
- Ramiro Gabeiras
- Juan Braun
- Lautaro Carrio