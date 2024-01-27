import { a1, a2 } from "./document";
class Pawn {
  private peice: HTMLImageElement;
  constructor() {
    this.peice = document.createElement("img");
  }
  create() {
    this.peice.src = "/src/assets/peices/black/black-pawn.svg";
    this.peice.alt = "pawn";
    this.peice.classList.add("piece");
    this.peice.width = 24;
    a1?.appendChild(this.peice);
  }
  handleShowMoves() {
    if (a1 === null) return;
    document.body.addEventListener("click", (event) => {
      const clickedPeice = event.target as HTMLElement;
      if (
        clickedPeice.tagName === "IMG" &&
        clickedPeice.classList.contains("piece")
      ) {
        const imageElement = clickedPeice as HTMLImageElement;
        if (imageElement.alt !== "pawn") return;
        console.log("peice pawn", imageElement);
      }
    });
  }
  move() {
    if (a2 === null) return;
    a2.onclick = () => {
      if (a2 === null) return;
      a2.appendChild(this.peice);
    };
  }
}
const pawn1 = new Pawn();
pawn1.create();
pawn1.handleShowMoves();
pawn1.move();
