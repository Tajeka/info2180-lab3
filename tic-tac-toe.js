const game = document.querySelector("#game");

window.addEventListener("load", (event) => {
  // Insert code here

  let board = document.getElementById("board");

  let div = board.childNodes;
  changeClass();

  function changeClass() {
    for (let i = 0; i < div.length; i++) {
      div[i].className = "square";
    }
  } 

  const sq = document.querySelectorAll(".square");

  let c = 0;
  for (let i = 0; i < sq.length; i++) {
    sq[i].addEventListener("click", (e) => {
      if (c % 2 == 0) {
        e.target.classList.add("X");
        sq[i].textContent = "X";
        c++;
      } else {
        e.target.classList.add("O");
        sq[i].textContent = "O";
        c++;
      }
    });
  };


});