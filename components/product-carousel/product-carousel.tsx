'use client'

import React, { useCallback, useEffect, useState } from 'react'

import s from './ProductCarousel.module.css'

type CarouselImage = string | { src: string; alt?: string }

interface ProductCarouselProps {
  images: CarouselImage[]
  alt: string
  height?: string
}

const resolveImage = (img: CarouselImage, fallbackAlt: string) =>
  typeof img === 'string' ? { src: img, alt: fallbackAlt } : { src: img.src, alt: img.alt ?? fallbackAlt }

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  alt,
  height = '420px',
}) => {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next, images.length])

  if (images.length === 0) return null

  if (images.length === 1) {
    const only = resolveImage(images[0], alt)
    return (
      <div className={s.wrap} style={{ height }}>
        <img src={only.src} alt={only.alt} className={s.img} />
      </div>
    )
  }

  return (
    <div className={s.wrap} style={{ height }}>
      {images.map((img, i) => {
        const { src, alt: imgAlt } = resolveImage(img, `${alt} — ${i + 1}`)
        return (
          <div key={src} className={`${s.slide} ${i === current ? s.slideActive : ''}`}>
            <img src={src} alt={imgAlt} className={s.img} loading="lazy" />
          </div>
        )
      })}

      <button className={`${s.arrow} ${s.arrowPrev}`} onClick={prev} aria-label="Previous image">
        <ChevronLeft />
      </button>
      <button className={`${s.arrow} ${s.arrowNext}`} onClick={next} aria-label="Next image">
        <ChevronRight />
      </button>

      <div className={s.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${s.dot} ${i === current ? s.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
