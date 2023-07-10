"use strict";
var bauernhof;
(function (bauernhof) {
    let lueckentext = document.getElementById("lueckentext");
    // let memory: HTMLButtonElement = <HTMLButtonElement>document.getElementById("memory");
    let triplett = document.getElementById("triplett");
    let zuordnungAudio = document.getElementById("zuordnungAudio");
    // let zuordnung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zuordnung");
    let quizRF = document.getElementById("quizRF");
    let multipleChoiceOK = document.getElementById("multipleChoiceOK");
    let dragNDrop = document.getElementById("dragNDrop");
    lueckentext.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=bioBauernhofLueckentext.json", "_self"); });
    // memory.addEventListener("click", () => { window.open("../../Memory/memory.html?json=baumkundeMemory.json", "_self") });
    triplett.addEventListener("click", () => { window.open("../../triplett/triplett.html?json=bauernhofTierTriplett.json", "_self"); });
    zuordnungAudio.addEventListener("click", () => { window.open("../../AudioZuordnen/audioZuordnen.html?jsonAudio=BauernhoftiereAudio.json&jsonBilder=BauernhoftiereBilder.json", "_self"); });
    // zuordnung.addEventListener("click", () => { window.open("../../paareZuordnen/paareZuordnen.html?json=dataPaare.json", "_self") });
    quizRF.addEventListener("click", () => { window.open("../../Quiz_true_false/Quiz.html?json=QuizTrueFalseBauernhof.json", "_self"); });
    multipleChoiceOK.addEventListener("click", () => { window.open("../../Quiz_MultipleChoice/multipleChoiceOK.html?json=bauernhofMultipleChoice.json", "_self"); });
    dragNDrop.addEventListener("click", () => { window.open("../../DragAndDrop/DragAndDrop.html?json1=DragAndDropBauernhoftiere.json&json2=KategorienBauernhoftiere.json", "_self"); });
})(bauernhof || (bauernhof = {}));
//# sourceMappingURL=bauernhofStartseite.js.map