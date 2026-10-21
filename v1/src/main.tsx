import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const initialTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
const application = (
  <StrictMode>
    <App initialPath={window.location.pathname} initialTheme={initialTheme} />
  </StrictMode>
);

if (root.dataset.prerendered === 'true') {
  hydrateRoot(root, application);
} else {
  createRoot(root).render(application);
}
