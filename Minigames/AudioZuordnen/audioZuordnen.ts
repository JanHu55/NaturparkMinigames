namespace audioZuordnen {
    // import FudgeCore;

    interface Audio {
        src: string;
        pairID: number;
        type: string;
    }

    interface Cards {
        src: string;
        pairID: number;
        name: string;
    }

    let correctPairs: number = 0;

    let feedbackMsg: HTMLElement = <HTMLElement>document.getElementById("feedbackMsg");

    let buttDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("backButton")
    let backButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    backButton.innerHTML = "Startseite";
    // Back to the main game/ reload page
    backButton.addEventListener("click", returnToStart);
    buttDiv.append(backButton);

    let audioArr: HTMLAudioElement[] = [];

    // id for the HTML Table Cards to put the images in
    let idCount: number = 1;

    async function getJson(_url1: RequestInfo, _url2: RequestInfo): Promise<void> {

        let response1: Response = await fetch(_url1);
        let dataAudio1: Audio[] = await response1.json();

        let response2: Response = await fetch(_url2);
        let dataAudio2: Cards[] = await response2.json();

        let cardsArray1: Audio[] = [];
        let cardsArray2: Cards[] = [];

        for (let i = 0; i < dataAudio1.length; i++) {

            cardsArray1.push(dataAudio1[i]);
            cardsArray2.push(dataAudio2[i]);

        }

        while (cardsArray1.length > 5) {
            let ranNum: number = Math.floor(Math.random() * cardsArray1.length);
            console.log("PairID: " + cardsArray1[ranNum].pairID)
            console.log("PairID: " + cardsArray2[ranNum].pairID)
            cardsArray1.splice(ranNum, 1);
            cardsArray2.splice(ranNum, 1);
        }

        console.log("Länge1: " + cardsArray1.length);
        console.log("Länge2: " + cardsArray2.length);


        // randomize the array so the pairs will be placed random
        cardsArray1.sort(() => .5 - Math.random());
        cardsArray2.sort(() => .5 - Math.random());

        fillCards(cardsArray1, cardsArray2);

    }


    // get data from .json files (later from databank)
    let jsonAudio: RequestInfo = new URLSearchParams(window.location.search).get("jsonAudio");
    let jsonBilder: RequestInfo = new URLSearchParams(window.location.search).get("jsonBilder");
    getJson(jsonAudio, jsonBilder);

    getThema(jsonAudio.toString());

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

    }

    // implement the cards and audio data in the table 
    function fillCards(_cardsArray1: Audio[], _cardsArray2: Cards[]): void {

        for (let i: number = 0; i < _cardsArray1.length; i++) {

            // let audioSlots: HTMLElement = <HTMLElement>document.getElementById(_cardsArray1[i].pairID.toString());
            let audioSlots: HTMLElement = <HTMLElement>document.getElementById(idCount.toString());
            let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

            // Audio Cards
            let audio: HTMLAudioElement = <HTMLAudioElement>document.createElement("audio");

            audio.setAttribute("src", _cardsArray1[i].src);
            // audio.setAttribute("name", _cardsArray1[i].pairID.toString());
            audio.setAttribute("type", _cardsArray1[i].type);
            audioArr.push(audio);

            div.appendChild(audio);
            // audioSlots.appendChild(div);

            // button for audio selection
            let buttAudio: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
            buttAudio.addEventListener("click", (e) => playAudio(audio, e));

            buttAudio.classList.add("buttAudio");
            div.appendChild(buttAudio)


            let button = document.createElement("button");

            button.innerText = "Auswählen";
            button.setAttribute("name", _cardsArray1[i].pairID.toString());
            button.setAttribute("class", "selAudio");

            button.addEventListener("click", compareSelection);


            div.appendChild(button);
            audioSlots.appendChild(div);


            //Image Cards
            let imgSlots: HTMLElement = <HTMLElement>document.getElementById("1." + idCount.toString());
            let img: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            let divImg: HTMLDivElement = <HTMLDivElement>document.createElement("div");

            img.setAttribute("src", _cardsArray2[i].src);
            img.setAttribute("width", "105px");

            img.setAttribute("name", _cardsArray2[i].pairID.toString());
            img.classList.add("selImage");

            img.addEventListener("click", compareSelection);
            divImg.appendChild(img);

            let imgName: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
            imgName.innerHTML = _cardsArray2[i].name;
            imgName.classList.add("subText");

            
            divImg.appendChild(imgName);
            divImg.innerHTML += i + 1 + ".";
            imgSlots.appendChild(divImg);
            idCount++;
        }

    }

    function playAudio(_audio: HTMLAudioElement, _event: Event): void {

        let btn: HTMLButtonElement = <HTMLButtonElement>_event.target;
        if (btn.classList.contains("playing")) {
            btn.classList.remove("playing");
            _audio.pause();
        } else {
            let playing = document.getElementsByClassName("playing")[0];
            if (playing != null) {
                playing.classList.remove("playing");
                audioArr.forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            }
            _audio.currentTime = 0;
            _audio.play();
            btn.classList.add("playing");
        }
    }

    let imageSelected: boolean;
    let pickedArr: string[] = [];
    let pickedButt: HTMLButtonElement;
    let pickedImg: HTMLImageElement;

    function compareSelection(_event: Event): void {

        // vorrübergehende Lösung
        if (pickedArr.length == 0) {
            removeSelection();
            removeFalseClass();
        }

        let picked: HTMLElement = <HTMLElement>_event.target;
        let pickedTD: HTMLElement = picked.parentElement;

        if (picked.classList.contains("done") == false) {

            pickedTD.classList.add("pickedParent");
            //select button if a button is clicked
            if (picked.classList.contains("selAudio") == true && imageSelected != false) {

                imageSelected = false;
                pickedButt = <HTMLButtonElement>_event.target;
                pickedButt.classList.add("picked");
                pickedArr.push(pickedButt.name);

                console.log("pickedID: " + pickedButt.name + " (button)");

            } else if (picked.classList.contains("selAudio") == true && imageSelected == false) {

                pickedArr.pop();
                pickedButt = <HTMLButtonElement>_event.target;
                removeSelection();

                pickedButt.classList.add("picked");
                pickedArr.push(pickedButt.name);

                console.log("pickedID: " + pickedButt.name + " (button)");
            }


            //select image if an image is clicked
            if (picked.classList.contains("selImage") == true && imageSelected != true) {

                imageSelected = true;
                pickedImg = <HTMLImageElement>_event.target;
                pickedImg.classList.add("picked");
                pickedArr.push(pickedImg.name);

                console.log("pickedID: " + pickedImg.name + " (image)");

            } else if (picked.classList.contains("selImage") == true && imageSelected == true) {

                pickedArr.pop();
                pickedImg = <HTMLImageElement>_event.target;
                removeSelection();

                pickedImg.classList.add("picked");
                pickedArr.push(pickedImg.name);

                console.log("pickedID: " + pickedImg.name + " (image)");

            }


            console.log("pickedArr: " + pickedArr);

            if (pickedArr.length == 2) {

                // console.log("Start Comparing");

                if (pickedArr[0] == pickedArr[1]) {

                    console.log("Correct pair");

                    correctPairs++;

                    let pickedClass: HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("picked");
                    let pickedImgClass: HTMLCollectionOf<HTMLImageElement> = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName("picked");

                    for (let i: number = 0; i < pickedClass.length; i++) {

                        let parentDiv: HTMLDivElement = <HTMLDivElement>pickedClass[0].parentElement;
                        parentDiv.classList.add("done");
                        pickedClass[0].classList.remove("picked");
                        if (pickedImgClass.length != 0) {
                            // !!!!!!!!!!!!!!!!!  We have a problem here !!!!!!!!!!!!!!!!!!!!!!!!
                            // yo, I don't understand it but this seems to work
                            let parentTdImg: HTMLElement = <HTMLElement>pickedClass[0].parentElement;
                            parentTdImg.classList.add("done");
                            pickedImgClass[0].classList.remove("picked");
                            // console.log("correct but wrong");

                        }
                        console.log("correct pair marked");
                    }

                    // check if all pairs were found
                    if (correctPairs == 5) {

                        console.log("You won!");
                        feedbackMsg.innerText = "Du hast gewonnen!";

                    } else {

                        console.log("Correct")
                        feedbackMsg.innerText = "Richtig, gut gemacht!";
                    }

                } else {

                    console.log("Incorrect!");
                    feedbackMsg.innerText = "Leider falsch!";

                    addFalseClass();
                    // removeSelection();
                }
                pickedArr = [];
                imageSelected = undefined;
            }
        } else {
            feedbackMsg.innerText = "Ist bereits richtig!";
        }
    }

    function removeSelection(): void {

        let pickedClass: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("picked");
        let pickedImgClass: HTMLCollectionOf<HTMLImageElement> = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName("picked");

        for (let i: number = 0; i < pickedClass.length; i++) {

            let pickedParent: HTMLElement = pickedClass[0].parentElement;
            pickedParent.classList.remove("pickedParent");
            pickedClass[0].classList.remove("picked");

            if (pickedImgClass.length != 0) {
                let pickedImgParent: HTMLDivElement = <HTMLDivElement>pickedImgClass[0].parentElement;
                pickedImgParent.classList.remove("pickedParent");
                pickedImgClass[0].classList.remove("picked");
            }

            console.log("Selections removed!");
        }
    }

    function addFalseClass(): void {

        let pickedClass: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("picked");
        let pickedImgClass: HTMLCollectionOf<HTMLImageElement> = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByClassName("picked");

        for (let i: number = 0; i < pickedClass.length; i++) {

            let pickedParent: HTMLElement = pickedClass[0].parentElement;
            pickedParent.classList.add("falseParent");
            pickedParent.classList.remove("pickedParent");
            pickedClass[0].classList.remove("picked");

            if (pickedImgClass.length != 0) {
                let pickedImgParent: HTMLDivElement = <HTMLDivElement>pickedImgClass[0].parentElement;
                pickedImgParent.classList.add("falseParent");
                pickedImgParent.classList.remove("pickedParent");
                pickedImgClass[0].classList.remove("picked");
            }

            console.log("Selections removed!");
        }

    }

    function removeFalseClass(): void {

        let falseParents: HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("falseParent");
        let falseImg = document.querySelectorAll(".falseParent>img");
        console.log(falseImg.length);
        for (let i: number = 0; i < falseParents.length; i++) {

            falseParents[0].classList.remove("falseParent");
            if (falseImg.length != 0) {
                let falseImgParent = <HTMLDivElement>falseImg[0].parentElement;
                falseImgParent.classList.remove("falseParent");
                console.log("False removed!!!!!!!!!!!!!!!!!!!!!!!");
            }

        }

    }

    function returnToStart(): void {

        window.open("../Startseite/Uebersicht.html", "_self");
    }
}