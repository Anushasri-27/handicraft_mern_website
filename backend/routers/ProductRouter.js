const express = require('express');
const router = express.Router();
const Model= require('../models/ProductModel');
console.log(' inside product router')
//saving data to database
router.post("/add",(req,res)=>{
  new Model(req.body).save().then((result)=>{
      res.json(result);
  }).catch((err)=>{
      console.log(err);
      res.status(500).json(err)
  });

});


router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//retriving data from db

router.get("/getall", (req, res) => {
    //empty bracket will return all data from db
    Model.find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  });

  router.get("/getbyid/:id", (req, res) => {
    //epass id to findbyid
    Model.findById(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;