require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/about", (req, res)=>{
    res.send('Hey, this is me Tayyab Sajjad. Im a MERN Stack Developer. Recently, i started learning Backend Development.')
})

app.get("/contact", (req, res)=>{
    res.send('You can contact me on my email:' + ' ' + ' tayyabsajjad4679@gmail.com' )
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
