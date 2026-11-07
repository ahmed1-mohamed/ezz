import { PERMISSIONS_LIST } from '@/shared/permissions.constant'

export const SYSTEM_PERMISSIONS = Object.entries(PERMISSIONS_LIST).map(([moduleKey, def]) => ({
  module: moduleKey,
  titleAr: def.name.ar,
  titleEn: def.name.en,
  actions: def.actions.map((act) => ({
    key: act.key,
    labelAr: act.label.ar,
    labelEn: act.label.en,
    aliases: [act.key]
  }))
}))
