import BlogHero from '../components/blog/BlogHero';
import CategoryBar from '../components/blog/CategoryBar';
import BlogGrid from '../components/blog/BlogGrid';
import PostListRow from '../components/blog/PostListRow';
import TopicsGrid from '../components/blog/TopicsGrid';

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <CategoryBar />
      <BlogGrid />
      <PostListRow />
      <TopicsGrid />
    </div>
  );
}
