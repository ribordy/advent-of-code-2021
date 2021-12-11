import readLines from '../readLines';
import { resolve } from 'path';

const lines = readLines(resolve(__dirname, './input.txt'));
lines.pop();

const SEGMENTS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

class DigitDisplay {
    public litSegments: Set<string> = new Set()

    constructor(sequence: string) {
        sequence.split('').forEach(digit => {
            this.litSegments.add(digit);
        })
    }

    public fullyContains(otherDigit: DigitDisplay): boolean {
        for(let segment of otherDigit.litSegments) {
            if (!this.litSegments.has(segment)) {
                return false;
            }
        }
        return true;
    }

    public toString(): string {
        return [...this.litSegments.values()].sort().join('');
    }
}

// const lines = ["acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab |cdfeb fcadb cdfeb cdbaf"];
let sum = 0
lines.forEach(line => {
    const [displayDigits, outputDigits] = line
                                            .split('|')
                                            .map(part => part.trim().split(' ').map(str => new DigitDisplay(str)));
    const strToDigitValue: Map<string, number> = new Map();

    const one = displayDigits.filter(x => x.litSegments.size === 2)[0];
    strToDigitValue.set(one.toString(), 1);
    displayDigits.splice(displayDigits.indexOf(one), 1);

    const four = displayDigits.filter(x => x.litSegments.size === 4)[0];
    strToDigitValue.set(four.toString(), 4);
    displayDigits.splice(displayDigits.indexOf(four), 1);

    const seven = displayDigits.filter(x => x.litSegments.size === 3)[0];
    strToDigitValue.set(seven.toString(), 7);
    displayDigits.splice(displayDigits.indexOf(seven), 1);

    const eight = displayDigits.filter(x => x.litSegments.size === 7)[0];
    strToDigitValue.set(eight.toString(), 8);
    displayDigits.splice(displayDigits.indexOf(eight), 1);

    const six = displayDigits.filter(x => x.litSegments.size === 6 && !x.fullyContains(one))[0];
    strToDigitValue.set(six.toString(), 6);
    displayDigits.splice(displayDigits.indexOf(six), 1);

    const five = displayDigits.filter(x => x.litSegments.size === 5 && six.fullyContains(x))[0];
    strToDigitValue.set(five.toString(), 5);
    displayDigits.splice(displayDigits.indexOf(five), 1);

    const nine = displayDigits.filter(x => x.litSegments.size === 6 && x.fullyContains(four))[0];
    strToDigitValue.set(nine.toString(), 9);
    displayDigits.splice(displayDigits.indexOf(nine), 1);

    const zero = displayDigits.filter(x => x.litSegments.size === 6)[0];
    strToDigitValue.set(zero.toString(), 0);
    displayDigits.splice(displayDigits.indexOf(zero), 1);

    const three = displayDigits.filter(x => x.litSegments.size === 5 && x.fullyContains(one))[0];
    strToDigitValue.set(three.toString(), 3);
    displayDigits.splice(displayDigits.indexOf(three), 1);

    const two = displayDigits.filter(x => x.litSegments.size === 5)[0];
    strToDigitValue.set(two.toString(), 2);
    displayDigits.splice(displayDigits.indexOf(two), 1);

    // console.log({zero, one, two, three, four, five, six, seven, eight, nine})

    const outputValue = Number(outputDigits.map(digit => strToDigitValue.get(digit.toString())).join(''));
    sum += outputValue;
})

console.log(sum);
