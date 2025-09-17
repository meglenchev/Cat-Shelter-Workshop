import fs from 'fs/promises';

export async function getHome() {
    let homePage = await fs.readFile('./src/views/index.html', {encoding: 'utf-8'})
    const catsListData = await fs.readFile('./src/data/db.json', {encoding: 'utf-8'});
    let catsList = JSON.parse(catsListData);
    let cats = Object.entries(catsList.cats).map(cat => catsTemplate(cat[1])).join('\n');
    const result = homePage.replaceAll('{{cats}}', cats);
    return result;
}

export async function getAddBreed() {
    return await fs.readFile('./src/views/addBreed.html', {encoding: 'utf-8'});
}

export async function getAddCat() {
    return await fs.readFile('./src/views/addCat.html', {encoding: 'utf-8'});
}

function catsTemplate(cat) {
    return `<li>
                <img src="${cat.imageUrl}" alt="Black Cat">
                <h3>${cat.name}</h3>
                <p><span>Breed: </span>${cat.breed}</p>
                <p><span>Description: </span>${cat.description}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="">Change Info</a></li>
                    <li class="btn delete"><a href="">New Home</a></li>
                </ul>
            </li>`
}