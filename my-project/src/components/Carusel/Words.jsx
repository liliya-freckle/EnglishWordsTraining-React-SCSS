import React, {useState} from 'react'
import styles from './Carusel.module.css'
import Button from '../Button/Button';

const Words = ({item}) => {
    const { englishWord, transcription, translate } = item;
        const [pressed, setPressed] = useState(false);
        const handlePressedState = () => {
            setPressed(!pressed)
        }


    return (
    <div className={styles.containerCard}>
        <div>{item.englishWord}</div>
        <div>{item.transcription}</div>
        {pressed ? (
                <div className='translate' onBlur={() => setPressed(false)}>{translate}</div>
            ) : (
                <Button type='secondary' text='Проверить' onClick={handlePressedState} />
            )
            }
        

    </div>
    )
}

export default Words