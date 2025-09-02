import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  coverImageUrl?: string;
}

interface StrapiBlog {
  id: number;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category?: { id: number; name: string };
  coverImage?: { url: string };
}

interface StrapiResponse<T> {
  data: T[];
}

type BlogPageProps = {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
};
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Tavrix Insights',
  description: 'Read expert articles on AI monitoring, web dev, FastAPI, Strapi, and modern SaaS from the Tavrix Insights team.',
  openGraph: {
    title: 'Blog | Tavrix Insights',
    description: 'Expert tech articles on AI monitoring, modern web development, FastAPI, SEO, and more.',
    url:  `${process.env.NEXT_PUBLIC_AGENT_WATCH_SITE_URL}/blogs`,
    siteName: 'Tavrix Insights',
    type: 'website',
    images: [
 {
          url: "/agent-connection-flow.png",
          width: 1200,
          height: 630,
          alt: "Tavrix Insights Flowchart",
        },
    ],
  },
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Await the resolved `searchParams` promise
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category ?? "";
  const search = resolvedSearchParams?.search ?? "";

  const [posts, categories] = await Promise.all([
    getPosts(category, search),
    getCategories(),
  ]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900">
        Blog
      </h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Search */}
        <form method="GET" action="/blogs" className="w-full max-w-md flex">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search posts..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 text-base"
          />
          {category && <input type="hidden" name="category" value={category} />}
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        {/* Filter Tabs */}
        <nav className="flex gap-2">
          <Link
            href={search ? `/blogs?search=${encodeURIComponent(search)}` : "/blogs"}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
              !category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blogs?category=${encodeURIComponent(cat)}${
                search ? `&search=${encodeURIComponent(search)}` : ""
              }`}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>

      {/* Blog Grid */}
      {posts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-20">No posts available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg hover:-translate-y-1 transform duration-300 overflow-hidden"
            >
              {/* Image */}
              {post.coverImageUrl ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center aspect-[4/3] w-full bg-gray-100 text-gray-400 text-sm rounded-t-2xl select-none">
                  No Image
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {post.category && (
                  <span className="mb-3 inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full select-none">
                    {post.category}
                  </span>
                )}
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="block mb-3 text-sm text-gray-500"
                >
                  {new Date(post.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="text-gray-700 leading-relaxed line-clamp-3 flex-grow">
                  {post.description}
                </p>
                <span className="inline-block mt-5 text-blue-600 font-medium">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const getPosts = async (category?: string, search?: string): Promise<BlogPost[]> => {
  let url = `${STRAPI_URL}/api/blogs?populate=*`;

  const filters: string[] = [];

  if (category) {
    filters.push(`filters[category][name][$eq]=${encodeURIComponent(category)}`);
  }

  if (search) {
    // match title OR description
    filters.push(`filters[$or][0][title][$containsi]=${encodeURIComponent(search)}`);
    filters.push(`filters[$or][1][description][$containsi]=${encodeURIComponent(search)}`);
  }

  if (filters.length > 0) {
    url += `&${filters.join("&")}`;
  }

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs from Strapi");

  const data: StrapiResponse<StrapiBlog> = await res.json();

  return data.data.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    date: item.publishedAt,
    category: item.category?.name ?? "General",
    coverImageUrl: item.coverImage ? STRAPI_URL + item.coverImage.url : undefined,
  }));
};

const getCategories = async (): Promise<string[]> => {
  const url = `${STRAPI_URL}/api/categories`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch categories from Strapi");

  const data: StrapiResponse<{ id: number; name: string }> = await res.json();
  return data.data.map((item) => item.name);
};
