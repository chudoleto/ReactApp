import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppList from "./components/AppList";

const el = (
    <div>
        <AppHeader/>
        <AppList/>
        <AppFooter/>
    </div>
);

ReactDOM.render(el, document.getElementById('root'))