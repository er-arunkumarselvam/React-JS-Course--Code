import React from 'react'
import image1 from '../assets/image/image1.jpg'

export function ProductCard(props) {
    // console.log(props);
  return (
    <div>
        <div class="card">
    <img src={image1} alt="Denim Jeans" />
  <h1>{props.name}</h1>
  <p class="price">${props.price}</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
    </div> 
    </div>
  )
}

export function Header() {
  return (
    <div>
        <h1>React JS</h1>
    </div>
  )
}