import { getBlogPosts } from '@/components/mdx/utils'
import Hero from '@/components/hero'
import PostItem from './post-item'
import WidgetNewsletter from '@/components/widget-newsletter'
import { Metadata } from 'next'
import HeroImage from '@/public/images/santi.webp'

const title = 'Santi Calvo - Developer, Speaker, and Engineering Manager @ Eagerworks'
const description = 'Explore the thoughts and expertise of Santiago Calvo—developer, speaker, and Engineering Manager at Eagerworks. Dive into articles on coding, leadership, and building MVPs, alongside insights on Ruby on Rails, NextJS, and the tech ecosystem. Organizer of React UY and passionate about shaping impactful software solutions.'

export const metadata: Metadata = {
  title: 'Santi Calvo',
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [HeroImage.src],
    siteName: "Santi Calvo",
  },
  twitter: {
    title,
    description,
    site: "@santi_c_dev",
    images: [HeroImage.src],
    card: "summary",
  },
  description,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
}

const POSTS_LIMIT = 8;

export default async function Home() {
  const allBlogs = getBlogPosts().slice(0, POSTS_LIMIT);

  return (
    <>
      <Hero />
      { /* Content */}
      <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">

        { /* Middle area */}
        <div className="grow">
          <div className="max-w-[700px]">
            <div className="space-y-10">

              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-3">Latest Articles</h2>

                {/* Articles list */}
                <div>
                  {allBlogs.map((post, postIndex) => (
                    <PostItem key={postIndex} {...post} />
                  ))}
                </div>
              </section>
{/* 
              <Talks /> */}
            </div>
          </div>
        </div>

        { /* Right sidebar */}
        <aside className="md:w-[240px] lg:w-[300px] shrink-0">
          <div className="space-y-6">
            <WidgetNewsletter />
          </div>
        </aside>
      </div>
    </>
  )
}
