import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './../6_shared/theme/themes/typography.module.scss';
import './index.css';
import { ThemeProvider } from './providers/theme/theme-provider.tsx';
import { router } from './routing/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
