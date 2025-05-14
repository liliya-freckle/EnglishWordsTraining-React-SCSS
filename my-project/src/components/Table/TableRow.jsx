import React from 'react'
import styles from './Table.module.css';
import Button from '../Button/Button';

const TableRow = ({ info }) => {
    return (
        <tr className={styles.row}>
            <td className={styles.cell}>{info.id}</td>
            <td className={styles.cell}>{info.englishWord}</td>
            <td className={styles.cell}>{info.transcription}</td>
            <td className={styles.cell}>{info.translate}</td>
            <td className={styles.buttonContainer}>
                <Button text='Редактировать' />
                <Button text='Удалить' />
            </td>
        </tr>


    )
}

export default TableRow