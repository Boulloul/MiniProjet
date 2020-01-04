import React,{ Component } from "react";
import axios from 'axios';


class FormPage extends Component{
  
  state={
    nom:" ",
    prenom:" ",
    cne:" ",
    cin:" ",
    filiere:" ",
    bac:""
  }

  getNom=(e)=>{
       const nom=e.target.value;
       this.setState({
        nom:nom
       })
  } 
  getPrenom=(e)=>{
       const p=e.target.value;
       this.setState({
        prenom:p
       })
  } 

 getFiliere=(e)=>{
       const filiere=e.target.value;
       this.setState({
        filiere:filiere
       })
  } 
  getBac=(e)=>{
       const bac=e.target.value;
       this.setState({
        bac:bac
       })
  } 

   getCne=(e)=>{
       const cne=e.target.value;
       this.setState({
        cne:cne
       })
  } 

   getCin=(e)=>{
       const cin=e.target.value;
       this.setState({
        cin:cin
       })
  } 

  Ajouter=()=>{

    axios.post('http://localhost:3070/etudiant', {
         name: this.state.nom,
          cne: this.state.cne,
          cin:this.state.cin
      })
    .then(response => {
      console.log(response, 'Etudiant added!');
      
    })
    .catch(err => {
      console.log(err, 'Etudiant not added, try again');
    });


  }



  

render(){
  return (

<div   style={{width:"700px",borderColor:"",height:"400px",backgroundColor:"rgb(0.1,0,0.1,0.3)",marginLeft:"300px",marginTop:"5px"}} ><br/>
 <center>
    <h1><span className="badge badge-warning">Ajouter Etudiant</span></h1></center><br/>
  
    <form  className="container" style={{width:"600px",border:"bold 10px"}} >


      <div className="row">
        <div className="col">
             <input  required className="col" type="text" onChange={this.getPrenom} className="form-control" placeholder="First name"/>
        </div>
        <div className="col">
            <input   required type="text" onChange={this.getNom}  className="form-control" placeholder="Last name"/>
        </div>
       </div>

      <br/>
      <div className="row">
        <div className="col">
             <input  required type="text" onChange={this.getCne} className="form-control" placeholder="CNE"/>
        </div>
        <div className="col">
            <input type="text" onChange={this.getCin}  className="form-control" placeholder="CIN"/>
        </div>
       </div>

       <br/>
      <div className="row">
        <div className="col">
             <input required type="text" onChange={this.getFilier} className="form-control" placeholder="Filiere"/>
        </div>
        <div className="col">
            <input required type="text" onChange={this.getBac}  className="form-control" placeholder="Serie de Bac"/>
        </div>
       </div>
     

   <button onClick={this.Ajouter} style={{marginLeft:"200px",marginTop:"20px",fontWeight:"bold",width:"150px"}} className="btn btn-warning" type="submit"> Ajouter </button>
  </form>

</div>
  );
}
}

export default FormPage;