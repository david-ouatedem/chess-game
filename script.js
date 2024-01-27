"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("./document");
var Pawn = (function () {
    function Pawn() {
    }
    Pawn.prototype.create = function () {
        var peice = document.createElement("img");
        peice.src = "./assets/peices/black/black-pawn.svg";
        peice.alt = "pawn";
        peice.width = 24;
        if (document_1.a1 === null)
            return;
        document_1.a1.appendChild(peice);
    };
    return Pawn;
}());
var p = new Pawn().create();
console.log(p);
