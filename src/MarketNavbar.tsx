import React from "react";

const MarketNavbar = (props: {
    brand: { name: string; to: string },
    links: Array<{ name: string, to: string }>
}) => {
    const { brand, links } = props;
    const NavLinks: any = () => links.map((link: { name: string, to: string }) => <li className="nav-item" key={link.name}><a className="nav-link" href={link.to}>{link.name}</a></li>);
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-items-center container-fluid">
            <a className="navbar-brand" href={brand.to}>{brand.name}</a>
            <ul className="navbar-nav mr-auto">
                <NavLinks />
            </ul>
        </nav>
    )
};


export default MarketNavbar;
