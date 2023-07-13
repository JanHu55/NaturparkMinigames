"use strict";
var handwerk;
(function (handwerk) {
    let lueckentext1 = document.getElementById("lueckentext1");
    let lueckentext2 = document.getElementById("lueckentext2");
    let lueckentext3 = document.getElementById("lueckentext3");
    let lueckentext4 = document.getElementById("lueckentext4");
    // let memory: HTMLButtonElement = <HTMLButtonElement>document.getElementById("memory");
    // let triplett: HTMLButtonElement = <HTMLButtonElement>document.getElementById("triplett");
    // let zuordnungAudio: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zuordnungAudio");
    let zuordnung = document.getElementById("zuordnung");
    // let quizRF: HTMLButtonElement = <HTMLButtonElement>document.getElementById("quizRF");
    let multipleChoiceOK = document.getElementById("multipleChoiceOK");
    // let dragNDrop: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dragNDrop");
    lueckentext1.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=Familie Zahoransky_Bürstenbinder_Lueckentext.json", "_self"); });
    lueckentext2.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=Glasblaeser_Lueckentext.json", "_self"); });
    lueckentext3.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=Strohflechter_Lueckentext.json", "_self"); });
    lueckentext4.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=Forstwirt_Lueckentext.json", "_self"); });
    // memory.addEventListener("click", () => { window.open("../../Memory/memory.html?json=MemoryWintersport.json", "_self") });
    // triplett.addEventListener("click", () => { window.open("../../triplett/triplett.html?json=bauernhofTierTriplett.json", "_self") });
    // zuordnungAudio.addEventListener("click", () => { window.open("../../AudioZuordnen/audioZuordnen.html?jsonAudio=BauernhoftiereAudio.json&jsonBilder=BauernhoftiereBilder.json", "_self") });
    zuordnung.addEventListener("click", () => { window.open("../../paareZuordnen/paareZuordnen.html?json=Handwerksberufe_Zuordnen.json", "_self"); });
    // quizRF.addEventListener("click", () => { window.open("../../Quiz_true_false/Quiz.html?json=QuizTrueFalseTourismusAnreise.json", "_self") });
    multipleChoiceOK.addEventListener("click", () => { window.open("../../Quiz_MultipleChoice/multipleChoiceOK.html?json=Handwerk_MultipleChoice.json", "_self"); });
    // dragNDrop.addEventListener("click", () => { window.open("../../DragAndDrop/DragAndDrop.html?json1=DragAndDropWassertiere.json&json2=KategorienWassertiere.json", "_self") });
})(handwerk || (handwerk = {}));
//# sourceMappingURL=handwerkStartseite.js.map