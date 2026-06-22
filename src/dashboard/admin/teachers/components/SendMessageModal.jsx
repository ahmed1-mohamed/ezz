import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function SendMessageModal({
  isOpen,
  onClose,
  teacher,
  isRtl,
  t
}) {
  const [teacherName, setTeacherName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  // Sync state with selected teacher details when modal opens
  useEffect(() => {
    if (teacher) {
      setTeacherName(teacher.name || '')
      setEmail(teacher.email || '')
      setPhone(teacher.phone || '')
    }
  }, [teacher, isOpen])

  if (!isOpen) return null

  const handleSend = (e) => {
    e.preventDefault()
    if (!message.trim()) {
      alert(isRtl ? 'الرجاء كتابة رسالة أولاً' : 'Please enter a message first')
      return
    }
    alert(isRtl ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!')
    setMessage('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#3a3a3a] dark:bg-slate-950 rounded-3xl p-6 shadow-2xl z-10 flex flex-col gap-4 text-start">
        
        {/* Header */}
        <div className="flex items-center justify-between text-white pb-2">
          <h3 className="text-lg font-bold">
            {isRtl ? 'ارسال رساله للمعلم' : 'Send Message to Teacher'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Container (white card background) */}
        <form onSubmit={handleSend} className="bg-white dark:bg-slate-900 rounded-2xl p-6 space-y-6">
          
          {/* Teacher Name */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'أسم المعلم' : 'Teacher Name'}
            </label>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold"
              placeholder={isRtl ? 'اسم المعلم' : 'Teacher name'}
            />
          </div>

          {/* Email and Phone Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold"
                placeholder="Mahmed@yahoo.com"
                dir="ltr"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                {isRtl ? 'رقم الهاتف' : 'Phone Number'}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm font-semibold"
                placeholder="+201012345678"
                dir="ltr"
              />
            </div>

          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
              {isRtl ? 'الرسالة' : 'Message'}
            </label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white text-slate-850 dark:text-slate-100 rounded-2xl py-3.5 px-4 outline-none transition-all text-sm resize-none leading-relaxed"
              placeholder={isRtl ? 'اكتب الرسالة .............' : 'Write your message here...'}
              required
            />
          </div>

          {/* Send Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3.5 bg-[#005953] hover:bg-[#004742] text-white font-bold rounded-2xl transition-all shadow-md shadow-[#005953]/20 active:scale-[0.98] cursor-pointer"
            >
              {isRtl ? 'إرسال' : 'Send'}
            </button>
          </div>

        </form>

      </div>

    </div>
  )
}
