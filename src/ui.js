const readline = require("node:readline");

function createIO() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = (text) => new Promise((resolve) => rl.question(text, resolve));

    const close = () => rl.close();

    return { question, close };
}

function normalizeName(s) {
    return String(s ?? "").trim().toLowerCase();
}

async function readNonEmptyText(io, prompt) {
    while (true) {
        const v = await io.question(prompt);
        if (String(v).trim() !== "") return v;
        console.log("Entrada inválida.");
    }
}

async function readIntMin(io, prompt, minInclusive) {
    while (true) {
        const n = await readInto(io, prompt);
        if (n >= minInclusive) return n;
        console.log(`Debe ser >= ${minInclusive}.`);
    }
}

async function readNumber(io, prompt) {
    while (true) {
        const v = await io.question(prompt);
        const n = Number(v);
        if (!Number.isNaN(n) && Number.isFinite(n)) return n;
        console.log("Debe ingresar un número válido.");
    }
}

async function readNumberMin(io, prompt, minInclusive) {
    while (true) {
        const n = await readNumber(io, prompt);
        if (n >= minInclusive) return n;
        console.log(`Debe ser >= ${minInclusive}.`);
    }
}

async function readYesNo(io, prompt) {
    while (true) {
        const v = normalizeName(await io.question(prompt));
        if (v === "s" || v === "si") return true;
        if (v === "n" || v === "no") return false;
        console.log("Responda S/N.");
    }
}

function printMenu(sectorActual) {
  console.log("\n=== INVENTARIO-JS ===");
  console.log(`Sector actual: ${sectorActual ?? "NINGUNO"}`);
  console.log("1) Elegir sector");
  console.log("2) Alta producto");
  console.log("3) Movimiento entrada");
  console.log("4) Movimiento salida");
  console.log("5) Consultar inventario sector");
  console.log("6) Buscar producto global");
  console.log("7) Reporte de turno");
  console.log("0) Salir");
}

module.exports = {
    createIO,
    normalizeName,
    readNonEmptyText,
    readIntMin,
    readNumberMin,
    readYesNo,
    printMenu,
};