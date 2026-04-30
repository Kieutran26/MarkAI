import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSubLessonBySlug } from '../lib/subLessons';
import { getLessonBySlug } from '../lib/lessons';
import { fetchPublicLesson } from '../lib/public-lesson-api';
import { findSubLessonFromSlug, mapPublicLessonToSubLessons } from '../lib/public-lesson-mapper';
import type { SubLessonFull } from '../lib/subLessons';
import LessonTopbar from '../components/reader/LessonTopbar';
import ReaderSidebar from '../components/reader/ReaderSidebar';
import ContentHeader from '../components/reader/ContentHeader';
import ContentBody from '../components/reader/content/ContentBody';
import ContentFooter from '../components/reader/ContentFooter';

export default function SubLessonPage() {
  const params = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dbSubLessons, setDbSubLessons] = useState<SubLessonFull[] | null>(null);

  const lessonSlug = params.lessonSlug || '';
  const subSlug = params.subSlug || '';
  const fallbackSubLesson = getSubLessonBySlug(lessonSlug, subSlug);
  const dbSubLesson = dbSubLessons ? findSubLessonFromSlug(dbSubLessons, subSlug) : null;
  const subLesson = dbSubLesson ?? fallbackSubLesson;

  useEffect(() => {
    window.scrollTo(0, 0);
    setSidebarOpen(false);
  }, [lessonSlug, subSlug]);

  useEffect(() => {
    let cancelled = false;

    fetchPublicLesson(lessonSlug)
      .then((payload) => {
        if (cancelled) return;
        const mapped = mapPublicLessonToSubLessons(payload);
        setDbSubLessons(mapped.length ? mapped : null);
      })
      .catch(() => {
        if (!cancelled) setDbSubLessons(null);
      });

    return () => {
      cancelled = true;
    };
  }, [lessonSlug]);

  useEffect(() => {
    setDbSubLessons(null);
  }, [lessonSlug]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [sidebarOpen]);

  if (!subLesson) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Bài học không tồn tại</h1>
          <p className="text-muted mb-6">Slug: {lessonSlug}/{subSlug}</p>
          <Link to="/vibecode" className="btn-primary">
            Quay lại lộ trình
          </Link>
        </div>
      </div>
    );
  }

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="reader-page">
      {/* Topbar */}
      <LessonTopbar subLesson={subLesson} lessonSlug={lessonSlug} />

      {/* Page Layout */}
      <div className="reader-layout">
        {/* Sidebar */}
        <ReaderSidebar
          subLesson={subLesson}
          lessonSlug={lessonSlug}
          subLessons={dbSubLessons ?? undefined}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Content */}
        <div className="reader-content">
          <ContentHeader subLesson={subLesson} />
          <ContentBody content={subLesson.content} />
          <ContentFooter subLesson={subLesson} lessonSlug={lessonSlug} />
        </div>
      </div>

      {/* Mobile Toggle */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? '✕ Đóng' : '☰ Mục lục'}
      </button>
    </div>
  );
}
