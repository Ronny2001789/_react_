import React, { Component } from 'react';
import JumboTronComponent from './JumboTronComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
  }

  render() {
  
    return (
      <div className='App'>
        <JumboTronComponent showButton={this.state.showButton}>
          <p>This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.</p>
        </JumboTronComponent>
      </div>
    );
  
  }
}

export default App;