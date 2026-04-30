import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import { fetchAdminSession, loginAdmin, logoutAdmin, type AdminUser } from './admin-api';

type AdminSessionContextValue = {
  status: 'loading' | 'guest' | 'authenticated';
  user: AdminUser | null;
  errorMessage: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
};

const AdminSessionContext = createContext<AdminSessionContextValue | null>(null);

export function AdminSessionProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<'loading' | 'guest' | 'authenticated'>('loading');
  const [user, setUser] = useState<AdminUser | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchAdminSession()
      .then(({ user: sessionUser }) => {
        if (!cancelled) {
          setUser(sessionUser);
          setStatus('authenticated');
        }
      })
      .catch(() => {
        if (!cancelled) {
          setUser(null);
          setStatus('guest');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const value: AdminSessionContextValue = {
    status,
    user,
    errorMessage,
    clearError: () => setErrorMessage(null),
    login: async (username, password) => {
      setErrorMessage(null);
      const response = await loginAdmin(username, password).catch((error: Error) => {
        setStatus('guest');
        setUser(null);
        setErrorMessage(error.message);
        throw error;
      });

      setUser(response.user);
      setStatus('authenticated');
    },
    logout: async () => {
      await logoutAdmin();
      setUser(null);
      setStatus('guest');
      setErrorMessage(null);
    },
  };

  return <AdminSessionContext.Provider value={value}>{children}</AdminSessionContext.Provider>;
}

export function useAdminSession() {
  const context = useContext(AdminSessionContext);
  if (!context) {
    throw new Error('useAdminSession must be used inside AdminSessionProvider.');
  }

  return context;
}
