import React, { useState } from 'react'
import styles from './LearningCards.module.css'
import Button from '../Button/Button'

const CardsFront = ({ info }) => {
    const { englishWord, transcription, translate } = info;
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className={styles.card}>
            <div className='englishWord'>{englishWord} </div>
            <div className='transcription'>{transcription}</div>
            {isSelected ? (
                <div className='translate' onBlur={() => setIsSelected(false)}>{translate}</div>
            ) : (
                <Button type='secondary' text='Проверить' onClick={() => setIsSelected(true)} />
            )
            }


        </div>

    )
}

export default CardsFront