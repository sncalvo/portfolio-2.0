import Image from 'next/image'

import EagerworksLogo from '@/public/images/eagerworks.webp'
import LunchItLogo from '@/public/images/lunchit.webp'

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Work Experience</h2>
      <ul className="space-y-8">
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={LunchItLogo} alt="Lunch It" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">2023 <span className="text-slate-400 dark:text-slate-600">·</span> Present</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Co-founder</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100"><a href="https://www.lunchit.uy/" target="_blank" className="underline hover:text-sky-500 transition-color">Lunch It</a></div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Co-founded Lunch It alongside Nacho Grondona. A B2B platform built with Ruby on Rails that digitizes corporate lunch benefits for 5+ companies. It streamlines the process by centralizing orders, managing subsidies, and coordinating unified deliveries from local providers.</div>
            </div>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EagerworksLogo} alt="Eagerworks" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">February 2024 <span className="text-slate-400 dark:text-slate-600">·</span> Present</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Senior Lead Engineer / Engineering Manager</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100"><a href="https://www.eagerworks.com" target="_blank" className="underline hover:text-sky-500 transition-color">Eagerworks</a></div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Leading the engineering organization through a period of rapid 10x growth, scaling the team from 10 to 100+ engineers. Responsible for establishing company-wide engineering standards, CI/CD best practices, and designing structured career ladders to maintain quality during expansion.</div>
            </div>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EagerworksLogo} alt="Eagerworks" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">June 2021 <span className="text-slate-400 dark:text-slate-600">·</span> February 2024</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Technical Leader</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100"><a href="https://www.eagerworks.com" target="_blank" className="underline hover:text-sky-500 transition-color">Eagerworks</a></div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Architected and led the redesign of a critical fintech engine, optimizing the processing of 1M+ financial records with zero downtime. Spearheaded the adoption of Node.js, Next.js, and TypeScript, while implementing complex e-commerce features for retail clients.</div>
            </div>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EagerworksLogo} alt="Eagerworks" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">October 2019 <span className="text-slate-400 dark:text-slate-600">·</span> June 2021</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Fullstack Developer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100"><a href="https://www.eagerworks.com" target="_blank" className="underline hover:text-sky-500 transition-color">Eagerworks</a></div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Delivered core features across the entire stack, including Web (React/Rails) and Native Mobile (Swift). Applied strong critical logic to translate product vision into high-quality technical implementations for international SaaS and retail clients.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}