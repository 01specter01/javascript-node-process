console.log("javascript-node-process");
console.log(`1. Lege eine Funktion an, die die aktuelle Uhrzeit ausgibt`);
let current = new Date();
function time() {
    return current.getHours() + "Uhr";
}
console.log(time());
console.log("----------------------");
console.log("2. Erstelle eine Funktion, die das aktuelle Datum ausgibt");
let now = new Date();
function datum() {
    return `${now.getDate()}.0${now.getMonth() + 1}.${now.getFullYear()}`;
}
console.log(datum());
console.log("----------------------");
console.log(
    "3. Steuere das Ausgabeformat über ein Argument (YYYY-MM-DD, hh:mm, DD.MM.YY)"
);
console.log(current);
//nummer 3 Unklar!!
