console.log("javascript-node-process");
console.log(
    "1. Entwickle eine Funktion, welche die aktuell genutzte Node-Version ausgibt."
);
function node() {
    return `Version: ` + process.version;
}
console.log(node());
console.log("----------------------");
console.log(
    "2. Schreibe eine Funktion, die das Betriebssystem (und die Architektur) ausgibt."
);
function os() {
    return (
        `This processor architecture is ` +
        process.arch +
        ` ------------------ ` +
        `The OS is: ` +
        process.platform
    );
}
console.log(os());
console.log("----------------------");

console.log(
    "3. Finde mit einer Funktion heraus, in welchem Pfad das Skript gerade ausgeführt wird."
);
function directory() {
    return `Pfad der js datei ist:` + process.argv;
}
console.log(directory());
