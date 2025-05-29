import React, { Component } from 'react';

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: false
    };
  }

  toggleFollow = () => {
    this.setState({ followed: !this.state.followed });
  };

  render() {
    return (
      <div style={{ margin: '20px', padding: '10px', border: '1px solid green', borderRadius: '10px' }}>
        <h3>{this.props.username}</h3>
        <p>Status: {this.state.followed ? 'Following' : 'Not Following'}</p>
        <button onClick={this.toggleFollow}>
          {this.state.followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    );
  }
}

export default UserCard;
