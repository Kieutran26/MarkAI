import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Tips from './pages/Tips';
import Prompts from './pages/Prompts';
import Lesson from './pages/Lesson';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Report from './pages/Report';
import Contact from './pages/Contact';
import VibecodePage from './pages/VibecodePage';
import LessonOverview from './pages/LessonOverview';
import SubLessonPage from './pages/SubLessonPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-ink min-h-screen flex flex-col">
        <Nav />
        <Ticker />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/prompts" element={<Prompts />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/report" element={<Report />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vibecode" element={<VibecodePage />} />
            <Route path="/vibecode/:lessonSlug" element={<LessonOverview />} />
            <Route path="/vibecode/:lessonSlug/:subSlug" element={<SubLessonPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
