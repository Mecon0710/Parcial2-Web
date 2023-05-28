import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const URL = " /books";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="container"  style={{ margin: '300px', marginTop:'55px'}}>
      <h1 className="mt-2"><FormattedMessage id="Listado de libros"/></h1>
        <hr/>
        <Row>
            {books.map(book => (
            <Col key={book.id} md={4}>
                <div>
                <h3>{book.name}</h3>
                <Button variant="secundary" href={`/books/${book.id}`}>
                    <Image src={book.image} />
                </Button>
                <p>ISBN: {book.isbn}</p>
                </div>
            </Col>
            ))}
        </Row>
    </div>
  );
}

export default Books;

