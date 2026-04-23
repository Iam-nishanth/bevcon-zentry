'use client'

import React, { useEffect } from 'react'

import { ProductCarousel } from '#components/product-carousel'
import { Product } from '#data/products'

import s from './ProductModal.module.css'

interface ProductDetailsModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  dark?: boolean
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M2 2l12 12M14 2L2 14" />
  </svg>
)

function formatSpecKey(key: string): string {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  isOpen,
  onClose,
  dark = true,
}) => {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  const images = Array.isArray(product.image)
    ? product.image.filter(Boolean)
    : product.image
    ? [product.image]
    : []

  const specs = Object.entries(product.specifications).filter(([, v]) => v)
  const isDescHtml = typeof product.description === 'string' && product.description.includes('<')

  return (
    <div className={s.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`${s.modal} ${dark ? '' : s.light}`} role="dialog" aria-modal="true" aria-label={product.title}>

        {/* Header */}
        <div className={s.header}>
          <div className={s.headerInfo}>
            <div className={s.headerBadges}>
              {product.category && <span className={s.badgeCategory}>{product.category}</span>}
              {product.brand    && <span className={s.badgeBrand}>{product.brand}</span>}
              {product.interior != null && (
                <span className={s.badgeLocation}>{product.interior ? 'Interior' : 'Exterior'}</span>
              )}
            </div>
            <h2 className={s.headerTitle}>{product.title}</h2>
            <div className={s.headerMeta}>
              <span>Model: {product.model}</span>
              <em>·</em>
              <span>SKU: {product.sku}</span>
              {product.subcategory && <><em>·</em><span>{product.subcategory}</span></>}
            </div>
          </div>
          <button className={s.closeBtn} onClick={onClose} aria-label="Close modal">
            <CloseIcon />
          </button>
        </div>

        {/* Body */}
        <div className={s.body}>
          <div className={s.grid}>

            {/* Left: carousel + description */}
            <div>
              {images.length > 0 && (
                <div className={s.carouselWrap}>
                  <ProductCarousel images={images} alt={product.title} height="340px" />
                </div>
              )}

              {product.description && (
                <>
                  <p className={s.sectionTitle}>Description</p>
                  {isDescHtml ? (
                    <div
                      className={s.description}
                      dangerouslySetInnerHTML={{ __html: product.description as string }}
                    />
                  ) : (
                    <p className={s.description}>{product.description as string}</p>
                  )}
                </>
              )}
            </div>

            {/* Right: specs + features + applications + tags */}
            <div className={s.rightCol}>

              {specs.length > 0 && (
                <div>
                  <p className={s.sectionTitle}>Technical Specifications</p>
                  <table className={s.specsTable}>
                    <tbody>
                      {specs.map(([key, val]) => (
                        <tr key={key}>
                          <td className={s.specKey}>{formatSpecKey(key)}</td>
                          <td className={s.specVal}>{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {product.features && product.features.length > 0 && (
                <div>
                  <p className={s.sectionTitle}>Key Features</p>
                  <ul className={s.featureList}>
                    {product.features.map((feat, i) => (
                      <li key={i} className={s.featureItem}>
                        <span className={s.featureDot} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.applications && product.applications.length > 0 && (
                <div>
                  <p className={s.sectionTitle}>Applications</p>
                  <ul className={s.appList}>
                    {product.applications.map((app, i) => (
                      <li key={i} className={s.appItem}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.tags && product.tags.length > 0 && (
                <div>
                  <p className={s.sectionTitle}>Tags</p>
                  <div className={s.tagRow}>
                    {product.tags.map((tag, i) => (
                      <span key={i} className={s.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
