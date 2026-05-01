import { useParams } from 'react-router-dom';
import { posts, getPostBySlug } from '../lib/posts';
import ArticleHero from '../components/article/ArticleHero';
import ArticleContent from '../components/article/ArticleContent';
import ArticleSidebar from '../components/article/ArticleSidebar';
import ArticleFooter from '../components/article/ArticleFooter';
import ReadingProgressBar from '../components/article/ReadingProgressBar';
import RelatedArticles from '../components/article/RelatedArticles';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="page-shell py-12 text-center">
        <h1 className="font-serif text-2xl mb-4">Bài viết không tìm thấy</h1>
        <a href="/blog" className="btn-ghost">← Quay lại Blog</a>
      </div>
    );
  }

  return (
    <div>
      <ReadingProgressBar targetSelector=".article-content" />
      <ArticleHero post={post} />
      
      <div className="page-shell grid grid-cols-1 lg:grid-cols-[1fr_300px]">
        <ArticleContent content={post.content} />
        <ArticleSidebar currentSlug={post.slug} currentCategory={post.category} />
      </div>
      
      <ArticleFooter post={post} />
      <RelatedArticles />
    </div>
  );
}
