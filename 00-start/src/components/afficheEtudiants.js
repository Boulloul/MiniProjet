import React, { Component } from "react";
import axios from 'axios';

import StudentTableRow from './StudentTableRow';


export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3070/etudiant')
      .then(res => {
        this.setState({
          students: res.data
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


  render() {
    return (



    <div className="table-wrapper">
     <h2><span className="badge badge-warning">    Liste des Etudiants    </span></h2><br/>
  
     <table  className="table table-light table-sm table-hover table-responsive-md">
    <thead className="thead-dark" style={{backgroundColor:"red",height:"4px"}}>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">CNE</th>
      <th scope="col">CIN</th>
       <th scope="col"></th>
    </tr></thead>

        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}