import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { CartContext } from '../../providers/cart/cart.provider';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  const { hidden } = useContext(CartContext);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option'>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
