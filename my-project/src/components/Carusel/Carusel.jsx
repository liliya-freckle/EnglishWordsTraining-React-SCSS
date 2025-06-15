import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './Carusel.module.css'
import Words from './Words'
import {data} from '../../data/cardsData'

function Carusel(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    function next(){
        if(activeIndex >= data.length -1) {
            setActiveIndex(0);
        }
        setActiveIndex((prev) => prev + 1);
    }
    function prev () {
        if(activeIndex <= 0) {
            setActiveIndex()
        }
        setActiveIndex((prev) => prev - 1);
    }

    return (
        <div className={styles.containerCarusel}>
            <div className={styles.containerSlide}>

                <Button text="prev" onClick={prev}></Button>
                <Words item={data[activeIndex]} />
                <Button text="next" onClick={next}></Button>
            </div>
        </div>

    )
}

export default Carusel