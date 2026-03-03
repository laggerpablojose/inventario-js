// Lógica de negocio (WIP)

/*

 ELEGIR SECTOR

*/

function elegirSector(){}
// repetir: //while?
//     //mostrar "1=Liquidos, 2=GNC, 3=Full"
//     opcionSector = leerInt()
//     if (opcionSector == 1){
//         sectorActual = "LIQUIDOS"
//     } else if (opcionSector == 2){
//         sectorActual = "GNC"
//     } else if (opcionSector == 3){
//         sectorAtcual = "FULL"
//     } else {
//         "opcion inválida"
//     }
// "hasta que sectorActual sea válido."



// ALTA DE PRODUCTO
/**
 * Dar de alta un producto en el sectorActual().
 * Validar inputs.
 * Evitar duplicados dentro del mismo sector.
 * Insertar el producto si hay espacio (capacidad fija del inventario)
 */
function altaProducto(sector){}
//   si sector == NINGUNO:
//     imprimir "Primero elegí un sector"
//     retornar FALSO

//   nombre
//   repetir
//     imprimir "Ingresar nombre de producto:"
//     nombre = leerTexto()
//     nombre = normalizarNombre(nombre)
//     si nombre == "":
//       imprimir "Nombre inválido"
//   hasta nombre != ""

//   duplicado
//   idx = buscarIndexProducto(sector, nombre)
//   si idx != -1:
//     imprimir "Producto ya existe en este sector"
//     retornar FALSO

//   stock inicial
//   repetir
//     imprimir "Ingresar stock inicial (>=0):"
//     stockInicial = leerEntero()
//     si stockInicial < 0:
//       imprimir "Stock inicial inválido"
//   hasta stockInicial >= 0

//   stock mínimo
//   repetir
//     imprimir "Ingresar stock mínimo (>=0):"
//     stockMinimo = leerEntero()
//     si stockMinimo < 0:
//       imprimir "Stock mínimo inválido"
//   hasta stockMinimo >= 0

//   capacidad
//   si tope(sector) >= MAX(sector):
//     imprimir "Inventario lleno (capacidad máxima)"
//     retornar FALSO

//   insertar
//   names(sector)[tope] = nombre
//   stock(sector)[tope] = stockInicial
//   minStock(sector)[tope] = stockMinimo
//   tope(sector) = tope(sector) + 1

//   imprimir "Producto dado de alta correctamente"
//   retornar VERDADERO;

/*

 MOVIMIENTO DE ENTRADA

*/


function movimientoEntrada(sector){}
//   si sector == NINGUNO:
//     imprimir "Primero elegí un sector"
//     retornar

//   1) Pedir nombre
//   repetir
//     imprimir "Ingresar nombre de producto:"
//     nombre = leerTexto()
//     nombre = normalizarNombre(nombre)
//     si nombre == "":
//       imprimir "Nombre inválido"
//   hasta nombre != ""

//   2) Buscar producto en sector actual
//   idx = buscarIndexProducto(sector, nombre)

//   3) Si NO existe, ofrecer alta
//   si idx == -1:
//     imprimir "Producto no existe en este sector."
//     imprimir "¿Desea darlo de alta? (S/N)"
//     resp = leerTexto()
//     resp = normalizarNombre(resp)

//     si resp != "s":
//       imprimir "Operación cancelada"
//       retornar

//   3.1) Validar espacio
//     si NO hayEspacio(sector):
//       imprimir "Inventario lleno (capacidad máxima)"
//       retornar

//   3.2) Pedir stock mínimo (porque se crea desde entrada)
//     repetir
//       imprimir "Ingresar stock mínimo (>=0):"
//       stockMinimo = leerEntero()
//       si stockMinimo < 0:
//         imprimir "Stock mínimo inválido"
//     hasta stockMinimo >= 0

//   3.3) Insertar producto con stockInicial = 0
//     idx = insertarProducto(sector, nombre, 0, stockMinimo)
//     imprimir "Producto creado (stock inicial = 0)"

//   4) Pedir cantidad de entrada
//   repetir
//     imprimir "Ingresar cantidad a ingresar (entero > 0):"
//     cantidad = leerEntero()
//     si cantidad <= 0:
//       imprimir "Cantidad inválida"
//   hasta cantidad > 0

//   5) Aplicar entrada
//   stock(sector)[idx] = stock(sector)[idx] + cantidad
//   registrarMovimiento(sector, nombre, "E", cantidad)

//   6) Mostrar resultado
//   imprimir "Entrada registrada. Stock actual: " + stock(sector)[idx]


/*

 MOVIMIENTO DE SALIDA

*/

/**
 * Si el producto no existe -> Rechazar y volver 
 * Si existe -> pedir cantidad, validar, descontar, registrar movimiento.
*/

function movimientoSalida(sector){}
//     si sector == NINGUN:
//         imprimir "Primero elegí un sector"
//         retornar
// 1) Pedir nombre
// repetir 
//     imprimir "ingresar nombre de producto"
//     nombre = leerTecto()
//     nombre = normalizarNombre(nombre)
//     si nombre == "":
//         imprimir "Nombre inválido"
//     hasta nombre != ""

// 2) buscar producto
// idx = buscarIndexProducto(sector, nombre)

// 3) Si no existe, rechazar
// si idx == -1:
//     imprimir "Producto no existe en este sector"
//     retornar

// 4) Pedir cantidad de salida
// repetir 
//     imprimir "Ingrear cantidad a retirar (entero > 0):"
//     cantidad = leerEntero()
//     si cantidad <= 0:
//         imprimir "Cantidad inválida"
// hasta cantidad > 0

// 5) Validar stock suficiente 
// si stock(serctor)[idx] - cantidad < 0:
//     imprimir "STock insuficiente. stock actual: " + stock(sector)[idx]
//     retornar

// 6) Aplicar salida y registrar
// stock(sector)[idx] = stock(sectro)[idx] - cantidad
// registrarMovimiento(sector, nombre, "S", cantidad)

// 7) Alerta si queda bajo mínimo
// si stock(sector)[idx] < minStock(sector)[idx]:
//     imprimir "ALERTA: stock por debajo del mínimo"

// imprimir "Salida registrada. Stock actual: " + stock(sector)[idx]


/*

 CONSULTAR INVENTARIO

*/

function consultarInventario(sector){}
//  si sector == NINGUNO:
//     imprimir "Primero elegí un sector"
//     retornar

//   si tope(sector) == 0:
//     imprimir "No hay productos registrados en este sector"
//     retornar

//   imprimir "Inventario del sector: " + sector
//   imprimir "----------------------------------------"
//   imprimir "Producto | Stock | Min | Alerta"
//   imprimir "----------------------------------------"

//   para i desde 0 hasta tope(sector)-1:
//     alerta = (stock(sector)[i] < minStock(sector)[i])

//     si alerta:
//       imprimir names(sector)[i] + " | " + stock + " | " + min + " | SI"
//     sino:
//       imprimir names(sector)[i] + " | " + stock + " | " + min + " | NO"

//   imprimir "----------------------------------------"
//   imprimir "Total de productos: " + tope(sector)

/*

 BUSQUEDA GLOBAL

*/
function buscarProductoGlobal(){}
// 1) Pedir nombre
//   repetir
//     imprimir "Ingresar nombre de producto a buscar:"
//     nombre = leerTexto()
//     nombre = normalizarNombre(nombre)
//     si nombre == "":
//       imprimir "Nombre inválido"
//   hasta nombre != ""

//   2) Buscar en los 3 sectores
//   idxL = buscarIndexProducto(LIQUIDOS, nombre)
//   idxG = buscarIndexProducto(GNC, nombre)
//   idxF = buscarIndexProducto(FULL, nombre)

//   3) Evaluar si no existe en ninguno
//   si idxL == -1 Y idxG == -1 Y idxF == -1:
//     imprimir "Producto no encontrado en ningún sector"
//     retornar

//   4) Mostrar resultados por sector
//   imprimir "Resultado de búsqueda: " + nombre

//   si idxL != -1:
//     imprimir "LIQUIDOS: stock=" + stock(LIQUIDOS)[idxL] + " (min=" + minStock(LIQUIDOS)[idxL] + ")"
//   si idxG != -1:
//     imprimir "GNC: stock=" + stock(GNC)[idxG] + " (min=" + minStock(GNC)[idxG] + ")"
//   si idxF != -1:
//     imprimir "FULL: stock=" + stock(FULL)[idxF] + " (min=" + minStock(FULL)[idxF] + ")"

/*

 REPORTE DE TURNO

*/
function reporteTurno(){}
//   1) Contadores globales
//   totalMov = movTope
//   movEntradas = 0
//   movSalidas = 0
//   unidadesEntradas = 0
//   unidadesSalidas = 0

//   2) Recorrer historial de movimientos
//   para i desde 0 hasta movTope-1:
//     si movTipo[i] == 'E':
//       movEntradas = movEntradas + 1
//       unidadesEntradas = unidadesEntradas + movCantidad[i]
//     sino si movTipo[i] == 'S':
//       movSalidas = movSalidas + 1
//       unidadesSalidas = unidadesSalidas + movCantidad[i]

//   3) Reporte operativo (siempre)
//   imprimir "REPORTE DE TURNO"
//   imprimir "Movimientos totales: " + totalMov
//   imprimir "Entradas: movimientos=" + movEntradas + " unidades=" + unidadesEntradas
//   imprimir "Salidas:  movimientos=" + movSalidas + " unidades=" + unidadesSalidas

//   4) Alertas por sector (stock bajo)
//   imprimir "PRODUCTOS EN ALERTA (stock < minimo):"
//   imprimirAlertasSector(LIQUIDOS)
//   imprimirAlertasSector(GNC)
//   imprimirAlertasSector(FULL)

//   5) Valuación de inventario (si hay precio)
//   Si price[] existe: sumar stock * precio para cada producto
//   valorTotal = 0
//   valorL = calcularValorSector(LIQUIDOS)   // suma stock[i]*price[i]
//   valorG = calcularValorSector(GNC)
//   valorF = calcularValorSector(FULL)
//   valorTotal = valorL + valorG + valorF

//   imprimir "VALUACION INVENTARIO (si hay precios cargados):"
//   imprimir "Liquidos: $" + valorL
//   imprimir "GNC:      $" + valorG
//   imprimir "Full:     $" + valorF
//   imprimir "TOTAL:    $" + valorTotal