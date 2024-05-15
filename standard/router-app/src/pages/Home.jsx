import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

    return (
        <div>
            <button onClick={() => { navigate("/works") }}>works</button>
            <button onClick={() => { navigate("/about") }}>about</button>
            <button onClick={() => { navigate("/contect") }}>contect</button>
        </div>
    )
}

export default Home