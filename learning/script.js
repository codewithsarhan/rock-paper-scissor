let userScore = 0;
let compScore = 0;
let choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorer = document.querySelector("#user-score");
let compScorer = document.querySelector("#comp-score");

let compUser = () => {
  let options = ["rock", "paper", "scissor"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let drawGame = () => {
  console.log("Game Draw NoBody Is Winner");
  msg.innerText = "Draw Game";
};

let winner = (userwin) => {
  if (userwin) {
    userScore++;
    userScorer.innerText = userScore;
    console.log("User Win");
    msg.innerText = "You Winner";
  } else {
    compScore++;
    compScorer.innerText = compScore;
    console.log("User Loose");
    msg.innerText = "You Looose";
  }
};

let playgame = (myUserChoice) => {
  console.log("You Choose : ", myUserChoice);

  let compChoose = compUser();

  console.log("You Choose :", compChoose);

  if (myUserChoice === compChoose) {
    drawGame();
  } else {
    let userwin = true;

    if (myUserChoice === "rock") {
      userwin = compChoose === "paper" ? true : false;
    } else if (myUserChoice === "paper") {
      userwin = compChoose === "scissor" ? true : false;
    } else {
      userwin = compChoose === "rock" ? true : false;
    }

    winner(userwin);
  }
};

choice.forEach((myUserChoice) => {
  myUserChoice.addEventListener("click", () => {
    let user = myUserChoice.getAttribute("id");
    playgame(user);
  });
});
