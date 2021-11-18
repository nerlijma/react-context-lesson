import React, { useContext } from 'react';
import CollectionContext from '../../contexts/collection/collection.context';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const { collections } = useContext(CollectionContext);
  const collectionsForPreview = Object.keys(collections).map(key => collections[key]);

  return (
    <div className='collections-overview'>
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
};

export default CollectionsOverview;
