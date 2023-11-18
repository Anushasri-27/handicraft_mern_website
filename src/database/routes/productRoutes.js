const express = require('express');
const router = express.Router();
const Model= require('../model/productModel');

//saving data to database
router.post("/add", (req, res) => {
    console.log(req.body);
    new Model(req.body)
      .save() //to store sata in db and it return promise so we should resolve it
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