const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const path = require('path');

app.get('/strictTransportSecurity', (req, res) => {
    console.log('strict transport security request received.');
    res.set({
        'strict-transport-security': 'max-age=15552000; preload',
    })
    res.send(path.join(__dirname, 'index.html'));
});

app.get('/upgradeInsecureConnections', (req, res) => {
    console.log('upgrade insecure connections request received.');
    res.set({
        'Content-Security-Policy': 'upgrade-insecure-connections',
    })
    res.send(path.join(__dirname, 'index.html'));
});

https.createServer({
    key: fs.readFileSync('C:\\Users\\Erik\\projects\\finsemble-electron-adapter\\src\\IAC\\localhost.chartiq.com.key'),
    cert: fs.readFileSync('C:\\Users\\Erik\\projects\\finsemble-electron-adapter\\src\\IAC\\localhost.chartiq.com.crt')
}, app)
.listen(3000, () => console.log('Test app listening on port 3000!'));