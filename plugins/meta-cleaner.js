/**
 * 过滤header中多余的meta信息
 */
export default function ({ app: { head } }) {
  let metaInfo = head.meta
  const usesMeta = [
    'viewport',
    'description',
    'format-detection',
    'mobile-web-app-capable',
    'apple-mobile-web-app-title',
  ]
  metaInfo = metaInfo.filter(
    (item) => usesMeta.includes(item.name) || item.charset || item['http-equiv']
  )
  head.meta = metaInfo
}
