export default function SearchBox({ search, onSearch }) {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}
