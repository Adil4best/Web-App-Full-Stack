const express = require('express')
const session = require('express-session');
const app = express()
const port = 3000


app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(express.static('public'));

app.set('view engine','ejs')
const mongoose = require('mongoose');

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));


require('./routes/userroutes')(app)
require('./routes/supportRoutes')(app)




app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})

