import type { IncomingMessage, ServerResponse } from 'node:http';
import {
  handleAdminLogin,
  type AdminRequest,
  type AdminResponse,
} from '../../../server/http/admin-auth-controller';

type VercelLikeResponse = ServerResponse & {
  status?: (code: number) => VercelLikeResponse;
  json?: (payload: unknown) => void;
};

function decorateResponse(res: VercelLikeResponse) {
  if (!res.status) {
    res.status = (code: number) => {
      res.statusCode = code;
      return res;
    };
  }

  if (!res.json) {
    res.json = (payload: unknown) => {
      if (!res.headersSent) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
      }
      res.end(JSON.stringify(payload));
    };
  }

  return res as Required<Pick<VercelLikeResponse, 'status' | 'json'>> & ServerResponse;
}

export default async function handler(req: IncomingMessage, res: VercelLikeResponse) {
  if (req.method !== 'POST') {
    const response = decorateResponse(res);
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  return handleAdminLogin(req as AdminRequest, decorateResponse(res) as AdminResponse);
}
