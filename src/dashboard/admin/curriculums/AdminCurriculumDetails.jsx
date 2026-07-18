import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { ArrowRight, ArrowLeft, Plus, ChevronDown, ChevronUp, Pencil, Trash2, File as FileIcon } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import BasicModal from './components/BasicModal'
import FileModal from './components/FileModal'

export default function AdminCurriculumDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isRtl = i18n.language.startsWith('ar')
  const queryClient = useQueryClient()

  const [expandedLevels, setExpandedLevels] = useState({})
  const [expandedUnits, setExpandedUnits] = useState({})

  // Modals state
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: null, parentId: null, editingItem: null })
  const [fileModalConfig, setFileModalConfig] = useState({ isOpen: false, levelId: null, unitId: null })

  // Fetch Curriculum Details
  const { data: responseData, isLoading } = useQuery({
    queryKey: ['admin-curriculum-details', id],
    queryFn: () => adminCurriculaApi.fetchCurriculumByIdRaw(id),
  })

  const curriculum = responseData?.data || responseData

  // Debug: log what the API returns so we can see the level ID field name
  if (curriculum) {
    console.log('=== CURRICULUM DEBUG ===', JSON.stringify(curriculum, null, 2))
    console.log('First level object:', curriculum.levels?.[0])
  }

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['admin-curriculum-details', id] })

  // Mutations
  const actionMutation = useMutation({
    mutationFn: async ({ action, payload, ids }) => {
      switch (action) {
        case 'addLevel': return adminCurriculaApi.addLevel(id, payload);
        case 'updateLevel': return adminCurriculaApi.updateLevel(id, ids.levelId, payload);
        case 'deleteLevel': return adminCurriculaApi.deleteLevel(id, ids.levelId);
        case 'addUnit': return adminCurriculaApi.addUnit(id, ids.levelId, payload);
        case 'updateUnit': return adminCurriculaApi.updateUnit(id, ids.levelId, ids.unitId, payload);
        case 'deleteUnit': return adminCurriculaApi.deleteUnit(id, ids.levelId, ids.unitId);
        case 'addFile': return adminCurriculaApi.addFile(id, ids.levelId, ids.unitId, payload);
        case 'deleteFile': return adminCurriculaApi.deleteFile(id, ids.levelId, ids.unitId, ids.fileId);
        default: throw new Error('Unknown action');
      }
    },
    onSuccess: () => {
      invalidate();
      closeModal();
      toast.success(isRtl ? 'تمت العملية بنجاح' : 'Operation successful');
    },
    onError: (err) => {
      console.error(err);
      toast.error(isRtl ? 'حدث خطأ أثناء العملية' : 'Operation failed');
    }
  })

  const toggleLevel = (levelId) => setExpandedLevels(prev => ({ ...prev, [levelId]: !prev[levelId] }))
  const toggleUnit = (unitId) => setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }))

  const closeModal = () => {
    setModalConfig({ isOpen: false, type: null, parentId: null, editingItem: null })
    setFileModalConfig({ isOpen: false, levelId: null, unitId: null })
  }

  const handleBasicSubmit = (payload) => {
    const { type, parentId, editingItem } = modalConfig
    if (type === 'level') {
      if (editingItem) actionMutation.mutate({ action: 'updateLevel', ids: { levelId: editingItem._id || editingItem.id }, payload })
      else actionMutation.mutate({ action: 'addLevel', payload })
    } else if (type === 'unit') {
      if (!parentId) {
        toast.error('خطأ: معرّف المستوى مفقود. تواصل مع المطور.');
        alert('Debug Level ID is missing. Level Object: ' + JSON.stringify(editingItem || 'No editing item'));
        return;
      }
      if (editingItem) actionMutation.mutate({ action: 'updateUnit', ids: { levelId: parentId, unitId: editingItem._id || editingItem.id }, payload })
      else actionMutation.mutate({ action: 'addUnit', ids: { levelId: parentId }, payload })
    }
  }

  const handleFileSubmit = (formData) => {
    actionMutation.mutate({ action: 'addFile', ids: { levelId: fileModalConfig.levelId, unitId: fileModalConfig.unitId }, payload: formData })
  }

  const handleDelete = async (type, item, ids = {}) => {
    const itemName = typeof item.name === 'object' ? (isRtl ? item.name.ar : item.name.en) : item.name;
    const isConfirmed = await showDeleteConfirm(isRtl, itemName);
    if (!isConfirmed) return;

    if (type === 'level') actionMutation.mutate({ action: 'deleteLevel', ids: { levelId: item._id || item.id } })
    else if (type === 'unit') actionMutation.mutate({ action: 'deleteUnit', ids: { levelId: ids.levelId, unitId: item._id || item.id } })
    else if (type === 'file') actionMutation.mutate({ action: 'deleteFile', ids: { levelId: ids.levelId, unitId: ids.unitId, fileId: item._id || item.id } })
  }

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (!curriculum) {
    return (
      <div className="p-8 text-center text-slate-500">
        {isRtl ? 'المنهج غير موجود' : 'Curriculum not found'}
      </div>
    )
  }

  const curriculumName = typeof curriculum.name === 'object' ? (isRtl ? curriculum.name?.ar : curriculum.name?.en) || curriculum.name?.ar : curriculum.name;
  const levels = curriculum.levels || [];

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-6 animate-fadeIn" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Full Width Curriculum Info Card */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 p-6 md:p-8 shadow-sm relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0f7a6c]/5 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0f7a6c]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          
          {/* Right Side (Image + Back Button) */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <button
              onClick={() => navigate('/dashboard/admin/curriculums')}
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#0f7a6c] transition-colors shadow-sm mb-2 md:self-start"
            >
              {isRtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
            </button>
            {curriculum.image && curriculum.image.trim() !== '' ? (
              <img src={curriculum.image} alt={curriculumName} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-md border-4 border-white dark:border-slate-800" />
            ) : (
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-[#0f7a6c]/10 text-[#0f7a6c] flex items-center justify-center text-4xl font-bold border-4 border-white dark:border-slate-800 shadow-sm">
                {curriculumName?.charAt(0)}
              </div>
            )}
          </div>

          {/* Details Content */}
          <div className="flex-1 space-y-6 w-full">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-white mb-3 leading-tight">
                {isRtl ? 'عن منهج ' : 'About '}
                <span className="text-[#0f7a6c]">{curriculumName}</span>
              </h1>
              
              {(() => {
                const desc = typeof curriculum.description === 'object' ? (isRtl ? curriculum.description?.ar : curriculum.description?.en) || curriculum.description?.ar : curriculum.description;
                if (!desc) return null;
                return (
                  <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {desc}
                  </p>
                );
              })()}
            </div>

            {/* Features & Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              
              {/* Features */}
              {(() => {
                const features = typeof curriculum.features === 'object' && !Array.isArray(curriculum.features) 
                  ? (isRtl ? curriculum.features.ar : curriculum.features.en) || curriculum.features.ar || [] 
                  : (curriculum.features || []);
                  
                if (!features || features.length === 0) return null;
                return (
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/50">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#0f7a6c]"></div>
                      {isRtl ? 'مميزات المنهج' : 'Curriculum Features'}
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <span className="text-[#0f7a6c] shrink-0 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}

              {/* Benefits */}
              {(() => {
                const benefits = typeof curriculum.benefitsAfterGraduation === 'object' && !Array.isArray(curriculum.benefitsAfterGraduation)
                  ? (isRtl ? curriculum.benefitsAfterGraduation.ar : curriculum.benefitsAfterGraduation.en) || curriculum.benefitsAfterGraduation.ar || []
                  : (curriculum.benefitsAfterGraduation || []);
                  
                if (!benefits || benefits.length === 0) return null;
                return (
                  <div className="bg-emerald-50/50 dark:bg-emerald-500/5 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-500/10">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      {isRtl ? 'شهادات واعتمادات' : 'Certifications & Benefits'}
                    </h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                          <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                            <span className="text-xs">🏆</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
              
            </div>
          </div>
        </div>
      </div>

      {/* Levels List */}
      <div className="space-y-4">
        {levels.map((level, levelIndex) => {
          const levelId = typeof level === 'object' ? (level._id || level.id || `temp-${levelIndex}`) : level;
          const levelName = typeof level === 'object'
            ? (typeof level.name === 'object' ? (isRtl ? level.name?.ar : level.name?.en) || level.name?.ar : level.name)
            : `مستوى ${levelIndex + 1}`;
          const isExpanded = expandedLevels[levelId];
          const units = typeof level === 'object' ? (level.units || []) : [];

          return (
            <div key={levelId} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm overflow-hidden transition-all">
              {/* Level Header */}
              <div
                className="p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
                onClick={() => toggleLevel(levelId)}
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-10 h-10 rounded-full bg-[#0f7a6c] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md shadow-[#0f7a6c]/20">
                    {levelIndex + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      {levelName}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{isRtl ? `${units.length} وحدات دراسية` : `${units.length} study units`}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 ms-auto" onClick={e => e.stopPropagation()}>
                  {/* Actions */}
                  <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-1">
                    <button onClick={() => setModalConfig({ isOpen: true, type: 'level', editingItem: level })} className="p-2 text-slate-400 hover:text-blue-500 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => handleDelete('level', level)} className="p-2 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </div>

              {/* Units Area */}
              {isExpanded && (
                <div className="border-t border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-900/30 p-4 sm:p-6 space-y-4">

                  {units.map((unit, unitIndex) => {
                    const unitId = typeof unit === 'object' ? (unit._id || unit.id || `temp-${unitIndex}`) : unit;
                    const unitName = typeof unit === 'object'
                      ? (typeof unit.name === 'object' ? (isRtl ? unit.name?.ar : unit.name?.en) || unit.name?.ar : unit.name)
                      : `وحدة ${unitIndex + 1}`;
                    const isUnitExpanded = expandedUnits[unitId];
                    const files = typeof unit === 'object' ? (unit.files || []) : [];

                    return (
                      <div key={unitId} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                        {/* Unit Header */}
                        <div
                          className="p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
                          onClick={() => toggleUnit(unitId)}
                        >
                          <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                              {unitIndex + 1}
                            </div>
                            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200">{unitName}</h4>
                          </div>

                          <div className="flex items-center gap-2 ms-auto" onClick={e => e.stopPropagation()}>
                            <button onClick={() => setModalConfig({ isOpen: true, type: 'unit', parentId: levelId, editingItem: unit })} className="p-1.5 text-slate-400 hover:text-blue-500 rounded-lg transition-colors">
                              <Pencil size={14} />
                            </button>
                            <button onClick={() => handleDelete('unit', unit, { levelId })} className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors">
                              <Trash2 size={14} />
                            </button>
                            <div className="w-6 h-6 flex items-center justify-center text-slate-400 ml-2">
                              {isUnitExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                          </div>
                        </div>

                        {/* Files Area */}
                        {isUnitExpanded && (
                          <div className="border-t border-slate-50 dark:border-slate-800 p-4 space-y-3 bg-slate-50/50 dark:bg-slate-900/50">
                            {files.length > 0 ? (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {files.map(file => {
                                  const fileName = typeof file.name === 'object' ? (isRtl ? file.name?.ar : file.name?.en) || file.name?.ar : file.name;
                                  return (
                                    <div key={file._id || file.id} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 flex items-center justify-between gap-3 group shadow-sm">
                                      <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                                          <FileIcon size={20} />
                                        </div>
                                        <div className="overflow-hidden">
                                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">{fileName}</p>
                                        </div>
                                      </div>
                                      <button
                                        onClick={() => handleDelete('file', file, { levelId, unitId })}
                                        className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all shrink-0"
                                      >
                                        <Trash2 size={16} />
                                      </button>
                                    </div>
                                  )
                                })}
                              </div>
                            ) : (
                              <div className="text-center py-4 text-xs text-slate-400">
                                {isRtl ? 'لا يوجد مصادر في هذه الوحدة' : 'No resources in this unit'}
                              </div>
                            )}

                            {/* Add File Button */}
                            <button
                              onClick={() => setFileModalConfig({ isOpen: true, levelId, unitId })}
                              className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-[#0f7a6c] hover:border-[#0f7a6c] hover:bg-[#0f7a6c]/5 transition-all text-xs font-bold flex items-center justify-center gap-2"
                            >
                              <Plus size={14} />
                              {isRtl ? 'إضافة مصادر ومحتوى للوحدة' : 'Add resources and content to unit'}
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })}

                  {/* Add Unit Button */}
                  <button
                    onClick={() => setModalConfig({ isOpen: true, type: 'unit', parentId: levelId })}
                    className="w-full py-3.5 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-slate-400 hover:text-[#0f7a6c] hover:border-[#0f7a6c] hover:bg-[#0f7a6c]/5 transition-all text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <Plus size={18} />
                    {isRtl ? 'إضافة وحدة جديدة' : 'Add new unit'}
                  </button>

                </div>
              )}
            </div>
          )
        })}

        {/* Add Level Button */}
        <button
          onClick={() => setModalConfig({ isOpen: true, type: 'level' })}
          className="w-full mt-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl text-slate-500 hover:text-[#0f7a6c] hover:border-[#0f7a6c] hover:bg-[#0f7a6c]/5 transition-all font-bold flex items-center justify-center gap-2 shadow-sm"
        >
          <Plus size={20} />
          {isRtl ? `إضافة مستوى جديد لـ ${curriculumName}` : `Add new level to ${curriculumName}`}
        </button>
      </div>

      {/* Modals */}
      <BasicModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        onSubmit={handleBasicSubmit}
        isSaving={actionMutation.isPending}
        editingItem={modalConfig.editingItem}
        typeName={modalConfig.type === 'level' ? (isRtl ? 'مستوى' : 'Level') : (isRtl ? 'وحدة' : 'Unit')}
        title={modalConfig.editingItem
          ? (isRtl ? 'تعديل البيانات' : 'Edit Details')
          : (isRtl ? 'إضافة جديد' : 'Add New')}
      />

      <FileModal
        isOpen={fileModalConfig.isOpen}
        onClose={closeModal}
        onSubmit={handleFileSubmit}
        isSaving={actionMutation.isPending}
      />
    </div>
  )
}
