import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { FormattedMessage } from 'react-intl';

function Book() {

  const [currentURL, setCurrentURL] = useState('');

  useEffect(() => {
    setCurrentURL(window.location.pathname);
  }, []);

  const [book, setBook] = useState([]);
  
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const URL = currentURL;
        const response = await fetch(URL);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        } else {
          console.error('Error al obtener los detalles del libro');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchBook();
  }, [currentURL]);

  return (
    <div className="book-details-container"  style={{ textAlign: 'left', margin: '50px'}} >
      <h2>{book.name}</h2>
      <div className="book-details">
        <div className="book-image">
          <Image src={book.image}/>
        </div>
        <div className="book-info">
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong><FormattedMessage id="Autor"/>:</strong> {book.author}
          </p>
          <p>
            <strong><FormattedMessage id="Editorial"/>:</strong> {book.publisher}
          </p>
          <p>
            <strong><FormattedMessage id="Género"/>:</strong> {book.gender}
          </p>
          <p>
            <strong><FormattedMessage id="Año"/>:</strong> {book.year}
          </p>
          <p>
            <strong><FormattedMessage id="Precio"/>:</strong> {book.price}
          </p>
          <p>
            <strong><FormattedMessage id="Resumen"/>:</strong> {book.summary}
          </p>
        </div>
      </div>
    </div>
  );
}


export default Book;