const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/templates/views')

app.use(function(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json())

require('./routes')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${ process.env.PORT }`)
})