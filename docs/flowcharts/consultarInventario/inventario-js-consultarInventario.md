flowchart TD
    A([Inicio consultarInventario]) --> B{¿sectorActual definido?}

    B -->|No| B1["Mostrar: 'Primero elegí un sector'"] --> Z([Fin])
    B -->|Sí| C{¿tope == 0?}

    C -->|Sí| C1["Mostrar: 'No hay productos registrados'"] --> Z
    C -->|No| D["Mostrar: 'Encabezado de tabla (sector, columnas)'"]

    D --> E["i = 0"]
    E --> F{¿i < tope?}

    F -->|No| T["Mostrar: 'Total de productos: tope'"] --> Z
    F -->|Sí| G["alerta = (stock[i] < minStock[i])"]
    G --> H{¿alerta == true?}

    H -->|Sí| H1["Imprimir: 'fila con ALERTA = SI'"] --> I["i = i + 1"]
    H -->|No| H2["Imprimir: 'fila con ALERTA = NO'"] --> I

    I --> F