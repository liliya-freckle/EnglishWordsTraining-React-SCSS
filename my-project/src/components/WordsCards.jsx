import React from 'react'
import './WordsCards.css'

export const WordsCards = ({ info }) => {
    const { id, url, englishWord, transcription, translate } = info
    return (
        <div className='wordsCards'>
            <h3>{id}</h3>
            <img src={url} />
            <p>{englishWord}</p>
            <p>{transcription}</p>
            <p>{translate}</p>
        </div>
    )
}
