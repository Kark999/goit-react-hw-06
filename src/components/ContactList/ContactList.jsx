import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact
            contact={contact}
            onDeleteContact={onDeleteContact}
            name={
              <>
                <BsFillPersonFill className={css.contactListIcon} />{" "}
                {contact.name}
              </>
            }
            number={
              <>
                <BsFillTelephoneFill className={css.contactListIcon} />{" "}
                {contact.number}
              </>
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
