"use strict";
var cloze;
(function (cloze) {
    let text = document.getElementById("text");
    // let inputArr: TextIpt[] = [];
    let inputMix = [];
    let buttDiv = document.getElementById("backButton");
    let backButton = document.createElement("button");
    backButton.innerHTML = "Startseite";
    // Back to the main game/ reload page
    backButton.addEventListener("click", returnToStart);
    buttDiv.append(backButton);
    let jsonFile = new URLSearchParams(window.location.search).get("json");
    getData(jsonFile);
    async function getData(_url) {
        let response = await fetch(_url);
        let data = await response.json();
        // inputArr = data;
        inputMix = data;
        for (let i = 0; i < data.length; i++) {
            text.innerHTML += data[i].text;
            text.append(createInput(data[i].input, i));
            text.innerHTML += data[i].text_after;
        }
        showAllWords(inputMix);
        addClickEvents();
    }
    function createInput(_dataInput, _inputCount) {
        // get size of word and fit input field to it
        let inputSpan = document.createElement("span");
        inputSpan.setAttribute("id", _dataInput);
        inputSpan.setAttribute("class", "input");
        // inputSpan.addEventListener("click", () => { checkInput(_dataInput); });
        let output = "";
        for (let i = 0; i < _dataInput.length; i++) {
            output += '_';
        }
        inputSpan.innerHTML = output;
        // text.appendChild(inputSpan);
        return inputSpan;
    }
    function showAllWords(allWords) {
        let wordsDiv = document.getElementById("words");
        wordsDiv.setAttribute("id", "allWords");
        let wordsRandArray = allWords;
        wordsRandArray.sort(() => .5 - Math.random());
        for (let i = 0; i < wordsRandArray.length; i++) {
            let thisWord = document.createElement("p");
            if (i == 0) {
                thisWord.innerHTML = wordsRandArray[i].input;
            }
            else {
                thisWord.innerHTML = wordsRandArray[i].input;
            }
            thisWord.addEventListener("click", () => checkInput(wordsRandArray[i].input, false));
            wordsDiv.appendChild(thisWord);
        }
    }
    function addClickEvents() {
        let spans = document.querySelectorAll("span");
        spans.forEach(spans => {
            spans.addEventListener("click", () => checkInput(spans.id, true));
        });
    }
    let string1 = "leer";
    let string2 = "leer";
    function checkInput(_dataInput, isInText) {
        // console.log("Checking input");
        // console.log(_dataInput);
        if (isInText) {
            string1 = _dataInput;
        }
        else {
            string2 = _dataInput;
        }
        console.log("string1: " + string1);
        console.log("string2: " + string2);
        if (string1 == string2) {
            let inputSpan = document.getElementById(string1);
            inputSpan.innerHTML = string1;
            inputSpan.classList.add("bold");
            inputSpan.classList.remove("input");
            string1 = "leer";
            string2 = "leer";
        }
        if (string2 != "leer") {
            string1 = "leer";
            string2 = "leer";
            // console.log("string1: " + string1);
            // console.log("string2: " + string2);
        }
    }
    // reload the page (to restart the game)
    function returnToStart() {
        window.open("../Startseite/Startseite.html", "_self");
    }
})(cloze || (cloze = {}));
//# sourceMappingURL=lueckentext.js.map