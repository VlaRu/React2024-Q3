import { useState } from 'react';
import Cards from '../Card/Cards';
import { Pagination } from '../Pagination/Pagination';
import { Link, Outlet } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { useGetPokemonByNameQuery } from '../../api/reduxResponse';
import './Search.css';

function Search() {
  const [searchName, setSearchName] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );
  const [submitName, setSubmitName] = useState<string>(
    localStorage.getItem('searchValue') || searchName
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {
    data: apiData,
    error,
    isLoading,
  } = useGetPokemonByNameQuery({ name: submitName, page: currentPage });
  const countPage = () =>
    apiData && apiData.totalCount > 8 ? Math.ceil(apiData.totalCount / 8) : 1;
  const pageCount = countPage();

  const handleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    localStorage.setItem('searchValue', searchName.trim());
    setSubmitName(searchName);
    console.log('click');
  };

  return (
    <>
      <Link to={`?page=${currentPage}&pageSize=10&search=`}>
        <h1>Hello, it's a list of Pokemon Cards!</h1>
        <form
          /* onSubmit={handleSearch} */
          className="form-search"
        >
          <input
            type="search"
            placeholder="Search..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="input-search"
          />
          <button
            className="submit-search-btn"
            onClick={handleSearch}
          >
            Submit
          </button>
        </form>
        <>
          {error ? (
            <p>
              {error.status} {JSON.stringify(error.data)}
            </p>
          ) : isLoading ? (
            <Loading />
          ) : apiData && apiData.data.length ? (
            <Cards pokemonData={apiData.data} />
          ) : (
            <p className="error-info">Not found...</p>
          )}
        </>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={pageCount}
        />
      </Link>
      <Outlet />
    </>
  );
}

export default Search;
