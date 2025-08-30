import ThemeProviderWrapper from './theme/ThemeProviderWrapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from './Components/ScrollToTop';
import './App.css';
import Loading from './ui/Loading';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    window.gtag('config', 'G-XXXXXXX', {
      page_path: location.pathname,
    });
  }, [location]);
};

const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
   usePageTracking();

  return (
    <ThemeProviderWrapper>
      <Router>
      <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
