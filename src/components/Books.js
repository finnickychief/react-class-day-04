import React from 'react';

export default props => {
  return (
    <div>
      {props.bookArray.map(book => (
        <h1>{book.title}</h1>
      ))}
    </div>
  );
};
