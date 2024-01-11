import React from 'react';

const PizzaList = ({ pizzas, onPizzaSelect }) => {
    return (
      <div>
        <h2>Escolha Sua Pizza:</h2>
        <ul>
          {pizzas.map(pizza => (
            <li key={pizza.name} onClick={() => onPizzaSelect(pizza)}>
              <strong>{pizza.name}</strong> - R${pizza.price}
              <ul>
                {pizza.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default PizzaList;
