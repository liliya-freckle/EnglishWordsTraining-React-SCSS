import { useNavigate } from "react-router-dom";
import { data } from "../../data/cardsData";
import styles from "./Table.module.css";
import TableRow from "./TableRow";

const Table = () => {
  const navigate = useNavigate();
  function handleClose() {
    navigate("/");
  }
  return (
    <div className={styles.tableWrapper}>
      <button onClick={handleClose} className={styles.closeButton}>
        X
      </button>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>#</th>
            <th className={styles.headerCell}>Слово</th>
            <th className={styles.headerCell}>Транскрипция</th>
            <th className={styles.headerCell}>Перевод</th>
            <th className={styles.headerCell}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((card, id) => (
            <TableRow key={card.id} info={card} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
