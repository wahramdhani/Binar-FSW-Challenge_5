class Player {
    constructor (rock, paper, scissors) {
        this.rock = rock;
        this.paper = paper;
        this.scissors = scissors;
    }
}

class Com {
    constructor (choice) {
        this.choice = choice
    }
}

class Label {
    constructor (sign, win, lose, draw) {
        this.sign = sign;
        this.win = win;
        this.lose = lose;
        this.draw = draw;
    }
}

const playerOne = new Player (
    document.querySelector(".rock"),
    document.querySelector(".paper"),
    document.querySelector(".scissors")
);

const computer = new Com (
    document.querySelectorAll(".com-choice")
);

const label = new Label (
    document.querySelector(".game-label h1:nth-child(1)"),
    document.querySelector(".game-label h1:nth-child(2)"),
    document.querySelector(".game-label h1:nth-child(3)"),
    document.querySelector(".game-label h1:nth-child(4)")
)

function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random(choice) * 3);

if (randomChoice === 0 ) {
    computer.choice.item(0).style.backgroundColor = "#C4C4C4";
    computer.choice.item(0).style.backgroundColor = "#30px";
    computer.choice.item(1).style.backgroundColor = "transparent";
    computer.choice.item(2).style.backgroundColor = "transparent";
    }

else if (randomChoice === 1 ) {
    computer.choice.item(1).style.backgroundColor = "#C4C4C4";
    computer.choice.item(1).style.backgroundColor = "#30px";
    computer.choice.item(0).style.backgroundColor = "transparent";
    computer.choice.item(2).style.backgroundColor = "transparent";
    }

else {
    computer.choice.item(2).style.backgroundColor = "#C4C4C4";
    computer.choice.item(2).style.backgroundColor = "#30px";
    computer.choice.item(0).style.backgroundColor = "transparent";
    computer.choice.item(1).style.backgroundColor = "transparent";
    }
    return choice[randomChoice]
}


function win() {
    label.sign.style.display = "none";
    label.win.removeAttribute ("style");
    label.lose.style.display = "none";
    label.draw.style.display = "none";
}

function lose() {
    label.sign.style.display = "none";
    label.lose.removeAttribute ("style");
    label.win.style.display = "none";
    label.draw.style.display = "none";
}

function draw() {
    label.sign.style.display = "none";
    label.draw.removeAttribute ("style");
    label.lose.style.display = "none";
    label.win.style.display = "none";
}

function game(playerOne) {
    const comChoice = getComputerChoice ();
if (playerOne === "rock" && comChoice  === "scissors") {
    return win();
}

else if (playerOne === "paper" && comChoice  === "rock") {
    return win();
}

else if (playerOne === "scissors" && comChoice  === "paper") {
    return win();
}

else if (comChoice  === "rock" && playerOne === "scissors") {
    return lose();
}

else if (comChoice  === "paper" && playerOne === "rock") {
    return lose();
}

else if (comChoice  === "scissors" && playerOne === "paper") {
    return lose();
}

else if (playerOne === comChoice ) {
    return draw ();
}

}

playerOne.rock.addEventListener("click", () => {
    document.getElementById("rock1").style.backgroundColor  = "#C4C4C4";
    document.getElementById("rock1").style.backgroundColor  = "30px";
    document.getElementById("paper1").style.backgroundColor = "transparent";
    document.getElementById("scissors1").style.backgroundColor = "transparent";
    return game("rock")
})

playerOne.paper.addEventListener("click", () => {
    document.getElementById("paper1").style.backgroundColor  = "#C4C4C4";
    document.getElementById("paper1").style.backgroundColor  = "30px";
    document.getElementById("rock1").style.backgroundColor = "transparent";
    document.getElementById("scissors1").style.backgroundColor = "transparent";
    return game("paper")
})

playerOne.scissors.addEventListener("click", () => {
    document.getElementById("scissors1").style.backgroundColor  = "#C4C4C4";
    document.getElementById("scissors1").style.backgroundColor  = "30px";
    document.getElementById("paper1").style.backgroundColor = "transparent";
    document.getElementById("rock1").style.backgroundColor = "transparent";
    return game("scissors")
})

document.getElementById("refresh-icon").addEventListener("click", () => {
    document.getElementById("rock1").style.backgroundColor = "transparent";
    document.getElementById("paper1").style.backgroundColor = "transparent";
    document.getElementById("scissors1").style.backgroundColor = "transparent";
    label.lose.style.display = "none";
    label.sign.removeAttribute ("style");
    label.win.style.display = "none";
    label.draw.style.display = "none";
    const nodeList = document.querySelectorAll(".com-choice");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "transparent";
}
    
})


