let sign = "circle";
let message = "";
let count = 0;
const tictactoes = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];
let o = [];
let x = [];
$(".square").click(function () {
  count++;

  $("#play").text($("#play").text() == "O" ? "X" : "O");
  $(this).children().toggleClass(sign);
  $(this).off("click");
  if (sign == "circle") {
    o.push(Number(this.id));
  } else if (sign == "fa fa-times") {
    x.push(Number(this.id));
  }
  isTicTacToe(sign, count);
  sign = sign === "circle" ? "fa fa-times" : "circle";
});

function isTicTacToe(sign, count) {
  let draw = false;
  let won = false;
  if (sign == "circle") {
    tictactoes.forEach((tictactoe) => {
      let same = 0;
      for (let i = 0; i < o.length; i++) {
        if (tictactoe.includes(o[i])) {
          same++;
        }
      }
      if (same == 3) won = true;
      if (count == 9 && !won) draw = true;
    });
    if (won) messageAlert("won", "O");
    else if (draw) messageAlert("draw");
  } else if (sign == "fa fa-times") {
    tictactoes.forEach((tictactoe) => {
      let same = 0;
      for (let i = 0; i < x.length; i++) {
        if (tictactoe.includes(x[i])) {
          same++;
        }
      }
      if (same == 3) won = true;
      if (count == 9 && !won) draw = true;
    });
    if (won) messageAlert("won", "X");
    else if (draw) messageAlert("draw");
  }
}

function messageAlert(message, value = "") {
  if (message == "won") {
    $(".message-header").children().text(`Playar ${value} won`);
    $(".container-message").toggleClass("active");
  } else if (message == "draw") {
    $(".message-header").children().text("DRAW");
    $(".container-message").toggleClass("active");
  }
}

function reset() {
  location.reload();
}
