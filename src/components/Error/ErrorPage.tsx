import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <div className="error-container">
        <p>404 Route</p>
        <p>Not Found</p>
        <p>The requested URL was not found on this server.</p>
        <Link
          to="/"
          className="button button-add"
        >
          to main page
        </Link>
      </div>
    </div>
  );
}
