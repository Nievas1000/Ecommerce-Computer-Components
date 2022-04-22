const db = require('../kc')


exports.getAll = (req,res) =>{
    db.query(
        "SELECT * FROM categories",
        (err, result) => {
          res.send(result);
        }
      );
}