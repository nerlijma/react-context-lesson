import { createContext } from 'react';
import SHOP_DATA from './shop.data';

const CollectionContext = createContext({
    collections: SHOP_DATA
});

export default CollectionContext;