import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import StudentTableRow from './StudentTableRow';

import axios from 'axios';

class  Liste  extends Component{
   
  
  constructor(props) {
    super(props)
    this.state = {
      etu: []
    };
  }
  /*  
  affi=()=>{

     fetch('http://localhost:3070/etudiant/')
       .then(function(data){return data.json()})
       .then(res =>{
         this.setState({
          etu:res
         })  
    });
  }*/
  componentDidMount() {
    axios.get('http://localhost:3070/etudiant')
      .then(res => {
        this.setState({
          etu: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

    
    DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }


    
 render(){
   
  
  
   return(
    <div>
    
        <button onClick={this.affi} style={{marginBottom:"20px"}} className="btn btn-warning">Afficher</button>
     
  <br/>
  <frame onLoad={this.sin}>
   <table  className="table table-light table-sm table-hover table-responsive-md">
    <thead className="thead-dark" style={{backgroundColor:"red",height:"4px"}}>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">CNE</th>
      <th scope="col">CIN</th>
       <th scope="col"></th>
    </tr></thead>
  <tbody>
 
    {
     this.DataTable
   }


  </tbody>

</table></frame>
    </div>
);
    
}
}


export default Liste;
