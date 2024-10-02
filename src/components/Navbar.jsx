import React, { useState } from 'react';
import './Navbar.css'; // Add your custom styles if needed

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li
                    className="nav-item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Products
                    {isDropdownOpen && (
                        <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                            <li className="dropdown-item">Product 1</li>
                            <li className="dropdown-item">Product 2</li>
                            <li className="dropdown-item">Product 3</li>
                        </ul>
                    )}
                </li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;