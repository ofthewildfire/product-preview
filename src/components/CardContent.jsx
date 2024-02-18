import React from 'react'
import Button from './Button';

function CardContent() {
  return (
    <div className='card-content' >
        <span className="card_ribbon">Perfume</span>
        <h1 className="card_title">
            Gabrielle Essence Eau De Parfum
        </h1>
        <p className="card_product-info">
            A floral, solar and voluptuos interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="card_pricing">
        <span className="card_product-price">$149.99</span>
        <del className="card-product-price--strike">$169.99</del> 
        </div>
        <Button/>
    </div>
  )
}

export default CardContent