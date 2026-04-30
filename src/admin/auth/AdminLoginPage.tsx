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
        <h1 className="admin-auth-title">Dang nhap de quan ly Vibecode</h1>
        <p className="admin-auth-copy">
          Dung tai khoan admin noi bo. Khu nay da duoc noi voi Neon va session server-side.
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
          {isSubmitting ? 'Dang vao...' : 'Dang nhap admin'}
        </button>
      </form>
    </div>
  );
}
