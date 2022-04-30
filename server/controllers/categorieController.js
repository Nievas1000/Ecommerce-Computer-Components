const model = require('../models/categorieModel')

module.exports={
  getAll:(req,res)=>{
    model.getAll((err,result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result);
      }
    })
  },
  getById:(req,res)=>{
    const id = req.params.id;
    
    model.getById(id,(err,result) =>{
      if(err){
        res.send(err);
      }else{
        res.send(result)
      }
    })
  }
}


