import readLines from '../readLines';
import { resolve } from 'path';

const lines = readLines(resolve(__dirname, './input.txt'));

const positions = lines[0].split(',').map(Number)
const minPos = Math.min(...positions);
const maxPos = Math.max(...positions);

let cheapestPos = minPos;
let cheapestCost = Number.MAX_VALUE;

for (let i = minPos; i <= maxPos; i++) {
    const cost = positions.reduce((acc, curr) => acc + Math.abs(curr - i), 0);
    
    if (cost < cheapestCost) {
        cheapestPos = i;
        cheapestCost = cost;
    }
}

console.log({cheapestPos, cheapestCost});