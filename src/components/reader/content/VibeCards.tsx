import { Monitor, Brain, Wifi } from 'lucide-react';

interface VibeCardsProps {
  items: {
    icon: 'laptop' | 'brain' | 'wifi' | string;
    title: string;
  }[];
}

const IconMap: Record<string, React.ReactNode> = {
  laptop: <Monitor size={28} strokeWidth={1.5} />,
  brain: <Brain size={28} strokeWidth={1.5} />,
  wifi: <Wifi size={28} strokeWidth={1.5} />,
};

export default function VibeCards({ items }: VibeCardsProps) {
  return (
    <section className="vibe-cards" aria-label="Yêu cầu máy tính">
      {items.map((item, index) => (
        <div key={index} className="vibe-card">
          <div className="vibe-card-icon">
            {IconMap[item.icon] || item.icon}
          </div>
          <div className="vibe-card-title">{item.title}</div>
        </div>
      ))}
    </section>
  );
}
