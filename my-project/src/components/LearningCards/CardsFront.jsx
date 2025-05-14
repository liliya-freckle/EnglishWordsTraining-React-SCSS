import React from 'react'
import styles from './LearningCards.module.css'

const CardsFront = ({ info }) => {
    const { englishWord, transcription, translate } = info
    return (
        <div className={styles.card}>
            <div className='englishWord'>{englishWord} </div>
            <div className='transcription'>{transcription}</div>
            <div className='translate'>{translate}</div>
        </div>

    )
}

export default CardsFront