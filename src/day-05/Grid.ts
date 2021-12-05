type Coordinate = {
    x: number,
    y: number
}

class Grid {
    public grid: GridPoint[][] = []

    public chartLine(from: Coordinate, to: Coordinate, considerDiagonals: boolean = false) {
        // only chart vertical and horizontal lines for part A
        if (from.x === to.x) {
            const low = Math.min(from.y, to.y)
            const high = Math.max(from.y, to.y)
            for (let i = low; i <= high; i++) {
                this.markPoint(from.x, i);
            }
        } else if (from.y === to.y) {
            const low = Math.min(from.x, to.x)
            const high = Math.max(from.x, to.x)
            for (let i = low; i <= high; i++) {
                this.markPoint(i, from.y);
            }
        } else if (considerDiagonals && Math.abs(from.x - to.x) === Math.abs(from.y - to.y)) {
            const xIncrement = (from.x > to.x) ? -1 : 1
            const yIncrement = (from.y > to.y) ? -1 : 1
            let currentCoord = { ...from }
            while (currentCoord.x !== to.x && currentCoord.y !== to.y) {
                this.markPoint(currentCoord.x, currentCoord.y);
                currentCoord.x += xIncrement;
                currentCoord.y += yIncrement;
            }
            this.markPoint(currentCoord.x, currentCoord.y);
        }
    }

    private markPoint(x: number, y: number) {
        if (!this.grid[x]) {
            this.grid[x] = []
        }
        if (!this.grid[x][y]) {
            this.grid[x][y] = new GridPoint(x, y, 1);
        } else {
            this.grid[x][y].numLines ++;
        }
    }
}

class GridPoint {
    constructor(public readonly x: number, public readonly y: number, public numLines: number = 0) {}
}

export default Grid;