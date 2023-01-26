import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/resources'>Resources</Link>
                <Link href='/calendar'>Calendar</Link>
                <Link href='/join'>Join Us</Link>
            </ul>
        </nav>
    )
}

export default Navbar