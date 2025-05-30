import React, { Component } from 'react';

class Products extends Component {
  render() {
    const products = [
        "Learning React",
        "Pro React",
        "Beginning React"
    ];
    const listProducts = products.map((product) => 
        <li key={product.toString()}>{product}</li>
    );
    return (
      <div>
        <h1>MY FIRST REACT APP</h1>
        <h2>Products</h2>
        <ul>{listProducts}</ul>
      </div>
    );
  }
}

export default Products;
