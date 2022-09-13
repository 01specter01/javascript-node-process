console.log("javascript-node-process");
console.log(`1. Lege eine Funktion an, die die aktuelle Uhrzeit ausgibt`);

function time() {
    let current = new Date();
    return current.getHours() + "Uhr";
}
console.log(time());
console.log("----------------------");
console.log("2. Erstelle eine Funktion, die das aktuelle Datum ausgibt");

function datum() {
    let now = new Date();
    return `${now.getDate()}.0${now.getMonth() + 1}.${now.getFullYear()}`;
}
console.log(datum());
