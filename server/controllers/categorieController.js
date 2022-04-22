const model = require('../models/categorieModel')
const db = require('../kc')

module.exports = {
  getAll:(req,res) =>{
    db.query(
      "SELECT * FROM categories",
      (err, result) => {
        res.send(result);
      }
    );
  }
}



/* module.exports = {
    getAll: (req,res) =>{
        db.query(
            "SELECT * FROM categories",
            (err, result) => {
              res.send(result);
            }
          );
    }
}*/

