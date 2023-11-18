const express = require('express');
const router = express.Router();
const Model=require("../model/userModel");


//saving user detail in db
router.post("/add",(req,res)=>{
    new Model(req.body).save().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });

});

router.get("/alluser", (req, res) => {
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





module.exports = router;