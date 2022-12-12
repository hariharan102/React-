import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HooksEx from './HooksEx1/HooskEx';

import { Axios } from 'axios';
import GetEX from './Http/GetEX';
import Gethooks from './Http/Gethooks';
import ValidationTextFields from './Reactadd/Val';
import Logindetails from './Project_elib/Logindetails';
import Form from './component/Form';
import { ValidationError } from 'yup';
import Login2 from './Project_elib/Login2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Login2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

