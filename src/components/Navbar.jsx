import React,{ useState } from 'react'
import Call from './Call';

function Navbar() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        if(show===true){
            setShow(false);
        }
        else{
            setShow(true);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Elements</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <button onClick={handleClick} className="btn btn-success">{show ? "Images" : "No Images"}</button>
                </div>
            </nav>
            <Call images={show} />
        </div>
    )
}

export default Navbar
