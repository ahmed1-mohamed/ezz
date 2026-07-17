import { Link } from 'lucide-react'

export default function EditGoogleLinkCard({
  isRtl,
  onLinkGoogle
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">

      <h2 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-3">
        <Link size={18} className="text-brand-500" />
        <span>{isRtl ? 'ربط حساب جوجل' : 'Link Google Account'}</span>
      </h2>

      <div className="flex flex-col items-center justify-center text-center p-4 space-y-4">

        <div className="h-16 w-16 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-2xl flex items-center justify-center shadow-sm">
          <svg className="h-8 w-8" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <path d="M21.35,11.1H12v2.7h5.38c-0.24,1.28 -0.96,2.37 -2.04,3.1v2.57h3.3c1.93,-1.78 3.04,-4.4 3.04,-7.47C21.68,11.77 21.56,11.41 21.35,11.1z" fill="#4285F4" />
              <path d="M12,20.9c2.43,0 4.47,-0.8 5.96,-2.18l-3.3,-2.57c-0.9,0.6 -2.07,0.97 -3.3,0.97 -2.34,0 -4.33,-1.58 -5.04,-3.7H2.88v2.66C4.38,18.77 7.95,20.9 12,20.9z" fill="#34A853" />
              <path d="M6.96,13.42c-0.18,-0.54 -0.28,-1.12 -0.28,-1.71s0.1,-1.17 0.28,-1.71V7.34H2.88C2.28,8.54 1.95,9.88 1.95,11.71s0.33,3.17 0.93,4.37L6.96,13.42z" fill="#FBBC05" />
              <path d="M12,6.57c1.32,0 2.5,0.45 3.44,1.35l2.58,-2.58C16.46,3.84 14.43,3.1 12,3.1 7.95,3.1 4.38,5.23 2.88,8.89l4.08,2.66C7.67,8.15 9.66,6.57 12,6.57z" fill="#EA4335" />
            </g>
          </svg>
        </div>

        <div className="space-y-1.5 max-w-sm">
          <p className="text-sm font-bold text-slate-700 dark:text-slate-350">
            {isRtl ? 'لم يتم ربط حساب جوجل بعد' : 'Google Account Not Linked Yet'}
          </p>
          <p className="text-xs text-slate-450 dark:text-slate-500 font-semibold leading-relaxed">
            {isRtl
              ? 'قم بربط حسابك بجوجل لتسجيل دخول أسرع وأسهل.'
              : 'Link your account to Google for a faster and easier login experience.'}
          </p>
        </div>

        <button
          type="button"
          onClick={onLinkGoogle}
          className="w-full sm:w-auto px-6 py-3 bg-[#0d7367] hover:bg-[#0b5f55] text-white font-bold rounded-2xl text-sm transition-all flex items-center justify-center gap-2.5 shadow-md shadow-brand-500/10 active:scale-95 cursor-pointer"
        >
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#ffffff" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#ffffff" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#ffffff" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#ffffff" />
          </svg>
          <span>{isRtl ? 'ربط حساب جوجل' : 'Link Google Account'}</span>
        </button>

      </div>

    </div>
  )
}