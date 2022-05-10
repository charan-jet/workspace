import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import "./styles/main.css";

import MasterContainer from './components/MasterContainer'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MasterContainer/>
        </BrowserRouter>
    </React.StrictMode> ,   
    document.getElementById('root')
);