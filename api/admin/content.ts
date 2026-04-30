import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleAdminContentRequest } from '../../server/http/admin-content-controller';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  return handleAdminContentRequest(req as never, res);
}
