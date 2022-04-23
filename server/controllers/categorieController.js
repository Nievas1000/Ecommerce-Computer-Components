const model = require('../models/categorieModel')
const db = require('../kc')

module.exports={
  getAll:(req,res)=>{
    model.getAll((err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result);
      }
    })
  }
}


