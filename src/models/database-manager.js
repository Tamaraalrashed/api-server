'use strict';
 

class dataBaseMngr {                     //data access layer(DA)
  constructor(model){ //model from mongoose
    this.model=model;
  }
  read(id){

    if(id){
      return this.model.find({_id: id});
    }
    else{
      return this.model.find({});
    }
  }

  create(clothes){
    const clothesDoc=new this.model(clothes);
    return clothesDoc.save();
  }

  delete(id){
    return this.model.findByIdAndDelete(id);
  }

  update(id,clothes){
    return this.model.findByIdAndUpdate(id,clothes,{new: true});
  } 
} 
  

module.exports = dataBaseMngr;

