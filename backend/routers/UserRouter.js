const express = require('express');
const router = express.Router();
const Model=require("../models/UserModel");


//saving user detail in db
router.post("/add",(req,res)=>{
    new Model(req.body).save().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });

});

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

  router.get("/getbyname/:pname", (req, res) => {
    console.log(req.params.pname);
    Model.find({ pname: req.params.pname })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
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

  router.post('/authenicate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result !== null)
                res.json(result);
            else res.status(401).json({ message: 'login failed' })
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});



module.exports = router;