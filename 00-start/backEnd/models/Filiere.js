const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const schemaFiliere=new Schema({

   name:{type:String,required:[true]},

   Descr:{type:String,required:[true]},
     
});


const Filiere=mongoose.model('Filiere',schemaFiliere);

module.exports=Filiere;