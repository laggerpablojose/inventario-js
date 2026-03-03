flowchart TD
    A(["Inicio alertaSector(Sector)"]) --> B["j = 0<br/>hayAlertas = FALSE"]
    B --> C{"¿topeSector == 0?"}

    C -->|Sí| C1["Imprimir: '(sin productos)'"] --> Z([Fin subproceso])

    C -->|No| D{"¿j < topeSector?"}
    D -->|Sí| E{"¿stock[j] < minStock[j]?"}

    E -->|Sí| E1["Imprimir: 'producto en alerta'"] --> E2["hayAlertas = TRUE"] --> G["j = j + 1"] --> D
    E -->|No| G --> D

    D -->|No| H{"¿hayAlertas == FALSE?"}
    H -->|Sí| H1["Imprimir: '(sin alerta)'"] --> Z
    H -->|No| Z