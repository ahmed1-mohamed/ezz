import { useState } from 'react';
import {
  Plus,
  Trash2,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

export default function QuestionBuilder({ questions = [], onChange }) {
  const [activeQuestionId, setActiveQuestionId] = useState(
    questions.length > 0 ? questions[0].id : null
  );

  const canAddMore = questions.length < 20;

  const handleAddQuestion = (type = 'multiple_choice') => {
    if (!canAddMore) return;

    const newQ = {
      id: `q_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      type,
      question: '',
      points: 5,
      options: type === 'multiple_choice' ? ['', '', '', ''] : [],
      correctOptionIndex: 0,
    };

    const nextList = [...questions, newQ];
    onChange(nextList);
    setActiveQuestionId(newQ.id);
  };

  const handleUpdateQuestion = (id, field, value) => {
    const nextList = questions.map((q) => {
      if (q.id === id) {
        return { ...q, [field]: value };
      }
      return q;
    });
    onChange(nextList);
  };

  const handleUpdateOption = (qId, optionIdx, value) => {
    const nextList = questions.map((q) => {
      if (q.id === qId) {
        const nextOptions = [...(q.options || [])];
        nextOptions[optionIdx] = value;
        return { ...q, options: nextOptions };
      }
      return q;
    });
    onChange(nextList);
  };

  const handleAddOption = (qId) => {
    const targetQ = questions.find((q) => q.id === qId);
    if (!targetQ || (targetQ.options && targetQ.options.length >= 4)) return;

    const nextOptions = [...(targetQ.options || []), ''];
    handleUpdateQuestion(qId, 'options', nextOptions);
  };

  const handleRemoveOption = (qId, optionIdx) => {
    const targetQ = questions.find((q) => q.id === qId);
    if (!targetQ || !targetQ.options || targetQ.options.length <= 2) return;

    const nextOptions = targetQ.options.filter((_, idx) => idx !== optionIdx);
    let nextCorrect = targetQ.correctOptionIndex || 0;
    if (nextCorrect >= nextOptions.length) {
      nextCorrect = nextOptions.length - 1;
    }

    const nextList = questions.map((q) => {
      if (q.id === qId) {
        return {
          ...q,
          options: nextOptions,
          correctOptionIndex: nextCorrect,
        };
      }
      return q;
    });
    onChange(nextList);
  };

  const handleDeleteQuestion = (id) => {
    const nextList = questions.filter((q) => q.id !== id);
    onChange(nextList);
    if (activeQuestionId === id) {
      setActiveQuestionId(nextList.length > 0 ? nextList[0].id : null);
    }
  };

  const totalPoints = questions.reduce((acc, q) => acc + (Number(q.points) || 0), 0);

  return (
    <div className="space-y-6 text-start" dir="rtl">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800">
        <div>
          <h4 className="text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
            <HelpCircle size={18} className="text-[#00594C] dark:text-emerald-400" />
            <span>بنك أسئلة الاختبار القصير</span>
          </h4>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            يمكنك إضافة حتى 20 سؤالاً (اختياري بأربعة خيارات كحد أقصى، أو مقالي) مع تحديد درجات كل سؤال
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
            {questions.length} / 20 سؤال
          </span>

          <span className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs font-black text-amber-700 dark:text-amber-300">
            إجمالي الدرجات: {totalPoints}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {questions.map((q, idx) => (
          <button
            key={q.id}
            type="button"
            onClick={() => setActiveQuestionId(q.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              activeQuestionId === q.id
                ? 'bg-[#00594C] text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>سؤال {idx + 1}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                activeQuestionId === q.id
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}
            >
              {q.type === 'multiple_choice' ? 'اختياري' : 'مقالي'}
            </span>
          </button>
        ))}

        {canAddMore && (
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => handleAddQuestion('multiple_choice')}
              className="px-3 py-2 rounded-xl border border-dashed border-[#00594C]/40 text-[#00594C] dark:text-emerald-400 bg-[#00594C]/5 hover:bg-[#00594C]/10 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Plus size={14} />
              <span>+ سؤال اختياري</span>
            </button>

            <button
              type="button"
              onClick={() => handleAddQuestion('essay')}
              className="px-3 py-2 rounded-xl border border-dashed border-amber-500/40 text-amber-700 dark:text-amber-400 bg-amber-500/5 hover:bg-amber-500/10 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Plus size={14} />
              <span>+ سؤال مقالي</span>
            </button>
          </div>
        )}
      </div>

      {questions.length === 0 ? (
        <div className="p-12 text-center bg-slate-50 dark:bg-slate-800/30 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#00594C]/10 text-[#00594C] dark:bg-emerald-950/60 dark:text-emerald-300 mx-auto flex items-center justify-center">
            <HelpCircle size={28} />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-800 dark:text-white">
              لم تتم إضافة أي أسئلة للاختبار بعد
            </h4>
            <p className="text-xs text-slate-400 font-medium mt-1">
              أضف أسئلة اختيار من متعدد أو أسئلة مقالية لاختبار استيعاب الطلاب لما تم شرحه
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleAddQuestion('multiple_choice')}
              className="px-5 py-2.5 rounded-2xl bg-[#00594C] hover:bg-[#00473d] text-white text-xs font-bold shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Plus size={16} />
              <span>إضافة سؤال اختياري (Multiple Choice)</span>
            </button>

            <button
              type="button"
              onClick={() => handleAddQuestion('essay')}
              className="px-5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Plus size={16} />
              <span>إضافة سؤال مقالي (Essay)</span>
            </button>
          </div>
        </div>
      ) : (
        questions
          .filter((q) => q.id === activeQuestionId)
          .map((currentQ) => {
            const questionIndex = questions.findIndex((q) => q.id === currentQ.id) + 1;

            return (
              <div
                key={currentQ.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5"
              >
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#00594C] text-white font-black text-sm flex items-center justify-center">
                      {questionIndex}
                    </span>

                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                      <button
                        type="button"
                        onClick={() => {
                          handleUpdateQuestion(currentQ.id, 'type', 'multiple_choice');
                          if (!currentQ.options || currentQ.options.length === 0) {
                            handleUpdateQuestion(currentQ.id, 'options', ['', '', '', '']);
                          }
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          currentQ.type === 'multiple_choice'
                            ? 'bg-white dark:bg-slate-900 text-[#00594C] dark:text-emerald-400 shadow-2xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        اختيار من متعدد
                      </button>

                      <button
                        type="button"
                        onClick={() => handleUpdateQuestion(currentQ.id, 'type', 'essay')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          currentQ.type === 'essay'
                            ? 'bg-white dark:bg-slate-900 text-[#00594C] dark:text-emerald-400 shadow-2xs'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        سؤال مقالي
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <label className="text-xs font-bold text-slate-500">درجة السؤال:</label>
                      <input
                        type="number"
                        min={1}
                        max={100}
                        value={currentQ.points}
                        onChange={(e) =>
                          handleUpdateQuestion(
                            currentQ.id,
                            'points',
                            Math.max(1, Number(e.target.value) || 1)
                          )
                        }
                        className="w-16 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-black text-center text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#00594C]"
                      />
                      <span className="text-xs text-slate-400 font-semibold">درجات</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteQuestion(currentQ.id)}
                      className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                      title="حذف هذا السؤال"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    نص السؤال <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder={
                      currentQ.type === 'multiple_choice'
                        ? 'مثال: ما هو حكم النون الساكنة إذا جاء بعدها حرف الياء؟'
                        : 'مثال: اذكر باختصار تعريف المد اللازم الكلمي المثقل مع مثال من سورة الفاتحة.'
                    }
                    value={currentQ.question}
                    onChange={(e) => handleUpdateQuestion(currentQ.id, 'question', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-sm font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00594C]/25 focus:border-[#00594C] transition-all resize-none"
                  />
                </div>

                {currentQ.type === 'multiple_choice' && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                        الخيارات (حدد الإجابة الصحيحة بالنقر على الدائرة)
                      </label>
                      <span className="text-[11px] text-slate-400 font-semibold">
                        {(currentQ.options || []).length} من 4 خيارات
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {(currentQ.options || []).map((opt, optIdx) => {
                        const isCorrect = (currentQ.correctOptionIndex ?? 0) === optIdx;

                        return (
                          <div
                            key={optIdx}
                            className={`flex items-center gap-3 p-2.5 rounded-2xl border transition-all ${
                              isCorrect
                                ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
                                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateQuestion(currentQ.id, 'correctOptionIndex', optIdx)
                              }
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 cursor-pointer transition-colors ${
                                isCorrect
                                  ? 'border-emerald-600 bg-emerald-600 text-white'
                                  : 'border-slate-300 dark:border-slate-600 hover:border-emerald-500'
                              }`}
                              title={isCorrect ? 'الإجابة الصحيحة' : 'اضغط لجعلها الإجابة الصحيحة'}
                            >
                              {isCorrect && <CheckCircle2 size={14} className="text-white" />}
                            </button>

                            <input
                              type="text"
                              value={opt}
                              onChange={(e) =>
                                handleUpdateOption(currentQ.id, optIdx, e.target.value)
                              }
                              placeholder={`الخيار ${optIdx + 1}`}
                              className="flex-1 bg-transparent text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none"
                            />

                            {currentQ.options.length > 2 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveOption(currentQ.id, optIdx)}
                                className="p-1 rounded-lg text-slate-400 hover:text-rose-500 transition-colors"
                              >
                                <Trash2 size={14} />
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {(currentQ.options || []).length < 4 && (
                      <button
                        type="button"
                        onClick={() => handleAddOption(currentQ.id)}
                        className="text-xs font-bold text-[#00594C] dark:text-emerald-400 hover:underline flex items-center gap-1.5 cursor-pointer mt-1"
                      >
                        <Plus size={14} />
                        <span>إضافة خيار إضافي</span>
                      </button>
                    )}
                  </div>
                )}

                {currentQ.type === 'essay' && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-500 space-y-1">
                    <p className="font-bold text-slate-700 dark:text-slate-300">
                      ملاحظة حول السؤال المقالي:
                    </p>
                    <p>
                      سيقوم الطالب بكتابة إجابته في صندوق نصي عند حل الواجب، وسيتم عرض إجابته عليك لمراجعتها وتصحيحها ووضع الدرجة المناسبة في صفحة التسليمات.
                    </p>
                  </div>
                )}
              </div>
            );
          })
      )}
    </div>
  );
}
