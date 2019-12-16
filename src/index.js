import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import AppList from "./components/app-list";
import AppFooter from "./components/app-footer";

const el = (
    <div>
        <AppHeader/>
        <AppList/>
        <AppFooter/>
    </div>
);

ReactDOM.render(el, document.getElementById('root'));
