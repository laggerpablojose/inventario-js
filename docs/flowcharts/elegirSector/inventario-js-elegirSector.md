flowchart TD

A([Inicio elegirSector]) --> B[sectorActual = NINGUNO]
B --> C["Mostrar: '1=Liquidos' | '2=GNC' | '3=Full'"]
C --> D["opcionSector = leerInt()"]

D --> E{opcionSector}

E -->|1| F["sectorActual = "LIQUIDOS""] --> Z([Fin elegirSector])
E -->|2| G["sectorActual = "GNC""] --> Z
E -->|3| H["sectorActual = "FULL""] --> Z

E -->|Otro| I["Mostrar: Opción inválida"]
I --> C