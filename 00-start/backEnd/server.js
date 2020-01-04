const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
var cors=require('cors');

const app=express();


// connect to mongodb using mongoose
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/mydb',(err) => {
  if (err) return console.log(err)
  console.log('mydb connected');
});


//IMPORT ROUTES

app.use(cors());
app.use(bodyParser.json());
const et=require('./routes/etudiant');
const fil=require('./routes/filiere');
const user=require('./routes/User')


app.use(express.static('public'));
app.use('/etudiant',et);
app.use('/filiere',fil);
app.use('/User',user)





app.listen(3070,()=>{
	console.log('connecter au 3070'); 
});