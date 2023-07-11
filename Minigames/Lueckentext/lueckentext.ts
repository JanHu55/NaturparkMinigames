interface TextIpt {

    text: string;
    input: string;
    text_after: string;

}

interface Text {

    text: string;

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
// let thema: RequestInfo = new URLSearchParams(window.location.search).get("thema");
getThema(jsonFile.toString());

let description: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("description");

async function getThema(thema: string): Promise<void> {

    try {
        const response: Response = await fetch("text" + thema);
        if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Daten");
        }
        // let response: Response = await fetch("text" + thema);
        let data: Text[] = await response.json();
        description.innerHTML = data[0].text;
        console.log(data);
    } catch (error) {
    }

    // let response: Response = await fetch("text" + thema);
    // if (!response.ok) {
    //     let data: Text[] = await response.json();
    //     description.innerHTML = data[0].text;
    //     console.log(data);
    // }

}

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
    let inputSpan1: HTMLSpanElement = <HTMLSpanElement>document.createElement("span");
    inputSpan1.setAttribute("class", _dataInput.toString() + " input");
    // inputSpan1.setAttribute("class", "input");
    // inputSpan1.addEventListener("click", () => { checkInput(_dataInput); });
    let output: string = "";
    for (let i = 0; i < _dataInput.length; i++) {
        output += '_';
    }
    inputSpan1.innerHTML = output;

    return inputSpan1;

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
    let inputSpan1 = <HTMLSpanElement>document.getElementsByClassName(_dataInput)[0];
    let inputSpan2 = <HTMLSpanElement>document.getElementsByClassName(_dataInput)[1];

    // remove clicked class from other span elements
    let selectedSpans = <HTMLSpanElement>document.getElementsByClassName("clicked")[0];
    if (selectedSpans) {
        selectedSpans.classList.remove("clicked");
    }

    // remove false class from other span elements
    let falseSpans = <HTMLSpanElement>document.getElementsByClassName("false")[0];
    if (falseSpans) {
        falseSpans.style.backgroundColor = "#e86850";
        falseSpans.classList.remove("false");

    }

    if (isInText) {
        string1 = _dataInput;
        inputSpan1.classList.add("clicked");
    } else {
        string2 = _dataInput;

        let allSpans = document.querySelectorAll("#allWords>p");
        allSpans.forEach(span => {
            span.classList.add("notSelected");
            // console.log(span.innerHTML);
        });
        inputSpan2.classList.add("clicked");

    }

    console.log("string1: " + string1);
    console.log("string2: " + string2);

    if (string1 == string2) {
        console.log("Correct");
        inputSpan1.innerHTML = string1;
        inputSpan1.classList.add("bold");
        inputSpan1.classList.remove("input");
        inputSpan2.classList.remove("clicked");

        counter++;

        // hide selected word
        inputSpan2.style.display = "none";

        // string1 = "leer";
        // string2 = "leer";
    } else if (string1 != "leer" && string2 != "leer") {
        let inputSpan = <HTMLSpanElement>document.getElementsByClassName(string2)[1];
        inputSpan.style.backgroundColor = "red";
        inputSpan.classList.add("false");
    }

    if (counter == inputMix.length) {
        console.log("You're done");
    }

    if (string1 != "leer" && string2 != "leer") {
        string1 = "leer";
        string2 = "leer";
        inputSpan1.classList.remove("clicked");
        inputSpan2.classList.remove("clicked");
        let allSpans = document.querySelectorAll("#allWords>p");
        allSpans.forEach(span => {
            span.classList.remove("notSelected");
            // console.log(span.innerHTML);
        });
    }
}

// reload the page (to restart the game)
function returnToStart(): void {

    window.open("../Startseite/Startseite.html", "_self");

}