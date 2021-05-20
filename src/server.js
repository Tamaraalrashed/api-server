'use strict';

//dependencies
const express=require('express');
const cors=require('cors');
const morgan=require('morgan');


//modules
const errorHandler=require('./error-handlers/500.js');
const notFoundHandler=require('./error-handlers/404.js');

const foodRoutes=require('./routes/food.js');
const clothesRoutes=require('./routes/clothes.js');


//my app
const app=express();



app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1/food', foodRoutes);
app.use('/api/v1/clothes', clothesRoutes);
app.use('*', notFoundHandler);
app.use(errorHandler);




module.exports={
  app:app,
  start:(port)=>{
    const PORT=port||4000;
    app.listen(PORT, ()=> console.log(`hello from port ${PORT}`));
  },
};