// PizzaList.js
import React from 'react';
import { Grid, Container } from '@mui/material';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzas, onPizzaSelect }) => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <h2>Escolha sua Pizza:</h2>
      <Grid container spacing={4}>
        {pizzas.map(pizza => (
          <Grid key={pizza.name} item xs={12} sm={6}>
            <PizzaCard pizza={pizza} onPizzaSelect={onPizzaSelect} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PizzaList;
