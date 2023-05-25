//REVISAAAAAAAR

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from "./components/book";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Container className="mt-3">
    <Row>
      <Book id={1} /> {/* Pasar información a los componentes */}

    </Row>
  </Container>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//INTERNACIONALIZACIÓN
/*
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";

import localeEsMessages from "./locales/es";


ReactDOM.render(
        <IntlProvider locale="es-ES" messages= {localeEsMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
);
);
*/

//INTERNACIONALIZACIÓN EN EL COMPONENTE
/*
import {FormattedMessage} from 'react-intl';

<td>
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
</td>

o

<th scope="col">
    <FormattedMessage id="Position"/>
</th>
*/