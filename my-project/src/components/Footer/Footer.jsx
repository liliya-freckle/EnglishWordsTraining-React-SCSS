import React from 'react'
import styles from './Footer.module.css'
import badge from '../../assets/badge.svg'
import ru from '../../assets/ru.svg'

function Footer() {
    return (
        <>
            <div className={styles.footerLine}>
                <img className='badge' src={badge} />
                <img className='ru' src={ru} />
            </div>

        </>
    )
}

export default Footer