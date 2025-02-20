import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      placeholder="Пошук контакту"
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;