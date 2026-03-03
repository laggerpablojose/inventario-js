const SECTORS = {
    LIQUIDOS: "LIQUIDOS",
    GNC: "GNC",
    FULL: "FULL",
};

const MAX_PRODUCTS = 200;
const MAX_MOVS = 200;

function makeSectorInventory() {
    return{
        names: new Array(MAX_PRODUCTS),
        stock: new Array(MAX_PRODUCTS),
        minStock: new Array(MAX_PRODUCTS),
        price: new Array(MAX_PRODUCTS),
        tope: 0,
    };
}

function majeState() {
    return {
        sectorActual: null,
        inv: {
            [SECTORS.LIQUIDOS]: makeSectorInventory(),
            [SECTORS.GNC]: makeSectorInventory(),
            [SECTORS.FULL]: makeSectorInventory(),
        },
        mov: {
            sector: new Array(MAX_MOVS),
            product: new Array(MAX_MOVS),
            type: new Array(MAX_MOVS), // 'E' o 'S'
            qty: new Array(MAX_MOVS),
            tope: 0,
        },
    };
}

function getInv(state,sector) {
    for (let i = 0; i < inv.tope; i++) {
        if (inv.names[i] === nameNorm) return i;
    }
    return -1;
}