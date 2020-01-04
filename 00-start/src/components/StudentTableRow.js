import React, { Component } from 'react';

import axios from 'axios';

export default class StudentTableRow extends Component {

     constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

     deleteStudent() {
        axios.delete('http://localhost:3070/etudiant/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                alert("Etudiant bien supprimé");
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.cne}</td>
                <td>{this.props.obj.cin}</td>
                <td>
                     <button className="btn btn-outline-warning">update</button>
                   
    
                    <button className="btn btn-outline-warning" onClick={this.deleteStudent}>Delete</button>
                </td>
            </tr>
        );
    }
}