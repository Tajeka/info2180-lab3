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
});