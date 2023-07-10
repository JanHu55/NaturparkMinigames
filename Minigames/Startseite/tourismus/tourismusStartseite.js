"use strict";
var tourismus;
(function (tourismus) {
    // let lueckentext: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lueckentext");
    let memory = document.getElementById("memory");
    // let triplett: HTMLButtonElement = <HTMLButtonElement>document.getElementById("triplett");
    let zuordnungAudio = document.getElementById("zuordnungAudio");
    // let zuordnung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zuordnung");
    let quizRF = document.getElementById("quizRF");
    let multipleChoiceOK = document.getElementById("multipleChoiceOK");
    // let dragNDrop: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dragNDrop");
    // lueckentext.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=WasserkreislaufLueckentext.json", "_self") });
    memory.addEventListener("click", () => { window.open("../../Memory/memory.html?json=MemoryWintersport.json", "_self"); });
    // triplett.addEventListener("click", () => { window.open("../../triplett/triplett.html?json=bauernhofTierTriplett.json", "_self") });
    zuordnungAudio.addEventListener("click", () => { window.open("../../AudioZuordnen/audioZuordnen.html?jsonAudio=TransportmittelAudio.json&jsonBilder=TransportmittelBilder.json", "_self"); });
    // zuordnung.addEventListener("click", () => { window.open("../../paareZuordnen/paareZuordnen.html?json=dataPaare.json", "_self") });
    quizRF.addEventListener("click", () => { window.open("../../Quiz_true_false/Quiz.html?json=QuizTrueFalseTourismusAnreise.json", "_self"); });
    multipleChoiceOK.addEventListener("click", () => { window.open("../../Quiz_MultipleChoice/multipleChoiceOK.html?json=tourismusMultipleChoice.json", "_self"); });
    // dragNDrop.addEventListener("click", () => { window.open("../../DragAndDrop/DragAndDrop.html?json1=DragAndDropWassertiere.json&json2=KategorienWassertiere.json", "_self") });
})(tourismus || (tourismus = {}));
//# sourceMappingURL=tourismusStartseite.js.map