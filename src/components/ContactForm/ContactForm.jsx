import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Ім'я" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="tel" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <button type="submit">Додати</button>
    </form>
  );
};

export default ContactForm;