import computePowerConsumption from "./computePowerConsumption";
import readLines from "../readLines";
import { resolve } from 'path';


(async () => {
    const lines = await readLines(resolve(__dirname, './input-a.txt'));

    const { gamma, epsilon } = computePowerConsumption(lines);

    console.log({ gamma, epsilon });
    console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
})();