// PizzaCard.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const PizzaCard = ({ pizza, onPizzaSelect }) => {
  return (
    <Card style={{ display: 'flex', height: '100%' }}>
      <img
        src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" // Certifique-se de ter uma propriedade imageUrl em seu objeto pizza
        alt={pizza.name}
        style={{ width: '150px', height: '100%', objectFit: 'cover' }}
      />
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h6" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingredientes: {pizza.ingredients.join(', ')}
        </Typography>
        <Typography variant="h6" color="primary">
          ${pizza.price}
        </Typography>
        <Button onClick={() => onPizzaSelect(pizza)} variant="contained" color="primary">
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default PizzaCard;
