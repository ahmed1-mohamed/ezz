import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  X,
  Gift,
  Smile,
  Sparkles,
   Check,
  Loader2,
} from 'lucide-react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import toast from 'react-hot-toast';
import { teacherRewardsApi } from '@/shared/services/api/teacherRewardsApi.js';

const POPULAR_REWARD_EMOJIS = [
  '⭐',
  '🌟',
  '🏆',
  '🎖️',
  '👑',
  '🥇',
  '🥈',
  '🥉',
  '💪',
  '📖',
  '🎓',
  '💎',
  '🎯',
  '🔥',
  '✨',
  '🏅',
  '💡',
  '👏',
];

const COLOR_PRESETS = [
  { hex: '#4CAF50', name: 'أخضر زمردي' },
  { hex: '#00594C', name: 'أخضر وقور' },
  { hex: '#cca332', name: 'ذهبي فاخر' },
  { hex: '#2563EB', name: 'أزرق ملكي' },
  { hex: '#7C3AED', name: 'بنفسجي متألق' },
  { hex: '#E11D48', name: 'وردي ياقوتي' },
  { hex: '#D97706', name: 'عنبري مميز' },
  { hex: '#0D9488', name: 'فيروزي راقي' },
  { hex: '#475569', name: 'رمادي أنيق' },
];

export default function SuggestRewardModal({ isOpen, onClose, onSuccess }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.language?.startsWith('ar') ?? true;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('⭐');
  const [backgroundColor, setBackgroundColor] = useState('#4CAF50');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emojiPickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    }
    if (showEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmojiPicker]);

  if (!isOpen) return null;

  const handleEmojiClick = (emojiData) => {
    if (emojiData?.emoji) {
      setIcon(emojiData.emoji);
      setShowEmojiPicker(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error(t('teacher.enterRewardNameToast', 'يرجى إدخال اسم المكافأة'));
      return;
    }

    if (!description.trim()) {
      toast.error(t('teacher.enterRewardDescToast', 'يرجى إدخال وصف المكافأة وسبب استحقاقها'));
      return;
    }

    setIsSubmitting(true);
    const payload = {
      name: name.trim(),
      icon: icon.trim() || '⭐',
      backgroundColor: backgroundColor || '#4CAF50',
      description: description.trim(),
    };

    const res = await teacherRewardsApi.createSuggestedReward(payload);
    setIsSubmitting(false);

    if (res.success) {
      toast.success(res.message || t('teacher.suggestSuccessToast', 'تم إرسال اقتراح المكافأة بنجاح للمراجعة والاعتماد'));
      onSuccess?.();
      onClose?.();
      setName('');
      setDescription('');
      setIcon('⭐');
      setBackgroundColor('#4CAF50');
    } else {
      toast.error(res.message || t('teacher.suggestErrorToast', 'فشل إرسال اقتراح المكافأة'));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6 my-auto text-start relative">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 flex items-center justify-center">
              <Gift size={22} />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800 dark:text-white">
                {t('teacher.suggestNewRewardModalTitle', 'اقتراح مكافأة جديدة')}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                {t('teacher.suggestNewRewardModalSubtitle', 'اقترح مكافأة مميزة ليتم مراجعتها واعتمادها من الإدارة')}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-4 border border-slate-200/60 dark:border-slate-800 space-y-2">
          <span className="text-[11px] font-bold text-slate-400 block">
            {t('teacher.previewLabel', 'معاينة حية للمكافأة المقترحة:')}
          </span>
          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xs">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-xs shrink-0 transition-colors"
              style={{ backgroundColor }}
            >
              <div className="w-11 h-11 rounded-xl bg-white/90 dark:bg-slate-900/90 flex items-center justify-center">
                <span>{icon || '⭐'}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-black text-slate-800 dark:text-white truncate">
                {name || t('teacher.rewardNameLabel', 'اسم المكافأة')}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 mt-0.5 font-medium">
                {description || t('teacher.rewardDescPlaceholder', 'وصف المكافأة وسبب استحقاق الطالب لها سيظهر هنا...')}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 shrink-0">
              {t('teacher.pendingSuggestions', 'قيد المراجعة')}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {t('teacher.rewardNameLabel', 'اسم المكافأة')} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder={t('teacher.rewardNamePlaceholder', 'مثال: وسام قارئ الأسبوع')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {t('teacher.rewardDescLabel', 'وصف المكافأة وسبب الاستحقاق')} <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              required
              placeholder={t('teacher.rewardDescPlaceholder', 'مثال: مكافأة تشجيعية للطالب الأكثر التزاماً بالحضور والمشاركة وحفظ الورد الأسبوعي...')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C] transition-all resize-none"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.rewardIconLabel', 'رمز الأيقونة (إيموجي)')} <span className="text-rose-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className="text-xs font-bold text-[#00594C] hover:text-[#00473d] dark:text-emerald-400 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Smile size={15} />
                <span>{showEmojiPicker ? (isRtl ? 'إغلاق كيبورد الإيموجي' : 'Close Emoji Picker') : (isRtl ? 'فتح كيبورد الإيموجي الكامل' : 'Open Emoji Picker')}</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-[#00594C]/30 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-3xl shadow-2xs shrink-0">
                <span>{icon || '⭐'}</span>
              </div>

              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  maxLength={10}
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  placeholder={isRtl ? 'اختر أو اكتب إيموجي' : 'Select or type emoji'}
                  className="flex-1 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm text-center font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C]"
                />

                <button
                  type="button"
                  onClick={() => setShowEmojiPicker((prev) => !prev)}
                  className="px-4 py-2.5 rounded-2xl bg-[#00594C]/10 hover:bg-[#00594C]/20 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Sparkles size={16} />
                  <span>{isRtl ? 'لوحة الإيموجي' : 'Emoji Panel'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-slate-400 block">
                {isRtl ? 'أو اختر مباشرة من الإيموجيات الشائعة للمكافآت:' : 'Or choose directly from popular reward emojis:'}
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {POPULAR_REWARD_EMOJIS.map((em) => (
                  <button
                    key={em}
                    type="button"
                    onClick={() => setIcon(em)}
                    className={`w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-transform hover:scale-115 cursor-pointer ${
                      icon === em
                        ? 'bg-[#00594C]/15 ring-2 ring-[#00594C] shadow-2xs'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </div>

            {showEmojiPicker && (
              <div
                ref={emojiPickerRef}
                className="relative z-30 mt-2 p-2 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-2">
                  <span className="text-xs font-black text-slate-700 dark:text-slate-300">
                    {isRtl ? 'كيبورد الإيموجي الشامل' : 'Emoji Keyboard'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowEmojiPicker(false)}
                    className="text-slate-400 hover:text-slate-600 text-xs font-bold"
                  >
                    {isRtl ? 'إغلاق ✕' : 'Close ✕'}
                  </button>
                </div>
                <div className="flex justify-center max-w-full overflow-hidden">
                  <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    theme={Theme.AUTO}
                    searchPlaceholder={isRtl ? 'ابحث عن إيموجي...' : 'Search emoji...'}
                    previewConfig={{ showPreview: false }}
                    width="100%"
                    height={350}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                {t('teacher.rewardBgColorLabel', 'لون خلفية المكافأة')} <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-500">{backgroundColor}</span>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer p-0.5 bg-transparent"
                  title="اختر لوناً مخصصاً"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {COLOR_PRESETS.map((color) => {
                const isSelected = backgroundColor.toLowerCase() === color.hex.toLowerCase();
                return (
                  <button
                    key={color.hex}
                    type="button"
                    onClick={() => setBackgroundColor(color.hex)}
                    className={`p-2 rounded-xl text-xs font-bold flex items-center justify-between gap-1.5 border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-slate-800 dark:border-white shadow-xs ring-2 ring-[#00594C]/30 bg-white dark:bg-slate-800'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full shrink-0 shadow-2xs"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[11px] truncate text-slate-700 dark:text-slate-300">
                      {color.name}
                    </span>
                    {isSelected && <Check size={12} className="text-[#00594C] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {t('teacher.cancel', 'إلغاء')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-2.5 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-xs sm:text-sm font-black shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>{t('teacher.submittingSuggestion', 'جاري إرسال الاقتراح...')}</span>
                </>
              ) : (
                <>
                  <Gift size={16} />
                  <span>{t('teacher.submitSuggestion', 'إرسال الاقتراح للإدارة')}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
