import { useState } from 'react'

// Optimised, lazy, responsive image with graceful fallback.
export default function Img({ src, alt = '', className = '', eager = false, sizes = '100vw', style, label }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const isU = src && src.includes('unsplash.com')
  const widths = [480, 800, 1200, 1800, 2400]
  const srcSet = isU ? widths.map((w) => `${src}?auto=format&fit=crop&q=75&w=${w} ${w}w`).join(', ') : undefined
  return (
    <div className={`img-wrap ${className}`} style={style}>
      {!failed ? (
        <img
          src={isU ? `${src}?auto=format&fit=crop&q=75&w=1200` : src}
          srcSet={srcSet} sizes={sizes} alt={alt}
          loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)} onError={() => setFailed(true)}
          className={loaded ? 'is-loaded' : ''}
        />
      ) : (
        <div className="img-fallback"><span>{label || alt}</span></div>
      )}
    </div>
  )
}
