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

//4.2 Umgebung unklar!!
function newFunction(fun) {
    fun();
}
newFunction(node);

newFunction(os);

newFunction(directory);
console.log(process.argv);

const printNodeVersion = () => console.log(`Node: ${process.version}`);
const printOSDetails = () =>
    console.log(`OS: ${process.platform} (${process.arch})`);
const printPwd = () => console.log(`Pfad: ${process.mainModule.path}`);

const [nodePath, scriptPath, ...functions] = process.argv;
console.log(functions);

if (functions.includes("node")) printNodeVersion();
if (functions.includes("os")) printOSDetails();
if (functions.includes("directory")) printPwd();
