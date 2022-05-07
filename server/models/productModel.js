const db = require('../kc')

module.exports = {
    getAll:(callback) =>{
        db.query("SELECT * FROM products",
            (err,result) =>{
            if(err){
                console.log(err)
                callback(err,null);
            }else{
                callback(null,result);
            }
        })
    },
    getById:(id, callback) =>{
        db.query(
            "SELECT * FROM products WHERE id = ?",
            [id],
            (err, result) => {
              if(err){
                console.log(err)
                callback(err,null);
              }else{
                  callback(null,result);
              }
            }
          );
    },
    getNews:(callback) =>{
        db.query(
            "SELECT * FROM products ORDER BY id DESC LIMIT 4 ",
            (err, result) =>{
                if(err){
                    console.log(err)
                    callback(err,null);
                }else{
                    callback(null,result);
                }
            }
        )
    },
    getByCat:(category,callback)=>{
            db.query(
                "SELECT * FROM products WHERE category = (?)",
                [category],
                (err, result) => {
                    if(err){
                        callback(err,null);
                    }else{
                        callback(null,result);
                    }
                }
            );
    },
    getByPrice:(price1,price2,category,callback)=>{
        db.query(
            "SELECT * FROM products WHERE category = ? AND price > ? AND price < ?",
            [category, price1, price2],
            (err, result) => {
                if(err){
                    console.log(err)
                    callback(err,null);
                }else{
                    callback(null,result);
                }
            }
        );
    },
    getBySearch:(product,callback)=>{
        db.query(
            "SELECT * FROM products WHERE name LIKE  ? " ,
            [`%${product}%`],
            (err, result) => {
                if(err){
                    console.log(err)
                    callback(err,null);
                }else{
                    callback(null,result);
                }
            }
        );
    },
    savedProduct:(id_user, id_product, callback) =>{
        db.query('INSERT INTO products_saved(id_user, id_product) VALUES (?,?)',
        [id_user, id_product],
        (err, result) => {
            if(err){
                console.log(err)
                callback(err,null);
            }else{
                callback(null,result);
            }
        }
        )
    }
}