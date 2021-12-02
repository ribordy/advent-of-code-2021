import { readFile } from 'fs';
import { resolve } from 'path';

let increases = 0;
let threeElementIncreases = 0;
readFile(resolve(__dirname, './input-a.txt'), function(err, data) {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n').map(i => parseInt(i, 10));

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
});