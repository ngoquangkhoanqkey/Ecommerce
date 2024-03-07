const express = require("express")
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./router')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
// Urlencode giup t doc dc data gui theo kieu Array, Object: Ta lay dc, doc duoc. Extends giup doc dc nhieu hon
app.use(express.urlencoded({extends:true}))
dbConnect()
initRoutes(app)

app.listen(port, ()=> {
    console.log('Server running on the port',+ port);
})