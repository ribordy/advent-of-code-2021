import computeLocation from "./computeLocation";
import readLines from "../readLines";
import { resolve } from 'path';


(async () => {
    const lines = await readLines(resolve(__dirname, './input-a.txt'));

    const location = computeLocation(lines);

    console.log(location);
})();