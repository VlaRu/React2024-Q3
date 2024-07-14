import './App.css';
import ErrorButton from '../components/Error/ErrorButton';
import Search from '../components/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/error-page';

/* function App() {
  return (
    <>
      <ErrorButton />
      <Search />
    </>
  );
}

export default App; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<ErrorButton />}/> */}
        <Route
          path="/"
          element={<Search />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
        <ErrorButton />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
