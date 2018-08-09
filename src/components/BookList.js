import React from 'react';
import Books from './Books';

class BookList extends React.Component {
  constructor() {
    super();
    // Each book will need the following properties:
    // Title, Description, Author, Price
    this.state = {
      bookArray: [
        {
          title: 'Harry Potter',
          description: 'Wizard School stuff',
          author: 'JK Rowling',
          price: '14.99'
        },
        {
          title: 'Name of the Wind',
          description: 'Edgy Wizard school stuff',
          author: 'Patrick Rothfuss',
          price: '12.50'
        },
        {
          title: 'Wheel of Time',
          description: 'A few High fantasy novels',
          author: 'Robert Jordan',
          price: '19.99'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        In Booklist
        <Books bookArray={this.state.bookArray} />
      </div>
    );
  }
}

export default BookList;
