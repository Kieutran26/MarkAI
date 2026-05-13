import type { Request, Response } from 'express';
import { pool } from '../db';

export async function handleFeedbackSubmission(req: Request, res: Response) {
  const { moduleName, rating, content, role, email } = req.body ?? {};

  if (!moduleName || !content || typeof moduleName !== 'string' || typeof content !== 'string') {
    return res.status(400).json({ error: 'Module và nội dung góp ý là bắt buộc.' });
  }

  const normalizedRating =
    rating === '' || rating == null
      ? null
      : Number.isInteger(Number(rating)) && Number(rating) >= 1 && Number(rating) <= 5
        ? Number(rating)
        : NaN;

  if (Number.isNaN(normalizedRating)) {
    return res.status(400).json({ error: 'Điểm đánh giá không hợp lệ.' });
  }

  const normalizedEmail =
    typeof email === 'string' && email.trim().length > 0
      ? email.trim().toLowerCase()
      : null;

  if (normalizedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return res.status(400).json({ error: 'Email không hợp lệ.' });
  }

  try {
    const result = await pool.query(
      `insert into public.feedback_submissions (module_name, rating, content, role, email)
       values ($1, $2, $3, $4, $5)
       returning *`,
      [
        moduleName.trim(),
        normalizedRating,
        content.trim(),
        typeof role === 'string' && role.trim().length > 0 ? role.trim() : null,
        normalizedEmail,
      ]
    );

    return res.status(201).json({
      success: true,
      item: result.rows[0],
    });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return res.status(500).json({ error: 'Lỗi hệ thống khi lưu góp ý.' });
  }
}
