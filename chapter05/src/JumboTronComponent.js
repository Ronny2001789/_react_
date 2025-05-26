import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to ronnyCodelabs</h1>
                    <p>{this.props.children}</p>

                    {this.props.showButton ? (
                        <p><Button variant="primary">Learn more</Button></p>
                    ) : (
                        <p><em>No button to show.</em></p>
                    )}

                </Jumbotron>
            </div>
        );
    }
}

export default JumboTronComponent;