import React, { useState } from 'react'
import styles from './Button.module.css';

const Button = ({ text, type }) => {

    return (
        <button className={type === 'primary' ? styles.button : styles.secondary} > {text}</button >
    )
}

export default Button