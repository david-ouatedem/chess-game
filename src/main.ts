import { a1, a2 } from "./document";
class Pawn {
  private peice: HTMLImageElement;
  constructor() {
    this.peice = document.createElement("img");
  }
  create() {
    this.peice.src = "/src/assets/peices/black/black-pawn.svg";
    this.peice.alt = "pawn";
    this.peice.width = 24;
    a1?.appendChild(this.peice);
  }
  move() {
    a2?.appendChild(this.peice);
  }
}
const pawn1 = new Pawn();
pawn1.create();
pawn1.move();
