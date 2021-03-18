import React from 'react';
import Button from './Button';

const CartItem = ({ id, name, type, size, totalPrice, totalCount, onRemove }) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <b>{totalCount}</b>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} р</b>
      </div>
    </div>
  );
};

export default CartItem;
