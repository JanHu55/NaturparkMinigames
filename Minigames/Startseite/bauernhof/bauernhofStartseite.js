"use strict";
var bauernhof;
(function (bauernhof) {
    let lueckentext = document.getElementById("lueckentext");
    let memory = document.getElementById("memory");
    let triplett1 = document.getElementById("triplett1");
    let triplett2 = document.getElementById("triplett2");
    let zuordnungAudio = document.getElementById("zuordnungAudio");
    // let zuordnung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zuordnung");
    let quizRF = document.getElementById("quizRF");
    let multipleChoiceOK = document.getElementById("multipleChoiceOK");
    let dragNDrop = document.getElementById("dragNDrop");
    let dragNDrop2 = document.getElementById("dragNDrop2");
    lueckentext.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=bioBauernhofLueckentext.json", "_self"); });
    memory.addEventListener("click", () => { window.open("../../Memory/memory.html?json=GetreideMemory.json", "_self"); });
    triplett1.addEventListener("click", () => { window.open("../../triplett/triplett.html?json=bauernhofTierTriplett.json", "_self"); });
    triplett2.addEventListener("click", () => { window.open("../../triplett/triplett.html?json=LebensmittelPflanzeTriplett.json", "_self"); });
    zuordnungAudio.addEventListener("click", () => { window.open("../../AudioZuordnen/audioZuordnen.html?jsonAudio=BauernhoftiereAudio.json&jsonBilder=BauernhoftiereBilder.json", "_self"); });
    // zuordnung.addEventListener("click", () => { window.open("../../paareZuordnen/paareZuordnen.html?json=dataPaare.json", "_self") });
    quizRF.addEventListener("click", () => { window.open("../../Quiz_true_false/Quiz.html?json=QuizTrueFalseBauernhof.json", "_self"); });
    multipleChoiceOK.addEventListener("click", () => { window.open("../../Quiz_MultipleChoice/multipleChoiceOK.html?json=bauernhofMultipleChoice.json", "_self"); });
    dragNDrop.addEventListener("click", () => { window.open("../../DragAndDrop/DragAndDrop.html?json1=DragAndDropBauernhoftiere.json&json2=KategorienBauernhoftiere.json", "_self"); });
    dragNDrop2.addEventListener("click", () => { window.open("../../DragAndDrop/DragAndDrop.html?json1=DragAndDropLebensmittelherkunft.json&json2=KategorienLebensmittelherkunft.json", "_self"); });
})(bauernhof || (bauernhof = {}));
//# sourceMappingURL=bauernhofStartseite.js.map