# Requisitos del Sistema

**Proyecto:** Inventario-js
**Cliente:** Rietman y Cía. – Estación de Servicio YPF

## 1. Introducción

Este documento define los requisitos del sistema **Inventario-js**, una aplicación de consola destinada a gestionar el inventario operativo de una estación de servicio.

El propósito de este documento es establecer claramente **qué debe hacer el sistema**, separando los requisitos funcionales de las decisiones de implementación.

## 2. Objetivo

Desarrollar un sistema de inventario por consola que permita:

* Administrar productos por sector.
* Registrar movimientos de entrada y salida.
* Consultar stock actual.
* Detectar productos con stock bajo.
* Generar un reporte de turno con métricas operativas.

## 3. Alcance

El sistema deberá:

* Administrar inventario en tres sectores:

  * Playa de Líquidos
  * Playa de GNC
  * Tienda Full
* Permitir seleccionar un sector activo.
* Registrar productos por sector.
* Registrar movimientos de entrada y salida.
* Consultar inventario por sector.
* Realizar búsqueda global de productos.
* Generar reporte de turno.
* Operar exclusivamente en consola.
* Almacenar datos únicamente en memoria.

## 4. Fuera de Alcance

En esta versión el sistema no incluye:

* Persistencia en base de datos.
* Interfaz gráfica.
* Sistema multiusuario.
* Autenticación de usuarios.
* Integraciones externas.
* Exportación de reportes.

## 5. Glosario

**Sector:** Área operativa donde se administra stock.
**Producto:** Ítem con nombre, stock actual y stock mínimo.
**Movimiento:** Registro de entrada o salida de unidades de un producto.
**Sector actual:** Sector seleccionado sobre el cual se realizan operaciones.
**Stock mínimo:** Umbral a partir del cual un producto se considera en alerta.

## 6. Requisitos Funcionales (RF)

### RF1 – Selección de Sector

**Descripción:**
El sistema debe permitir seleccionar uno de los tres sectores operativos.

**Reglas / Validaciones:**

* Solo se aceptan valores 1, 2 o 3.
* No se puede operar en funciones dependientes de sector sin haber seleccionado uno.

**Criterios de aceptación:**

* Entrada válida → Se muestra confirmación del sector seleccionado.
* Entrada inválida → Se muestra “Opción inválida” y se solicita nuevamente.
* No debe finalizar el programa ante error.

### RF2 – Alta de Producto

**Descripción:**
Permitir registrar un producto en el sector actual.

**Reglas / Validaciones:**

* Nombre obligatorio y no vacío.
* Stock inicial ≥ 0.
* Stock mínimo ≥ 0.
* No permitir duplicados dentro del mismo sector.

**Criterios de aceptación:**

* Alta exitosa → Mensaje de confirmación en consola.
* Producto duplicado → Mensaje “Producto ya existente”.
* Datos inválidos → Mensaje específico y reingreso.
* No debe producir error de ejecución.

### RF3 – Movimiento de Entrada

**Descripción:**
Permitir aumentar el stock de un producto existente.

**Reglas / Validaciones:**

* El producto debe existir en el sector actual.
* La cantidad debe ser un entero positivo.

**Criterios de aceptación:**

* Movimiento válido → Stock actualizado y mensaje de confirmación.
* Producto inexistente → Mensaje claro de error.
* Cantidad inválida → Reingreso sin finalizar el sistema.
* El movimiento debe registrarse en el historial.

### RF4 – Movimiento de Salida

**Descripción:**
Permitir disminuir el stock de un producto existente.

**Reglas / Validaciones:**

* El producto debe existir.
* La cantidad debe ser entero positivo.
* No permitir que el stock resulte negativo.

**Criterios de aceptación:**

* Movimiento válido → Stock actualizado y confirmación en consola.
* Stock insuficiente → Mensaje de error.
* Cantidad inválida → Reingreso sin finalizar el sistema.
* El movimiento debe registrarse en el historial.

### RF5 – Consulta de Inventario por Sector

**Descripción:**
Listar los productos del sector actual.

**Criterios de aceptación:**

* Debe mostrarse:

  * Nombre
  * Stock actual
  * Stock mínimo
  * Indicador de alerta si stockActual < stockMinimo
* Si no hay productos → Mostrar mensaje “No hay productos registrados”.

### RF6 – Búsqueda Global de Producto

**Descripción:**
Permitir buscar un producto en los tres sectores.

**Reglas / Validaciones:**

* Nombre obligatorio.

**Criterios de aceptación:**

* Si existe → Mostrar sectores donde se encuentra y stock en cada uno.
* Si no existe → Mostrar mensaje “Producto no encontrado”.
* No debe finalizar el sistema ante error.

### RF7 – Reporte de Turno

**Descripción:**
Generar un resumen operativo del turno actual.

**El reporte deberá incluir:**

* Cantidad total de movimientos registrados.
* Total de movimientos de entrada.
* Total de movimientos de salida.
* Total de unidades ingresadas.
* Total de unidades retiradas.
* Productos en alerta (stock bajo).
* Valor estimado del inventario (si precio está activo).

**Definiciones explícitas:**

* “Movimientos” = cantidad de registros.
* “Unidades” = suma total de cantidades.

**Criterios de aceptación:**

* El reporte debe imprimirse completo en consola.
* Si no existen movimientos → Mostrar valores en cero.
* No debe producir errores si no hay productos cargados.

## 7. Requisitos No Funcionales (RNF)

**RNF1 – Plataforma:**
El sistema debe ejecutarse en Node.js LTS (versión objetivo a definir, por ejemplo 18.x o superior).

**RNF2 – Arquitectura:**
El sistema debe estar dividido en módulos:

* UI
* Lógica de inventario
* Validaciones
* Reportes

**RNF3 – Persistencia:**
Los datos deben almacenarse únicamente en memoria durante la ejecución.

**RNF4 – Validación:**
Toda entrada inválida debe volver a solicitarse sin finalizar el programa ni provocar crash.

**RNF5 – Determinismo:**
El sistema no debe utilizar aleatoriedad.
Dados los mismos inputs, debe producir la misma salida.

## 8. Supuestos

* Los productos pueden existir en más de un sector.
* El stock es independiente por sector.
* El sistema es de uso individual.
* No existe concurrencia.
* No hay límite de tiempo de ejecución.

## 9. Extensiones Futuras

* Persistencia en base de datos.
* Interfaz web.
* Sistema multiusuario.
* Autenticación.
* Exportación de reportes.
* Integración con sistemas externos.