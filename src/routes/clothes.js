'use strict';

const express=require('express');
const dataBaseMngr=require('../models/database-manager.js');
const ClothesModel= require('../models/clothes.js');
const dataMngr=new dataBaseMngr(ClothesModel);
const router=express.Router();


router.get('/',getClothes);
router.get('/:id',getOneClothes);
router.post('/',createClothes);
router.put('/:id',updateClothes);
router.delete('/:id',deleteClothes);

//controller
async function getClothes(req,res,next){
  try{
    const clothesData= await dataMngr.read();
    res.json(clothesData);
  }
  catch(err){
    next(err);
  }
}

async function getOneClothes(req,res,next){
  try{
    const clothesData=await dataMngr.read(req.params.id);
    res.json(clothesData);
  } 
  catch(err){
    next(err);
  }
}

async function createClothes(req,res,next){
  try{
    const clothesReq=req.body;
    const clothesData=await dataMngr.create(clothesReq);
    res.status(201).json(clothesData);
  }
  catch(err){
    next(err);
  }
} 
async function updateClothes(req,res,next){
  try{
    const clothesReq=req.body;
    const clothesData=await dataMngr.update(req.params.id,clothesReq);
    res.json(clothesData);
  }
  catch(err){
    next(err);
  }
} 



async function deleteClothes(req,res,next){
  try{const clothesData=await dataMngr.delete(req.params.id);
    res.json(clothesData);
  }
  catch(err){
    next(err);
  }
} 







module.exports = router;