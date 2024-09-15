import {app} from "./application/app.js";
import fs from 'fs';
import https from 'https';

var options = {
    key: fs.readFileSync('./src/privkey.pem'),
    cert: fs.readFileSync('./src/fullchain.pem')
};

const sslServer = https.createServer(options, app);

sslServer.listen(process.env.PORT || 3001, () => {
    console.log(`running at https://localhost:3001`)
})