import React, { Component } from "react";

class Nickname extends Component {
  render() {
    const Nickname = ["ronny", "mputla", "hercules","mice"];

    const nicknameloop = Nickname.map((nickname) => {
      return <li>{nickname}</li>; 
              
    });

    return (
      <div>
        <h2>Nicknames:</h2>
        <ul>{nicknameloop}</ul> 
      </div>
    );
  }
}

export default Nickname;
