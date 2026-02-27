# Decisiones de codificación 

## D1 — Estructura de inventario
* Se implementan 3 inventarios separados, uno por sector:
    * Playa de Líquidos
    * Playa de GNC
    * Tienda Full

## D2 — Sector activo
* Se usa sectorActual como estado global de navegación.
* Las opciones dependientes de sector (alta/movimientos/consulta) requieren sectorActual definido; si no, se corta con mensaje y vuelve al menú.

## D3 — Menú principal

* Menú implementado como bucle (do/while o equivalente) + decisión por opción.
* `default` (opción inválida) no termina el programa: muestra error y vuelve al menú.
* Cada opción ejecuta su subproceso y vuelve al menú; solo 0 termina.

## D4 — Alta de producto (RF2)
* Política de duplicados:
    * Si el producto ya existe en el sector → rechazar y volver al menú.
* Alta normal pide:
    * nombre
    * stockInicial
    * stockMinimo
    * (precio queda para después)

## D5 — Movimiento de entrada (RF3)
* Política de inexistente:
    * Si no existe → ofrecer darlo de alta.
* Política 2 (semántica consistente):
    * Alta desde entrada crea producto con stockInicial = 0
    * Pide stockMinimo
    * luego pide cantidadEntrada, suma stock y registra movimiento ‘E’

## D6 — Movimiento de salida (RF4)
* Política de inexistente:
    * Si no existe → rechazar y volver al menú.