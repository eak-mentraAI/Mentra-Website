import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import PageTransition from '../components/layout/PageTransition';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import NotFound from './NotFound';
import '../App.css';

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const authorInitials = (author: string) => {
  const parts = author.split(' ');
  return parts[0][0] + parts[parts.length - 1][0];
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!post?.canonicalUrl) return;
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = post.canonicalUrl;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [post?.canonicalUrl]);

  if (!post) {
    return <NotFound />;
  }

  const related = getAllPosts()
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-4">
          <article className="container mx-auto max-w-3xl">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3 text-gray-600 hover:text-mentra-blue">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All articles
              </Link>
            </Button>

            <div className="mb-6">
              <span className="inline-block bg-mentra-blue/10 text-mentra-blue px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-gray-200 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-mentra-blue/10 rounded-full flex items-center justify-center">
                  <span className="text-mentra-blue font-semibold text-sm">
                    {authorInitials(post.author)}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            </div>

            {post.image && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-mentra-blue prose-blockquote:border-mentra-blue prose-blockquote:text-gray-700 prose-blockquote:not-italic prose-strong:text-gray-900">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {related.length > 0 && (
            <section className="container mx-auto max-w-5xl mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">More in {post.category}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(p => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {p.image && (
                      <div className="h-40">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{p.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{p.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
