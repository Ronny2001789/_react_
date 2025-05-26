import React, { Component } from 'react';
import Products from './Products';
import { Accordion, AccordionHeader, AccordionItem, Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <Products />
        <Button variant="info" disabled={!isValid}>info</Button>


        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
        <Rating rating="6" />
      </div>
    );
  }
}



export default App;


