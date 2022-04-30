console.clear()
const express = require('express');
const app = express();
const cors = require('cors');
const connecion = require('./kc');
const dotenv = require('dotenv')

dotenv.config();

const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  key: "userId",
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 86400,
  },
}));




const productsRouter = require('./routes/products.js')
app.use('/', productsRouter)

const categorieRouter = require('./routes/categories.js')
app.use('/', categorieRouter)

const userRouter = require('./routes/user.js')
app.use('/', userRouter)

const useCart = require('./routes/cart.js')
app.use('/', useCart)


app.listen(3001, () =>{
    console.log("El servidor corre")
    connecion.connect(function(err){
      if(err) console.log(err);
      console.log("DataBase conected")
    })
});