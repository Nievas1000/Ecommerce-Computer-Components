const db = require('../kc')
const bcrypt = require('bcryptjs')

module.exports = {
    postUser:(req,res) =>{
        const name = req.body.name;
        const lastname =  req.body.lastname
        const email =  req.body.email
        const password = req.body.password;

        bcrypt.hash(password, 8, (err, hash) => {
            if (err) {
            console.log(err);
            }

        db.query(
        "INSERT INTO users (name,lastname,email,password,admin) VALUES (?,?,?,?,?)",
        [name,lastname,email,hash,0],
        (err, result) => {
            console.log(result);
        }
        );
    });
    },
    getUser:(req,res) =>{
        const email = req.body.email;
        const pass = req.body.password

        db.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
            (error, result) =>{
                if(error){
                res.send({error:error})
                }

                if(result.length  > 0){
                bcrypt.compare(pass, result[0].password, (error,response) =>{
                    if(response){
                    req.session.user = result;
                    res.send(result);
                    }else{
                    res.send({message: "Wrong email/password combination"})
                    }
                })
                }else{
                res.send({message: "User doesn't exist"})
                }
            });
        }
}

