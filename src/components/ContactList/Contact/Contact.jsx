import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.container}>
      <h2>{name}</h2>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        delete
      </button>
    </div>
  );
}
