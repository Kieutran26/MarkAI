import 'dotenv/config';
import express from 'express';
import { handleAdminContentRequest } from './http/admin-content-controller';
import { handleLessonPreviewRequest } from './http/lesson-preview-controller';
import { serverConfig } from './config';
import { closePool } from './db';
import adminAuthRoutes from './routes/admin-auth-routes';

const app = express();

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/admin/auth', adminAuthRoutes);
app.get('/api/lesson-preview/:previewToken', handleLessonPreviewRequest);
app.all('/api/admin/content', (req, res) => {
  void handleAdminContentRequest(req as never, res);
});

const server = app.listen(serverConfig.port, () => {
  console.log(`Admin API server running on http://localhost:${serverConfig.port}`);
});

async function shutdown() {
  server.close(async () => {
    await closePool();
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
