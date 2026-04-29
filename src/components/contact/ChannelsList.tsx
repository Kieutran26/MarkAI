import { Link } from 'react-router-dom';

export default function ChannelsList() {
  const channels = [
    {
      icon: '@',
      name: 'Email',
      desc: 'hello@markai.vn',
      tag: 'Tốt nhất',
      tagBest: true,
      time: '1-3 ngày'
    },
    {
      icon: '✉',
      name: 'Form liên hệ',
      desc: 'Điền form bên phải — nhanh hơn email',
      tag: '',
      tagBest: false,
      time: '1-3 ngày'
    },
    {
      icon: 'in',
      name: 'LinkedIn',
      desc: 'markAI.vn (thỉnh thoảng check)',
      tag: '',
      tagBest: false,
      time: '3-7 ngày'
    }
  ];

  return (
    <div className="channels-box">
      <div className="channels-header">✳ Cách liên hệ</div>
      <a href="mailto:hello@markai.vn" className="channel-item">
        <div className="channel-left">
          <div className="channel-icon">{channels[0].icon}</div>
          <div className="channel-info">
            <div className="channel-name">{channels[0].name}</div>
            <div className="channel-desc">{channels[0].desc}</div>
          </div>
        </div>
        <div className="channel-meta">
          {channels[0].tag && <span className="channel-tag best">{channels[0].tag}</span>}
          <span>{channels[0].time}</span>
        </div>
      </a>
      <Link to="#contact-form" className="channel-item">
        <div className="channel-left">
          <div className="channel-icon">{channels[1].icon}</div>
          <div className="channel-info">
            <div className="channel-name">{channels[1].name}</div>
            <div className="channel-desc">{channels[1].desc}</div>
          </div>
        </div>
        <div className="channel-meta">
          <span>{channels[1].time}</span>
        </div>
      </Link>
      <a href="#" className="channel-item">
        <div className="channel-left">
          <div className="channel-icon">{channels[2].icon}</div>
          <div className="channel-info">
            <div className="channel-name">{channels[2].name}</div>
            <div className="channel-desc">{channels[2].desc}</div>
          </div>
        </div>
        <div className="channel-meta">
          <span>{channels[2].time}</span>
        </div>
      </a>
    </div>
  );
}
