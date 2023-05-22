import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Detail from './compnents/Detail';
import Header from './compnents/Header';
import Banner from './compnents/Banner';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
