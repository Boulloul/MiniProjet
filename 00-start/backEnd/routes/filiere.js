const express=require('express');
const router=express.Router();
const Filiere=require('../models/Filiere');



/**********************************  GET  ********************************************/
router.get('/', function(req, res, next) {
    Filiere.find(function (err,Filiere) {
      if (err) return next(err);
         res.json(Filiere);
     });
})

router.get('/:id', function(req, res, next) {
   Filiere.findById(req.params.id, function (err, Filiere) {
      if (err) return next(err);
          res.json(Filiere);
       });
});

/**********************************  POST **********************************************/
router.post('/',(req, res,next) => {
 Filiere.create(req.body).then(function(Filiere){
   res.send(Filiere);
  });
})

/********************************   PUT  *************************************************/
router.put('/:id', function(req, res, next) {
 Filiere.findByIdAndUpdate(req.params.id, req.body, function (err,Filiere) {
   if (err) return next(err);
   res.json(Filiere);
 });
});

/******************************   DELETE ***********************************************/
router.delete('/:id', function(req, res, next) {
 Filiere.findByIdAndRemove(req.params.id, req.body, function (err,Filiere) {
   if (err) return next(err);
   res.json(Filiere);
 });
});




module.exports=router;