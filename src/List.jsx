import React from 'react';

import Item from './Item';

const List = ({ restaurants }) => {
  if (restaurants.length === 0) {
    return null;
  }
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default List;