import React from 'react';
import logo from "../../public/images/logo192.png";
import styles from "../Header/header.module.scss";
import "../styles/modules/_bootstrap.scss";

function Headers(props) {
    return (
        <div className={`${styles.background}`}>
            <div className='container px-5'>
                <nav className="navbar navbar-expand-lg d-flex flex-row justify-content-between">
                    <a className="navbar-brand" href="#">
                        <img alt="logo" className="img-fluid" src={logo} width={205} height={71} />
                    </a>
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active me-5">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link text-white" href="#">Tokenomics</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link text-white" href="#">Road map</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <button className={`${styles.button_custom}`}>
                        <span className='text-white fw-bold'>Connect Wallet</span>
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Headers;