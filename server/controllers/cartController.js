const modelProduct = require('../models/productModel')
const controller = require('../controllers/productController')

module.exports={
    addProd:(req,res)=>{
        const cart = req.session.cart;
        const id = req.params.id;

        modelProduct.getById(id, (err, result) =>{
            if(err){
                res.send(err);
            }else{
                const product = {
                        id: result[0].id,
                        name: result[0].name,
                        price: result[0].price,
                        description: result[0].description,
                        image: result[0].image,
                        category: result[0].category,
                        stock: result[0].stock
                    }
                cart.push(product);
                req.session.cart = cart;
                res.send(cart)
            }
        })
    },
    getProds:(req,res)=>{
        res.send(req.session.cart)
    }
  }