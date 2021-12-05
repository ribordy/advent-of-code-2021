import { readFileSync } from 'fs';

export default (fileName: string) : string[] => {
    const contents = readFileSync(fileName)
    return contents.toString().replace(/\r\n/g,'\n').split('\n');
}
