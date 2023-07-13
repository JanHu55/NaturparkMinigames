namespace wasser {

let lueckentext: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lueckentext");
let lueckentext2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lueckentext2");
// let memory: HTMLButtonElement = <HTMLButtonElement>document.getElementById("memory");
// let triplett: HTMLButtonElement = <HTMLButtonElement>document.getElementById("triplett");
// let zuordnungAudio: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zuordnungAudio");
// let zuordnung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zuordnung");
let quizRF: HTMLButtonElement = <HTMLButtonElement>document.getElementById("quizRF");
let quizRF2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("quizRF2");
// let multipleChoiceOK: HTMLButtonElement = <HTMLButtonElement>document.getElementById("multipleChoiceOK");
let dragNDrop: HTMLButtonElement = <HTMLButtonElement>document.getElementById("dragNDrop");


lueckentext.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=WasserkreislaufLueckentext.json", "_self") });
lueckentext2.addEventListener("click", () => { window.open("../../Lueckentext/lueckentext.html?json=Feldsee_Lueckentext.json", "_self") });
// memory.addEventListener("click", () => { window.open("../../Memory/memory.html?json=baumkundeMemory.json", "_self") });
// triplett.addEventListener("click", () => { window.open("../../triplett/triplett.html?json=bauernhofTierTriplett.json", "_self") });
// zuordnungAudio.addEventListener("click", () => { window.open("../../AudioZuordnen/audioZuordnen.html?jsonAudio=BauernhoftiereAudio.json&jsonBilder=BauernhoftiereBilder.json", "_self") });
// zuordnung.addEventListener("click", () => { window.open("../../paareZuordnen/paareZuordnen.html?json=dataPaare.json", "_self") });
quizRF.addEventListener("click", () => { window.open("../../Quiz_true_false/Quiz.html?json=Quiz_True_False_Wasserverbrauch.json", "_self") });
quizRF2.addEventListener("click", () => { window.open("../../Quiz_true_false/Quiz.html?json=Quiz_True_False_VerhaltenAmFeldsee.json", "_self") });
// multipleChoiceOK.addEventListener("click", () => { window.open("../../Quiz_MultipleChoice/multipleChoiceOK.html?json=bauernhofMultipleChoice.json", "_self") });
dragNDrop.addEventListener("click", () => { window.open("../../DragAndDrop/DragAndDrop.html?json1=DragAndDropWassertiere.json&json2=KategorienWassertiere.json", "_self") });
}