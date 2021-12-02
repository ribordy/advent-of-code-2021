import { readFile } from 'fs';

export default (fileName: string) : Promise<string[]> => {
    return new Promise((resolve, reject) => {
        readFile(fileName, function(err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data.toString().replace(/\r\n/g,'\n').split('\n'));
            }
        }); 
    });
}
