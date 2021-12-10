import readLines from '../readLines';
import { resolve } from 'path';

const lines = readLines(resolve(__dirname, './input.txt'));

let fish = [0, 0, 0, 0, 0, 0, 0, 0, 0];
lines[0].split(',').forEach(fishAge => fish[parseInt(fishAge, 10)]++);

for (let i = 0; i < 256; i++) {
    const numberOfFishGivingBirth = fish.shift();
    fish[6] = (fish[6] ?? 0) + (numberOfFishGivingBirth ?? 0);
    fish[8] = numberOfFishGivingBirth ?? 0;
}
console.log(fish.reduce((acc, curr) => acc + curr, 0));