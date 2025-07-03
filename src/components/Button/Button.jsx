import React, { useState } from 'react'
import styles from './Button.module.css';

const Button = ({ text, type, onClick }) => {

    return (
        <button className={type === 'primary' ? styles.button : styles.secondary} onClick={onClick}> {text}</button >
    )
}

export default Button