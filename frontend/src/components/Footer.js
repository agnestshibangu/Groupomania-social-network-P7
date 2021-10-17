import React from 'react'
import '../style/footer.css'
import Logo from '../style/logos/icon-left-font-monochrome-black.png'

export default function Footer() {
    return (
        <div className="footer-container">
            <img className="logo-footer" src={Logo} alt=''/>
        </div>
    )
}
