'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Mobi2Go?: any
    Mobi2Go_est?: number
    jQuery?: any
  }
}

export default function Mobi2GoEmbed() {
  useEffect(() => {
    // Create and inject the Mobi2Go script
    const container = 'Mobi2Go-Storefront'
    const script = document.createElement('script')
    const head = document.getElementsByTagName('head')[0]

    const jq = window.jQuery && +window.jQuery.fn.jquery.replace(/^(\d+).*$/, '$1') === 1 && +window.jQuery.fn.jquery.replace(/^\d+\.(\d+).*$/, '$1') >= 7
    const qs = window.location.search.substring(1)
    const re = '=(.*?)(?:;|$)'
    const c = document.cookie.match('MOBI2GO_SESSIONID' + re)
    const w = window.innerWidth

    script.src = `https://www.mobi2go.com/store/embed/sarpinos.js?${qs}${jq ? '&no_jquery' : ''}${c ? '&s=' + c[1] : ''}&device_width=${w}`

    const loadMobi2Go = () => {
      if (window.Mobi2Go) {
        window.Mobi2Go.load(container, () => {})
      }
    }

    if (script.onload !== undefined) {
      script.onload = loadMobi2Go
    } else {
      // Legacy IE support
      (script as any).onreadystatechange = function() {
        if ((script as any).readyState !== 'loaded' && (script as any).readyState !== 'complete') return
        (script as any).onreadystatechange = null
        loadMobi2Go()
      }
    }

    window.Mobi2Go_est = +(new Date())
    head.appendChild(script)

    // Cleanup
    return () => {
      if (head.contains(script)) {
        head.removeChild(script)
      }
    }
  }, [])

  return (
    <div id="Mobi2Go-Storefront">
      <div className="loading-message">
        <h2>Loading Menu...</h2>
        <p>Please wait while we load our delicious menu for you.</p>
      </div>
    </div>
  )
}
