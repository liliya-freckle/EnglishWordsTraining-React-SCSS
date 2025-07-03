import React from 'react';
import Table from '../Table/Table';
import LearningCards from '../LearningCards/LearningCards';
import './MainPage.css'
import Background from '../../assets/background.png'
import Carousel from '../Carusel/Carousel';

export const MainPage = () => {
    return (
        <div className='mainPage' style={{ backgroundImage: Background }}>
            <Table />
            <LearningCards />
            <Carousel />
        </div>
    )
}

