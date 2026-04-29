import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-wrap">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="py-3 flex items-center gap-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx > 0 && (
                <span className="text-border font-mono text-[11px]">→</span>
              )}
              {item.href && !item.isCurrent ? (
                <Link 
                  to={item.href} 
                  className="font-mono text-[11px] text-muted hover:text-ink transition-colors no-underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-mono text-[11px] ${item.isCurrent ? 'text-ink' : 'text-muted'}`}>
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
