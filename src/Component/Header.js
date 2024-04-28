import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
                <h3>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    TVL SALOON
                </Link>
            </h3>
                <h4>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    HOME
                </Link>
            </h4>
                <h4>
                <Link to="/about" style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    ABOUT
                </Link>
            </h4>
                <h4>
                <Link to="/contact" style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    CONTACT
                </Link>
            </h4>
                <h4>
                <Link to="/book-appointment" style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    FRANCHISEE 
                </Link>
            </h4>
        </div>
    )
}

export default Header;
