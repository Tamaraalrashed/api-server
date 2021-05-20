'use strict';
const server=require('../src/server.js');
const supergooseTest=require('@code-fellows/supergoose');
const request=supergooseTest(server.app);




describe('food api', ()=>{
  let id;
  it('should create a new food using POST', async ()=>{
  //arrange

    let food={
      name: 'apple',
      type: 'fruit',
    };
 
    //act
    const response=await request.post('/api/v1/food').send(food);
   
    //assert
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('apple');
    expect(response.body.type).toEqual('fruit');
    expect(response.body._id.length).toBeGreaterThan(0);
    id = response.body._id;
  });
  it('should read a list of records using GET',async()=>{
    const response =await request.get('/api/v1/food');
    expect(Array.isArray(response.body)).toBeTruthy();
   
  });

  it('should read a record using GET', async ()=>{
    const response =await request.get(`/api/v1/food/${id}`);
    expect(response.body[0].name).toEqual('apple');
    expect(response.body[0].type).toEqual('fruit');
  } );
  it('Update a record using PUT', async () => {
    //arrange
    let editFood={
      name: 'banana',
      type: 'fruit',
    };
    //act
    const response = await request.put(`/api/v1/food/${id}`)
      .send(editFood);
    //assert
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('banana');
  });
  it('Destroy a record using DELETE', async () => {
    //arrange

    //act
    const response = await request.delete(`/api/v1/food/${id}`);

    //assert
    expect(response.status).toEqual(200);
    
  });

});

describe('clothes api', ()=>{
  let id;
  it('should create a new clothes using POST', async ()=>{
  //arrange

    let clothes={
      name: 'dress',
      color: 'black',
    };
 
    //act
    const response=await request.post('/api/v1/clothes').send(clothes);
   
    //assert
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('dress');
    expect(response.body.color).toEqual('black');
    expect(response.body._id.length).toBeGreaterThan(0);
    id = response.body._id;
  });
  it('should read a list of records using GET',async()=>{
    const response =await request.get('/api/v1/clothes');
    expect(Array.isArray(response.body)).toBeTruthy();
   
  });

  it('should read a record using GET', async ()=>{
    const response =await request.get(`/api/v1/clothes/${id}`);
    expect(response.body[0].name).toEqual('dress');
    expect(response.body[0].color).toEqual('black');
  } );
  it('Update a record using PUT', async () => {
    //arrange
    let editClothes={
      name: 'dress',
      color: 'purple',
    };
    //act
    const response = await request.put(`/api/v1/clothes/${id}`)
      .send(editClothes);
    //assert
    expect(response.status).toEqual(200);
    expect(response.body.color).toEqual('purple');
  });
  it('Destroy a record using DELETE', async () => {
    //arrange

    //act
    const response = await request.delete(`/api/v1/clothes/${id}`);

    //assert
    expect(response.status).toEqual(200);
    
  });

});