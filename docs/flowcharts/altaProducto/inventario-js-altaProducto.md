flowchart TD
    A([Inicio altaProducto]) --> B{¿sectorActual está definido?}

    B -->|No| B1["Mostrar: 'Primero elegí un sector'"] --> Z([Fin])
    B -->|Sí| C["Mostrar: 'Ingresar nombre de producto' \n(entrada) leer nombre"]

    %% Nombre
    C --> D["nombre = normalizar(nombre)"]
    D --> E{¿nombre está vacío?}
    E -->|Sí| E1["Mostrar: 'Nombre inválido'"] --> C
    E -->|No| F["Mostrar: 'Ingresar stock inicial (>=0)'\n(entrada) leer stockInicial"]

    %% Stock inicial
    F --> G{¿stockInicial es entero y >= 0?}
    G -->|No| G1["Mostrar: 'Stock inicial inválido'"] --> F
    G -->|Sí| H["Mostrar: 'Ingresar stock mínimo (>=0)'\n(entrada) leer stockMinimo"]

    %% Stock mínimo
    H --> I{¿stockMinimo es entero y >= 0?}
    I -->|No| I1["Mostrar: 'Stock mínimo inválido'"] --> H
    I -->|Sí| J[Buscar si existe producto\nen inventario de sectorActual]

    %% Duplicado
    J --> K{¿idx != -1?}
    K -->|Sí| K1["Mostrar: 'Producto ya existe en este sector'"] --> Z
    K -->|No| L[Verificar capacidad\ndel inventario del sectorActual]

    %% Capacidad
    L --> M{¿hay espacio disponible?}
    M -->|No| M1["Mostrar: 'Inventario lleno (capacidad máxima)'"] --> Z
    M -->|Sí| N["Insertar producto:\n- names[tope]=nombre\n- stock[tope]=stockInicial\n- minStock[tope]=stockMinimo\n- tope++"]

    N --> O["Mostrar: 'Producto dado de alta correctamente'"] --> Z([Fin])