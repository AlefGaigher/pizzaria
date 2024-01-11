import React, { useState, useEffect } from 'react';

const OrderSummary = ({ selectedPizzas }) => {
  const [deliveryTime, setDeliveryTime] = useState(null);

  const handleConfirmOrder = () => {
    // Make AJAX call to server/order.json
    fetch('server/order.json')
      .then(response => response.json())
      .then(data => setDeliveryTime(data.deliveryTime));
  };

  return (
    <div>
      <h2>Your Order Summary:</h2>
      <ul>
        {selectedPizzas.map(pizza => (
          <li key={pizza.id}>{pizza.name} - ${pizza.price}</li>
        ))}
      </ul>
      <button onClick={handleConfirmOrder}>Confirmar Pedido</button>
      {deliveryTime && <p>Your order will be delivered in {deliveryTime} minutes.</p>}
    </div>
  );
};

export default OrderSummary;
