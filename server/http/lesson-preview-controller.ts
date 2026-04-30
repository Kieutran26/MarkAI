import type { Request, Response } from 'express'
import { getLessonPreviewByToken } from '../services/lesson-preview-service'

export async function handleLessonPreviewRequest(req: Request, res: Response) {
  try {
    const previewToken = typeof req.params.previewToken === 'string' ? req.params.previewToken.trim() : ''
    if (!previewToken) {
      return res.status(400).json({ message: 'Can preview token.' })
    }

    const preview = await getLessonPreviewByToken(previewToken)
    if (!preview) {
      return res.status(404).json({ message: 'Khong tim thay lesson preview.' })
    }

    return res.status(200).json(preview)
  } catch (error) {
    console.error('Failed to load lesson preview', error)
    return res.status(500).json({ message: 'Khong tai duoc lesson preview luc nay.' })
  }
}
