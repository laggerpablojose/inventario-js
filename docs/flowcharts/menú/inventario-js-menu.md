flowchart TD
    A([Inicio]) --> B[sectorActual = NINGUNO]
    B --> C[Mostrar menú]
    C --> D[Leer opción]
    D --> E{Opción elegida}

    E -->|1| S1[Elegir sector] --> C
    E -->|0| F([Fin])
    E -->|Otro| X["Mostrar: Opción inválida"] --> C

    E -->|2..7| V{¿sectorActual definido?}
    V -->|No| W["Mostrar: Primero elegir sector"] --> C

    V -->|Sí| R{Acción según opción}
    R -->|2| A2[Alta producto] --> C
    R -->|3| A3[Movimiento entrada (opción B)] --> C
    R -->|4| A4[Movimiento salida] --> C
    R -->|5| A5[Consultar stock / listar] --> C
    R -->|6| A6[Buscar global] --> C
    R -->|7| A7[Reporte de turno] --> C

