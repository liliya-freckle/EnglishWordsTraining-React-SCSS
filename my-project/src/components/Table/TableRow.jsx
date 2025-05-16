import React from 'react'
import styles from './Table.module.css';
import Button from '../Button/Button';
import icon from '../../assets/icon.png'

const TableRow = ({ info }) => {
    return (
        <tr className={styles.row}>
            <td className={styles.cell}>{info.id}</td>
            <td className={styles.cell}>{info.englishWord}</td>
            <td className={styles.cell}>{info.transcription}</td>
            <td className={styles.cell}>{info.translate}</td>
            <td className={styles.buttonContainer}>
                <Button type='primary' text='Редактировать'> </Button>
                <Button type='primary' text='Удалить' />
            </td>
        </tr>


    )
}

export default TableRow