import React from 'react';
import './App.css';
import SalesList from "./SalesList/SalesList";
import MyProperties from "./MyProperties/MyProperties";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MarketNavbar from './MarketNavbar';

function App() {
    const me = "myaddresswithalotofletters"
    const navigation = {
        brand: { name: "ImmoMarket", to: "/" },
        links: [
        { name: "Liste des annonces", to: "/" },
        { name: "Mes propriétés", to: "/myProperties" },
        ]
        }
        const { brand, links } = navigation;
        return (
            <div className="App">
                <MarketNavbar brand={brand} links={links}/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SalesList myaddr={me}/>} />
                        <Route path="/myProperties" element={<MyProperties myaddr={me}/>} />
                    </Routes>
                </BrowserRouter>

            </div>
    );
}

export default App;
