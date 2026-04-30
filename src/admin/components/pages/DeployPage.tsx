'use client'

import { useAdminUi } from '@/app/components/AdminUiProvider'

export default function DeployPage() {
  const { openAdminModal } = useAdminUi()
  const services = [
    {
      label: 'Vercel',
      title: 'Production Deploy',
      status: '● Ready · 2 gio truoc',
      statusClass: '',
      fields: [
        { label: 'Project', value: 'markai-vn' },
        { label: 'Branch', value: 'main' },
      ],
    },
    {
      label: 'PostHog Analytics',
      title: 'Event Tracking',
      status: '● Connected',
      statusClass: '',
      fields: [{ label: 'API Key', value: 'phc_••••••••••••••' }],
    },
    {
      label: 'Google Search Console',
      title: 'SEO Indexing',
      status: '● Verified',
      statusClass: '',
      fields: [{ label: 'Site URL', value: 'https://markai.vn' }],
    },
    {
      label: 'Supabase Database',
      title: 'Backend & Storage',
      status: '● Active',
      statusClass: '',
      fields: [{ label: 'Project URL', value: 'https://••••••.supabase.co' }],
    },
    {
      label: 'GitHub',
      title: 'Source Control',
      status: '○ Chua ket noi',
      statusClass: 'disabled',
      disabled: true,
      button: 'Ket noi GitHub →',
    },
    {
      label: 'Custom Domain',
      title: 'markai.vn',
      status: '○ DNS chua verify',
      statusClass: 'disabled',
      disabled: true,
      button: 'Kiem tra DNS →',
    },
  ]

  return (
    <div className="page" id="page-deploy">
      <div className="section-block">
        <div className="section-header">
          <span className="section-header-title">
            <strong>Deploy & Tich hop</strong>
          </span>
          <div className="section-header-spacer" />
          <button
            className="topbar-btn primary"
            onClick={() => openAdminModal('deploy-modal')}
            style={{
              border: 'none',
              height: '36px',
              padding: '0 1.2rem',
              fontSize: '11px',
              cursor: 'pointer',
              fontFamily: 'var(--mono)',
              background: 'var(--ink)',
              color: 'var(--bg)',
            }}
          >
            ⬆ Deploy ngay
          </button>
        </div>
      </div>

      <div className="deploy-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="deploy-card"
            style={service.disabled ? { opacity: 0.5 } : undefined}
          >
            <div className="deploy-card-label">{service.label}</div>
            <div className="deploy-card-title">{service.title}</div>
            <div className={`deploy-card-status ${service.statusClass}`}>{service.status}</div>

            {service.fields?.map((field, fieldIndex) => (
              <div key={fieldIndex} className="deploy-card-row">
                <div className="form-label">{field.label}</div>
                <input type="text" defaultValue={field.value} style={{ fontSize: '11px', padding: '.3rem .6rem' }} />
              </div>
            ))}

            {service.button && <button className="btn">{service.button}</button>}
          </div>
        ))}
      </div>
    </div>
  )
}
