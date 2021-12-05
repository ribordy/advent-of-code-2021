import readLines from "../readLines";
import { resolve } from 'path';
import Grid from "./Grid";

const lines = readLines(resolve(__dirname, './input.txt'));

const grid = new Grid();

lines.forEach(line => {
    const [from, to] = line.split(' -> ').map(coordinateStr => coordinateStr.split(',').map(coord => parseInt(coord, 10)));
    grid.chartLine({ x: from[0], y: from[1] }, { x: to[0], y: to[1] })
});

let pointsWithAtLeastTwoOverlap = 0;

grid.grid.forEach(row => row.forEach((coordinate) => {
    if (coordinate.numLines >= 2) {
        pointsWithAtLeastTwoOverlap++;
    }
}))

console.log(pointsWithAtLeastTwoOverlap);