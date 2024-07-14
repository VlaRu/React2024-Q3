import { useState } from 'react';
import './Error.css';

export default function ErrorButton() {
  const [isError, setError] = useState<boolean>(false);

  function handleClick() {
    setError(true);
  }

  if (isError) {
    throw new Error('The error was occured');
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="error-btn"
      >
        Show error
      </button>
    </div>
  );
}
