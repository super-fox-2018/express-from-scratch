const express = require('express');
const router = express.Router();



router
.post('/student',(req,res)=>{
    res.send('berhasil!')
})
.get('/',(req,res)=>{
    res.render('homepage.pug',{ hello : 'post student', how:'get teachers'})
})
.get('/student',(req,res)=>{
    res.render('form.pug')
})
.get('/teachers',(req,res)=>{
    res.render('teachertable.pug')
})

module.exports = router