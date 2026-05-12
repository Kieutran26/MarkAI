import type { Request, Response } from 'express';
import type { ServerResponse } from 'node:http';
import { pool } from '../db';
import { decorateJsonResponse } from './http-response';
import { requireAdminSession, type AdminRequest } from './admin-auth-controller';

/**
 * Handle user tip submission (Public API)
 */
export async function handleTipSubmission(req: Request, res: Response) {
  const { content, category, nickname } = req.body;

  if (!content || !category) {
    return res.status(400).json({ error: 'Nội dung và danh mục là bắt buộc' });
  }

  try {
    const result = await pool.query(
      `insert into public.tip_suggestions (content, category, nickname)
       values ($1, $2, $3)
       returning *`,
      [content, category, nickname || null]
    );

    res.status(201).json({
      success: true,
      item: result.rows[0]
    });
  } catch (error) {
    console.error('Error submitting tip:', error);
    res.status(500).json({ error: 'Lỗi hệ thống khi lưu tip.' });
  }
}

/**
 * Handle admin request to list tip suggestions
 */
export async function handleAdminTipSuggestionsRequest(req: AdminRequest, res: ServerResponse) {
  const response = decorateJsonResponse(res);
  const adminUser = await requireAdminSession(req, response);
  if (!adminUser) return;

  try {
    const result = await pool.query(
      'select * from public.tip_suggestions order by created_at desc'
    );
    return response.status(200).json(result.rows);
  } catch (error) {
    console.error('Failed to fetch tip suggestions', error);
    return response.status(500).json({ message: 'Không lấy được danh sách đề xuất tip.' });
  }
}
