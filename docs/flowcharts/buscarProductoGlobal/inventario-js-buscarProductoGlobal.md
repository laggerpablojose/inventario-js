flowchart TD
    A([Inicio buscarProductoGlobal]) --> B["Mostrar: 'Ingresar nombre de producto a buscar'"]
    B --> C["nombre = normalizar(nombre)"]
    C --> D{¿nombre vacío?}

    D -->|Sí| D1["Mostrar: 'Nombre inválido'"] --> B
    D -->|No| E["idxL = buscarIndex(LIQUIDOS, nombre)\nidxG = buscarIndex(GNC, nombre)\nidxF = buscarIndex(FULL, nombre)"]

    E --> F{¿idxL == -1 && idxG == -1 && idxF == -1?}

    F -->|Sí| F1["Mostrar: 'Producto no encontrado en ningún sector'"] --> Z([Fin])
    F -->|No| G["Mostrar encabezado: Resultado de búsqueda (nombre)"]

    G --> H{¿idxL != -1?}
    H -->|Sí| H1["Imprimir: 'LIQUIDOS + stock + min'"] --> I
    H -->|No| I

    I --> J{¿idxG != -1?}
    J -->|Sí| J1["Imprimir: 'GNC + stock + min'"] --> K
    J -->|No| K

    K --> L{¿idxF != -1?}
    L -->|Sí| L1["Imprimir: 'FULL + stock + min'"] --> Z
    L -->|No| Z([Fin])