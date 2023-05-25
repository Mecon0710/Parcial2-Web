import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Book(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Body>
       <Card.Title>
         <Link to={"/books/" + props.book.id}> {/* Navegara al enlace de la ruta + el id del libro */}
           {props.book.name}
         </Link>
       </Card.Title>
       <Card.Text> 
            <Link to={"https://parcial2-be-ec3d.vercel.app/ "+ props.book.id}> 
                {props.book.id}
                <hr></hr>
                {props.book.name}
                <hr></hr>
                {props.book.image}
                <hr></hr>
                {props.book.isbn}
                <hr></hr>
                {props.book.author}
                <hr></hr>
                {props.book.gender}
                <hr></hr>
                {props.book.publisher}
                <hr></hr>
                {props.book.year}
                <hr></hr>
                {props.book.available_online}
                <hr></hr>
                {props.book.price}
                <hr></hr>
                {props.book.summary}
            </Link>
        </Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Book;