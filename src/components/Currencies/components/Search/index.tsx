import styles from './index.module.scss';

interface ISearch {
  filterValue: string;
  setFilterValue: (value: string) => void;
}

const Search = ({ filterValue, setFilterValue }: ISearch) => {
  return (
    <input
      className={styles.input}
      value={filterValue}
      placeholder="Search"
      onChange={(e) => setFilterValue(e.target.value)}
    />
  );
};

export default Search;
