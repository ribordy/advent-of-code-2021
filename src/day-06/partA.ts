import readLines from '../readLines';
import { resolve } from 'path';

const lines = readLines(resolve(__dirname, './input.txt'));

let fish = lines[0].split(',').map(x => parseInt(x, 10));

for (let i = 0; i < 80; i++) {
    let fishToAdd: number[] = [];
    for (let j = 0; j < fish.length; j++) {
        if (fish[j] > 0) {
            fish[j]--;
        } else {
            fish[j] = 6
            fishToAdd.push(8)
        }
    };
    fish = fish.concat(...fishToAdd);
}
console.log(fish.length);