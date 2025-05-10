import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => setQuery(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      toast.error('Please enter search term!');
      return;
    }
    onSubmit(trimmed);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button className={css.button} type="submit" aria-label="Search">
          <FaSearch />
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;
