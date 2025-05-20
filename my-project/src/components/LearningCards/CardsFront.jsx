import React, { useState } from 'react'
import styles from './LearningCards.module.css'
import Button from '../Button/Button'

const CardsFront = ({ info }) => {
    const { englishWord, transcription, translate } = info;
    const [pressed, setPressed] = useState(false);
    const handlePressedState = () => {
        setPressed(!pressed)
    }

    return (
        <div className={styles.card}>
            <div className='englishWord'>{englishWord} </div>
            <div className='transcription'>{transcription}</div>
            {pressed ? (
                <div className='translate' onBlur={() => setPressed(false)}>{translate}</div>
            ) : (
                <Button type='secondary' text='Проверить' onClick={handlePressedState} />
            )
            }


        </div>

    )
}

export default CardsFront