// App.js

import React, { useState } from 'react';
import FoodBox from './Component/FoodBox';
import Search from './Component/Search'; // Create a Search component

const App = () => {
  const initialFoods = [
    { name: 'Pizza', calories: 400, image: 'https://i.imgur.com/eTmWoAN.png' },
    { name: 'Burgur', calories: 300, image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D' },
    { name: 'Chicken fry', calories: 600, image: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww' },
    { name: 'Chocolate pizza', calories: 900, image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww' },
  ];

  const [foods, setFoods] = useState(initialFoods);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddItem = (item) => {
    const existingItemIndex = selectedItems.findIndex((i) => i.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity += item.quantity;
      updatedItems[existingItemIndex].totalCalories += item.quantity * item.calories;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems((prevItems) => [
        ...prevItems,
        { ...item, totalCalories: item.quantity * item.calories },
      ]);
    }
  };

  const handleResetItem = (itemName) => {
    const updatedItems = selectedItems.filter((item) => item.name !== itemName);
    setSelectedItems(updatedItems);
  };

  const handleSearch = (query) => {
    // Filter the foods based on the search query
    const filteredFoods = initialFoods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onAdd={handleAddItem} />
      ))}
      <div>
        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.quantity} {item.name} = {item.totalCalories} cal{' '}
              <button onClick={() => handleResetItem(item.name)}>Reset</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
