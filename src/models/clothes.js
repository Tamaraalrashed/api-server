'use strict';

const mongoose=require('mongoose'); 

const ClothesSchema=new mongoose.Schema({  
  name: { type: String, required:true},
  color:{type:String},
});
const ClothesModel=mongoose.model('Clothes', ClothesSchema);

module.exports=ClothesModel;


