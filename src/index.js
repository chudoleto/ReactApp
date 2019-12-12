import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import AppList from "./components/AppList";
import AppFooter from "./components/AppFooter";

const el = (
    <div>
        <AppHeader/>
        <AppList/>
        <AppFooter/>
    </div>
);

ReactDOM.render(el, document.getElementById('root'));
