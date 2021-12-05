class BingoSpace {
    constructor(public readonly value: number) { }
    public drawn: boolean = false
}

class BingoCard {
    constructor(public rows: BingoSpace[][]) {}
    public drawnNumbers: number[] = []
    public won = false;

    public drawNumber(number: number) {
        this.drawnNumbers.push(number);
        this.rows.forEach((row, rowIndex) => {
            row.forEach((space, colIndex) => {
                if (space.value === number) {
                    space.drawn = true;
                    if (this.winResultedFromMarkingSpace(rowIndex, colIndex)) {
                        this.won = true;
                    }
                }
            })
        })
    }

    public printCard() : string {
        let stringRepresentation = "";
        this.rows.forEach(row => {
            stringRepresentation += row.map(space => space.drawn ? `-${space.value}-` : ` ${space.value} `).join('');
            stringRepresentation += "\n"
        });
        stringRepresentation += `Numbers Drawn: ${this.drawnNumbers.join(', ')}`
        return stringRepresentation;
    }

    private winResultedFromMarkingSpace(rowIndex: number, colIndex: number) {
        if(this.rows[rowIndex].every(space => space.drawn)) {
            return true;
        }

        if(this.rows.every(row => row[colIndex].drawn)) {
            return true;
        }
    }
}

export default BingoCard;
export { BingoSpace };