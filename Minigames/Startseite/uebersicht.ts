namespace ubersicht {

let bauernhof: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bauernhof");
let wald: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wald");
let wasser: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wasser");
let tourismus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("tourismus");
let handwerk: HTMLButtonElement = <HTMLButtonElement>document.getElementById("handwerk");


bauernhof.addEventListener("click", () => { window.open("../Lueckentext/lueckentext.html?json=dataLuecken.json", "_self") });
wald.addEventListener("click", () => { window.open("../Memory/memory.html?json=baumkundeMemory.json", "_self") });
wasser.addEventListener("click", () => { window.open("../triplett/triplett.html?json=baumkundeTriplett.json", "_self") });
tourismus.addEventListener("click", () => { window.open("../AudioZuordnen/audioZuordnen.html?jsonAudio=voegelAudio.json&jsonBilder=voegelBilder.json", "_self") });
handwerk.addEventListener("click", () => { window.open("../paareZuordnen/paareZuordnen.html?json=dataPaare.json", "_self") });
}