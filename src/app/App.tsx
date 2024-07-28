import './App.css';
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
          <Route path="?page=:id&pageSize=8&search=" />
          <Route path="product/:id" />
        </Route>
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
