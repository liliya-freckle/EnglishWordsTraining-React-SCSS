import React from 'react';
import Table from '../Table/Table';
import LearningCards from '../LearningCards/LearningCards';
import './MainPage.css'
import Background from '../../assets/background.png'
import Carusel from '../LearningCards/LearningCards';

export const MainPage = () => {
    return (
        <div className='mainPage' style={{ backgroundImage: Background }}>
            <Table />
            <Carusel />
        </div>
    )
}

