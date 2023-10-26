import React from "react";
import './style.css'
import logo from '../../Images/hemopaLogo.png'

export default function NavBar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                    <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top logo"
                        alt="Logo"
                    />
                    </a>
                        <h2>Passeio de Bike</h2>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{ marginLeft: '50%' }}>
                    <li className="nav-item">
                        <a className="nav-link link" href="#">
                            Realizar Inscrição
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link" href="#">
                            Consultar Inscrições
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}