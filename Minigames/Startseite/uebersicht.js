"use strict";
var ubersicht;
(function (ubersicht) {
    let bauernhof = document.getElementById("bauernhof");
    let wald = document.getElementById("wald");
    let wasser = document.getElementById("wasser");
    let tourismus = document.getElementById("tourismus");
    let handwerk = document.getElementById("handwerk");
    bauernhof.addEventListener("click", () => { window.open("bauernhof/bauernhofStartseite.html", "_self"); });
    wald.addEventListener("click", () => { window.open("wald/waldStartseite.html", "_self"); });
    wasser.addEventListener("click", () => { window.open("wasser/wasserStartseite.html", "_self"); });
    tourismus.addEventListener("click", () => { window.open("tourismus/tourismusStartseite.html", "_self"); });
    handwerk.addEventListener("click", () => { window.open("handwerk/handwerkStartseite.html", "_self"); });
})(ubersicht || (ubersicht = {}));
//# sourceMappingURL=uebersicht.js.map