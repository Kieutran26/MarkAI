import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleFeedbackSubmission } from '../../server/http/feedback-submission-controller';

type VercelLikeRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
};

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

async function readJsonBody(req: VercelLikeRequest) {
  if (typeof req.body === 'object' && req.body !== null) {
    return req.body;
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString('utf8').trim();
  return rawBody ? JSON.parse(rawBody) : {};
}

export default async function handler(req: VercelLikeRequest, res: VercelLikeResponse) {
  const response = decorateResponse(res);

  if (req.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  req.body = await readJsonBody(req);
  return handleFeedbackSubmission(req as never, response as never);
}
