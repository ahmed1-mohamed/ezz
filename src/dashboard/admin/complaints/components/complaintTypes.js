import { AlertTriangle, Lightbulb } from 'lucide-react'

export const COMPLAINT_TYPES = {
  complaint: {
    id: 'complaint',
    icon: AlertTriangle,
    labelKey: 'adminDashboard.complaints.typeComplaint',
    defaultLabel: 'شكوى',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    activeBorder: 'border-rose-500 ring-2 ring-rose-500/20',
  },
  suggestion: {
    id: 'suggestion',
    icon: Lightbulb,
    labelKey: 'adminDashboard.complaints.typeSuggestion',
    defaultLabel: 'مقترح',
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-900/20',
    activeBorder: 'border-sky-500 ring-2 ring-sky-500/20',
  },
}
