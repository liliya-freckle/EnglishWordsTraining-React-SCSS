import React from 'react'
import styles from './Table.module.css';
import Button from './Button';

const TableRow = ({ info }) => {
    return (
        <tr className={styles.row}>
            <td className={styles.cell}>{info.id}</td>
            <td className={styles.cell}>{info.englishWord}</td>
            <td className={styles.cell}>{info.transcription}</td>
            <td className={styles.cell}>{info.translate}</td>
            <Button text='Редактировать' />
            <Button text="Удалить" />


        </tr>
    )
}

export default TableRow