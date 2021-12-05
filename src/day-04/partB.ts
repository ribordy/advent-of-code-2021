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

let lastWinningCard: BingoCard | null = null;
let remainingCards = [...cards];

for(let i = 0; i < numbersToDraw.length ; i++) {
    if (remainingCards.length == 1) {
        lastWinningCard = remainingCards[0]
    }
    remainingCards.forEach(card => card.drawNumber(numbersToDraw[i]))
    remainingCards = remainingCards.filter(card => !card.won);
}

if (lastWinningCard) {
    const unmarkedNumbers: number[] = [];
    lastWinningCard.rows.forEach(row => row.forEach(space => {
        if (!space.drawn) {
            unmarkedNumbers.push(space.value)
        }
    }))
    
    console.log(unmarkedNumbers);
    console.log(unmarkedNumbers.reduce((acc, val) => acc + val, 0) * lastWinningCard.drawnNumbers[lastWinningCard.drawnNumbers.length - 1])
    console.log(lastWinningCard.printCard())    
}

