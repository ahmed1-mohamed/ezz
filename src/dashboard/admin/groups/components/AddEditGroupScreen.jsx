import { useState, useRef } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Upload,
  Calendar,
  Trash2,
} from 'lucide-react'
import { showErrorToast } from '@/shared/utils/sweetAlert'
import SelectField from './fields/SelectField'
import DaySelect from './fields/DaySelect'

const SUBJECTS = ['القرآن الكريم', 'اللغة العربية', 'التجويد', 'التفسير', 'العقيدة']
const LEVELS = ['مبتدئ', 'متوسطة', 'متقدم']
const GROUP_TYPES = ['مجموعة', 'خاصة']
const LANGUAGES = ['العربية', 'الإنجليزية', 'الفرنسية']
const MAX_STUDENTS = [3, 4, 5, 6, 7, 8, 10, 12, 15]
const STATUSES = ['نشط', 'متوقف', 'مكتمل']
const MOCK_TEACHERS = [
  { id: 1, name: 'أحمد علي محمد' },
  { id: 2, name: 'عائشة محمود' },
  { id: 3, name: 'فاطمة الزهراء' },
  { id: 4, name: 'محمد إبراهيم' },
]
const WEEK_DAYS = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة']
const TIME_OPTIONS = [
  '12 ص', '1 ص', '2 ص', '3 ص', '4 ص', '5 ص', '6 ص',
  '7 ص', '8 ص', '9 ص', '10 ص', '11 ص',
  '12 م', '1 م', '2 م', '3 م', '4 م', '5 م',
  '6 م', '7 م', '8 م', '9 م', '10 م', '11 م',
]

export default function AddEditGroupScreen({ group = null, isRtl, onSave, onCancel }) {
  const BackArrow = isRtl ? ArrowRight : ArrowLeft
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: group?.name || '',
    nameEn: group?.nameEn || '',
    subject: group?.subject || '',
    level: group?.level || '',
    type: group?.type || 'مجموعة',
    language: group?.language || 'العربية',
    teacher: group?.teacher || '',
    teacherId: group?.teacherId || null,
    maxStudents: group?.maxStudents || 5,
    status: group?.status || 'نشط',
    image: group?.image || null,
  })

  const [schedule, setSchedule] = useState(group?.schedule || [])
  const [newDay, setNewDay] = useState('السبت')
  const [newTimeFrom, setNewTimeFrom] = useState('1 ص')
  const [newTimeTo, setNewTimeTo] = useState('2 ص')

  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }))

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => handleChange('image', reader.result)
    reader.readAsDataURL(file)
  }

  const handleAddSchedule = () => {
    const exists = schedule.find((s) => s.day === newDay)
    if (exists) return
    setSchedule((prev) => [...prev, { day: newDay, timeFrom: newTimeFrom, timeTo: newTimeTo }])
  }

  const handleRemoveSchedule = (day) => {
    setSchedule((prev) => prev.filter((s) => s.day !== day))
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      showErrorToast(isRtl ? 'الرجاء إدخال اسم المجموعة!' : 'Please enter Group name!', isRtl)
      return
    }
    if (!formData.subject) {
      showErrorToast(isRtl ? 'الرجاء اختيار المادة!' : 'Please select subject!', isRtl)
      return
    }
    if (!formData.teacher) {
      showErrorToast(isRtl ? 'الرجاء اختيار المعلم!' : 'Please select teacher!', isRtl)
      return
    }
    onSave({ ...formData, schedule })
  }

  const initial = formData.name ? formData.name.trim().charAt(0) : 'م'

  const scheduleText =
    schedule.length > 0
      ? schedule.map((s) => s.day).join(' - ') + ' · ' + (schedule[0]?.timeFrom || '')
      : ''

  const statusConfig = {
    نشط: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400',
    متوقف: 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400',
    مكتمل: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
  }

  return (
    <div className="space-y-6 pb-10" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="p-2.5 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-100 dark:border-slate-800 transition-all hover:scale-105 cursor-pointer"
          >
            <BackArrow size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span>المجموعات</span>
              <span className="text-slate-350 dark:text-slate-600 text-lg">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-semibold text-lg font-bold">
                {group ? 'تعديل بيانات المجموعة' : 'إنشاء مجموعة جديدة'}
              </span>
            </h1>
          </div>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl text-sm font-semibold transition-all dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 cursor-pointer"
        >
          {isRtl ? 'إلغاء' : 'Cancel'}
        </button>
      </div>

      {/* Group Info Bar (Edit mode only) */}
      {group && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-xl bg-brand-500 text-white text-xs font-bold">
              مجموعة
            </span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
              {group.name}
            </span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusConfig[group.status] || statusConfig['نشط']}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {group.status}
            </span>
            {group.level && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {group.level}
              </span>
            )}
          </div>
          {scheduleText && (
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {group.teacher} · {scheduleText}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 max-w-4xl mx-auto">
        {/* Image + Group Name */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-6">
          <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-end">
            إنشاء مجموعة جديدة
          </h3>

          {/* Image Upload */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-brand-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
                {formData.image ? (
                  <img src={formData.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <span>{initial}</span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
            >
              <Upload size={14} />
              <span>تغيير صورة المجموعة</span>
            </button>
            <p className="text-xs text-slate-400">الحد الأقصى 5 ميجابايت، PNG أو JPG</p>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageSelect}
            />
          </div>

          {/* Names Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
                Group Name
              </label>
              <input
                type="text"
                value={formData.nameEn}
                onChange={(e) => handleChange('nameEn', e.target.value)}
                placeholder="Quran Group A"
                dir="ltr"
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
                اسم المجموعة
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="مجموعة القرآن ..."
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400 text-end"
              />
            </div>
          </div>

          {/* Subject + Level Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SelectField
              label="المادة"
              value={formData.subject}
              onChange={(val) => handleChange('subject', val)}
              options={SUBJECTS}
              placeholder="المادة"
            />
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-start">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                placeholder="Subject"
                dir="ltr"
                className="w-full bg-[#f3f7f6] dark:bg-slate-950 border border-transparent focus:border-brand-500/20 focus:bg-white dark:focus:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl py-3 px-4 outline-none transition-all text-sm placeholder-slate-400"
              />
            </div>
            <SelectField
              label="المستوى"
              value={formData.level}
              onChange={(val) => handleChange('level', val)}
              options={LEVELS}
              placeholder="المستوى الأول"
            />
          </div>

          {/* Type + Language Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SelectField
              label="اللغة"
              value={formData.language}
              onChange={(val) => handleChange('language', val)}
              options={LANGUAGES}
              placeholder="العربية"
            />
            <SelectField
              label="نوع المجموعة"
              value={formData.type}
              onChange={(val) => handleChange('type', val)}
              options={GROUP_TYPES}
              placeholder="خاصة"
            />
          </div>

          {/* Teacher + MaxStudents Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SelectField
              label="المعلم"
              value={formData.teacher}
              onChange={(val) => {
                handleChange('teacher', typeof val === 'object' ? val.name : val)
                handleChange('teacherId', typeof val === 'object' ? val.id : null)
              }}
              options={MOCK_TEACHERS}
              placeholder="أحمد علي محمد"
            />
            <SelectField
              label="الحد الأقصى للطلاب"
              value={formData.maxStudents ? `${formData.maxStudents} طلاب` : ''}
              onChange={(val) => handleChange('maxStudents', Number(val))}
              options={MAX_STUDENTS.map(String)}
              placeholder="5 طلاب"
            />
          </div>

          {/* Status */}
          <SelectField
            label="حالة المجموعة"
            value={formData.status}
            onChange={(val) => handleChange('status', val)}
            options={STATUSES}
            placeholder="نشطة"
          />
        </div>

        {/* Schedule Builder */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 p-6 shadow-soft space-y-5">
          <h3 className="text-base font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800/60 pb-3 text-end">
            إنشاء الجدول الدراسي للمجموعة
          </h3>

          {/* Day + Time From + Time To */}
          <div className="grid grid-cols-3 gap-4">
            {/* Day */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
                أختر أيام الجدول الأسبوعي
              </label>
              <DaySelect
                value={newDay}
                onChange={setNewDay}
                options={WEEK_DAYS}
              />
            </div>
            {/* Time From */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
                أختر الساعة من
              </label>
              <DaySelect
                value={newTimeFrom}
                onChange={setNewTimeFrom}
                options={TIME_OPTIONS}
              />
            </div>
            {/* Time To */}
            <div className="relative">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 text-end">
                أختر الساعة إلى
              </label>
              <DaySelect
                value={newTimeTo}
                onChange={setNewTimeTo}
                options={TIME_OPTIONS}
              />
            </div>
          </div>

          {/* Add Schedule Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleAddSchedule}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/15 active:scale-[0.98] cursor-pointer"
            >
              <Calendar size={16} />
              <span>إضافة موعد</span>
            </button>
          </div>

          {/* Schedule Table */}
          {schedule.length > 0 && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm">
                <thead className="bg-brand-600 text-white">
                  <tr>
                    <th className="px-5 py-3 text-end font-semibold">اليوم</th>
                    <th className="px-5 py-3 text-end font-semibold">الساعة</th>
                    <th className="px-4 py-3 w-10" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {schedule.map((slot) => (
                    <tr key={slot.day} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-950/20 transition-colors">
                      <td className="px-5 py-3 text-end font-medium text-slate-700 dark:text-slate-300">
                        {slot.day}
                      </td>
                      <td className="px-5 py-3 text-end text-slate-600 dark:text-slate-400">
                        {slot.timeFrom} - {slot.timeTo}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() => handleRemoveSchedule(slot.day)}
                          className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors rounded-lg hover:bg-rose-50 dark:hover:bg-rose-955/20 cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {schedule.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 text-slate-400 dark:text-slate-500 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              <Calendar size={28} className="mb-2 opacity-40" />
              <p className="text-sm font-medium">لم يتم إضافة أي مواعيد بعد</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 py-3 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all shadow-md shadow-brand-500/20 active:scale-[0.98] cursor-pointer"
            >
              {group ? 'تعديل' : 'إنشاء المجموعة'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
            >
              إلغاء
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
