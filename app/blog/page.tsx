import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';
import './blog.css';

export const metadata: Metadata = {
  title: 'Blog | Web Design & Development Insights | GRIFN',
  description:
    'Expert insights on web design, development, SEO, and digital strategy for Philippine businesses. Tips, guides, and industry analysis from GRIFN Software Solutions.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <div className="blog-page">
      <Navbar />

      <section className="blog-hero">
        <div className="container">
          <span className="section-label">Blog</span>
          <h1>
            Web Design & Development <span className="gradient-text">Insights</span>
          </h1>
          <p className="hero-desc">
            Expert guides, industry analysis, and actionable tips for Philippine businesses
            looking to grow their digital presence.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <span className="blog-tag">{post.tag}</span>
                <h2>{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <div className="author-info">
                    {post.authorImage ? (
                      <div 
                        className="author-avatar-sm" 
                        style={{ 
                          backgroundImage: `url(${post.authorImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    ) : (
                      <div className="author-avatar-sm initials">{post.authorInitials}</div>
                    )}
                    <span>{post.author}</span>
                  </div>
                  <span className="meta-divider">·</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
