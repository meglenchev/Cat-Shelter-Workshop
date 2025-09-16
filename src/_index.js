import http from 'http';
import fs from 'fs/promises';
import { getHome, getAddBreed, getAddCat } from './data/getViews.js';
import { getStyles } from './data/getCss.js';

const server = http.createServer( async (req, res) => {
    let contentType = 'text/html';
    let view;

    if (req.url === '/') {
        const homePage = await getHome();

        // res.writeHead(200, {
        //     'content-type': 'text/html'
        // });

        //res.write(homePage);
        view = homePage;
    } else if (req.url === '/cats/add-breed') {
        const addBread = await getAddBreed();

        // res.writeHead(200, {
        //     'content-type': 'text/html'
        // })

        //res.write(addBread);
        view = addBread;
    } else if (req.url === '/cats/add-cat') {
        const addCat = await getAddCat();

        // res.writeHead(200, {
        //     'content-type': 'text/html'
        // });

        //res.write(addCat);
        view = addCat;
    } else if (req.url === '/styles/site.css') {
        const siteCss = await getStyles();

        contentType = 'text/css';

        // res.writeHead(200, {
        //     'content-type': 'text/css'
        // });

        //res.write(siteCss);
        view = siteCss
    }

    res.writeHead(200, {
        'content-type': contentType
    });
    
    res.write(view);

    res.end();
});

server.listen(5000);
console.log('Server is litening on http://localhost:5000....');