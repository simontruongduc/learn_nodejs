const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');

// route
route(app);
app.use(express.static(path.join(__dirname,'/public')));
// http logger
app.use(morgan('combined'));
// template engine
app.engine('hbs',engine({
    extname:'.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'/resources/views'));

app.listen(port,() => console.log(`port server :${port}`));