'use client'

import { useState } from 'react'
import Toggle from '@/app/components/Toggle'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('s-general')

  const tabs = [
    { id: 's-general', icon: '◈', label: 'Tổng quan trang' },
    { id: 's-hero', icon: '◎', label: 'Hero Section' },
    { id: 's-stats', icon: '◷', label: 'Stats Bar' },
    { id: 's-cta', icon: '→', label: 'CTA Section' },
    { id: 's-footer', icon: '▤', label: 'Footer' },
    { id: 's-why', icon: '✳', label: 'Tại sao miễn phí' },
  ]

  return (
    <div className="page" id="page-settings">
      <div className="settings-grid">
        <div className="settings-nav">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`settings-nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.icon}</span> {tab.label}
            </div>
          ))}
        </div>

        <div className="settings-panel">
          <div id="s-general" style={{ display: activeTab === 's-general' ? 'block' : 'none' }}>
            <div className="settings-group">
              <div className="settings-group-title">Thông tin trang</div>
              <div className="form-row">
                <div className="form-label">
                  Tên trang
                  <div className="form-sub">Hiển thị trên tab browser</div>
                </div>
                <input type="text" defaultValue="markAI.vn — Học AI ứng dụng cho dân Marketing" />
              </div>
              <div className="form-row">
                <div className="form-label">
                  Domain
                  <div className="form-sub">URL chính thức</div>
                </div>
                <input type="url" defaultValue="https://markai.vn" />
              </div>
              <div className="form-row">
                <div className="form-label">
                  Meta description
                  <div className="form-sub">SEO snippet, tối đa 160 ký tự</div>
                </div>
                <textarea defaultValue="Nền tảng học AI ứng dụng miễn phí dành riêng cho dân Marketing Việt Nam. Vibecode, Analytics, Generate Image, Motion Video." />
              </div>
            </div>
            <div className="settings-group">
              <div className="settings-group-title">Tính năng hiển thị</div>
              <div className="toggle-row">
                <Toggle defaultOn={true} />
                <div>
                  <div className="toggle-label">Ticker bar</div>
                  <div className="toggle-sub">Dark scrolling bar phía dưới nav</div>
                </div>
              </div>
              <div className="toggle-row">
                <Toggle defaultOn={true} />
                <div>
                  <div className="toggle-label">Stats bar</div>
                  <div className="toggle-sub">4 số liệu phía dưới hero</div>
                </div>
              </div>
              <div className="toggle-row">
                <Toggle defaultOn={true} />
                <div>
                  <div className="toggle-label">Blog section</div>
                  <div className="toggle-sub">Grid 6 bài viết</div>
                </div>
              </div>
              <div className="toggle-row">
                <Toggle defaultOn={true} />
                <div>
                  <div className="toggle-label">Tips & Mẹo section</div>
                  <div className="toggle-sub">Grid 4 tip-card</div>
                </div>
              </div>
              <div className="toggle-row">
                <Toggle defaultOn={true} />
                <div>
                  <div className="toggle-label">Prompt Library teaser</div>
                  <div className="toggle-sub">Dark section giữa trang</div>
                </div>
              </div>
              <div className="toggle-row">
                <Toggle defaultOn={true} />
                <div className="toggle-label">Tại sao miễn phí section</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', paddingTop: '1rem' }}>
              <button className="btn btn-primary">Lưu thay đổi</button>
              <button className="btn">Huỷ</button>
            </div>
          </div>

          <div id="s-hero" style={{ display: activeTab === 's-hero' ? 'block' : 'none' }}>
            <div className="settings-group">
              <div className="settings-group-title">Hero — Cột trái</div>
              <div className="form-row">
                <div className="form-label">Eyebrow text</div>
                <input type="text" defaultValue="✳ AI cho dân Marketing · hoàn toàn miễn phí · 2026" />
              </div>
              <div className="form-row">
                <div className="form-label">H1 heading</div>
                <textarea defaultValue="Nhiều người FOMO AI nhưng vẫn dùng hời hợt." style={{ minHeight: '60px' }} />
              </div>
              <div className="form-row">
                <div className="form-label">
                  Từ gạch bỏ
                  <div className="form-sub">Phần strikethrough italic trong H1</div>
                </div>
                <input type="text" defaultValue="hời hợt." />
              </div>
              <div className="form-row">
                <div className="form-label">Mô tả</div>
                <textarea defaultValue="Không thiếu tool. Chỉ thiếu cách dùng AI đúng và tới nơi tới chốn để ra việc thật. Bắt đầu từ zero với Vibecode web, Analytics, Generate Image, Motion Video. Thực chiến · tiếng Việt · dùng được ngay." />
              </div>
              <div className="form-row">
                <div className="form-label">CTA primary</div>
                <input type="text" defaultValue="Bắt đầu Vibecode →" />
              </div>
              <div className="form-row">
                <div className="form-label">CTA ghost</div>
                <input type="text" defaultValue="Đọc blog mới nhất" />
              </div>
              <div className="form-row">
                <div className="form-label">Note dưới CTA</div>
                <input type="text" defaultValue="✳ miễn phí · không cần email · không tracking" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', paddingTop: '1rem' }}>
              <button className="btn btn-primary">Lưu thay đổi</button>
              <button className="btn">Huỷ</button>
            </div>
          </div>

          <div id="s-stats" style={{ display: activeTab === 's-stats' ? 'block' : 'none' }}>
            <div className="settings-group">
              <div className="settings-group-title">Stats Bar — 4 số liệu</div>
              <div className="form-row">
                <div className="form-label">Stat 01 · Số</div>
                <input type="text" defaultValue="7 bài học vibecode" />
              </div>
              <div className="form-row">
                <div className="form-label">Stat 02 · Số</div>
                <input type="text" defaultValue="4 hướng dẫn AI sắp ra" />
              </div>
              <div className="form-row">
                <div className="form-label">Stat 03 · Số</div>
                <input type="text" defaultValue="100% miễn phí mãi mãi" />
              </div>
              <div className="form-row">
                <div className="form-label">Stat 04 · Số</div>
                <input type="text" defaultValue="0 yêu cầu kiến thức code" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', paddingTop: '1rem' }}>
              <button className="btn btn-primary">Lưu thay đổi</button>
            </div>
          </div>

          <div id="s-cta" style={{ display: activeTab === 's-cta' ? 'block' : 'none' }}>
            <div className="settings-group">
              <div className="settings-group-title">CTA Section (cuối trang)</div>
              <div className="form-row">
                <div className="form-label">Heading</div>
                <textarea defaultValue="Thôi nào, bắt đầu bài 01 đi." style={{ minHeight: '50px' }} />
              </div>
              <div className="form-row">
                <div className="form-label">CTA primary</div>
                <input type="text" defaultValue="Bắt đầu Bài 01 →" />
              </div>
              <div className="form-row">
                <div className="form-label">CTA ghost</div>
                <input type="text" defaultValue="Đọc blog trước" />
              </div>
              <div className="form-row">
                <div className="form-label">Note</div>
                <input type="text" defaultValue="✳ hoàn toàn miễn phí · không cần email · không cần đăng ký" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', paddingTop: '1rem' }}>
              <button className="btn btn-primary">Lưu thay đổi</button>
            </div>
          </div>

          <div id="s-footer" style={{ display: activeTab === 's-footer' ? 'block' : 'none' }}>
            <div className="settings-group">
              <div className="settings-group-title">Footer</div>
              <div className="form-row">
                <div className="form-label">Tagline</div>
                <input type="text" defaultValue="Đừng chỉ FOMO AI. Hãy dùng AI ra việc thật." />
              </div>
              <div className="form-row">
                <div className="form-label">Copyright</div>
                <input type="text" defaultValue="© 2026 markAI.vn · Hoàn toàn miễn phí" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', paddingTop: '1rem' }}>
              <button className="btn btn-primary">Lưu thay đổi</button>
            </div>
          </div>

          <div id="s-why" style={{ display: activeTab === 's-why' ? 'block' : 'none' }}>
            <div className="settings-group">
              <div className="settings-group-title">Section "Tại sao miễn phí" — 4 card</div>
              <div className="form-row">
                <div className="form-label">Card 01</div>
                <input type="text" defaultValue="✳ Dành riêng cho dân Marketing" />
              </div>
              <div className="form-row">
                <div className="form-label">Card 02</div>
                <input type="text" defaultValue="✳ Học xong dùng được ngay" />
              </div>
              <div className="form-row">
                <div className="form-label">Card 03</div>
                <input type="text" defaultValue="✳ Cập nhật mỗi tuần" />
              </div>
              <div className="form-row">
                <div className="form-label">Card 04</div>
                <input type="text" defaultValue="✳ Không quảng cáo · Không tracking" />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', paddingTop: '1rem' }}>
              <button className="btn btn-primary">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
