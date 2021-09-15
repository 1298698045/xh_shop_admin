import defaultSettings from '@/settings'

const title = defaultSettings.title || '协和百年文创'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
