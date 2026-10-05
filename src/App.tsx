import { BrowserRouter as Router, Navigate, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import Home from './pages/Home';

import Prompts from './pages/Prompts';
import AllPrompts from './pages/AllPrompts';
import Lesson from './pages/Lesson';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Report from './pages/Report';
import Contact from './pages/Contact';
import VibecodePage from './pages/VibecodePage';
import LessonOverview from './pages/LessonOverview';
import SubLessonPage from './pages/SubLessonPage';
import LessonPreviewPage from './pages/LessonPreviewPage';
import VibecodeGlossaryPage from './pages/VibecodeGlossaryPage';
import GlossaryTermDetailPage from './pages/GlossaryTermDetailPage';
import AdminApp from './admin/AdminApp';

const GLOSSARY_PATH = '/tu-dien-thuat-ngu';
const LEGACY_GLOSSARY_PATH = '/vibecode/tu-ngu-chuyen-nganh/tu-dien-thuat-ngu';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // If it's a POP navigation (back/forward), don't scroll to top
    // The browser will handle scroll restoration automatically
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);
  return null;
};

const AppShell = () => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/');

  if (isAdminRoute) {
    return (
      <main className="min-h-screen">
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </main>
    );
  }

  return (
    <div className="font-sans text-ink min-h-screen flex flex-col">
      <Nav />
      <Ticker />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/*" element={<Navigate to="/" replace />} />
          <Route path="/tips/*" element={<Navigate to="/" replace />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/prompts/all" element={<AllPrompts />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/report" element={<Report />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vibecode" element={<VibecodePage />} />
          <Route path="/vibecode/preview/:previewToken" element={<LessonPreviewPage />} />
          <Route path={GLOSSARY_PATH} element={<VibecodeGlossaryPage />} />
          <Route path={`${GLOSSARY_PATH}/:termId`} element={<GlossaryTermDetailPage />} />
          <Route path={LEGACY_GLOSSARY_PATH} element={<Navigate to={GLOSSARY_PATH} replace />} />
          <Route path="/vibecode/:lessonSlug" element={<LessonOverview />} />
          <Route path="/vibecode/:lessonSlug/:subSlug" element={<SubLessonPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppShell />
    </Router>
  );
}
