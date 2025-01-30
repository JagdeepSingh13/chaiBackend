// console.log("Chai aur Backend");
// ctrl + c to stop

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send("JSingh@twitter")
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// tab to accept suggestions from co-pilot

