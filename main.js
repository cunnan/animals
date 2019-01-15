const express = require('express');

var animals = express();

animals.listen(5050,()=>{
    console.log('animals:5050 listening...');
});

animals.use(express.static('public'));

animals.get('/',(req,res)=>{
    res.redirect('html');
});