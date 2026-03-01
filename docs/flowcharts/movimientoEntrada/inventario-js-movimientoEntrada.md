flowchart TD
    A([Inicio movimientoEntrada]) --> B{¿sectorActual definido?}

    B -->|No| B1["Mostrar: 'Primero elegir sector'"] --> Z([Fin])
    B -->|Sí| C["Mostrar: 'Ingresar nombre de producto' \n(entrada) leer nombre"]

    %% Nombre
    C --> D["nombre = normalizar(nombre)"]
    D --> E{¿nombre vacío?}
    E -->|Sí| E1["Mostrar: 'Nombre inválido'"] --> Z
    E -->|No| F["idx = buscarIndexProducto(sectorActual, nombre)"]

    %% Existe producto?
    F --> G{¿idx == -1?}
    G -->|No| Q["Mostrar: 'Ingresar cantidad a ingresar (entero > 0)'\n(entrada) leer cantidad"]
    G -->|Sí| H["Mostrar: 'Producto no existe. ¿Desea darlo de alta? (S/N)'\n(entrada) leer resp"]

    %% Alta desde entrada (Opción B)
    H --> I{¿resp == 's'?}
    I -->|No| I1["Mostrar: 'Operación cancelada'"] --> Z
    I -->|Sí| J{¿hay espacio?}

    J -->|No| J1["Mostrar: 'Inventario lleno'"] --> Z
    J -->|Sí| K["Mostrar: 'Ingresar stock mínimo (>=0)'\n(entrada) leer stockMinimo"]

    K --> L{¿stockMinimo >= 0?}
    L -->|No| L1["Mostrar: 'Stock mínimo inválido'"] --> K
    L -->|Sí| M["Insertar producto con stockInicial = 0"]
    M --> N["Mostrar: 'Producto creado (stock inicial = 0)'"]
    N --> Q

    %% Cantidad (común para producto existente o recién creado)
    Q --> R{¿cantidad > 0?}
    R -->|No| R1["Mostrar: 'Cantidad inválida'"] --> Q
    R -->|Sí| S["stock[idx] = stock[idx] + cantidad"]
    S --> T["registrarMovimiento(sectorActual, nombre, 'E', cantidad)"]
    T --> U["Mostrar: 'Entrada registrada. Stock actual: X'"]
    U --> Z([Fin])