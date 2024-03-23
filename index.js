const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors())

app.get("/", (req,res)=>{
  res.send("main")
})

app.get('/sound/:id', (req,res) => {
  const {id} = req.params;
  if(id == "dog")
  {
    res.send("멍멍");
  }
  else if(id == "cat")
  {
    res.send("야옹");
  }

  else
  {
    res.send("알 수 없음");
  }
})


app.listen(port, () => {
  console.log(`great port ${port}`);
})