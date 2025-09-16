import http from 'http';
import fs from 'fs/promises';
import { homeView } from './data/getViews.js';
import { getStyles } from './data/getCss.js';

const server = http.createServer( async (req, res) => {
    if (req.url === '/') {
        const homePage = await homeView();

        res.writeHead(200, {
            'content-type': 'text/html'
        });

        res.write(homePage);
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