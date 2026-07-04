import { PERMISSIONS_LIST } from '@/shared/permissions.constant';

export const SYSTEM_PERMISSIONS = Object.entries(PERMISSIONS_LIST).map(([moduleKey, group]) => ({
  module: moduleKey,
  titleEn: group.name.en,
  titleAr: group.name.ar,
  actions: group.actions.map(action => ({
    key: action.key,
    labelEn: action.label.en,
    labelAr: action.label.ar
  }))
}));
