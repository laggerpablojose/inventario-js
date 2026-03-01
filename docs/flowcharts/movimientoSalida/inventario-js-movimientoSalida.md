flowchart TD
    A([Inicio movimientoSalida]) --> B{¿sectorActual definido?}

    B -->|No| B1["Mostrar: 'Primero elegir un sector'"] --> Z([Fin])
    B -->|Sí| C["Mostrar: 'Ingresar nombre de producto'\n(entrada) leer nombre"]

    %% Nombre
    C --> D["nombre = normalizar(nombre)"]
    D --> E{¿nombre vacío?}
    E -->|Sí| E1["Mostrar: 'Nombre inválido'"] --> C
    E -->|No| F["idx = buscarIndexProducto(sectorActual, nombre)"]

    %% Existe producto
    F --> G{¿idx == -1?}
    G -->|Sí| G1["Mostrar: 'Producto no existe en este sector'"] --> Z
    G -->|No| H["Mostrar: 'Ingresar cantidad a retirar'\n(entrada) leer cantidad"]

    %% Validación cantidad
    H --> I{¿cantidad <= 0?}
    I -->|Sí| I1["Mostrar: 'Cantidad inválida'"] --> H
    I -->|No| J{"¿cantidad > stockActual?"}
    J -->|Sí| J1["Mostrar: 'Stock insuficiente'"] --> H
    J -->|No| K["stock[idx] = stock[idx] - cantidad"]

    %% Registrar salida
    K --> L["registrarMovimiento(sectorActual, nombre, 'S', cantidad)"]

    %% Alerta stock mínimo (no corta el flujo)
    L --> M{"¿stock[idx] < minStock[idx]?"}
    M -->|Sí| M1["Mostrar: 'ALERTA: stock por debajo del mínimo'"] --> N
    M -->|No| N["Mostrar: 'Salida registrada. Stock actual: X'"] --> Z([Fin])