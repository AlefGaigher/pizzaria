import React, { useState, useEffect } from 'react';
import PizzaList from './components/PizzaList';
import OrderSummary from './components/OrderSummary';

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizzas, setSelectedPizzas] = useState([]);

  useEffect(() => {
    fetch('server/pizzas.json')
      .then(response => response.json())
      .then(data => setPizzas(data));
  }, []);

  const handlePizzaSelection = (pizza) => {
    setSelectedPizzas([...selectedPizzas, pizza]);
  };

  return (
    <div>
      <h1>Pizzaria Online</h1>
      <PizzaList pizzas={pizzas} onPizzaSelect={handlePizzaSelection} />
      <OrderSummary selectedPizzas={selectedPizzas} />
    </div>
  );
};

export default App;
