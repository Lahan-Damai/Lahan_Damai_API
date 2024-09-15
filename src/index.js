import {app} from "./application/app.js";
import fs from 'fs';
import https from 'https';

var options = {
    key: fs.readFileSync('./src/key.pem'),
    cert: fs.readFileSync('./src/cert.pem')
};

const sslServer = https.createServer(options, app);

sslServer.listen(process.env.PORT || 3001, () => {
    console.log(`running at http://localhost:3001`)
})