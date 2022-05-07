const model = require('../models/productModel')

module.exports = {
    getAll:(req,res) =>{
        model.getAll((err, result) =>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    },
    getById:(req,res) =>{
        const id = req.params.id;

        model.getById(id, (err, result) =>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    },
    getNews:(req,res) =>{
        model.getNews((err, result) =>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    },
    getByCat:(req,res) =>{
        const category = req.params.category;

        model.getByCat(category, (err,result) =>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        });
    },
    getByPrice:(req,res) =>{
        let price1 = req.params.price1;
        let price2 = req.params.price2;
        let category = req.params.category;

        model.getByPrice(price1,price2,category,(err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    },
    getBySearch:(req,res) =>{
        let product = req.params.product
        
        model.getBySearch(product, (err, result) =>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        });
    },
    savedProduct:(req,res) =>{
        const id_prod = req.body.prod.id;
        const id_user = req.body.user.id;

        model.savedProduct(id_user,id_prod, (err, result) =>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    }
}