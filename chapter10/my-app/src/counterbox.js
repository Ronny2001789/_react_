import React, { Component } from 'react';

class CounterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ margin: '20px', padding: '10px', border: '1px solid blue', borderRadius: '10px' }}>
        <h3>{this.props.label}</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Add One</button>
      </div>
    );
  }
}

export default CounterBox;
