import Image from 'next/image'
import WidgetNewsletter from '@/components/widget-newsletter'
import AboutImg from '@/public/images/santi-calvo.webp'
import MerriageImg from '@/public/images/santi-carito.webp'
import Experience from '@/components/experience'

import { Metadata } from 'next'

const title = 'Santi Calvo - About'
const description = 'I am a Software Developer in Uruguay with more than 5 years of experience in a variety of domains. For the past few years, I\'ve focused on driving teams to deliver value to their customers.'

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Santi Calvo",
  },
  twitter: {
    title,
    description,
    site: "@santi_c_dev",
    card: "summary",
  },
  description,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
}

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            { /* Page title */}
            <h1 className="h1 font-aspekta mb-5">Hi. I'm <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">Santi Calvo</span></h1>
            <div className="relative h-[410px]">
              <div className="absolute object-cover -top-10 -left-5 -rotate-[8deg] rounded-lg overflow-hidden h-[490px] w-[537px] scale-75 shadow-lg">
                <Image className="w-full object-cover" src={AboutImg} width={537} height={390} alt="About" />
              </div>

              <div className="absolute object-cover -top-10 -right-10 rotate-12 rounded-lg overflow-hidden h-[374px] w-[561px] scale-50 shadow-lg">
                <Image className="w-full" src={MerriageImg} width={561} height={374} alt="About" />
              </div>
            </div>

            { /* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8 mt-3">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Short Bio</h2>
                <p>
                  I'm a software developer in Uruguay with more than 5 years of experience in a variety of domains. For the past few years, I've focused on driving teams to deliver value to their customers.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Career</h2>
                <p>
                  As an Engineering Manager at <a className="font-medium text-sky-500 hover:underline" href="https://www.eagerworks.com" target="_blank">Eagerworks</a>, I take pride in leading and empowering dynamic teams of developers to consistently deliver innovative and impactful solutions that drive value for our customers.
                </p>
                <p>
                  My role focuses on enhancing engineering processes, identifying areas for improvement, mentoring engineers, and promoting the adoption of best practices. Additionally, I manage risks, optimize resource allocation, and guide the development of future leaders.
                </p>
                <p>
                  I have gained extensive experience working across a diverse range of technologies and domains, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>TypeScript</li>
                    <li>Ruby on Rails</li>
                    <li>React</li>
                    <li>AWS</li>
                    <li>React Native</li>
                    <li>Swift</li>
                  </ul>
                  <p>
                  This versatility enables me to adapt to various project requirements and contribute effectively to multidisciplinary teams.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm excited to connect with others via{' '}
                  <a className="font-medium text-sky-500 hover:underline" href="mailto:mail@scalvo.dev">email</a>{' '}
                  and{' '}
                  <a className="font-medium text-sky-500 hover:underline" href="https://x.com/santi_c_dev" target="_blank">X</a>{' '}
                  to chat about projects and ideas. Currently, I'm not taking on freelance projects, but I am open to hearing about potential opportunities,{' '}
                  discussing them with you and then potentially collaborating if it's a good fit.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetNewsletter />
        </div>
      </aside>
    </div>
  )
}
