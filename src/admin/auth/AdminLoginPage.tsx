import { FormEvent, useState } from 'react';
import { useAdminSession } from './AdminSessionProvider';

export default function AdminLoginPage() {
  const { errorMessage, login, clearError } = useAdminSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    clearError();

    try {
      await login(username, password);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-auth-screen">
      <form className="admin-auth-card" onSubmit={handleSubmit}>
        <div className="admin-auth-eyebrow">markAI admin</div>
        <h1 className="admin-auth-title">Đăng nhập để quản lý Vibecode</h1>
        <p className="admin-auth-copy">
          Dùng tài khoản admin nội bộ. Khu này đã được nối với Neon và session server-side.
        </p>

        <label className="admin-auth-field">
          <span>Username</span>
          <input
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="admin"
            type="text"
          />
        </label>

        <label className="admin-auth-field">
          <span>Password</span>
          <input
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            type="password"
          />
        </label>

        {errorMessage ? <div className="admin-auth-error">{errorMessage}</div> : null}

        <button className="btn btn-primary admin-auth-submit" disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập admin'}
        </button>
      </form>
    </div>
  );
}
