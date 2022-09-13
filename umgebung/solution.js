console.log("javascript-node-process");

console.log(process.argv);
console.log(
    "1. Entwickle eine Funktion, welche die aktuell genutzte Node-Version ausgibt."
);
console.log(`Version: ` + process.version);
console.log("----------------------");
console.log(
    "2. Schreibe eine Funktion, die das Betriebssystem (und die Architektur) ausgibt."
);
console.log(
    `This processor architecture is ` +
        process.arch +
        ` ------------------ ` +
        `The OS is: ` +
        process.platform
);
console.log("----------------------");

console.log(
    "3. Finde mit einer Funktion heraus, in welchem Pfad das Skript gerade ausgeführt wird."
);
