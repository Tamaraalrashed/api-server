'use strict';
const server=require('../src/server.js');
const supertest=require('supertest');
const request=supertest(server.app);

describe('server', ()=>{
  it('should get status 404 for bad route',async()=>{
    const response =await request.get('/foo');
    expect(response.status).toBe(404);
 
  });

  it('should get status 404 for bad method ',async()=>{
    const response1 =await request.post('/clothes');
    const response2 =await request.post('/food');
    expect(response1.status).toBe(404);
    expect(response2.status).toBe(404);
  });

});
 
