// FoodBox.js

import React, { useState } from 'react';
import './FoodBox.css'; // Import your CSS file

const FoodBox = ({ food, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAdd({ ...food, quantity });
    setQuantity(1);
  };

  return (
    <div className="food-box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img src={food.image} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p className="food-name">
              <strong>{food.name}</strong>
            </p>
            <p className="food-details">
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAdd}>
                Add
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
