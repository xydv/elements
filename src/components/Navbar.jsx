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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Elements</a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <button onClick={handleClick} class="btn btn-success">{show ? "Images" : "No Images"}</button>
                </div>
            </nav>
            <Call images={show} />
        </div>
    )
}

export default Navbar
