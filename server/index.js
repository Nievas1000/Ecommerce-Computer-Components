console.clear()
const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')
const connecion = require('./kc')

app.use(express.json())

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(session({
  key:"userId",
  secret: "photo",
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 365 * 24 * 60 * 60 * 1000
  }
}))


const productsRouter = require('./routes/products.js')
app.use('/', productsRouter)

const categorieRouter = require('./routes/categories.js')
app.use('/', categorieRouter)

const userRouter = require('./routes/user.js')
app.use('/', userRouter)

app.listen(3001, () =>{
    console.log("El servidor corre")
    connecion.connect(function(err){
      if(err) console.log(err);
      console.log("DataBase conected")
    })
});