import React, { Component } from "react";


class title extends Component {
  
  render() {
    return <div className="row">
      <div className="col-sm-12">
        
       <h1><span class="badge badge-warning">Par :{this.props.desc}</span></h1>
        <h2><span class="badge badge-warning">Encadré par:{this.props.prof}</span></h2>

      </div>
    </div>;
  }
}
export default title;
