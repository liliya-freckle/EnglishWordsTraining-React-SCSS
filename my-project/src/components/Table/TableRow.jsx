import React, { useState } from 'react'
import styles from './Table.module.css';
import Button from '../Button/Button';

const TableRow = ({ info }) => {
    const { id, englishWord, transcription, translate } = info;
    const [isSelected, setIsSelected] = useState(false);
    const [value, setValue] = useState({
        id: id,
        englishWord: englishWord,
        transcription: transcription,
        translate: translate,
    });

    function handleEdit() {
        setIsSelected((prev) => !prev);
    }

    function handleSave() {
        setValue({ ...value });
        setIsSelected((prev) => !prev);
    }
    function handleClose() {
        setIsSelected((prev) => !prev);
        setValue({ ...info });
    }

    function handleChange(event) {
        setValue((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value };
        })

    }

    return isSelected ? (
        <>
            <tr>
                <td className={styles.cell}>{id}</td>
                <td>
                    <input
                        type="text"
                        value={value.englishWord}
                        name={'englishWord'}
                        onChange={handleChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={value.transcription}
                        name={'transcription'}
                        onChange={handleChange}
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={value.translate}
                        name={'translate'}
                        onChange={handleChange}
                    />
                </td>
                <Button onClick={handleSave} text='Сохранить'> </Button>
                <Button onClick={handleClose} type='primary' text='Закрыть' />
            </tr>
        </>
    ) : (
        <>
            <tr className={styles.row}>
                <td className={styles.cell}>{value.id}</td>
                <td className={styles.cell}>{value.englishWord}</td>
                <td className={styles.cell}>{value.transcription}</td>
                <td className={styles.cell}>{value.translate}</td>
                <td className={styles.buttonContainer}>
                    <Button onClick={handleEdit} text='Редактировать'> </Button>
                    <Button type='primary' text='Удалить' />
                </td>
            </tr>
        </>
    )
}

export default TableRow