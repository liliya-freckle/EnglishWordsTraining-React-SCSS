import React from 'react'
import { data } from './cardsData'
import { WordsCards } from './WordsCards'

export const MainPage = () => {
    return (
        <div>
            {
                data.map((word) => {
                    return (
                        <WordsCards info={word} />
                    )
                })
            }
        </div>
    )
}

