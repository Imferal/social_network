import * as React from "react";
import ContentPanel from '../ContentPanel/ContentPanel';
import Header from '../Header/Header';
import NavPanel from '../NavPanel/NavPanel';
import s from './App.module.scss';
import AsidePanel from "../AsidePanel/AsidePanel";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main className={s.main}>
                <NavPanel/>
                <ContentPanel/>
                <AsidePanel/>
            </main>
        </BrowserRouter>
    );
}

export default App;