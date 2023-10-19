const game = document.querySelector("#game");

window.addEventListener("load", (event) => {
  let board = document.getElementById("board");

  let div = board.childNodes;
  changeClass();

  function changeClass() {
    for (let i = 0; i < div.length; i++) {
      div[i].className = "square";
    }
  }

  const sq = document.querySelectorAll(".square");

  let winner_status = document.getElementById("status");

  let c = 0;
  for (let i = 0; i < sq.length; i++) {
    sq[i].addEventListener("click", (e) => {
      if (
        winner_status.textContent != `Congratulations! O is the Winner!` &&
        winner_status.textContent != `Congratulations! X is the Winner!`
      ) {
        if (c % 2 == 0) {
          if (e.target.textContent == "") {
            e.target.classList.add("X");
            sq[i].textContent = "X";
            c++;
            winner();
          }
        } else {
          if (e.target.textContent == "") {
            e.target.classList.add("O");
            sq[i].textContent = "O";
            c++;
            winner();
          }
        }
      }
    });
  }

  sq.forEach(function (elem) {
    elem.addEventListener("mouseover", function (e) {
      e.target.classList.add("hover");
    });

    elem.addEventListener("mouseout", function (e) {
      e.target.classList.remove("hover");
    });
  });

  const winner_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function winner() {
    let x = "";
    let y = "";
    let z = "";

    winner_combination.forEach((c) => {
      if (sq[c[0]].hasChildNodes()) {
        x = sq[c[0]].childNodes[0].textContent;
      } else {
        x = "";
      }
      if (sq[c[1]].hasChildNodes()) {
        y = sq[c[1]].childNodes[0].textContent;
      } else {
        y = "";
      }
      if (sq[c[2]].hasChildNodes()) {
        z = sq[c[2]].childNodes[0].textContent;
      } else {
        z = "";
      }
      if (z !== "" && y !== "" && x !== "") {
        if (x == y && x == z) {
          // Winner
          let w = document.getElementById("status");
          w.textContent = `Congratulations! ${x} is the Winner!`;
          w.classList.add("you-won");
        }
      }
    });
  }

  //
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function reset() {
    document.getElementById("status").textContent =
      "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");
    sq.forEach((e) => {
      e.classList.remove("X");
      e.classList.remove("O");
      e.textContent = "";
    });
  });
});
