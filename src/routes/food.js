'use strict';

const express=require('express');
const dataBaseMngr=require('../models/database-manager.js');
const FoodModel= require('../models/food.js');
const dataMngr=new dataBaseMngr(FoodModel);
const router=express.Router();


router.get('/',getFood);
router.get('/:id',getOneFood);
router.post('/',createFood);
router.put('/:id',updateFood);
router.delete('/:id',deleteFood);

async function getFood(req,res,next){
  try{
    console.log(req.query);
    const foodData= await dataMngr.read();
    res.json(foodData);
  }
  catch(err){
    next(err);
  }
}

async function getOneFood(req,res,next){
  try{
    const foodData= await dataMngr.read(req.params.id);
    res.json(foodData);

  }
  catch(err){
    next(err);
  }
}



async function createFood(req,res,next){
  try{
    const foodReq=req.body;
    const foodData=await dataMngr.create(foodReq);
    res.status(201).json(foodData); 
  } 
  catch(err){
    next(err);
  }
}


async function updateFood(req,res,next){
  try{
    const foodReq=req.body;
    const foodData= await dataMngr.update(req.params.id,foodReq);
    res.json(foodData);
  }
  catch(err){
    next(err);
  } 
}


async function deleteFood(req,res,next){
  try{
    const foodData=await dataMngr.delete(req.params.id);
    res.json(foodData);
  }
  catch(err){
    next(err);
  }
}


module.exports = router;
