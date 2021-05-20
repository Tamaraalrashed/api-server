'use strict';

const mongoose=require('mongoose'); 

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
});

const FoodModel=mongoose.model('Food', FoodSchema);

module.exports=FoodModel;




