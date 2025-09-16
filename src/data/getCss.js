import fs from 'fs/promises';

export async function getStyles() {
    return await fs.readFile('./src/styles/site.css', {encoding: 'utf-8'});
}