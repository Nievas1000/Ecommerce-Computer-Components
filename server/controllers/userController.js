const bcrypt = require('bcryptjs')
const model = require('../models/userModel')


module.exports = {
    postUser:(req,res) =>{
        const name = req.body.name;
        const lastname =  req.body.lastname
        const email =  req.body.email
        const password = req.body.password;

        model.getUser(email, (err, result) =>{
            if(err){
                res.send(err);
            }else{
                if(result.length == 0){
                    bcrypt.hash(password, 8, (err, hash) => {
                        if (err) {
                        console.log(err);
                    }
            
                    model.postUser(name,lastname,email,hash,(err,result) =>{
                        if (err){
                            res.send(err);
                        }else{
                            res.send(result);
                        }
                    })
                });
                }else{
                    res.send({message: "A user with that email has already been registered"})
                }
            }
        })
    },
    getUser:(req,res) =>{
        const email = req.body.email;
        const password = req.body.password;

        model.getUser(email, (err,result)=>{
            if(err){
                res.send(err);
            }else{   
                if(result.length > 0)    
                bcrypt.compare(password, result[0].password, (error,response) =>{
                    if(response){
                        req.session.user = result;
                        res.send(result);
                    }else{
                        res.send({message: "Wrong email/password combination"})
                    }
                })
            }
        })
    },
    authUser:(req,res) =>{
        if(req.session.cart == undefined){
            req.session.cart = [];
        }
        if(req.session.user){
            res.send({isLogged: true, user: req.session.user});
        }else{
            res.send({isLogged: false});
        }
    },
    logout:(req,res)=>{
        req.session.destroy((err)=>{
            res.send({massage:"Session closed"})
        })
    }
}

