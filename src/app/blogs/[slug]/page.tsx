import { notFound } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  author?: string;
  category?: { id: number; name: string };
}

const STRAPI_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`;

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = `${STRAPI_URL}&filters[slug][$eq]=${encodeURIComponent(slug)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();

  const blog = data.data[0];
  if (!blog) return null;

  const processedContent = await remark().use(html).process(blog.content || "");
  const contentHtml = processedContent.toString();

  return {
    slug: blog.slug,
    title: blog.title,
    description: blog.description,
    date: blog.publishedAt,
    content: contentHtml,
    author: blog.author || "Rajendra Mandliya",
    category: blog.category.name || "General",
  };
}

function PostHeader({
  title,
  date,
  author,
  category,
}: Pick<BlogPost, "title" | "date" | "author" | "category">) {
  return (
    <header className="mb-8 pb-4 border-b border-gray-200">
      {/* Category Badge */}
      {category && (
        <span className="inline-block mb-3 px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700">
          {category.name}
        </span>
      )}

      {/* Title */}
      <h1 className="text-4xl font-extrabold leading-tight mb-3">{title}</h1>

      {/* Meta info */}
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>•</span>
        <span>By {author}</span>
      </div>
    </header>
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title} | Tavrix Insights</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.date,
              description: post.description,
              author: {
                "@type": "Person",
                name: post.author,
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-block mb-6 text-blue-600 hover:underline font-medium"
          aria-label="Back to Blog List"
        >
          ← Back to Blog
        </Link>

        {/* Post Header */}
        <PostHeader
          title={post.title}
          date={post.date}
          author={post.author}
          category={post.category}
        />

        {/* Post Content */}
        <article
          className="prose prose-lg prose-headings:font-bold prose-p:leading-relaxed prose-img:rounded-xl dark:prose-invert max-w-none text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </>
  );
}
