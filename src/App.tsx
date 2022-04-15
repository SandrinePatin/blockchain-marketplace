import React from 'react';
import './App.css';
import MarketNavbar from './MarketNavbar';
import SalesList from "./SalesList/SalesList";
import MyProperties from "./MyProperties/MyProperties";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    const navigation = {
        brand: { name: "NavbarScroller", to: "/" },
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
                        <Route  path="/" element={<SalesList />} />
                        <Route path="/myProperties" element={<MyProperties />} />
                    </Routes>
                </BrowserRouter>
            </div>
    );
}

export default App;
