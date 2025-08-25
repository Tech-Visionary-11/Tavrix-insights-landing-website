import { notFound } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

interface PostPageProps {
  params: { slug: string };
}

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  author?: string;
}

const STRAPI_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?populate=*`;

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = `${STRAPI_URL}&filters[slug][$eq]=${encodeURIComponent(slug)}`;
  const res = await fetch(url, { cache: "no-store" });
  console.log("Fetching blog post from URL:", url, res);
  if (!res.ok) return null;
  const data = await res.json();

  const blog = data.data[0];
  if (!blog) return null;
  const processedContent = await remark()
    .use(html)
    .process(blog.content || "");
  const contentHtml = processedContent.toString();
  return {
    slug: blog.slug,
    title: blog.title,
    description: blog.description,
    date: blog.publishedAt,
    content: contentHtml,
    author: blog.author || "Rajendra Mandliya",
  };
}

function PostHeader({
  title,
  date,
  description,
}: Omit<BlogPost, "slug" | "content">) {
  return (
    <header className="mb-8 border-b pb-4">
      <h1 className="text-4xl font-extrabold leading-tight mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>
      <p className="text-lg text-gray-700">{description}</p>
    </header>
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

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
                name: post.author || "Rajendra Mandliya",
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-8">
        <Link
          href="/blogs"
          className="inline-block mb-6 text-blue-600 hover:underline font-medium"
          aria-label="Back to Blog List"
        >
          ← Back to Blog
        </Link>

        <PostHeader
          title={post.title}
          date={post.date}
          description={post.description}
        />

        <article
          className="prose max-w-none text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </>
  );
}
