const express = require('express')
const app = express()

const port = 8080

const users = []

app.post('/', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

// http://localhost:8080/