import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <Link to="/" className={styles.logo} ><img src={logo} /> </Link>

                <NavBar />
            </div>

        </>

    )
}

export default Header