'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import HeroImage from '@/public/images/santi.webp'

export default function SideNavigation() {
  const pathname = usePathname()

  return (
    <div className="md:z-auto z-20 sticky top-0 lg:w-16 md:w-24 shrink-0 md:h-screen no-scrollbar">
      <div className="h-full flex md:flex-col justify-between after:flex-1 after:mt-auto">
        <div className="flex-1">
          {pathname !== '/' && (
            <div className="flex justify-center md:my-4">
              <Link href="/" className="absolute top-5 left-5 md:static">
                <Image className="rounded-full" src={HeroImage} width={48} height={48} priority alt="Me" />
              </Link>
            </div>
          )}
        </div>
        <div className="flex-1 grow flex items-center rounded-lg shadow-lg dark:shadow-slate-900 bg-white dark:bg-slate-800">
          <nav className="w-full">
            <ul className="md:space-y-4 md:block flex justify-center gap-8">
              <li className="md:py-2">
                <Link
                  href="/"
                  className={
                    `py-5 md:py-auto w-full h-6 flex items-center justify-center relative after:absolute after:h-0.5 after:left-0 md:after:h-auto md:after:left-auto md:after:w-0.5 after:right-0 md:after:top-0 after:bottom-0 ${pathname !== '/about' && pathname !== '/subscribe' && pathname !== '/projects' && pathname !== '/resume'
                      ? 'text-sky-500 after:bg-sky-500'
                      : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}
                >
                  <span className="sr-only">Home</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
                    <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                    <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
                  </svg>
                </Link>
              </li>
              <li className="md:py-2">
                <Link
                  href="/about"
                  className={
                    `py-5 md:py-auto w-full h-6 flex items-center justify-center relative after:absolute after:h-0.5 after:left-0 md:after:h-auto md:after:left-auto md:after:w-0.5 after:right-0 md:after:top-0 after:bottom-0 ${pathname === '/about'
                      ? 'text-sky-500 after:bg-sky-500'
                      : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}                  
                >
                  <span className="sr-only">About</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                    <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                  </svg>
                </Link>
              </li>
              <li className="md:py-2">
                <Link
                  href="/resume"
                  className={`py-5 md:py-auto w-full h-6 flex items-center justify-center relative after:absolute after:h-0.5 after:left-0 md:after:h-auto md:after:left-auto md:after:w-0.5 after:right-0 md:after:top-0 after:bottom-0 ${pathname === '/resume'
                    ? 'text-sky-500 after:bg-sky-500'
                    : 'text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400'
                    }`}
                >
                  <span className="sr-only">Resume</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                    <path fillOpacity=".16" fillRule="nonzero" d="M1 5h16v14H1z" />
                    <path fillRule="nonzero" d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z" />
                  </svg>
                </Link>
              </li>                            
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
