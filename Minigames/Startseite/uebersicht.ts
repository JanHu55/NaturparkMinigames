namespace ubersicht {

let bauernhof: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bauernhof");
let wald: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wald");
let wasser: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wasser");
let tourismus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("tourismus");
let handwerk: HTMLButtonElement = <HTMLButtonElement>document.getElementById("handwerk");


bauernhof.addEventListener("click", () => { window.open("bauernhof/bauernhofStartseite.html", "_self") });
wald.addEventListener("click", () => { window.open("wald/waldStartseite.html", "_self") });
wasser.addEventListener("click", () => { window.open("wasser/wasserStartseite.html", "_self") });
tourismus.addEventListener("click", () => { window.open("tourismus/tourismusStartseite.html", "_self") });
handwerk.addEventListener("click", () => { window.open("handwerk/handwerkStartseite.html", "_self") });
}