import { useTranslation } from 'react-i18next';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Button from '@/shared/components/Button.jsx';

export default function ParentTestimonialsSection({
  testimonials,
  handleOpenAddTestimonial,
  handleOpenEditTestimonial,
  handleDeleteTestimonial
}) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.startsWith('ar');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 shadow-soft p-8 mt-6 lg:mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h2 className="text-xl font-bold text-slate-850 dark:text-slate-100">
          {t('adminDashboard.website.parentTestimonialsTitle', isRtl ? 'آراء أولياء الأمور' : 'Parents Testimonials')}
        </h2>
        <Button
          onClick={handleOpenAddTestimonial}
          className="px-5 py-2.5 bg-[#0f7a6c] hover:bg-[#0c6256] text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 shadow-sm w-full sm:w-auto justify-center"
        >
          <Plus size={16} />
          <span>{t('adminDashboard.website.addTestimonial', isRtl ? 'إضافة رأي' : 'Add Testimonial')}</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-400 dark:text-slate-500">
            {t('adminDashboard.website.noTestimonials', isRtl ? 'لا توجد آراء حالياً.' : 'No testimonials currently.')}
          </div>
        ) : (
          testimonials.map((testimonial) => {
            const parentNameStr = typeof testimonial.parentName === 'object' && testimonial.parentName !== null
              ? (isRtl ? testimonial.parentName.ar || testimonial.parentName.en : testimonial.parentName.en || testimonial.parentName.ar)
              : testimonial.parentName || '';
              
            const reviewStr = typeof testimonial.review === 'object' && testimonial.review !== null
              ? (isRtl ? testimonial.review.ar || testimonial.review.en : testimonial.review.en || testimonial.review.ar)
              : testimonial.review || '';

            const userLetter = parentNameStr ? parentNameStr.trim().charAt(0) : 'و';
            const imageUrl = testimonial.image && (testimonial.image.startsWith('http') || testimonial.image.startsWith('data:'))
              ? testimonial.image
              : testimonial.image
                ? `https://manaret-ezz.dramcode.top/${testimonial.image}`
                : null;

            return (
              <div
                key={testimonial.id || testimonial._id}
                className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={parentNameStr}
                      className="w-14 h-14 rounded-full object-cover shadow-sm border border-slate-200"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-[#0f7a6c]/10 dark:bg-emerald-950/30 text-[#0f7a6c] dark:text-emerald-450 border border-[#0f7a6c]/20 flex items-center justify-center font-bold text-xl shadow-sm shrink-0">
                      {userLetter}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-base text-slate-800 dark:text-slate-200">
                      {parentNameStr}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t('adminDashboard.website.parentRole', isRtl ? 'ولي أمر' : 'Parent')}
                    </p>
                  </div>
                </div>

                <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl mb-6 relative">
                  <span className="absolute -top-2 right-4 text-3xl text-slate-200 dark:text-slate-700/50 font-serif leading-none">"</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic line-clamp-4 relative z-10">
                    {reviewStr}
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleOpenEditTestimonial(testimonial)}
                    className="p-2 text-slate-400 hover:text-[#0f7a6c] hover:bg-[#0f7a6c]/5 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    title={t('common.edit', isRtl ? 'تعديل' : 'Edit')}
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    title={t('common.delete', isRtl ? 'حذف' : 'Delete')}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
