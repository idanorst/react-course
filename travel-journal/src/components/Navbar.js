import React from 'react'
import '../style.css'

export default function Navbar() {
    return (
        <nav>
            <img className='nav--icon' src={require('../images/world.png')} />
            <p className='nav--title'>My Travel Journal</p>
        </nav>
    )
}
