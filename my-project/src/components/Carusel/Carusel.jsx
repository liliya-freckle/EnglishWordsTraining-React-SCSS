import React, { useState } from 'react'
import Button from '../Button/Button'
import CardsFront from '../LearningCards/CardsFront'
import styles from './Carusel.module.css'

function Carusel(props) {


    return (
        <div className={styles.caruselContainer}>
            <div>

                <Button text="prev"></Button>
                <Button text="next"></Button>
            </div>
        </div>

    )
}

export default Carusel