import type { IncomingMessage, ServerResponse } from 'node:http';

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

export default function handler(_req: IncomingMessage, res: VercelLikeResponse) {
  return decorateResponse(res).status(200).json({ ok: true });
}
