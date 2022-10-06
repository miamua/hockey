"use strict";
let addPlayer = document.querySelector("#playerInput");
let addPlayerBtn = document.querySelector("#addPlayerBtn");
let playerListA = document.querySelector("#playerListA");
let playerListB = document.querySelector("#playerListB");

let remove = (event) => {
    event.target.parentElement.remove();
};

let change = (event) => {
    event.target.parentElement.text();
}


addPlayerBtn.addEventListener("click", () => {
    let totalPlayerA = document.querySelectorAll("#playerListA li");
    let totalPlayerB = document.querySelectorAll("#playerListB li");

    if (totalPlayerA.length < 5) {
        let input = addPlayer.value;
        let playerLi = document.createElement("li");
        playerLi.innerText = input;

        let removePlayer = document.createElement("button");
        removePlayer.innerText = "Delete";
        removePlayer.addEventListener("click", remove);

        let changeTeam = document.createElement("button");
        changeTeam.innerText = "Change Team";

        playerLi.append(removePlayer);
        playerListA.append(playerLi);
        playerLi.append(changeTeam);

        changeTeam.addEventListener("click", () => {
            let checkPlayerBamount = document.querySelectorAll("#playerListB li")
            if (checkPlayerBamount.length < 5) {
                playerListB.append(playerLi);
            }
        });



    } else if (totalPlayerB.length < 5) {
        let input = addPlayer.value;
        let playerLi = document.createElement("li");
        playerLi.innerText = input;

        let removePlayer = document.createElement("button");
        removePlayer.innerText = "Delete";
        removePlayer.addEventListener("click", remove);

        let changeTeam = document.createElement("button");
        changeTeam.innerText = "Change Team";

        playerLi.append(removePlayer);
        playerListB.append(playerLi);
        playerLi.append(changeTeam);

        changeTeam.addEventListener("click", () => {
            let checkPlayerAamount = document.querySelectorAll("#playerListA li")
            if (checkPlayerAamount.length < 5) {
                playerListA.append(playerLi);
            }
        });

    } else {
        alert("Too many player!!");
    }
});



let changeButtonA = document.querySelector("#changeTeamNameA");
let changeButtonB = document.querySelector("#changeTeamNameB");
let teamNameAH2 = document.querySelector("#teamNameA");
let teamNameBH2 = document.querySelector("#teamNameB");
let valueA = document.querySelector("#teamNameInputA");
let valueB = document.querySelector("#teamNameInputB");


changeButtonA.addEventListener("click", () => {
    let input = valueA.value;
    teamNameAH2.innerText = input;
});


changeButtonB.addEventListener("click", () => {
    let input = valueB.value;
    teamNameBH2.innerText = input;
});

