import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, ArrowUpDown, Clock } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '../components/layout/PageTransition';
import { getAllPosts } from '@/lib/blog';
import '../App.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const blogPosts = useMemo(() => getAllPosts(), []);

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'readTime':
        filtered.sort((a, b) => b.readTime - a.readTime);
        break;
    }

    return filtered;
  }, [blogPosts, searchTerm, selectedCategory, sortBy]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const authorInitials = (author: string) => {
    const parts = author.split(' ');
    return parts[0][0] + parts[parts.length - 1][0];
  };

  return (
    <PageTransition>
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 py-12 px-4 font-rounded flex flex-col items-center">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <section className="container mx-auto max-w-3xl px-4 flex flex-col items-center justify-center text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mentra <span className="text-mentra-blue">Insights</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-0">
              Leading the conversation on the future of learning, AI, and human growth. Explore bold ideas, research, and real stories from the front lines of education innovation.
            </p>
          </section>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-blue-50 border-blue-100 focus:ring-mentra-blue focus:border-mentra-blue"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-blue-50 border-blue-100 focus:ring-mentra-blue focus:border-mentra-blue">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-blue-50">
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="bg-blue-50 focus:bg-blue-100">
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort Options */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-blue-50 border-blue-100 focus:ring-mentra-blue focus:border-mentra-blue">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-blue-50">
                  <SelectItem value="newest" className="bg-blue-50 focus:bg-blue-100">Newest First</SelectItem>
                  <SelectItem value="oldest" className="bg-blue-50 focus:bg-blue-100">Oldest First</SelectItem>
                  <SelectItem value="title" className="bg-blue-50 focus:bg-blue-100">Alphabetical</SelectItem>
                  <SelectItem value="readTime" className="bg-blue-50 focus:bg-blue-100">Read Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <AnimateOnScroll>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width="600"
                      height="400"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-mentra-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-mentra-blue/10 text-mentra-blue px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} min read
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-mentra-blue/10 rounded-full flex items-center justify-center">
                          <span className="text-mentra-blue font-semibold text-sm">
                            {authorInitials(featuredPost.author)}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                      </div>
                      <Button asChild className="bg-mentra-blue hover:bg-mentra-blue/90">
                        <Link to={`/blog/${featuredPost.slug}`}>Read Article</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </section>
            </AnimateOnScroll>
          )}

          {/* Regular Posts Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ArrowUpDown className="w-4 h-4" />
                {regularPosts.length} articles
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        width="400"
                        height="200"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-mentra-blue transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-mentra-blue/10 rounded-full flex items-center justify-center">
                          <span className="text-mentra-blue font-semibold text-xs">
                            {authorInitials(post.author)}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{post.author}</span>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {regularPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Blog;
