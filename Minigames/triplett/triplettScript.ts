namespace triplettGame {

    // window.addEventListener("load", handleLoad);

    interface Card {
        src: string;
        src2: string;
        src3: string;
    }

    let pairs: number = 6;
    let turnedCards: number = 0;
    let wonPairs: number = 0;
    let clickBoolean: boolean = true;

    let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
    startButton.addEventListener("click", createCards);

    //array for comparing cards
    let cardArray: HTMLDivElement[] = [];
    //array for comparing Cards
    let compareArray: HTMLDivElement[] = [];

    let jsonFile: RequestInfo = new URLSearchParams(window.location.search).get("json");
    getThema(jsonFile.toString());

    let description: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("description");

    async function getThema(thema: string): Promise<void> {

        try {
            const response: Response = await fetch("text" + thema);
            if (!response.ok) {
                throw new Error("Fehler beim Abrufen der Daten");
            }
            let data: Text[] = await response.json();
            description.innerHTML = data[0].text;
            console.log(data);
        } catch (error) {
            // console.log("Fehler beim Abrufen der Daten");
        }
    }

    async function getData(_url: RequestInfo): Promise<Card[]> {
        let response: Response = await fetch(_url);
        let data: Card[] = await response.json();
        return data;
    }

    //cards are created
    async function createCards(_event: MouseEvent): Promise<void> {

        let cards: Card[] = await getData(jsonFile); //katrin fragen was in Klammer kommt
        //make button invisible and create gameboard

        pairs = cards.length;
        console.log("pairs: " + pairs);

        let gameBoard: HTMLDivElement = <HTMLDivElement>document.getElementById("gameBoard");
        gameBoard.innerHTML = " ";
        gameBoard.setAttribute("class", "gameGrid");

        let id: number = 0;

        //create the cards
        for (let card of cards) {

            //div wird erstellt
            for (let i: number = 0; i < 3; i++) {
                let div: HTMLDivElement = document.createElement("div");
                let pText: HTMLParagraphElement = document.createElement("p");
                let str: string = "";
                if (i === 0) {
                    str = card.src;
                } else if (i === 1) {
                    str = card.src2;
                } else {
                    str = card.src3;
                }
                const containsJPG = /\.jpg$/i.test(str);
                const containsPNG = /\.png$/i.test(str);

                if (containsJPG || containsPNG) {
                    let img: HTMLImageElement = document.createElement("img");
                    img.src = str;
                    div.appendChild(img);
                    console.log("Contains JPG or PNG");
                    //back Klasse wird hinzugefügt 

                } else {
                    pText.innerText = str;
                    div.appendChild(pText);
                    console.log("Contains JPG or PNG");
                    //back Klasse wird hinzugefügt 

                }

                //back Klasse wird hinzugefügt 
                div.setAttribute("class", "back");
                div.setAttribute("pairID", id.toString());
                div.addEventListener("click", chooseCard);
                cardArray.push(div);
            }
            id++;
        }
        console.log(cardArray);

        while (cardArray.length > 0) {
            let index: number = Math.floor(Math.random() * cardArray.length);
            gameBoard.appendChild(cardArray.splice(index, 1)[0]);
        }

    } //createCards end

    //cards are clicked
    function chooseCard(_event: MouseEvent): void {
        if (clickBoolean == true) {
            if (_event.target instanceof HTMLImageElement != true) {
                let clickedCard: HTMLDivElement = <HTMLDivElement>_event.target;
                if (clickedCard != compareArray[0]) {
                    clickedCard.setAttribute("class", "front");
                    clickedCard.classList.remove("back");
                    turnedCards++;

                    compareArray.push(clickedCard); //push clickedCard.name
                    // console.log(turnedCards);
                    if (turnedCards == 3) {
                        clickBoolean = false;
                        setTimeout(compareCards, 2500);
                        // window.onclick = compareCards;
                    }
                    console.log(compareArray);
                }
            }

        }

    }//end chooseCards

    //cards are being compared
    function compareCards(): void {
        // console.log("comparing");
        clickBoolean = true;
        //if it's a match, cards become invisible
        if (compareArray[0].getAttribute("pairID") == compareArray[1].getAttribute("pairID") && compareArray[1].getAttribute("pairID") == compareArray[2].getAttribute("pairID")) {
            console.log("correct pair!");
            compareArray[0].setAttribute("class", "isHidden");
            compareArray[0].classList.remove("front");
            compareArray[1].setAttribute("class", "isHidden");
            compareArray[1].classList.remove("front");
            compareArray[2].setAttribute("class", "isHidden");
            compareArray[2].classList.remove("front");
            turnedCards = 0;
            wonPairs++;
            console.log("won" + wonPairs);
            compareArray.length = 0;
            //if also won:
            if (wonPairs == pairs) {
                // document.getElementById("gameBoard").innerHTML = " ";
                //message for win
                let congrats: HTMLParagraphElement = document.createElement("p");
                congrats.innerHTML = "Juhu, geschafft";
                document.getElementById("gameBoard").appendChild(congrats);

                // document.getElementById("gameBoard").innerHTML = "Juhu, geschafft!";
                //create reload button
                let neustart: HTMLButtonElement = document.createElement("button");
                neustart.innerHTML = "Neustart";
                document.getElementById("gameBoard").appendChild(neustart);
                neustart.addEventListener("click", function (): void {
                    window.location.reload();
                });

            }

        } else { //if no match, then cards show back again
            compareArray[0].setAttribute("class", "back");
            compareArray[0].classList.remove("front");
            compareArray[1].setAttribute("class", "back");
            compareArray[1].classList.remove("front");
            compareArray[2].setAttribute("class", "back");
            compareArray[2].classList.remove("front");
            turnedCards = 0;
            compareArray.length = 0;
        }
    }//end compareCards



} //end namespace