import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllSlugs } from '@/lib/blog-data';
import '../blog.css';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | GRIFN Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderContent(content: string[]) {
  return content.map((line, i) => {
    if (line.startsWith('h2:')) {
      return (
        <h2 key={i}>
          {line.slice(3)}
        </h2>
      );
    }
    if (line.startsWith('h3:')) {
      return <h3 key={i}>{line.slice(3)}</h3>;
    }
    if (line.startsWith('ul:')) {
      const items = line.slice(3).split('|');
      return (
        <ul key={i}>
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    if (line.startsWith('blockquote:')) {
      return (
        <blockquote key={i}>
          <p>{line.slice(11)}</p>
        </blockquote>
      );
    }
    return <p key={i}>{line.slice(2)}</p>;
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'GRIFN Software Solutions',
      url: 'https://grifn-website.vercel.app',
      logo: { '@type': 'ImageObject', url: 'https://grifn-website.vercel.app/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://grifn-website.vercel.app/blog/${post.slug}`,
    },
  };

  return (
    <div className="blog-page">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="article-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/blog">Blog</Link> <span>/</span>
            <span>{post.tag}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <div className="author">
              {post.authorImage ? (
                <div 
                  className="author-avatar" 
                  style={{ 
                    backgroundImage: `url(${post.authorImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              ) : (
                <div className="author-avatar">{post.authorInitials}</div>
              )}
              <span>{post.author}</span>
            </div>
            <span className="divider">·</span>
            <span>{post.date}</span>
            <span className="divider">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <article className="article-body">
            {renderContent(post.content)}
          </article>

          <div className="article-cta">
            <h2>
              Need Help With Your <span className="gradient-text">Website?</span>
            </h2>
            <p>
              GRIFN builds premium websites for Cebu and Philippine businesses.
              Get a free quote — no obligations.
            </p>
            <Link href="/quote" className="btn btn-primary">
              Get My Free Quote →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
