const express = require('express');
const path = require('path');
const {create} = require('express-handlebars');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
const expHbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main'
});

app.engine('.hbs', expHbs.engine);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/index.routes'));

module.exports = app;