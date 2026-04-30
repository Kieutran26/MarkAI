import type { ServerResponse } from 'node:http';

export type JsonCapableResponse = ServerResponse & {
  status?: (code: number) => JsonCapableResponse;
  json?: (payload: unknown) => void;
};

export function decorateJsonResponse(res: JsonCapableResponse) {
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

  return res as Required<Pick<JsonCapableResponse, 'status' | 'json'>> & ServerResponse;
}
