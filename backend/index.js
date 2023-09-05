const express = require('express')
const app = express()
const port = 10000
const mongoDB=require("./db")
mongoDB();
app.use((req,res,next)=>{                      
  res.setHeader("Access-Control-Allow-Origin","https://chiku-food-express-app.netlify.app")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})