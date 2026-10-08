import { Layers, AlertTriangle, Lightbulb } from 'lucide-react'

export const COMPLAINT_TYPES = {
  all: {
    id: '',
    icon: Layers,
    labelKey: 'adminDashboard.complaints.typeAll',
    defaultLabel: 'الكل',
    color: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-100 dark:bg-slate-800',
    activeBorder: 'border-[#0f7a6c] ring-2 ring-[#0f7a6c]/20 bg-[#0f7a6c]/5 dark:bg-[#0f7a6c]/10',
  },
  complaint: {
    id: 'complaint',
    icon: AlertTriangle,
    labelKey: 'adminDashboard.complaints.typeComplaint',
    defaultLabel: 'شكوى',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    activeBorder: 'border-rose-500 ring-2 ring-rose-500/20 bg-rose-50/40 dark:bg-rose-900/10',
  },
  suggestion: {
    id: 'suggestion',
    icon: Lightbulb,
    labelKey: 'adminDashboard.complaints.typeSuggestion',
    defaultLabel: 'مقترح',
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-900/20',
    activeBorder: 'border-sky-500 ring-2 ring-sky-500/20 bg-sky-50/40 dark:bg-sky-900/10',
  },
}
