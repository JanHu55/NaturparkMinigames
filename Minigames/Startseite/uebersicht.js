"use strict";
var ubersicht;
(function (ubersicht) {
    let bauernhof = document.getElementById("bauernhof");
    let wald = document.getElementById("wald");
    let wasser = document.getElementById("wasser");
    let tourismus = document.getElementById("tourismus");
    let handwerk = document.getElementById("handwerk");
    bauernhof.addEventListener("click", () => { window.open("../Lueckentext/lueckentext.html?json=dataLuecken.json", "_self"); });
    wald.addEventListener("click", () => { window.open("../Memory/memory.html?json=baumkundeMemory.json", "_self"); });
    wasser.addEventListener("click", () => { window.open("../triplett/triplett.html?json=baumkundeTriplett.json", "_self"); });
    tourismus.addEventListener("click", () => { window.open("../AudioZuordnen/audioZuordnen.html?jsonAudio=voegelAudio.json&jsonBilder=voegelBilder.json", "_self"); });
    handwerk.addEventListener("click", () => { window.open("../paareZuordnen/paareZuordnen.html?json=dataPaare.json", "_self"); });
})(ubersicht || (ubersicht = {}));
//# sourceMappingURL=uebersicht.js.map