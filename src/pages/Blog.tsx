import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, ArrowUpDown, Clock, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '../components/layout/PageTransition';
import SprigOrb from '@/components/ui/SprigOrb';
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
      <main className="font-rounded flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden" aria-labelledby="blog-hero-heading">
          <div className="mx-auto max-w-screen-xl px-4 py-24 sm:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: text */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  <h1
                    id="blog-hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance"
                  >
                    Where learning gets{' '}
                    <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">
                      curious.
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Bold ideas, research, and real stories from the front lines of education innovation.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                    >
                      Browse articles
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                    >
                      Read featured
                    </Button>
                  </div>
                </div>
              </div>
              {/* Right: Sprig pair sharing a journal */}
              <div className="flex justify-center lg:justify-end">
                <SprigOrb size="lg">
                  <img
                    src="/images/sprig/blog-hero.png"
                    alt="Two Sprigs sharing a journal — ideas in exchange"
                    width="400"
                    height="400"
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] drop-shadow-2xl animate-breathe motion-reduce:animate-none"
                  />
                </SprigOrb>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-12">
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
            <section id="featured" className="mb-16 scroll-mt-24">
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
          <section id="articles" className="scroll-mt-24">
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
