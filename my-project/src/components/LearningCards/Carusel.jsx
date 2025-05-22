import React from 'react'
import LearningCards from './LearningCards'

const Carusel = (id, cards) => {
    return (
        <CardWrapper id={id} info={cards}>
            <LearningCards id={id} info={cards} />
        </CardWrapper>
    )
}

export default Carusel

const CardWrapper = ({ children, id, cards }) => {
    return (
        <>
            <Button>Next</Button>
            {children}
            <Button>Previous</Button>
            <div>{id},{cards.length}</div>
        </>
    )
}

