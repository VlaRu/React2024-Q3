import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

if (typeof window !== 'undefined') {
  window.scrollTo = (): void => {};
}

afterEach(() => {
  cleanup();
});
