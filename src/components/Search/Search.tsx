import { useEffect, useState } from 'react';
import './Search.css';
import Cards from '../Card/Cards';
import { pokemonType } from '../../interfaces/interface';
import { Pagination } from '../Pagination/Pagination';
import { FetchResponse } from '../../api/FetchResponse';
import { Link, Outlet } from 'react-router-dom';

function Search() {
  const [searchName, setSearchName] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );
  const [pokemonData, setPokemonData] = useState<pokemonType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchValue', searchName.trim());
    fetchData();
  };

  useEffect(() => {
    if (searchName || currentPage) {
      fetchData();
    }
  }, [searchName, currentPage]);

  async function fetchData() {
    try {
      const data = await FetchResponse({
        query: searchName,
        page: currentPage,
      });
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <>
      <Link to={`page/${currentPage}`}>
        <h1>Hello, it's a list of Pokemon Cards!</h1>
        <form
          onSubmit={submitSearch}
          className="form-search"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="input-search"
          />
          <input
            type="submit"
            value="Submit"
            className="submit-search-btn"
          />
        </form>
        <Cards pokemonData={pokemonData} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Link>
      <Outlet />
    </>
  );
}

export default Search;
