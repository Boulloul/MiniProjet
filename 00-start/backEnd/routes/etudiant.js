const express=require('express');
const router=express.Router();
const Etudiant=require('../models/Etudiants');



/**********************************  GET  ********************************************/
router.get('/', function(req, res, next) {
    Etudiant.find(function (err, Etudiant) {
      if (err) return next(err);
         res.json(Etudiant);
         console.log("fetched");
     });
})

router.get('/:id', function(req, res, next) {
   Etudiant.findById(req.params.id, function (err, Etudiant) {
      if (err) return next(err);
          res.json(Etudiant);
       });
});


/**********************************  POST **********************************************/
router.post('/',(req, res,next) => {
  Etudiant.create(req.body).then(function(Etudiant){
   res.send(Etudiant);
   console.log(Etudiant);
  });
})

/********************************   PUT  *************************************************/
router.put('/:id', function(req, res, next) {
 Etudiant.findByIdAndUpdate(req.params.id, req.body, function (err,Etudiant) {
   if (err) return next(err);
   res.json(Etudiant);

   //res.send(Etudiant);
 });
});

/******************************   DELETE ***********************************************/
router.delete('/:id', function(req, res, next) {
 Etudiant.findByIdAndRemove(req.params.id, req.body, function (err,Etudiant) {
   if (err) return next(err);
   res.send(Etudiant)
   //res.json(Etudiant);
 });
});







module.exports=router;