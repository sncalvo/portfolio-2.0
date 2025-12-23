import Image from 'next/image'

import EducationIcon from '@/public/images/udelar.webp'

export default function Education() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Education</h2>
      <ul className="space-y-8">
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image src={EducationIcon} width={24} height={24} alt="Universidad de la República - Facultad de Ingeniería" />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">March 2018 <span className="text-slate-400 dark:text-slate-600">·</span> December 2026 (expected)</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Bachelor of Engineering in Computer Science</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Universidad de la República - Facultad de Ingeniería</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}