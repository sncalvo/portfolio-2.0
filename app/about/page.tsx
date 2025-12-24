import Image from 'next/image'
import WidgetNewsletter from '@/components/widget-newsletter'
import AboutImg from '@/public/images/santi-calvo.webp'
import MerriageImg from '@/public/images/santi-carito.webp'
import Experience from '@/components/experience'

import { Metadata } from 'next'

const title = 'Santi Calvo - About'
const description = 'Santi Calvo is an Engineering Manager and Full Stack Developer based in UK with over 6 years of experience. He specializes in building high-performing teams, optimizing engineering processes, and delivering scalable software solutions. Passionate about Ruby on Rails, React, and creating value for users.'

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
                  I'm a software developer and Engineering Manager based in UK, with over 6 years of experience spanning various industries. My passion lies in building software that not only solves problems but also delivers tangible value to users. Over the years, I've transitioned from hands-on coding to leading teams, where I now focus on empowering developers to do their best work.
                </p>
                <p>
                  I believe in the power of collaboration, clean code, and user-centric design. Whether it's architecting a complex system or refining a team's workflow, I'm always looking for ways to improve the process and the product.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Career</h2>
                <p>
                  Currently, I serve as an Engineering Manager at <a className="font-medium text-sky-500 hover:underline" href="https://www.eagerworks.com" target="_blank">Eagerworks</a>, where I lead multiple dynamic teams. My goal is to foster an environment where innovation thrives and delivery is consistent.
                </p>
                <p>
                  My day-to-day involves more than just technical oversight. I focus on:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Team Growth:</strong> Mentoring engineers and guiding future leaders.</li>
                    <li><strong>Process Optimization:</strong> Refining agile workflows to remove bottlenecks.</li>
                    <li><strong>Strategic Alignment:</strong> Ensuring technical decisions support business objectives.</li>
                    <li><strong>Technical Excellence:</strong> Promoting best practices and code quality.</li>
                </ul>
                <p>
                  Throughout my career, I've cultivated a deep understanding of a modern tech stack, allowing me to bridge the gap between technical constraints and product vision. My core technologies include:
                </p>
                  <ul className="list-disc list-inside ml-4 grid grid-cols-2 gap-2">
                    <li>TypeScript</li>
                    <li>Ruby on Rails</li>
                    <li>React</li>
                    <li>AWS</li>
                    <li>React Native</li>
                    <li>Swift</li>
                  </ul>
                  <p>
                  This technical versatility, combined with my leadership experience, enables me to adapt to diverse project requirements and drive success in multidisciplinary environments.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm always open to discussing new ideas, potential collaborations, or just chatting about the latest in tech. Feel free to reach out via{' '}
                  <a className="font-medium text-sky-500 hover:underline" href="mailto:mail@scalvo.dev">email</a>{' '}
                  or connect with me on{' '}
                  <a className="font-medium text-sky-500 hover:underline" href="https://x.com/santi_c_dev" target="_blank">X</a>.
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
