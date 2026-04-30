import type { Request, Response } from 'express';
import { getPublicLessonBySlug } from '../services/public-lesson-service';

export async function handlePublicLessonRequest(req: Request, res: Response) {
  try {
    const lessonSlug = typeof req.params.lessonSlug === 'string' ? req.params.lessonSlug.trim() : '';
    if (!lessonSlug) {
      return res.status(400).json({ message: 'Can lesson slug.' });
    }

    const payload = await getPublicLessonBySlug(lessonSlug);
    if (!payload) {
      return res.status(404).json({ message: 'Khong tim thay lesson trong database.' });
    }

    return res.status(200).json(payload);
  } catch (error) {
    console.error('Failed to load public lesson', error);
    return res.status(500).json({ message: 'Khong tai duoc lesson luc nay.' });
  }
}
