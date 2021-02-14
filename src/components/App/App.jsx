import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AsidePanel from '../AsidePanel/AsidePanel';
import ContentPanel from '../ContentPanel/ContentPanel';
import Header from '../Header/Header';
import NavPanel from '../NavPanel/NavPanel';
import s from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={s.main}>
        <NavPanel />
        <ContentPanel />
        <AsidePanel />
      </main>
    </BrowserRouter>
  );
}

export default App;