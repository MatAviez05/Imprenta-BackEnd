# Documentación de API - Imprenta

## Información General

**Base URL:** `http://localhost:3000`

**Formato de Respuestas:** JSON

**Autenticación:** JWT (JSON Web Token)

## Autenticación

La API utiliza JWT para autenticación. El token debe incluirse en el header `Authorization` de las peticiones protegidas.

### Header de Autenticación

```
Authorization: Bearer <token>
```

## Endpoints de Clientes

### 1.A Registrar un cliente

**Endpoint:** `POST /api/clientes/auth/register`

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "empresa": "Movistar",
  "telefono": "123456789",
  "email": "juan@example.com",
  "direccion": "Jujuy 300",
  "tipoUsuario": "Cliente"
}
```
---

### 1.B Registrar un Admin

Este usuario admin nos va a servir para poder acceder a las distintas rutas.

**Endpoint:** `POST /api/clientes/auth/register`

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "empresa": "Movistar",
  "telefono": "123456789",
  "email": "juan@example.com",
  "contraseña": "12345",
  "direccion": "Jujuy 300",
  "tipoUsuario": "Admin"
}
```

---

### 2. Login

**Endpoint:** `POST /api/clientes/auht/login`

**Body:**
```json
{
  "email": "juan@example.com",
  "contraseña": "12345"
}
```

**Respuesta Exitosa (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 3. Lista de clientes

**Endpoint:** `GET /api/clientes/list-clientes`

**Headers:**
```
Authorization: Bearer <token>
```

---

### 4. Modificar un clientes

**Endpoint:** `PUT /api/clientes/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "empresa": "Movistar",
  "telefono": "123456789",
  "email": "juan@example.com",
  "direccion": "Jujuy 300",
  "tipoUsuario": "Admin | Cliente"
}
```

---

### 5. Eliminar un cliente

**Endpoint:** `DELETE /api/clientes/:id`

**Headers:**
```
Authorization: Bearer <token>
```

---

## Endpoints Pedidos

### 1. Registrar un nuevo pedido

**Endpoint:** `POST /api/pedidos`

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "id_cliente": 1,
  "tipo_trabajo": "Oficinista",
  "cantidad": 10,
  "tamaño": "Grande",
  "color": "Rojo",
  "tipo_papel": "Fino",
  "estado": "Proceso",
  "observaciones": "-",
  "estado_pago": "Pendiente"
}
```

---

### 2. Lista de pedidos

**Endpoint:** `GET /api/pedidos`

**Headers:**
```
Authorization: Bearer <token>
```

---

### 3. Lista de pedidos segun el ID del cliente

**Endpoint:** `GET /api/pedidos/mis-pedidos/:id`

**Headers:**
```
Authorization: Bearer <token>
```

---

### 4. Modificar un pedido

**Endpoint:** `PUT /api/pedidos/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "id_cliente": 1,
  "tipo_trabajo": "Oficinista",
  "cantidad": 10,
  "tamaño": "Grande",
  "color": "Rojo",
  "tipo_papel": "Fino",
  "estado": "Proceso",
  "observaciones": "-",
  "estado_pago": "Pendiente"
}
```

---

### 5. Eliminar un pedido

**Endpoint:** `DELETE /api/pedidos/:id`

**Headers:**
```
Authorization: Bearer <token>
```

## Aclaraciones: