import computePowerConsumption from "./computePowerConsumption";
import readLines from "../readLines";
import { resolve } from 'path';
import computeOxygenCO2 from "./computeOxygenCO2";


(async () => {
    const lines = await readLines(resolve(__dirname, './input-a.txt'));

    const { gamma, epsilon } = computePowerConsumption(lines);

    console.log({ gamma, epsilon });
    console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));

    const { oxygen, CO2 } = computeOxygenCO2(lines);
    console.log({ oxygen, CO2 });
    console.log(parseInt(oxygen, 2) * parseInt(CO2, 2));
})();