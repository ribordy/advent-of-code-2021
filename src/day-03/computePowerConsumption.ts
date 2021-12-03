const computePowerConsumption = (binaryStrings: string[]) : { gamma: string, epsilon: string } => {
    const stringLength = binaryStrings[0].length;
    let gamma = "";
    for (let i = 0; i < stringLength; i++) {
        const positionSum = binaryStrings.reduce<number>((previousValue, currentValue) : number => {
            return previousValue + parseInt(currentValue[i], 10);
        }, 0);
        console.log(positionSum);
        const nextDigit = Math.round(positionSum / binaryStrings.length);
        gamma += nextDigit.toString();
    }

    const epsilon = gamma.split('').map(char => (-parseInt(char, 10) + 1).toString()).join('');

    return { gamma, epsilon }
}

export default computePowerConsumption;