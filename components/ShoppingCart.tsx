import React from 'react';
import { Offcanvas, Stack, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from '../components/CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import liftTickets from '../data/liftTickets.json';
import { Signup } from './pages/Signup';

type ShoppingCartProps = {
  isOpen: boolean;
};

const checkout = async () => {
  await fetch('http://localhost:4000/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: CartItem.item }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.url) {
        window.location.assign(response.url);
      }
    });
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((ticket) => (
            <CartItem key={ticket.id} {...ticket} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = liftTickets.find((i) => i.id === cartItem.id);
                return total + item.price * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
      <Offcanvas.Header>
        <Button className="w-50" onClick={checkout}>
          Check Out
        </Button>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
