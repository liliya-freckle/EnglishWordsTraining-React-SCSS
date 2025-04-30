import React from 'react'

export const WordsCards = ({ info }) => {
    const { id, url, EnglishWord, Translate } = info
    return (
        <div>
            <h3>{id}</h3>
            <img src={url} />
            <p>{EnglishWord}</p>
            <p>{Translate}</p>
        </div>
    )
}
