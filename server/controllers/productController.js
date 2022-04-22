const db = require('../kc')

module.exports = {
    getAll:(req,res) =>{
        db.query(
            "SELECT * FROM products",
            (err, result) => {
              res.send(result);
            }
          );
    },
    getById:(req,res) =>{
        let id = req.params.id;
        db.query(
            "SELECT * FROM products WHERE id = ?",
            [id],
            (err, result) => {
              res.send(result);
            }
          );
    },
    getNews:(req,res) =>{
        db.query(
            "SELECT * FROM products ORDER BY id DESC LIMIT 4 ",
            (err, result) =>{
              res.send(result)
            }
        )
    },
    getByCat:(req,res) =>{
        let category = req.params.category
            db.query(
                "SELECT * FROM products WHERE category = (?)",
                [category],
                (err, result) => {
                    res.send(result);
                }
            );
    },
    getByPrice:(req,res) =>{
        let price1 = req.params.price1;
        let price2 = req.params.price2;
        let category = req.params.category
        db.query(
            "SELECT * FROM products WHERE category = ? AND price > ? AND price < ?",
            [category, price1, price2],
            (err, result) => {
            res.send(result);
            }
        );
    },
    getBySearch:(req,res) =>{
        let product = req.params.product
        db.query(
            "SELECT * FROM products WHERE name LIKE  ? " ,
            [`%${product}%`],
            (err, result) => {
                res.send(result);
            }
        );
    },
}