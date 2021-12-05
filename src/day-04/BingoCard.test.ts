import BingoCard, { BingoSpace } from "./BingoCard";

describe('BingoCard', () => {
    describe('printCard', () => {
        let bingoCard: BingoCard;
        beforeEach(() => {
            bingoCard = new BingoCard(
                [
                    [
                        new BingoSpace(1),
                        new BingoSpace(2)
                    ],
                    [
                        new BingoSpace(3),
                        new BingoSpace(4),
                    ]
                ]
            )
        })
    
        it('prints the initial state', () => {
            const subject = bingoCard.printCard();
            expect(subject).toEqual(
                " 1  2 \n" +
                " 3  4 \n" +
                "Numbers Drawn: "
            )
        });

        it('prints drawn spaces', () => {
            bingoCard.rows[0][0].drawn = true;
            bingoCard.drawnNumbers = [1];
            const subject = bingoCard.printCard();
            expect(subject).toEqual(
                "-1- 2 \n" +
                " 3  4 \n" +
                "Numbers Drawn: 1"
            )
        });
    });

    describe('drawNumber', () => {
        let bingoCard: BingoCard;
        beforeEach(() => {
            bingoCard = new BingoCard(
                [
                    [
                        new BingoSpace(1),
                        new BingoSpace(1),
                    ]
                ]
            );
        })
        it('marks all matching spaces', () => {
            bingoCard.drawNumber(1)
            expect(bingoCard.rows[0][0].drawn).toBeTruthy();
            expect(bingoCard.rows[0][1].drawn).toBeTruthy();
        })

        it('does not mark spaces that do not match', () => {
            bingoCard.drawNumber(2)
            expect(bingoCard.rows[0][0].drawn).toBeFalsy();
            expect(bingoCard.rows[0][1].drawn).toBeFalsy();
        })
    })

    describe('win detection', () => {
        let bingoCard: BingoCard;
        beforeEach(() => {
            bingoCard = new BingoCard(
                [
                    [
                        new BingoSpace(1),
                        new BingoSpace(2)
                    ],
                    [
                        new BingoSpace(3),
                        new BingoSpace(4),
                    ]
                ]
            )
        })

        it('does not mark cards as won initially', () => {
            expect(bingoCard.won).toBeFalsy();
        })

        it('marks cards as won when a row is filled in', () => {
            bingoCard.drawNumber(1)
            bingoCard.drawNumber(2)
            expect(bingoCard.won).toBeTruthy();
        });

        it('marks cards as won when a column is filled in', () => {
            bingoCard.drawNumber(1)
            bingoCard.drawNumber(3)
            expect(bingoCard.won).toBeTruthy(); 
        })
    })
})