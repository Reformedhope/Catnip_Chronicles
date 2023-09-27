const express = require('express')
const app = express()

const port = 8080

const users = []

app.set("view engine", "ejs")
app.get('/', (req,res) => {
  res.render('index', {text: "world"})
})


app.post('/', (req, res) => {
  
  
})

const feedRouter = require('./routes/feed');

app.use('/feeds',feedRouter)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

// http://localhost:8080/