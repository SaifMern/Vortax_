import { useEffect } from 'react'

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes.identity || {}).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }

  Object.entries(attributes.values || {}).forEach(([key, value]) => {
    if (value) element.setAttribute(key, value)
  })
}

const SEO = ({ title, description, keywords, canonical, structuredData }) => {
  useEffect(() => {
    const siteTitle = title || 'VortaxStudio | Software Development Company'
    const siteDescription = description || 'VortaxStudio builds scalable websites, apps, custom software, SaaS platforms, e-commerce systems, QA, DevOps, automation, and digital marketing solutions.'
    const pageUrl = canonical || window.location.href

    document.title = siteTitle

    upsertMeta('meta[name="description"]', {
      identity: { name: 'description' },
      values: { content: siteDescription },
    })

    upsertMeta('meta[name="keywords"]', {
      identity: { name: 'keywords' },
      values: { content: keywords },
    })

    upsertMeta('meta[name="robots"]', {
      identity: { name: 'robots' },
      values: { content: 'index, follow' },
    })

    upsertMeta('meta[property="og:title"]', {
      identity: { property: 'og:title' },
      values: { content: siteTitle },
    })

    upsertMeta('meta[property="og:description"]', {
      identity: { property: 'og:description' },
      values: { content: siteDescription },
    })

    upsertMeta('meta[property="og:type"]', {
      identity: { property: 'og:type' },
      values: { content: 'website' },
    })

    upsertMeta('meta[property="og:url"]', {
      identity: { property: 'og:url' },
      values: { content: pageUrl },
    })

    upsertMeta('meta[name="twitter:card"]', {
      identity: { name: 'twitter:card' },
      values: { content: 'summary_large_image' },
    })

    upsertMeta('meta[name="twitter:title"]', {
      identity: { name: 'twitter:title' },
      values: { content: siteTitle },
    })

    upsertMeta('meta[name="twitter:description"]', {
      identity: { name: 'twitter:description' },
      values: { content: siteDescription },
    })

    let canonicalLink = document.head.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', pageUrl)

    const oldJsonLd = document.getElementById('page-json-ld')
    if (oldJsonLd) oldJsonLd.remove()

    if (structuredData) {
      const jsonLd = document.createElement('script')
      jsonLd.id = 'page-json-ld'
      jsonLd.type = 'application/ld+json'
      jsonLd.textContent = JSON.stringify(structuredData)
      document.head.appendChild(jsonLd)
    }
  }, [title, description, keywords, canonical, structuredData])

  return null
}

export default SEO
