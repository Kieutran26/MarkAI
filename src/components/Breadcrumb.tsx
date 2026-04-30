import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="border-b border-border">
      <div className="page-shell py-[.9rem] flex items-center gap-[.5rem]">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-[.5rem]">
            {index > 0 && (
              <span className="font-mono text-[11px] text-border">→</span>
            )}
            {item.href ? (
              <Link 
                to={item.href} 
                className="font-mono text-[11px] text-muted hover:text-ink transition-colors tracking-[.04em]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-mono text-[11px] text-ink tracking-[.04em]">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
