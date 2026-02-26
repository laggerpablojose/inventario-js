# Requisitos del Sistema

**Proyecto:** Inventario-js
**Cliente simulado:** Rietman y Cía. - Estación de Servicio YPF

## 1. Introducción
El presenta documento describe los requerimientos funcionales y no funcionales del sistema **Inventario-js**, una aplicación de consola orientada a la gestión de inventario por sector dentro de una estación de servicio.
El sistema tiene como objetivo permitir el control de stock, registro de moviemientos y generación de reportes básicos, utilizando estrcutras de datos en memoria y lógica modular.

## 2. Alcance
El sistema:
* Administrará inventario de tres sectore:
    * Playa de Líquidos.
    * Playa de GNC.
    * Tienda Full.
* Permitirá registrar productos por sector.
* Permitirá registrar entradas y salidas de stock.
* Permitirá consultas y reportes.
* Funcionará únicamente en consola.
* Utilizara estructuras de datos estáticas en memoria.

El sistema **no incluye en esta versión:**
* Persistencia de base de datos.
* Interfaz gráfica.
* Manejo de usuario o autenticacion.
* Acceso multiusuario.

## 3. Definiciones
**Sector:** Área operativa de la estación donde se administra stock.
**Producto:** Ítem almacenado con nombre, stock actual y stock mínimo.
**Movimiento:** Registro de entrada o salida de stock.
**sectorActual:** Variable que indica el sector sobre el cual se están realizando operaciones.

## 4. Requerimientos Funcionales

### RF1 – Selección de Sector
El sistema deberá permitir seleccionar uno de los siguientes sectores:
1. Playa de Líquidos
2. Playa de GNC
3. Tienda Full
El sistema deberá almacenar el sector seleccionado en sectorActual.
No se permitirá realizar operaciones dependientes de sector si sectorActual no está definido.

### RF2 - Alta de Producto
El sistema deberá permitir dar de alta un producto en el sector actual.
Datos requeridos:
* Nombre del producto
* Stock inicial
* Stock mínimo
* Precio unitario

Reglas:
* El nombre no puede estar vacío
* El stock inicial no puede ser negativo.
* El stock mínimo no puede ser negativo.
* No se permitirá duplicar un producto dentro del mismo sector.

### RF3 – Movimiento de Entrada
El sistema deberá permitir registrar una entrada de stock.
Reglas:
* El producto debe existir en el sector actual.
* La cantidad ingresada debe ser un número entero positivo.
* El stock se incrementará en la cantidad indicada.
* Se registrará el movimiento en el historial.

### RF4 – Movimiento de Salida
El sistema deberá permitir registrar una salida de stock.
Reglas:
* El producto debe existir en el sector actual.
* La cantidad debe ser un número entero positivo.
* No se permitirá que el stock resulte negativo.
* Se registrará el movimiento en el historial.

### RF5 – Consulta de Inventario por Sector
El sistema deberá listar todos los productos del sector actual mostrando:
* Nombre
* Stock actual
* Stock mínimo
* Indicador de alerta (si stock actual < stock mínimo)

### RF6 – Búsqueda Global de Producto
El sistema deberá permitir buscar un producto por nombre y mostrar:
* En qué sector(es) existe
* Stock actual por sector
La búsqueda deberá realizarse en los tres sectores.

### RF7 – Reporte de Turno
El sistema deberá generar un resumen que incluya:
* Cantidad total de movimientos registrados
* Total de entradas
* Total de salidas
* Productos con stock bajo por sector

## 5. Requerimientos No Funcionales

### RNF1 – Plataforma
El sistema deberá ejecutarse en Node.js mediante consola.

### RNF2 – Arquitectura
El sistema deberá estar dividido en módulos:
* UI
* Lógica de inventario
* Validaciones
* Reportes

RNF3 – Persistencia
En esta versión los datos existirán únicamente en memoria.

RNF4 – Validación
El sistema deberá validar todas las entradas del usuario antes de ejecutar operaciones.

RNF5 – Determinismo
Dado el mismo conjunto de entradas, el sistema deberá producir los mismos resultados.

## 6. Modelo de Datos Inicial (Nivel SAO)
Por cada sector:
* names[]
* stock[]
* minStock[]
* price[] 
* tope

Historial de movimientos:
* movSector[]
* movProducto[]
* movTipo[]
* movCantidad[]
* movTope

## 7. Supuestos
* Los productos pueden existir en más de un sector.
* El stock es independiente por sector.
* No se contempla concurrencia.
* No se contempla control por usuario.

## 8. Futuras Extensiones (Fuera de Alcance Actual)
* Persistencia en base de datos.
* Interfaz web.
* Autenticación de usuarios.
* Exportación de reportes.
* Sistema multiusuario.
* Control por turno real.