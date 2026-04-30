'use client'

import CourseJsonPreviewImporter from './CourseJsonPreviewImporter'

export default function CourseJsonPreviewPage() {
  return (
    <div className="page" id="page-json-preview">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Xem trước JSON Course</strong> · Kiểm tra dữ liệu trước khi import
          </span>
        </div>
      </div>
      
      <div className="section-block">
        <CourseJsonPreviewImporter />
      </div>
    </div>
  )
}
