import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import adminCss from './globals.css?raw';
import themeTokens from './theme-tokens.css?raw';
import AdminShell from '@/app/components/AdminShell';
import AdminRouteGate from './auth/AdminRouteGate';
import { AdminSessionProvider } from './auth/AdminSessionProvider';
import {
  ActivityPage,
  BlogPage,
  DashboardPage,
  DeployPage,
  LessonsPage,
  ModulesPage,
  NavManagePage,
  PromptsPage,
  SettingsPage,
  TickerPage,
  TipsPage,
  TipSuggestionsPage,
  CourseJsonPreviewPage,
} from '@/app/components/pages';

const ADMIN_STYLE_ID = 'markai-admin-style';
const FONT_IMPORT_PREFIX = "@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');";

function getAdminStyleText() {
  const cssWithoutThemeImport = adminCss.replace('@import "./theme-tokens.css";', '');
  const cssWithoutFontImport = cssWithoutThemeImport.replace(FONT_IMPORT_PREFIX, '').trim();

  return `${FONT_IMPORT_PREFIX}
${themeTokens}
${cssWithoutFontImport}

.admin-root .sidebar-section-label {
  background: var(--accent) !important;
  color: var(--accent-contrast) !important;
  border-bottom-color: rgba(13, 13, 13, 0.18) !important;
}
`;
}

function useAdminStyles() {
  useEffect(() => {
    const nextStyleText = getAdminStyleText();
    const existing = document.getElementById(ADMIN_STYLE_ID) as HTMLStyleElement | null;
    const style = existing ?? document.createElement('style');

    style.id = ADMIN_STYLE_ID;
    style.textContent = nextStyleText;

    if (!existing) {
      document.head.appendChild(style);
    }

    return () => {
      if (style.parentNode) {
        style.remove();
      }
    };
  }, [adminCss, themeTokens]);
}

export default function AdminApp() {
  useAdminStyles();

  return (
    <div className="admin-root">
      <AdminSessionProvider>
        <AdminRouteGate>
          <AdminShell>
            <Routes>
              <Route index element={<DashboardPage />} />
              <Route path="activity" element={<ActivityPage />} />
              <Route path="lessons" element={<LessonsPage mode="structure" />} />
              <Route path="lessons/structure" element={<LessonsPage mode="structure" />} />
              <Route path="lessons/editor" element={<LessonsPage mode="content" />} />
              <Route path="lessons/json-preview" element={<CourseJsonPreviewPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="tips" element={<TipsPage />} />
              <Route path="tips/suggestions" element={<TipSuggestionsPage />} />
              <Route path="prompts" element={<PromptsPage />} />
              <Route path="modules" element={<ModulesPage />} />
              <Route path="ticker" element={<TickerPage />} />
              <Route path="nav-manage" element={<NavManagePage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="deploy" element={<DeployPage />} />
            </Routes>
          </AdminShell>
        </AdminRouteGate>
      </AdminSessionProvider>
    </div>
  );
}
