import React, { useContext } from 'react';
import { AppContext } from './context';
import CartItem from './cartItem';

const CartContainer = () => {
  const { cart, total, clearCart } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h3>your bag</h3>
          <h4 className="empty-cart">Is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
