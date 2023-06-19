const currentPlayer = document.querySelector(".currentPlayer");

let selected = [];
let player = "X";

let positions = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

function init() {
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  //inicializa todos os botoes com vazio
  document.querySelectorAll(".game button").forEach((item)=>{
    item.innerHTML = "";
    //evento click chama um movimento novo
    item.addEventListener("click", newMove);
  })
}

init();

function newMove(e) {
  //pega o atributo data i
  const index = e.target.getAttribute("data-i");
  //passa para a informacao do player
  e.target.innerHTML = player;
  //impede click duplo no mesmo index
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(()=>{
    check();
  }, [100]);

  player = player ==="X" ? "O" : "X";
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
  .map((item, i)=>[item,i])
  .filter((item) => item[0] === playerLastMove)
  .map((item) => item[1]);

  for(pos of positions){
    if(pos.every((item)=> items.includes(item))){
      alert("O JOGADOR '"+ playerLastMove + "' GANHOU!")
      setTimeout(() => {
        location.reload(); // Reinicia a página
      }, 10);
      return;
    }
  }
  
  if(selected.filter((item)=>item).lengh == 9){
    alert("EMPATOU!");
    setTimeout(() => {
      location.reload(); // Reinicia a página
    }, 10);
    return;
  }


}