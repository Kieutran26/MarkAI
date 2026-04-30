type ArticleImageProps = {
  key?: string | number;
  label: string;
  caption: string;
};

export default function ArticleImage({ label, caption }: ArticleImageProps) {
  return (
    <div className="article-img">
      <span className="font-mono text-[10px] text-muted tracking-wide uppercase">
        {label}
      </span>
      <p className="font-sans text-[13px] font-light text-ink2 text-center max-w-[420px] mt-2">
        {caption}
      </p>
    </div>
  );
}
