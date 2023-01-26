import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div class="header">
            <Image class="right" src="/../public/acm-logo.png" width={300} height={100}/>
        </div>

    )
}

export default Header