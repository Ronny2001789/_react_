import React, { Component } from "react";

class Ronny extends Component {
  render() {
    const people = true;

    return (
      <div>
        {people ? <p>I'm Ronny from Limpopo</p> : <p>wrong information</p>} 
      </div>
    );
  }
}





export default Ronny;
