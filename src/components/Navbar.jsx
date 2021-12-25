import React from 'react'
import Call from './Call';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Elements</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                </div>
            </nav>
            <Call />
        </div>
    )
}

export default Navbar
