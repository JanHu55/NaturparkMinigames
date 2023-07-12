namespace memoryGame {

    
    interface Card {
        type: string;
        src: string;
        src2: string;
    }

    let pairs: number;
    let turnedCards: number = 0;
    let wonPairs: number = 0;
    let clickBoolean: boolean = true;

    // let startButton: HTMLButtonElement;
    
    //array for all cards (empty after cards are on gameboard)
    let cardArray: HTMLDivElement[] = [];
    //array for comparing Cards
    let compareArray: HTMLDivElement[] = [];
    
    let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
    startButton.addEventListener("click", createCards);

    // window.addEventListener("load", handleLoad);
    let jsonFile: RequestInfo = new URLSearchParams(window.location.search).get("json");
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

        pairs = cards.length;
        console.log("pairs" + pairs);

        //make button invisible and create gameboard
        let gameBoard: HTMLDivElement = <HTMLDivElement>document.getElementById("gameBoard");
        gameBoard.innerHTML = " ";
        gameBoard.setAttribute("class", "gameGrid");

        let id: number = 0;

        //create the cards
        for (let card of cards) {
            //div wird erstellt
            for (let i: number = 0; i < 2; i++) {
                let div: HTMLDivElement = document.createElement("div");
                //back Klasse wird hinzugefügt
                let str: string = "";
                if (i === 0) {
                    str = card.src;
                } else {
                    str = card.src2;
                }
                const containsJPG = /\.jpg$/i.test(str);
                const containsPNG = /\.png$/i.test(str);

                if (containsJPG || containsPNG) {
                    let img: HTMLImageElement = document.createElement("img");
                    img.src = str;
                    div.appendChild(img);
                    console.log("Contains JPG or PNG");
                } else {
                    div.innerHTML = str;
                }

                // div.style.width = "100px"; //in css machen
                // div.style.height = "100px";
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
                if (clickedCard != compareArray[0] && clickedCard != compareArray[1]) {
                    clickedCard.setAttribute("class", "front");
                    clickedCard.classList.remove("back");
                    turnedCards++;
                    compareArray.push(clickedCard); //push clickedCard.name
                    // console.log(turnedCards);
                    if (turnedCards == 2) {
                        clickBoolean = false;
                        setTimeout(() => { compareCards(); }, 2000);
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
        if (compareArray[0].getAttribute("pairID") == compareArray[1].getAttribute("pairID")) {
            compareArray[0].setAttribute("class", "isHidden");
            compareArray[0].classList.remove("front");
            compareArray[1].setAttribute("class", "isHidden");
            compareArray[1].classList.remove("front");
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
                neustart.innerHTML = "Startseite";
                document.getElementById("gameBoard").appendChild(neustart);
                neustart.addEventListener("click", function (): void {
                    window.open("../Startseite/Uebersicht.html", "_self");
                });

            }
        }
        else { //if no match, then cards show back again
            compareArray[0].setAttribute("class", "back");
            compareArray[0].classList.remove("front");
            compareArray[1].setAttribute("class", "back");
            compareArray[1].classList.remove("front");
            turnedCards = 0;
            compareArray.length = 0;

        }

    }//end compareCards
} //end namespace