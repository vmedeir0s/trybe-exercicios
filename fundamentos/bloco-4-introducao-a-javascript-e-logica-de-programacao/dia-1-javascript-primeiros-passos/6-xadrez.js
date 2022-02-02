let peca = "CAvaLOa";

switch (peca.toLowerCase()){
  case "peão":
    console.log("Peão -> Linha reta (vertical)");
    break;
  case "torre":
    console.log("Torre -> Linhas retas(Vertical e Horizontal");
    break;
  case "cavalo":
    console.log("Cavalo -> Movimento em L, ou uma casa na vertical e uma a frente");
    break;
  case "bispo":
    console.log("Bispo -> Movimento em Diagonal");
    break;
  case "rainha":
    console.log("Rainha -> Movimentos Verticais, Horizontais, Diagonais");
    break;
  case "rei":
    console.log("Rei -> Anda apenas uma casa em qualquer direção");
    break;
  default:
    console.log("Peça invalida, tente outra"); 
}

  
