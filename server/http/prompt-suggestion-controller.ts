import type { Request, Response } from 'express';
import type { ServerResponse } from 'node:http';
import { pool } from '../db';
import { decorateJsonResponse } from './http-response';
import { requireAdminSession, type AdminRequest } from './admin-auth-controller';

/**
 * Handle user prompt submission (Public API)
 */
export async function handlePromptSubmission(req: Request, res: Response) {
  const { title, prompt, category, tool, nickname } = req.body;

  if (!title || !prompt || !category || !tool) {
    return res.status(400).json({ error: 'Tên, nội dung, danh mục và tool là bắt buộc' });
  }

  try {
    const result = await pool.query(
      `insert into public.prompt_suggestions (title, prompt, category, tool, nickname)
       values ($1, $2, $3, $4, $5)
       returning *`,
      [title, prompt, category, tool, nickname || null]
    );

    res.status(201).json({
      success: true,
      item: result.rows[0]
    });
  } catch (error) {
    console.error('Error submitting prompt:', error);
    res.status(500).json({ error: 'Lỗi hệ thống khi lưu prompt.' });
  }
}

/**
 * Handle admin request to list prompt suggestions
 */
export async function handleAdminPromptSuggestionsRequest(req: AdminRequest, res: ServerResponse) {
  const response = decorateJsonResponse(res);
  const adminUser = await requireAdminSession(req, response);
  if (!adminUser) return;

  try {
    const result = await pool.query(
      'select * from public.prompt_suggestions order by created_at desc'
    );
    return response.status(200).json(result.rows);
  } catch (error) {
    console.error('Failed to fetch prompt suggestions', error);
    return response.status(500).json({ message: 'Không lấy được danh sách đề xuất prompt.' });
  }
}
