import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  Plus,
  ChevronDown,
  Pencil,
  Trash2,
  FileText,
  Image as ImageIcon,
  Video as VideoIcon,
  Archive as ZipIcon,
  Music as AudioIcon,
  File as FileIcon,
  Download,
  Eye
} from 'lucide-react'
import { toast } from 'react-hot-toast'

import axios from 'axios'
import { adminCurriculaApi } from '@/shared/services/api/adminCurriculaApi'
import Spinner from '@/shared/components/Spinner'
import { showDeleteConfirm } from '@/shared/utils/sweetAlert'
import BasicModal from './components/BasicModal'
import FileModal from './components/FileModal'

const buildFullFileUrl = (url) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:')) return url
  const baseUrl = 'https://manaret-ezz.dramcode.top/'
  return `${baseUrl.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
}

const getFileMeta = (file) => {
  const fileUrl = typeof file === 'string' ? file : (file?.url || file?.file || file?.link || file?.path || file?.src || file?.fileUrl || '')
  const fullUrl = buildFullFileUrl(fileUrl)
  const ext = (fileUrl.split('.').pop() || '').toLowerCase()

  if (['pdf'].includes(ext)) {
    return { icon: FileText, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/30', type: 'PDF', fullUrl }
  }
  if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) {
    return { icon: ImageIcon, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30', type: 'Image', fullUrl }
  }
  if (['mp4', 'mkv', 'avi', 'mov', 'webm'].includes(ext)) {
    return { icon: VideoIcon, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/30', type: 'Video', fullUrl }
  }
  if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) {
    return { icon: ZipIcon, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30', type: 'Archive', fullUrl }
  }
  if (['mp3', 'wav', 'ogg'].includes(ext)) {
    return { icon: AudioIcon, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/30', type: 'Audio', fullUrl }
  }
  return { icon: FileIcon, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30', type: 'Document', fullUrl }
}

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
      const errMsg = err.response?.data?.message || err.message;
      toast.error(errMsg || (isRtl ? 'حدث خطأ أثناء العملية' : 'Operation failed'));
    }
  })

  const toggleLevel = (levelId) => setExpandedLevels(prev => ({ ...prev, [levelId]: !prev[levelId] }))
  const toggleUnit = (unitId) => setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }))

  const closeModal = () => {
    setModalConfig({ isOpen: false, type: null, parentId: null, editingItem: null })
    setFileModalConfig({ isOpen: false, levelId: null, unitId: null })
  }

  const getCleanId = (item) => {
    if (!item) return '';
    if (typeof item === 'string') return item.trim();
    if (typeof item === 'object') {
      // 1. Direct standard keys
      const keys = ['_id', 'id', 'unitId', 'unit_id', 'levelId', 'level_id', 'fileId', 'file_id', '$oid', 'uuid', 'key'];
      for (const k of keys) {
        if (item[k]) {
          if (typeof item[k] === 'string') return item[k].trim();
          if (typeof item[k] === 'object' && (item[k]._id || item[k].id || item[k].$oid)) {
            return (item[k]._id || item[k].id || item[k].$oid).toString().trim();
          }
        }
      }
      // 2. Nested objects like item.level or item.unit or item.file
      const subObjects = [item.level, item.unit, item.file];
      for (const sub of subObjects) {
        if (sub) {
          if (typeof sub === 'string') return sub.trim();
          if (typeof sub === 'object') {
            const subId = sub._id || sub.id || sub.unitId || sub.levelId || sub.fileId;
            if (subId) return subId.toString().trim();
          }
        }
      }
      // 3. Fallback: Search values for any 24-character hex MongoDB ObjectId string
      for (const val of Object.values(item)) {
        if (typeof val === 'string' && /^[0-9a-fA-F]{24}$/.test(val.trim())) {
          return val.trim();
        }
      }
    }
    return '';
  };

  const handleBasicSubmit = (payload) => {
    const { type, parentId, editingItem } = modalConfig
    if (type === 'level') {
      if (editingItem) actionMutation.mutate({ action: 'updateLevel', ids: { levelId: getCleanId(editingItem) }, payload })
      else actionMutation.mutate({ action: 'addLevel', payload })
    } else if (type === 'unit') {
      if (!parentId) {
        toast.error(isRtl ? 'معرّف المستوى مفقود' : 'Level ID is missing');
        return;
      }
      if (editingItem) actionMutation.mutate({ action: 'updateUnit', ids: { levelId: getCleanId(parentId), unitId: getCleanId(editingItem) }, payload })
      else actionMutation.mutate({ action: 'addUnit', ids: { levelId: getCleanId(parentId) }, payload })
    }
  }

  const handleFileSubmit = (formData) => {
    const lId = getCleanId(fileModalConfig.levelId);
    const uId = getCleanId(fileModalConfig.unitId);

    if (!lId) {
      toast.error(isRtl ? 'معرّف المستوى غير صالح أو مفقود' : 'Invalid level ID');
      return;
    }
    if (!uId) {
      toast.error(isRtl ? 'معرّف الوحدة غير صالح أو مفقود' : 'Invalid unit ID');
      return;
    }

    actionMutation.mutate({ action: 'addFile', ids: { levelId: lId, unitId: uId }, payload: formData });
  }

  const handleDelete = async (type, item, ids = {}) => {
    const itemName = typeof item?.name === 'object' ? (isRtl ? item.name?.ar : item.name?.en) : (typeof item === 'string' ? item : item?.name || '');
    const isConfirmed = await showDeleteConfirm(isRtl, itemName);
    if (!isConfirmed) return;

    const itemId = getCleanId(item);

    if (type === 'level') {
      if (!itemId) {
        toast.error(isRtl ? 'معرّف المستوى غير صالح أو مفقود' : 'Invalid level ID');
        return;
      }
      actionMutation.mutate({ action: 'deleteLevel', ids: { levelId: itemId } });
    } else if (type === 'unit') {
      const parentLId = getCleanId(ids.levelId);
      if (!itemId) {
        toast.error(isRtl ? 'معرّف الوحدة غير صالح أو مفقود' : 'Invalid unit ID');
        return;
      }
      actionMutation.mutate({ action: 'deleteUnit', ids: { levelId: parentLId, unitId: itemId } });
    } else if (type === 'file') {
      const parentLId = getCleanId(ids.levelId);
      const parentUId = getCleanId(ids.unitId);
      actionMutation.mutate({ action: 'deleteFile', ids: { levelId: parentLId, unitId: parentUId, fileId: itemId } });
    }
  }

  const handlePreviewFile = (fullUrl) => {
    if (!fullUrl) {
      toast.error(isRtl ? 'رابط الملف غير متاح' : 'File URL unavailable')
      return
    }
    window.open(fullUrl, '_blank', 'noopener,noreferrer')
  }

  const handleDownloadFile = async (fullUrl, fileName) => {
    if (!fullUrl) {
      toast.error(isRtl ? 'رابط الملف غير متاح' : 'File URL unavailable');
      return;
    }

    const toastId = toast.loading(isRtl ? 'جاري تحميل الملف...' : 'Downloading file...');

    try {
      const response = await axios.get(fullUrl, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: response.headers['content-type'] || 'application/octet-stream' });
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      const fallbackName = fullUrl.split('/').pop() || 'download';
      const cleanFileName = fileName
        ? (fileName.includes('.') ? fileName : `${fileName}.${fallbackName.split('.').pop() || 'file'}`)
        : fallbackName;
      link.download = cleanFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1000);

      toast.success(isRtl ? 'تم تحفيظ الملف على جهازك بنجاح' : 'File saved to your PC successfully', { id: toastId });
    } catch (err) {
      console.warn('Axios blob fetch failed, falling back to direct link download', err);
      toast.dismiss(toastId);
      const a = document.createElement('a');
      a.href = fullUrl;
      a.download = fileName || 'download';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0f7a6c]/5 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0f7a6c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col items-center gap-4 shrink-0">
            <button
              onClick={() => navigate('/dashboard/admin/curriculums')}
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-[#0f7a6c] transition-colors shadow-sm mb-2 md:self-start cursor-pointer"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
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

      {/* Levels Tree */}
      <div className="space-y-4">
        {levels.map((level, levelIndex) => {
          const rawLevelId = getCleanId(level);
          const levelId = rawLevelId || `temp-${levelIndex}`;
          const levelName = typeof level === 'object'
            ? (typeof level.name === 'object' ? (isRtl ? level.name?.ar : level.name?.en) || level.name?.ar : level.name)
            : `مستوى ${levelIndex + 1}`;
          const isExpanded = Boolean(expandedLevels[levelId] || (rawLevelId && expandedLevels[rawLevelId]));
          const units = typeof level === 'object' ? (level.units || []) : [];

          return (
            <div key={levelId} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm overflow-hidden transition-all">
              {/* Level Header (Click toggles expansion) */}
              <div
                className="p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
                onClick={() => toggleLevel(rawLevelId || levelId)}
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

                <div className="flex items-center gap-3 ms-auto">
                  {/* Edit/Delete Actions stop propagation */}
                  <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-1" onClick={e => e.stopPropagation()}>
                    <button
                      onClick={() => setModalConfig({ isOpen: true, type: 'level', editingItem: level })}
                      className="p-2 text-slate-400 hover:text-blue-500 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      title={isRtl ? 'تعديل' : 'Edit'}
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete('level', level)}
                      className="p-2 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      title={isRtl ? 'حذف' : 'Delete'}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Expand Chevron Icon with Rotation Animation */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-[#0f7a6c] transition-colors">
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} />
                  </div>
                </div>
              </div>

              {/* Units Collapsible Area */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="border-t border-slate-50 dark:border-slate-800/50 bg-slate-50/30 dark:bg-slate-900/30 p-4 sm:p-6 space-y-4 overflow-hidden"
                  >
                    {units.map((unit, unitIndex) => {
                      const rawUnitId = getCleanId(unit);
                      const unitId = rawUnitId || `temp-${unitIndex}`;
                      const unitName = typeof unit === 'object'
                        ? (typeof unit.name === 'object' ? (isRtl ? unit.name?.ar : unit.name?.en) || unit.name?.ar : unit.name)
                        : `وحدة ${unitIndex + 1}`;
                      const isUnitExpanded = Boolean(expandedUnits[unitId] || (rawUnitId && expandedUnits[rawUnitId]));
                      const files = typeof unit === 'object' ? (unit.files || []) : [];

                      return (
                        <div key={unitId} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                          {/* Unit Header */}
                          <div
                            className="p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                            onClick={() => toggleUnit(rawUnitId || unitId)}
                          >
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                                {unitIndex + 1}
                              </div>
                              <h4 className="text-sm font-bold text-slate-700 dark:text-slate-200">{unitName}</h4>
                            </div>

                            <div className="flex items-center gap-2 ms-auto">
                              <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
                                <button
                                  onClick={() => setModalConfig({ isOpen: true, type: 'unit', parentId: rawLevelId || levelId, editingItem: unit })}
                                  className="p-1.5 text-slate-400 hover:text-blue-500 rounded-lg transition-colors cursor-pointer"
                                  title={isRtl ? 'تعديل' : 'Edit'}
                                >
                                  <Pencil size={14} />
                                </button>
                                <button
                                  onClick={() => handleDelete('unit', unit, { levelId: rawLevelId || levelId })}
                                  className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors cursor-pointer"
                                  title={isRtl ? 'حذف' : 'Delete'}
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                              <div className="w-6 h-6 flex items-center justify-center text-slate-400 ml-1">
                                <ChevronDown size={16} className={`transition-transform duration-300 ${isUnitExpanded ? 'rotate-180' : 'rotate-0'}`} />
                              </div>
                            </div>
                          </div>

                          {/* Files Collapsible Area */}
                          <AnimatePresence initial={false}>
                            {isUnitExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="border-t border-slate-50 dark:border-slate-800 p-4 space-y-3 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden"
                              >
                                {files.length > 0 ? (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {files.map((file, fileIdx) => {
                                      const fileId = getCleanId(file) || `file-${fileIdx}`;
                                      const fileName = typeof file.name === 'object' ? (isRtl ? file.name?.ar : file.name?.en) || file.name?.ar : file.name;
                                      const meta = getFileMeta(file)
                                      const MetaIcon = meta.icon

                                      return (
                                        <div key={fileId} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 flex items-center justify-between gap-3 group shadow-sm transition-all hover:shadow-md">
                                          <div className="flex items-center gap-3 overflow-hidden">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${meta.color}`}>
                                              <MetaIcon size={20} />
                                            </div>
                                            <div className="overflow-hidden">
                                              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">{fileName}</p>
                                              <span className="text-[10px] font-semibold text-slate-400">{meta.type}</span>
                                            </div>
                                          </div>

                                          <div className="flex items-center gap-1 shrink-0">
                                            {/* Preview / Open in New Tab */}
                                            <button
                                              onClick={() => handlePreviewFile(meta.fullUrl)}
                                              className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-lg transition-all cursor-pointer"
                                              title={isRtl ? 'معاينة / فتح في تبويب جديد' : 'Preview / Open in new tab'}
                                            >
                                              <Eye size={15} />
                                            </button>

                                            {/* Download */}
                                            <button
                                              onClick={() => handleDownloadFile(meta.fullUrl, fileName)}
                                              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg transition-all cursor-pointer"
                                              title={isRtl ? 'تحميل الملف' : 'Download File'}
                                            >
                                              <Download size={15} />
                                            </button>

                                            {/* Delete */}
                                            <button
                                              onClick={() => handleDelete('file', file, { levelId: rawLevelId || levelId, unitId: rawUnitId || unitId })}
                                              className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-all cursor-pointer"
                                              title={isRtl ? 'حذف' : 'Delete'}
                                            >
                                              <Trash2 size={15} />
                                            </button>
                                          </div>
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
                                  onClick={() => setFileModalConfig({ isOpen: true, levelId: level, unitId: unit })}
                                  className="w-full py-3 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-[#0f7a6c] hover:border-[#0f7a6c] hover:bg-[#0f7a6c]/5 transition-all text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                                >
                                  <Plus size={14} />
                                  {isRtl ? 'إضافة مصادر ومحتوى للوحدة' : 'Add resources and content to unit'}
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}

                    {/* Add Unit Button */}
                    <button
                      onClick={() => setModalConfig({ isOpen: true, type: 'unit', parentId: rawLevelId || levelId })}
                      className="w-full py-3.5 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-slate-400 hover:text-[#0f7a6c] hover:border-[#0f7a6c] hover:bg-[#0f7a6c]/5 transition-all text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Plus size={18} />
                      {isRtl ? 'إضافة وحدة جديدة' : 'Add new unit'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* Add Level Button */}
        <button
          onClick={() => setModalConfig({ isOpen: true, type: 'level' })}
          className="w-full mt-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl text-slate-500 hover:text-[#0f7a6c] hover:border-[#0f7a6c] hover:bg-[#0f7a6c]/5 transition-all font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
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
