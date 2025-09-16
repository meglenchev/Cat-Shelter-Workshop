import fs from 'fs/promises';

export async function homeView() {
    return await fs.readFile('./src/views/index.html', {encoding: 'utf-8'})
}

export async function getAddBreed() {
    return await fs.readFile('./src/views/addBreed.html', {encoding: 'utf-8'});
}