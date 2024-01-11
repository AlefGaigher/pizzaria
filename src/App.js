// App.js
import React, { useState, useEffect } from 'react';
import { CssBaseline, Container, Paper } from '@mui/material';
import PizzaList from './components/PizzaList';
import OrderSummary from './components/OrderSummary';

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizzas, setSelectedPizzas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('server/pizzas.json')
      .then(response => response.json())
      .then(data => setPizzas(data));
  }, []);

  const handlePizzaSelection = (pizza) => {
    setSelectedPizzas([...selectedPizzas, pizza]);
    setTotalPrice(totalPrice + pizza.price);
  };

  const handlePizzaDelete = (pizza) => {
    const indexToRemove = selectedPizzas.findIndex(selectedPizza => selectedPizza.name === pizza.name);
    if (indexToRemove !== -1) {
      const updatedSelectedPizzas = [...selectedPizzas];
      updatedSelectedPizzas.splice(indexToRemove, 1); 
      setSelectedPizzas(updatedSelectedPizzas);
      setTotalPrice(totalPrice - pizza.price);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="lg"
      >
        <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
          <h1 style={{ color: 'orange', textAlign: 'center' }}>Cardápio</h1>
          <PizzaList pizzas={pizzas} onPizzaSelect={handlePizzaSelection} />
          <OrderSummary selectedPizzas={selectedPizzas} onPizzaDelete={handlePizzaDelete} totalPrice={totalPrice} />
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default App;
