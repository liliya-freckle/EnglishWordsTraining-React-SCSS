import React from 'react'
import { data } from '../data/cardsData'
import { WordsCards } from './WordsCards'
import './MainPage.css'

export const MainPage = () => {
    return (
        <div className='mainPage'>
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

