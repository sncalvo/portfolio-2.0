import Education from '@/components/education'
import Experience from '@/components/experience'
import WidgetSkills from '@/components/widget-skills'
import WidgetLanguages from '@/components/widget-languages'

import { Metadata } from 'next'

const title = 'Santi Calvo - Resume'
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
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/resume`,
  },
}

export default function Resume() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">
          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">My resume</h1>
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-12">
              <Education />
              <Experience />
              {/* <Awards /> */}
              {/* <Recommendations /> */}
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetSkills />
          <WidgetLanguages />
          {/* <WidgetReferences /> */}
        </div>
      </aside>
    </div>
  )
}
