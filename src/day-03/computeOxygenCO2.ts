const computeOxygenCO2 = (binaryStrings: string[]) : { oxygen: string, CO2: string } => {
    const oxygenCandidates = [...binaryStrings];
    const stringLength = binaryStrings[0].length;
    for (let i = 0; i < stringLength; i++) {
        const positionSum = oxygenCandidates.reduce<number>((previousValue, currentValue) : number => {
            return previousValue + parseInt(currentValue[i], 10);
        }, 0);
        const mostCommon = Math.round(positionSum / oxygenCandidates.length).toString();
        let j = 0;
        while (j < oxygenCandidates.length && oxygenCandidates.length > 1) {
            if (oxygenCandidates[j][i] !== mostCommon) {
                oxygenCandidates.splice(j, 1);
            } else {
                j++;
            }
        }
    }

    const CO2Candidates = [...binaryStrings];
    for (let i = 0; i < stringLength; i++) {
        const positionSum = CO2Candidates.reduce<number>((previousValue, currentValue) : number => {
            return previousValue + parseInt(currentValue[i], 10);
        }, 0);
        const leastCommon = (1 - Math.round(positionSum / CO2Candidates.length)).toString();
        let j = 0;
        while (j < CO2Candidates.length && CO2Candidates.length > 1) {
            if (CO2Candidates[j][i] !== leastCommon) {
                CO2Candidates.splice(j, 1);
            } else {
                j++;
            }
        }
    }

    return { oxygen: oxygenCandidates[0], CO2: CO2Candidates[0] }
}

export default computeOxygenCO2;