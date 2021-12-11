import readLines from '../readLines';
import { resolve } from 'path';

const lines = readLines(resolve(__dirname, './input.txt'));
lines.pop();
let count = 0;

lines.forEach(line => {
    const outputDigits = line.split('|')[1].trim().split(' ');
    outputDigits.forEach(digit => {
        if (digit.length === 2) {
            // represents a 1
            count++;
        } else if (digit.length === 4) {
            // represents a 4
            count++;
        } else if (digit.length === 3) {
            // represents a 7
            count++;
        } else if (digit.length === 7) {
            // represents an 8
            count++;
        }
    })
})

console.log(count);