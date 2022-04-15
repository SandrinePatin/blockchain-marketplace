import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import SalesList from "./SalesList/SalesList";

function App() {
    const navigation = {
        brand: { name: "NavbarScroller", to: "/" },
        links: [
            { name: "Liste des annonces", to: "/" },
            { name: "Mes propriétés", to: "/blog" },
        ]
    }
    const { brand, links } = navigation;

    return (<div className="App">
            <div>
                    <SalesList />
                </div>
            </div>);

}
export default App;
