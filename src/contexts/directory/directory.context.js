import { createContext } from 'react';
import SECTIONS_DATA from './directory.data';

const DirectoryContext = createContext({
    sections: SECTIONS_DATA
});

export default DirectoryContext;