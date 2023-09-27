const express = require("express")
const router =express.Router()


router.get('/',(req, res) =>{
    res.send("Feed")
  })
  
  router.get('/new',(req, res) =>{
    res.send("New Feed")
  })
  router.post('/',(res,req)=>{
    res.send('create a post')
  })


  router.route("/:id").get((res,req)=>{
    req.params.id
    res.send(`get user with ID${req.params.id}`)
  }).put((res,req)=>{
    res.send(`update user with ID${req.params.id}`)
  }).delete((res,req)=>{
    res.send(`Delete user with ID${req.params.id}`)
  })



  module.exports = router