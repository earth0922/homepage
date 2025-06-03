import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './components/AppRoutes.tsx';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
} else {
  throw new Error("Root element not found");
}
