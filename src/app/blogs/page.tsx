import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImageUrl?: string;
}

interface StrapiBlog {
  id: number;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  coverImage?: {
    data?: {
      url: string;
    };
  };
}

interface StrapiResponse {
  data: StrapiBlog[];
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-5xl font-extrabold mb-12 border-b border-gray-300 pb-6 text-gray-900">
        Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block rounded-xl border border-gray-200 p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {post.coverImageUrl && (
              <div className="mb-4 overflow-hidden rounded-md">
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  width={600}
                  height={350}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
            <p className="text-gray-700 leading-relaxed line-clamp-4">
              {post.description}
            </p>
            <span className="inline-block mt-6 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

const STRAPI_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=coverImage`;

const getPosts = async (): Promise<BlogPost[]> => {
  const res = await fetch(STRAPI_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs from Strapi");

  const data: StrapiResponse = await res.json();

  return data.data.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    date: item.publishedAt,
    coverImageUrl: item.coverImage?.data
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL +
        item.coverImage.data.url
      : undefined,
  }));
};
