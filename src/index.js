import http from 'http';
import fs from 'fs/promises';
import { getHome, getAddBreed, getAddCat } from './data/getViews.js';
import { getStyles } from './data/getCss.js';

const server = http.createServer( async (req, res) => {
    if (req.url === '/') {
        const homePage = await getHome();

        res.writeHead(200, {
            'content-type': 'text/html'
        });

        res.write(homePage);
    } else if (req.url === '/cats/add-breed') {
        const addBread = await getAddBreed();

        res.writeHead(200, {
            'content-type': 'text/html'
        })

        res.write(addBread);
    } else if (req.url === '/cats/add-cat') {
        const addCat = await getAddCat();

        res.writeHead(200, {
            'content-type': 'text/html'
        });

        res.write(addCat);
    } else if (req.url === '/styles/site.css') {
        const siteCss = await getStyles();

        res.writeHead(200, {
            'content-type': 'text/css'
        });

        res.write(siteCss);
    }


    res.end();
});

server.listen(5000);
console.log('Server is litening on http://localhost:5000....');