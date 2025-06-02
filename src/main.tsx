import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './components/AppRoutes.tsx';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter basename="/home">
      <AppRoutes />
    </BrowserRouter>
  );
} else {
  throw new Error("Root element not found");
}
