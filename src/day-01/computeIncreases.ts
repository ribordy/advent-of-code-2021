import readLines from '../readLines';
import { resolve } from 'path';

(async () => {
    let increases = 0;
    let threeElementIncreases = 0;

    const lines = await readLines(resolve(__dirname, './input-a.txt'));

    const arr = lines.map((i: string) => parseInt(i, 10));

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i+1]) {
            increases += 1;
        }
    }
    console.log(increases);

    for(let i = 0; i < arr.length - 3; i++) {
        if((arr[i] + arr[i+1] + arr[i+2]) < (arr[i+1] + arr[i+2] + arr[i+3])) {
            threeElementIncreases++;
        }
    }
    console.log(threeElementIncreases);
})();
