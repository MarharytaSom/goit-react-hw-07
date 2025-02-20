import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;