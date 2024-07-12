import Contact from "./Contact/Contact";

export default function ContactList({ contactListCard, onDelete }) {
  return (
    <ul>
      {contactListCard.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
