import type { PropsWithChildren } from 'react';
import AdminLoginPage from './AdminLoginPage';
import { useAdminSession } from './AdminSessionProvider';

export default function AdminRouteGate({ children }: PropsWithChildren) {
  const { status } = useAdminSession();

  if (status === 'loading') {
    return (
      <div className="admin-auth-screen">
        <div className="admin-auth-card admin-auth-card-muted">
          <div className="admin-auth-eyebrow">markAI admin</div>
          <h1 className="admin-auth-title">Dang kiem tra phien dang nhap</h1>
        </div>
      </div>
    );
  }

  if (status === 'guest') {
    return <AdminLoginPage />;
  }

  return <>{children}</>;
}
