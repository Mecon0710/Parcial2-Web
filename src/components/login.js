import { useState } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
        setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = () => {
        fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })
          .then(response => {
            if (response.ok) {
              navigate('/books');
            } else {
                alert('Error al iniciar sesión');
            }
          })
          .catch(error => {
            console.error('Error al realizar la solicitud:', error);
          });
      };
      
  
    return (
      <div  style={{ marginTop: '300px'}}>
        <h1><FormattedMessage id="Iniciar sesión"/></h1>
        <form>
          <input type="text" placeholder="Email" value={email} onChange={handleUsernameChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button type="button" onClick={handleLogin}><FormattedMessage id="Iniciar sesión"/></button>
        </form>
      </div>
    );
  }
  

export default Login;