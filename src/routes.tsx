import { RouteObject, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import HomePage from './pages/index';
import AICoachPage from './pages/ai-coach';
import RolePlayPage from './pages/role-play';
import ContactPage from './pages/contact';

// Lazy load components for code splitting (except HomePage for instant loading)
const isDevelopment = (import.meta.env as any).DEV;
const NotFoundPage = isDevelopment ? lazy(() => import('../dev-tools/src/PageNotFound')) : lazy(() => import('./pages/_404'));

// Component to redirect to HTML file
const SignalIntelligenceRedirect = () => {
  useEffect(() => {
    window.location.href = '/signal-intelligence-learn-more.html';
  }, []);
  return null;
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/ai-coach',
    element: <AICoachPage />,
  },
  {
    path: '/role-play',
    element: <RolePlayPage />,
  },
  {
    path: '/signal-intelligence',
    element: <SignalIntelligenceRedirect />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/ai-coach' | '/role-play' | '/signal-intelligence' | '/contact';

export type Params = Record<string, string | undefined>;
