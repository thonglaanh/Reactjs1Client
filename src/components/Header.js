import React from 'react';
import { FaSearch, FaShoppingCart, FaHome, FaInfo, FaUser } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/shopping1.png'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
                    <span className="logo-text">   Super Maket</span>
                </a>
            </div>
            <div className="search">
                <input type="text" placeholder="Tìm kiếm..." />
                <button type="submit" className="search-button">
                    <FaSearch />
                </button>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="/" className="icon-link">
                            <FaHome />
                            <span className="icon-text">Trang chủ</span>
                        </a>
                    </li>
                    <li>
                        <a href="about" className="icon-link">
                            <FaInfo />
                            <span className="icon-text">Giới thiệu</span>
                        </a>
                    </li>

                    <li>
                        <a href="login" className="icon-link">
                            <FaUser />
                            <span className="icon-text">Đăng nhập/Đăng ký</span>
                        </a>
                    </li>
                    <li style={{ color: 'white', fontSize: '20px' }}>|</li>
                    <li >
                        <a href="cart.html" className="icon-link">
                            <FaShoppingCart size={34} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
