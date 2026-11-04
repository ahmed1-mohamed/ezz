'use client'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css'
import { useLanguage } from '@/contexts/LanguageContext'

interface RichTextEditorProps {
    value?: string
    onChange: (value: string) => void
    placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
    const { t } = useLanguage();
    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            placeholder={placeholder ?? t("experts.descriptionEditor.placeholder")}
        />
    )
}
