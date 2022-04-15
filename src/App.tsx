import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import MarketNavbar from './MarketNavbar';
import SalesList from "./SalesList/SalesList";
import MySales from "./MyProperties/MySales";

function App() {
    const navigation = {
        brand: { name: "NavbarScroller", to: "/" },
        links: [
            { name: "Liste des annonces", to: "/" },
            { name: "Mes propriétés", to: "/blog" },
        ]
    }
    const { brand, links } = navigation;
  return (
    <div className="App">
        <MarketNavbar />

        <div>
            <SalesList />
        </div>
    </div>
  );
}

export default App;
