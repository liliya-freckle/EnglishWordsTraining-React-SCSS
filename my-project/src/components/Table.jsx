import React from 'react';
import { data } from '../data/cardsData';
import styles from './Table.module.css';
import TableRow from './TableRow';

const Table = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.headerRow}>
                    <th className={styles.headerCell}>#</th>
                    <th className={styles.headerCell}>Слово</th>
                    <th className={styles.headerCell}>Транскрипция</th>
                    <th className={styles.headerCell}>Перевод</th>
                </tr>
            </thead>
            <tbody>
                {data.map((card, id) => (
                    <TableRow key={card.id} info={card} />
                ))}
            </tbody>
        </table>
    )
}

export default Table