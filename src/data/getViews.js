import fs from 'fs/promises';

export async function getHome() {
    return await fs.readFile('./src/views/index.html', {encoding: 'utf-8'})
}

export async function getAddBreed() {
    return await fs.readFile('./src/views/addBreed.html', {encoding: 'utf-8'});
}

export async function getAddCat() {
    return await fs.readFile('./src/views/addCat.html', {encoding: 'utf-8'});
}