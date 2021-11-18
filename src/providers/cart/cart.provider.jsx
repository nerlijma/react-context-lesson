import { createContext, useState, useEffect } from 'react';

import {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    getCartItemsCount,
    getCartItemsTotal

} from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    cartItems: [],
    cartTotal: 0,
    itemCount: 0,
    toggleHidden: () => { },
    addItem: () => { },
    removeItem: () => { },
    clearItem: () => { }
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const clearItem = (item) => setCartItems(clearItemFromCart(cartItems, item));

    useEffect(() => {
        setCartTotal(getCartItemsTotal(cartItems));
        setItemCount(getCartItemsCount(cartItems));
    }, [cartItems]);

    return <CartContext.Provider
        value={{
            hidden,
            cartItems,
            toggleHidden,
            addItem,
            removeItem,
            clearItem,
            cartTotal,
            itemCount
        }}>{children}</CartContext.Provider>
};

export default CartProvider;