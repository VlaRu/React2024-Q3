import './App.css';
import ErrorButton from '../components/Error/ErrorButton';
import Search from '../components/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from '../components/Error/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Search />}
        >
          <Route path="?page=:id&pageSize=10&search=" />
          <Route path="product/:id" />
        </Route>
        <Route
          path="*"
          element={<ErrorPage />}
        />
        <Route
          path="*"
          element={<ErrorButton />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
