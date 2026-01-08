import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import AICoachPage from './pages/ai-coach';
import RolePlayPage from './pages/role-play';
import SignalIntelligencePage from './pages/signal-intelligence';
import HowItFitsPage from './pages/how-it-fits';
import AppliedCapabilitiesPage from './pages/applied-capabilities';
import ContactPage from './pages/contact';
import DemoPage from './pages/demo';
import PricingPage from './pages/pricing';

// Lazy load components for code splitting (except HomePage for instant loading)
const isDevelopment = (import.meta.env as any).DEV;
const NotFoundPage = isDevelopment ? lazy(() => import('../dev-tools/src/PageNotFound')) : lazy(() => import('./pages/_404'));

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
    element: <SignalIntelligencePage />,
  },
  {
    path: '/how-it-fits',
    element: <HowItFitsPage />,
  },
  {
    path: '/applied-capabilities',
    element: <AppliedCapabilitiesPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/demo',
    element: <DemoPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/ai-coach' | '/role-play' | '/signal-intelligence' | '/how-it-fits' | '/applied-capabilities' | '/contact' | '/demo' | '/pricing';

export type Params = Record<string, string | undefined>;
