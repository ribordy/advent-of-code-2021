import BingoCard, { BingoSpace } from "./BingoCard";
import readLines from "../readLines";
import { resolve } from 'path';


const lines = readLines(resolve(__dirname, './input.txt'));

const numbersToDraw: number[] = lines.shift()?.split(',').map(value => parseInt(value, 10)) || [];
const cards: BingoCard[] = [];

// eat blank space
lines.shift();

while(lines.length) {
    const rows = lines.splice(0, 5) // Assuming 5 rows for now
    const bingoCard = new BingoCard(
        rows.map(row => row.trim().split(/ +/).map(value => new BingoSpace(parseInt(value.trim(), 10))))
    )
    // eat blank space
    lines.shift()
    cards.push(bingoCard);
}

let winningCard: BingoCard | null = null;

for(let i = 0; i < numbersToDraw.length && !winningCard; i++) {
    for (let j = 0; j < cards.length && !winningCard; j++) {
        cards[j].drawNumber(numbersToDraw[i]);
        if (cards[j].won) {
            winningCard = cards[j]
        }
    }
}

const unmarkedNumbers: number[] = [];
winningCard?.rows.forEach(row => row.forEach(space => {
    if (!space.drawn) {
        unmarkedNumbers.push(space.value)
    }
}))

if (winningCard) {
    console.log(unmarkedNumbers);
    console.log(unmarkedNumbers.reduce((acc, val) => acc + val, 0) * winningCard.drawnNumbers[winningCard.drawnNumbers.length - 1])
    console.log(winningCard.printCard())
}
