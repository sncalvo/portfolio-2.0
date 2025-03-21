import Image from 'next/image'

import EagerworksLogo from '@/public/images/eagerworks.webp'

export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Work Experience</h2>
      <ul className="space-y-8">
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EagerworksLogo} alt="Eagerworks" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">February 2024 <span className="text-slate-400 dark:text-slate-600">·</span> Present</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Engineering Manager</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100"><a href="https://www.eagerworks.com" target="_blank" className="underline hover:text-sky-500 transition-color">Eagerworks</a></div>
              <div className="text-sm text-slate-500 dark:text-slate-400">As an Engineering Manager at Eagerworks, I lead a team of developers to deliver value to our customers.</div>
            </div>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EagerworksLogo} alt="Eagerworks" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">January 2021 <span className="text-slate-400 dark:text-slate-600">·</span> January 2024</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Technical Lead</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100"><a href="https://www.eagerworks.com" target="_blank" className="underline hover:text-sky-500 transition-color">Eagerworks</a></div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Technical Lead at Eagerworks, I was responsible for technical decisions and technical leadership of projects.</div>
            </div>
          </div>
        </li>

        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EagerworksLogo} alt="Eagerworks" width={24} height={24} />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">October 2019 <span className="text-slate-400 dark:text-slate-600">·</span> December 2020</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Full Stack Developer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100"><a href="https://www.eagerworks.com" target="_blank" className="underline hover:text-sky-500 transition-color">Eagerworks</a></div>
              <div className="text-sm text-slate-500 dark:text-slate-400">In my role as a Full Stack Developer at Eagerworks, I was responsible for developing and maintaining various MVPs for clients.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}