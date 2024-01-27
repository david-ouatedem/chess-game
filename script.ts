import { a1, a2 } from "./document";
class Pawn {
  create() {
    const peice = document.createElement("img");
    peice.src = "./assets/peices/black/black-pawn.svg";
    peice.alt = "pawn";
    peice.width = 24;
    if (a1 === null) return;
    a1.appendChild(peice);
  }
}

const p = new Pawn().create();
console.log(p);
