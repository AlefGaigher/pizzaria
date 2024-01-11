// OrderSummary.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Typography, Divider, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const OrderSummary = ({ selectedPizzas, onPizzaDelete, totalPrice }) => {
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleConfirmOrder = () => {
    fetch('server/order.json')
      .then(response => response.json())
      .then(data => setDeliveryTime(data.deliveryTime));
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div style={{ marginTop: '30px', marginLeft: '100px', marginRight: '100px', padding: '20px' }}>
      <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
        Meu Carrinho:
      </Typography>
      <List>
        {selectedPizzas.map(pizza => (
          <div key={pizza.name}>
            <ListItem>
              <ListItemText
                primary={pizza.name}
                secondary={`$${pizza.price.toFixed(2)}`}
              />
              <Button onClick={() => onPizzaDelete(pizza)} color="error" variant="outlined">
                Delete
              </Button>
            </ListItem>
            <Divider />
          </div>
        ))}
        <ListItem>
          <ListItemText primary="Preço Total:" />
          <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
        </ListItem>
      </List>
      {selectedPizzas.length > 0 && (
        <Button onClick={handleConfirmOrder} variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Confirmar Pedido
        </Button>
      )}

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Pedido Confirmado!</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Seu pedido será entregue em {deliveryTime} minutos.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderSummary;
