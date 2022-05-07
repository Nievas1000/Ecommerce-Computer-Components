const db = require('../kc')

module.exports = {
    postUser:(name,lastname,email,password,callback)=>{
        console.log(name)
        db.query(
            "INSERT INTO users (name,lastname,email,password,admin) VALUES (?,?,?,?,?)",
            [name,lastname,email,password,0],
            (err, result) => {
                if(err){
                    console.log(err);
                    callback(err,null);
                }else{
                    callback(null,result);
                }
            }
        );
    },
    getUser:(email,callback)=>{
        db.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
            (error, result) =>{
                if(error){
                    console.log(error)
                    callback(error, null)
                }else{
                    callback(null, result)
                }
            });  
    }
}