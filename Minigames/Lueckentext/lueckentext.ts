interface TextIpt {

    text: string;
    input: string;
    text_after: string;

}

let text: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("text");

// let inputArr: TextIpt[] = [];
let inputMix: TextIpt[] = [];

let buttDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("backButton")
let backButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
backButton.innerHTML = "Startseite";
// Back to the main game/ reload page
backButton.addEventListener("click", returnToStart);
buttDiv.append(backButton);

let jsonFile: RequestInfo = new URLSearchParams(window.location.search).get("json");
getData(jsonFile);

async function getData(_url: RequestInfo): Promise<void> {

    let response: Response = await fetch(_url);
    let data: TextIpt[] = await response.json();
    // inputArr = data;
    inputMix = data;

    for (let i: number = 0; i < data.length; i++) {

        text.innerHTML += data[i].text;
        text.append(createInput(data[i].input, i));
        text.innerHTML += data[i].text_after;

    }
    showAllWords(inputMix);
    addClickEvents();
}

function createInput(_dataInput: string, _inputCount: number): HTMLSpanElement {

    // get size of word and fit input field to it
    let inputSpan: HTMLSpanElement = <HTMLSpanElement>document.createElement("span");
    inputSpan.setAttribute("class", _dataInput.toString() + " input");
    // inputSpan.setAttribute("class", "input");
    // inputSpan.addEventListener("click", () => { checkInput(_dataInput); });
    let output: string = "";
    for (let i = 0; i < _dataInput.length; i++) {
        output += '_';
    }
    inputSpan.innerHTML = output;

    // text.appendChild(inputSpan);

    return inputSpan;

}

function showAllWords(allWords: TextIpt[]): void {

    let wordsDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("words");
    wordsDiv.setAttribute("id", "allWords");

    let wordsRandArray: TextIpt[] = allWords;
    wordsRandArray.sort(() => .5 - Math.random());

    for (let i = 0; i < wordsRandArray.length; i++) {
        let thisWord: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
        if (i == 0) {
            thisWord.innerHTML = wordsRandArray[i].input;
        } else {
            thisWord.innerHTML = wordsRandArray[i].input;
        }
        thisWord.setAttribute("class", wordsRandArray[i].input);
        thisWord.addEventListener("click", () => checkInput(wordsRandArray[i].input, false));
        wordsDiv.appendChild(thisWord);
    }
}

function addClickEvents(): void {

    let spans = document.querySelectorAll("span");
    spans.forEach(spans => {
        let thisSpan: string = spans.classList.toString();
        let substringToRemove: string = " input";
        let resultString: string = thisSpan.replace(substringToRemove, "");
        spans.addEventListener("click", () => checkInput(resultString, true));
    }
    );
}


let string1: string = "leer";
let string2: string = "leer";
let counter: number = 0;

function checkInput(_dataInput: string, isInText: boolean): void {

    // console.log("Checking input");
    // console.log(_dataInput);
    if (isInText) {
        string1 = _dataInput;
    } else {
        string2 = _dataInput;
    }

    console.log("string1: " + string1);
    console.log("string2: " + string2);

    if (string1 == string2) {
        console.log("Correct");
        let inputSpan = document.getElementsByClassName(string1)[0];
        inputSpan.innerHTML = string1;
        inputSpan.classList.add("bold");
        inputSpan.classList.remove("input");
        counter++;
        string1 = "leer";
        string2 = "leer";
    }

    if (counter == inputMix.length) {
        console.log("Youre done");
    }

    if (string1 != "leer" && string2 != "leer") {
        string1 = "leer";
        string2 = "leer";
    }
}

// reload the page (to restart the game)
function returnToStart(): void {

    window.open("../Startseite/Startseite.html", "_self");

}