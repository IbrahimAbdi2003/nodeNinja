const express = require('express');

const app = express();

app.listen(3000);

// app.get('/', (req, res) => {
//     // res.send('<p>homepage</p>');
// });

app.get('/', (req, res) => {
    // res.send('<p>homepage</p>');
    res.sendFile('./view/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendFile('./view/about.html', {root: __dirname});
});

app.get('/about-us', (req, res) => {
    // res.send('<p>about page</p>');
    res.redirect('/about');
});

app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});