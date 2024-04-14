import css from "./Contact.module.css";

const Contacts = ({ contact, onDeleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>{contact.name}</p>
        <p className={css.contactText}>{contact.number}</p>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contacts;
