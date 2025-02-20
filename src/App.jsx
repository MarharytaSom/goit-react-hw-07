import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectFilteredContacts } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Книга контактів</h1>
      <ContactForm />
      <Filter />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;