import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const NavBar = () => {
    return (
        <div>
            <Link to="/" className={styles.link}>Dictionary</Link>
            <Link to="/checkyourself" className={styles.link}>Check yourself</Link>
            <Link to="/game" className={styles.link}>Game</Link>

        </div>
    )
}

export default NavBar