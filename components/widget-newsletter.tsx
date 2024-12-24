export default function WidgetNewsletter() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="text-center mb-8">
        <div className="font-aspekta font-[650] mb-1">Say Hi!</div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Send me an email if you want to chat about projects or ideas.</p>
      </div>
      <a href="mailto:mail@scalvo.dev" className="btn-sm w-full  text-slate-100 bg-sky-500 hover:bg-sky-600">
        Send me an email
      </a>
    </div>
  )
}