import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Tag, ArrowUpDown, Clock } from 'lucide-react';
import '../App.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  readTime: number;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample blog data - replace with your actual blog posts
  const blogPosts: BlogPost[] = useMemo(() => [
    {
      id: '1',
      title: 'How AI is Transforming Student Learning: A Deep Dive into Personalized Education',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way students learn, from personalized tutoring to adaptive assessments that grow with each student.',
      content: 'Full blog content would go here...',
      author: 'Edward Kerr',
      date: '2024-01-15',
      category: 'AI & Education',
      tags: ['AI', 'Personalization', 'Learning'],
      image: '/edtech_2.jpg.webp',
      featured: true,
      readTime: 8
    },
    {
      id: '2',
      title: 'Building Emotional Intelligence Through AI-Powered Journaling',
      excerpt: 'Learn how our AI companion Sprig helps students develop crucial emotional intelligence skills through guided reflection and self-discovery.',
      content: 'Full blog content would go here...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-10',
      category: 'Emotional Intelligence',
      tags: ['Emotional Intelligence', 'Journaling', 'Self-Reflection'],
      image: '/edtech_3.jpg.avif',
      featured: false,
      readTime: 6
    },
    {
      id: '3',
      title: 'The Future of Assessment: Moving Beyond Traditional Testing',
      excerpt: 'Explore innovative assessment methods that measure true learning and growth rather than just memorization.',
      content: 'Full blog content would go here...',
      author: 'Prof. Michael Rodriguez',
      date: '2024-01-05',
      category: 'Assessment',
      tags: ['Assessment', 'Innovation', 'Learning Outcomes'],
      image: '/edtech_4.jpg',
      featured: false,
      readTime: 7
    },
    {
      id: '4',
      title: 'Parent-Teacher Collaboration in the Digital Age',
      excerpt: 'How technology is bridging the gap between home and school, creating stronger partnerships for student success.',
      content: 'Full blog content would go here...',
      author: 'Lisa Thompson',
      date: '2024-01-01',
      category: 'Parent Engagement',
      tags: ['Parent Engagement', 'Technology', 'Collaboration'],
      image: '/teacher_power.jpg',
      featured: false,
      readTime: 5
    },
    {
      id: '5',
      title: 'The Science Behind Effective Learning: What Research Tells Us',
      excerpt: 'Dive into the latest research on how students learn best and how we can apply these findings in modern education.',
      content: 'Full blog content would go here...',
      author: 'Dr. James Wilson',
      date: '2023-12-28',
      category: 'Research',
      tags: ['Research', 'Learning Science', 'Evidence-Based'],
      image: '/edtech_5.jpg',
      featured: false,
      readTime: 9
    },
    {
      id: '6',
      title: 'Preparing Students for an AI-Powered Workforce',
      excerpt: 'How educators can help students develop the skills they\'ll need to thrive in a world where AI is ubiquitous.',
      content: 'Full blog content would go here...',
      author: 'Emma Davis',
      date: '2023-12-20',
      category: 'Future Skills',
      tags: ['Future Skills', 'AI', 'Workforce Preparation'],
      image: '/edtech_social.jpg',
      featured: false,
      readTime: 6
    }
  ], []);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort posts
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
  }, [searchTerm, selectedCategory, sortBy, blogPosts]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 py-12 px-4 font-rounded flex flex-col items-center">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <section className="container mx-auto max-w-7xl px-4 flex flex-col items-center justify-center text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
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
                            {(() => {
                              const parts = featuredPost.author.split(' ');
                              return parts[0][0] + parts[parts.length - 1][0];
                            })()}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                      </div>
                      <Button className="bg-mentra-blue hover:bg-mentra-blue/90">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </section>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
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
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-mentra-blue/10 rounded-full flex items-center justify-center">
                          <span className="text-mentra-blue font-semibold text-xs">
                            {(() => {
                              const parts = post.author.split(' ');
                              return parts[0][0] + parts[parts.length - 1][0];
                            })()}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{post.author}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
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
  );
};

export default Blog; 