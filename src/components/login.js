import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import React from "react";
function Login(){

    const [ email, setEmail ] = useState(undefined);;
    const [ password, setPassword ] = useState(undefined);
    const [ confirmPassword, setConfirmPassword ] = useState(undefined);
    
    const handleInputChange = (e) => {
        const {id, value} = e.target;
        
        if(id === "email"){
            setEmail(value);
        }
        else if(id === "password"){
            setPassword(value);
        }
        else if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }
    const handleSubmit  = () => {
        
        if ( email === null || password === null || confirmPassword === null || password !== confirmPassword){
            if (password !== confirmPassword){
                alert("Las contraseñas no coinciden");
            }else{
                alert("Por favor, llene todos los campos obligatorios");
            }
        }else{
            if (email !== "email*"){
                let obj = {
                    "email": email,
                }
                const URL = 'https://parcial2-be-ec3d.vercel.app/login';
                fetch(URL, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj)
                })
                    .then((response) => response.json())
                    .then((data) => {
                    console.log(data);
                    alert('¡Te has registrado!');
                    })
                    .catch((error) => {
                    console.error(error);
                    alert('Ocurrió un error al intentar registrarte, intentalo de nuevo.');
                    });
            }else{
                alert("Por favor, llene todos los campos obligatorios");
            }
            
        }

        
    }
    return(
        <Container fluid className="px-5" style={{fontFamily:'Oxygen'}}>
            <Form>
                <Row>
                    <Col>
                        <h1 className="py-5">Crea tu perfil</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="text-left">
                            <Form.Text className="text-muted">
                                Los campos marcados con * son obligatorios
                            </Form.Text>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Correo electrónico*" id="email" value = {email} onChange = {(e) => handleInputChange(e)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Control type="password" placeholder="Contraseña*" id="password" value={password} onChange = {(e) => handleInputChange(e)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Control type="password" placeholder="Confirma tu contraseña*" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col>
                        <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
                            Aceptar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        
    )
}

export default Login;