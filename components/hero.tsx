import Image from 'next/image'
import HeroImage from '@/public/images/santi.webp'

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Image className="rounded-full mb-5" src={HeroImage} width={56} height={56} priority alt="Me" />
          <h1 className="h1 font-aspekta mb-5">
            Hi, I'm Santi. <span className="sr-only">Santiago Calvo</span> I'm a product-minded{' '}
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              software engineer
            </span>.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Senior Lead Engineer & Engineering Manager @ <a href="https://www.eagerworks.com" target="_blank" className="underline hover:text-sky-500 transition-color">Eagerworks</a> based in the UK. I specialize in leading high-performing teams, scaling engineering organizations, and building complex products with a founder mindset.
          </p>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            I lead by example and strive to be a mentor, empowering people to do their best work. Passionate about technology and programming, I stay hands-on to foster a culture of technical excellence.
          </p>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            Organizer of <a href="https://www.react.uy" target="_blank" className="underline hover:text-sky-500 transition-color">React UY</a>.
          </p>
        </div>
      </div>
    </section>
  )
}