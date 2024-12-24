import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogPosts } from '@/components/mdx/utils'
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx/mdx'
import PostDate from '@/components/post-date'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetPosts from '@/components/widget-posts'

export async function generateStaticParams() {
  const allBlogs = getBlogPosts();

  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, summary: description } = post.metadata;

  const image = post.metadata.image ? `${process.env.NEXT_PUBLIC_SITE_URL}${post.metadata.image}` : undefined;
  const images = image ? [image] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`,
      siteName: "Santi Calvo",
    },
    twitter: {
      title,
      description,
      images,
      site: "@santi_c_dev",
      card: "summary",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`,
    },
  };
}

export default async function SinglePost(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound()

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          {/* Back */}
          <div className="mb-3">
            <Link
              className="inline-flex text-sky-500 rounded-full border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30"
              href="/"
            >
              <span className="sr-only">Back</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                <path className="fill-current" d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z" />
              </svg>
            </Link>
          </div>

          <article>
            {/* Post header */}
            <header>
              <div className="flex items-center justify-between mb-1">
                {/* Post date */}
                <div className="text-xs text-slate-500 uppercase">
                  <span className="text-sky-500">—</span> <PostDate dateString={post.metadata.publishedAt} /> <span className="text-slate-400 dark:text-slate-600">·</span> 4 Min read
                </div>
              </div>
              <h1 className="h1 font-aspekta mb-4">{post.metadata.title}</h1>
            </header>
            <div className="prose text-slate-500 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-pre:bg-slate-800 dark:prose-code:text-slate-200">
              <CustomMDX source={post.content} />
            </div>
          </article>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetNewsletter />
          <WidgetPosts />
        </div>
      </aside>
    </div>
  )
}
