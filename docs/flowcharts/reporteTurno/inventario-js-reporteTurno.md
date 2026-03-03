flowchart TD
    A([Inicio reporteTurno]) --> B["Inicializar contadores:<br/>totalMov = movTope<br/>movEntradas=0, movSalidas=0<br/>unidadesEntradas=0, unidadesSalidas=0"]
    B --> C["i = 0"]
    C --> D{"¿i < movTope?"}

    %% Loop movimientos
    D -->|Sí| E{"¿movTipo[i] == 'E'?"}
    E -->|Sí| E1["movEntradas++<br/>unidadesEntradas += movCantidad[i]"] --> I["i = i + 1"] --> D
    E -->|No| F{"¿movTipo[i] == 'S'?"}
    F -->|Sí| F1["movSalidas++<br/>unidadesSalidas += movCantidad[i]"] --> I
    F -->|No| I

    %% Salida del loop
    D -->|No| R1["Imprimir:<br/>'REPORTE DE TURNO'<br/>Movimientos totales<br/>Entradas<br/>Salidas"]
    R1 --> R2["Imprimir: 'PRODUCTOS EN ALERTA'"]

    %% Llamadas a subproceso (conceptual)
    R2 --> L1["Llamar: alertaSector(LIQUIDOS)"]
    L1 --> L2["Llamar: alertaSector(GNC)"]
    L2 --> L3["Llamar: alertaSector(FULL)"]

    %% Valuación inventario
    L3 --> V1["valorL = calcularValorSector(LIQUIDOS)<br/>valorG = calcularValorSector(GNC)<br/>valorF = calcularValorSector(FULL)<br/>valorTotal = valorL + valorG + valorF"]
    V1 --> V2["Imprimir:<br/>'VALUACION INVENTARIO'<br/>valores por sector<br/>total"]
    V2 --> Z([Fin reporteTurno])

