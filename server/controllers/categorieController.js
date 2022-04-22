const model = require('../models/categorieModel')

function getAll (req,res){
  const [categories] = model.getAll(req,res);
  if(!categories){
    res.send(categories)
  }
}

module.exports = {
  getAll,
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

