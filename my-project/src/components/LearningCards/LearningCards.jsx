import React from 'react'
import { data } from '../../data/cardsData'
import CardsFront from './CardsFront'
import styles from './LearningCards.module.css'

const LearningCards = () => {
    return (
        <div className={styles.cardsContainer}>
            {
                data.map((cards, id) => {
                    return <CardsFront key={id} info={cards} />
                })
            }
        </div>
    )
}

export default LearningCards