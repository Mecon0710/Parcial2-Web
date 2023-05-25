import Book from "./book";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { useEffect, useState } = require("react"); // Hook de estado y de efecto

function Books () {

   const [books, setBooks] = useState([]); 
   useEffect(()=>{
       const URL = "https://parcial2-be-ec3d.vercel.app/books";
       fetch(URL).then(data => data.json()).then(data => {
           setBooks(data);
       })
   }, []);
   return(
        <div className="container">
            <h2 className="mt-2">Listado de Books</h2>
            <hr></hr>
            <Row>
            {books.map((book) => (<Col key={book.id}><Book book={book} /></Col>))}
            </Row>
        </div>
   )
}

export default Books;