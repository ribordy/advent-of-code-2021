import computeLocation from "./computeLocation";
import computeLocationWithAngle from "./computeLocationWithAngle";
import readLines from "../readLines";
import { resolve } from 'path';


(async () => {
    const lines = await readLines(resolve(__dirname, './input-a.txt'));

    const location = computeLocation(lines);
    const locationViaAngle = computeLocationWithAngle(lines);

    console.log(location);
    console.log(locationViaAngle);
})();