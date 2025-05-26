import React, { Component } from 'react';
import Products from './Products';
import Nickname from './nickname';

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  };

  render() {
    const user = {
      firstName: "Jada",
      lastName: "Mathele"
    };

    return (
      <div>
        {/* <h1>My First React App!</h1> */}
        <Products />
        <Nickname/>
        {/* <h1>Hi there, {this.formatName(user)}!</h1> */}
      </div>
    );
  }
}

export default App;
