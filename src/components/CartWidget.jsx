import * as React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CartWidget() {
  const navigate = useNavigate();

  const { getCartQuantity } = useContext(CartContext);
  const quantity = getCartQuantity();

  return (
    <IconButton aria-label="cart" onClick={() => navigate('/cart')}>
      <StyledBadge badgeContent={quantity} color="secondary">
        <ShoppingCartIcon fontSize="large" />
      </StyledBadge>
    </IconButton>
  );
}

export default CartWidget;
