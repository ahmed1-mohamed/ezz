import {
  FileText,
  Image as ImageIcon,
  Video as VideoIcon,
  Archive as ZipIcon,
  Music as AudioIcon,
  File as FileIcon,
  Link as LinkIcon
} from 'lucide-react'

export const buildFullFileUrl = (url) => {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:')) return url
  const baseUrl = 'https://manaret-ezz.dramcode.top/'
  return `${baseUrl.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
}

export const getFileMeta = (file, isRtl = false) => {
  const rawType = (typeof file === 'object' && file?.type ? String(file.type).toLowerCase().trim() : '')
  const fileUrl = typeof file === 'string'
    ? file
    : (file?.url || file?.file || file?.link || file?.path || file?.src || file?.fileUrl || '')

  const cleanPath = (fileUrl.split('?')[0].split('#')[0] || '').trim()
  const ext = (cleanPath.split('.').pop() || '').toLowerCase()

  const isExplicitLink = rawType === 'link' || rawType === 'url'
  const isExplicitFile = rawType === 'file' || rawType === 'document' || rawType === 'pdf' || rawType === 'image' || rawType === 'video' || rawType === 'audio'

  const isPdf = ext === 'pdf'
  const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico', 'avif'].includes(ext)
  const isVideo = ['mp4', 'mkv', 'avi', 'mov', 'webm', 'wmv', 'flv', 'm4v'].includes(ext)
  const isArchive = ['zip', 'rar', '7z', 'tar', 'gz', 'bz2'].includes(ext)
  const isAudio = ['mp3', 'wav', 'ogg', 'm4a', 'aac', 'flac'].includes(ext)
  const isDoc = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'rtf', 'csv'].includes(ext)
  const hasKnownFileExt = isPdf || isImage || isVideo || isArchive || isAudio || isDoc

  let isLink = false
  if (isExplicitLink) {
    isLink = true
  } else if (isExplicitFile || hasKnownFileExt) {
    isLink = false
  } else if (Boolean(file?.link) && !file?.file && !file?.url) {
    isLink = true
  } else if (typeof file === 'string' && file.startsWith('http') && !file.includes('manaret-ezz.dramcode.top') && !hasKnownFileExt) {
    isLink = true
  }

  if (isLink) {
    const fullUrl = fileUrl ? (fileUrl.startsWith('http://') || fileUrl.startsWith('https://') ? fileUrl : `https://${fileUrl}`) : ''
    return {
      icon: LinkIcon,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/30',
      type: isRtl ? 'رابط خارجي' : 'Link',
      isLink: true,
      fullUrl
    }
  }

  const fullUrl = buildFullFileUrl(fileUrl)

  if (isPdf) {
    return { icon: FileText, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/30', type: isRtl ? 'ملف PDF' : 'PDF', isLink: false, isImage: false, fullUrl }
  }
  if (isImage) {
    return { icon: ImageIcon, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30', type: isRtl ? 'صورة' : 'Image', isLink: false, isImage: true, fullUrl }
  }
  if (isVideo) {
    return { icon: VideoIcon, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/30', type: isRtl ? 'فيديو' : 'Video', isLink: false, isImage: false, fullUrl }
  }
  if (isArchive) {
    return { icon: ZipIcon, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30', type: isRtl ? 'ملف مضغوط' : 'Archive', isLink: false, isImage: false, fullUrl }
  }
  if (isAudio) {
    return { icon: AudioIcon, color: 'text-pink-500 bg-pink-50 dark:bg-pink-950/30', type: isRtl ? 'ملف صوتي' : 'Audio', isLink: false, fullUrl }
  }
  if (isDoc) {
    return { icon: FileText, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30', type: isRtl ? 'مستند' : 'Document', isLink: false, fullUrl }
  }

  return { icon: FileIcon, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30', type: isRtl ? 'ملف' : 'File', isLink: false, fullUrl }
}

export const getCleanId = (item) => {
  if (!item) return '';
  if (typeof item === 'string') return item.trim();
  if (typeof item === 'object') {
    const keys = ['_id', 'id', 'unitId', 'unit_id', 'levelId', 'level_id', 'fileId', 'file_id', '$oid', 'uuid', 'key'];
    for (const k of keys) {
      if (item[k]) {
        if (typeof item[k] === 'string') return item[k].trim();
        if (typeof item[k] === 'object' && (item[k]._id || item[k].id || item[k].$oid)) {
          return (item[k]._id || item[k].id || item[k].$oid).toString().trim();
        }
      }
    }
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
    for (const val of Object.values(item)) {
      if (typeof val === 'string' && /^[0-9a-fA-F]{24}$/.test(val.trim())) {
        return val.trim();
      }
    }
  }
  return '';
}
