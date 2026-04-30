import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import adminCss from './globals.css?raw';
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
} from '@/app/components/pages';

const ADMIN_STYLE_ID = 'markai-admin-style';

function useAdminStyles() {
  useEffect(() => {
    const existing = document.getElementById(ADMIN_STYLE_ID);
    if (existing) {
      return;
    }

    const style = document.createElement('style');
    style.id = ADMIN_STYLE_ID;
    style.textContent = `${adminCss.replace('@import "./theme-tokens.css";', '')}

.admin-root .page {
  display: block !important;
}

.admin-root .sidebar-section-label {
  background: var(--accent) !important;
  color: var(--accent-contrast) !important;
  border-bottom-color: rgba(13, 13, 13, 0.18) !important;
}
`;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);
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
              <Route path="lessons" element={<LessonsPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="tips" element={<TipsPage />} />
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
