import { Link, navigate } from 'gatsby';
import React from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      image: '/products/pdp1.jpeg',
      alt: '',
      name: 'Lambswool Crew Neck Jumper',
      price: 220,
      color: 'Anthracite Melange',
      size: 'xs',
    },
  ]);

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>My Bag</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        {cartItems.map((item) => (
          <MiniCartItem
            key={item.id}
            {...item}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (USD)</span>
            <span>
              <CurrencyFormatter amount={cartItems.reduce((sum, item) => sum + item.price, 0)} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
