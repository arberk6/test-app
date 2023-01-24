import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page3 } from './Page3';
import { Page4 } from './Page4';
import { Page5 } from './Page5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page1 />} />
      <Route path='/with-some-data' element={<Page2 />} />
      <Route path='/with-some-data-more-than-before' element={<Page3 />} />
      <Route path='/with-some-data-more-than-before-but-this-time-a-bit-more' element={<Page4 />} />
      <Route path='/with-some-data-more-than-before-but-this-time-a-bit-more-but-this-time-a-bit-more' element={<Page5 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
