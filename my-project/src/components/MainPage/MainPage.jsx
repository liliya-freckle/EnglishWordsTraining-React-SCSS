import React from 'react'
import './MainPage.css'
import Table from '../Table/Table'
import LearningCards from '../LearningCards/LearningCards'

export const MainPage = () => {
    return (
        <div className='mainPage'>
            <Table />
            <LearningCards />
        </div>
    )
}

