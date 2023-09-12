const container = document.querySelector(".container");
const box = document.querySelector(".box");
const winnerEle = document.querySelector(".msg");
const btnReset = document.querySelector(".btn-reset");

let tictactoeArr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const players = {
  playerOne: {
    activeStatus: true,
    sign: "X",
  },
  playerTwo: {
    activeStatus: false,
    sign: "0",
  },
};
const checkWin = (activePlayer) => {
  // for rows
  for (let row = 0; row < 3; row++) {
    if (
      tictactoeArr[row][0] === players[activePlayer]["sign"] &&
      tictactoeArr[row][1] === players[activePlayer]["sign"] &&
      tictactoeArr[row][2] === players[activePlayer]["sign"]
    ) {
      return activePlayer; // Player has won along this row
    }
  }
  // for column
  for (let col = 0; col < 3; col++) {
    if (
      tictactoeArr[0][col] === players[activePlayer]["sign"] &&
      tictactoeArr[1][col] === players[activePlayer]["sign"] &&
      tictactoeArr[2][col] === players[activePlayer]["sign"]
    ) {
      return activePlayer; // Player has won along this column
    }
  }
  // // for digonals
  if (
    tictactoeArr[0][0] === players[activePlayer]["sign"] &&
    tictactoeArr[1][1] === players[activePlayer]["sign"] &&
    tictactoeArr[2][2] === players[activePlayer]["sign"]
  ) {
    return activePlayer; // Player has won along the main diagonal
  }

  if (
    tictactoeArr[0][2] === players[activePlayer]["sign"] &&
    tictactoeArr[1][1] === players[activePlayer]["sign"] &&
    tictactoeArr[2][0] === players[activePlayer]["sign"]
  ) {
    return activePlayer; // Player has won along the other diagonal
  }
};
const changePlayer = () => {
  let activePlayer;
  if (players["playerOne"]["activeStatus"] == true) {
    activePlayer = "playerOne";
    players["playerOne"]["activeStatus"] = false;
    players["playerTwo"]["activeStatus"] = true;
    return activePlayer;
  } else {
    activePlayer = "playerTwo";
    players["playerTwo"]["activeStatus"] = false;
    players["playerOne"]["activeStatus"] = true;
    return activePlayer;
  }
};

const insertSign = (e, activePlayer) => {
  e.target.innerHTML = players[activePlayer]["sign"];

  let array = [...e.target.classList];
  let index = e.target.classList[2];

  if (array.includes("rowOne")) {
    tictactoeArr[0][index] = players[activePlayer]["sign"];
  } else if (array.includes("rowTwo")) {
    tictactoeArr[1][index] = players[activePlayer]["sign"];
  } else if (array.includes("rowThree")) {
    tictactoeArr[2][index] = players[activePlayer]["sign"];
  }
};
const ticTacToe = (e) => {
  const activePlayer = changePlayer();

  insertSign(e, activePlayer);

  const winner = checkWin(activePlayer);

  if (winner) {
    winnerEle.innerHTML = `${players[activePlayer]["sign"]} Won The Game 👏🎉`;
    container.removeEventListener("click", ticTacToe);
  }
};
container.addEventListener("click", ticTacToe);
btnReset.addEventListener("click", function (e) {
  location.reload();
});
