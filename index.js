require('dotenv').config()

const express = require('express')  // (common js)
//import express from "express";   --- new way of importing(module Js)
const app = express()  // create an express app[function]
const port = 3000      //we have many vertual ports in our system

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('Hello Twitter')
})

app.get('/login',(req,res) =>{
    res.send('<h1>Please Login at chai aur code</h1>')
})

app.get('/signup',(req,res) =>{
    res.send("<h1>Please Signup at chai aur code</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("chai aur code");
