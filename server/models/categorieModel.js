const db = require('../kc')

module.exports={
  getAll:(callback)=>{
    db.query(
      "SELECT * FROM categories",
      (err, result) => {
        if(err){
          console.log(err);
          callback(err,null);
        }else{
          callback(null,result)
        }
      }
    );
  },
  getById:(id,callback)=>{
    db.query(
      "SELECT * FROM categories WHERE id = ?",
      [id],
      (err, result) => {
        if(err){
          console.log(err);
          callback(err,null);
        }else{
          callback(null,result)
        }
      }
    );
  }
}