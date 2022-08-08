const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/templates/views')

app.use(express.json())

require('./routes')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${ process.env.PORT }`)
})