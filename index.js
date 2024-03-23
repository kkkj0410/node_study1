const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get("/", (req,res)=>{
  res.send("main")
})

app.get('/user/:id', (req,res) => {
  const {Id} = req.params;
  res.send({"sound" : Id});
})


app.listen(port, () => {
  console.log(`great port ${port}`);
})