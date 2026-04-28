'use client'

import { Barlow, Barlow_Condensed, Bebas_Neue } from 'next/font/google'
import { useSearchParams } from 'next/navigation'

import React, { Suspense, useEffect, useMemo, useState } from 'react'

import HomeFooter from '#components/home/HomeFooter'
import HomeNav from '#components/home/HomeNav'
import { ProductDetailsModal } from '#components/product-details-modal'
import {
  Product,
  allProducts,
  getAllBrands,
  getAllCategories,
} from '#data/products'

import s from './page.module.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-bc',
  display: 'swap',
})

const brands = getAllBrands()
const productCategories = getAllCategories()

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industrial Products Catalog',
  description:
    'Complete range of high speed doors, dock levellers, and loading bay solutions',
  url: 'https://bevconzentry.in/products/',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Product',
        position: 1,
        name: 'High Speed Doors',
        description: 'Rapid opening doors for high-traffic areas',
      },
      {
        '@type': 'Product',
        position: 2,
        name: 'Dock Levellers',
        description: 'Hydraulic and mechanical levelers for loading operations',
      },
      {
        '@type': 'Product',
        position: 3,
        name: 'Fire Rated Shutters',
        description: 'Certified fire protection doors',
      },
    ],
  },
}

type ImageRef = string | { src: string; alt?: string }

function getPrimaryImage(image: ImageRef | ImageRef[] | undefined): string {
  if (!image) return '/home/industrial-hall-1630742_1280.jpg'
  const first = Array.isArray(image) ? image[0] : image
  return typeof first === 'string' ? first : first.src
}

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 7H12M8 3L12 7L8 11" />
  </svg>
)

const SearchIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="7" cy="7" r="5" />
    <path d="M14 14L10.5 10.5" />
  </svg>
)

const CloseIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M1 1l10 10M11 1L1 11" />
  </svg>
)

/* ═══════════════════════════════════════════════════════════ */

const ProductsContent: React.FC = () => {
  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    () => searchParams.get('category') || null,
  )
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) setSelectedCategory(category)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const term = searchTerm.trim().toLowerCase()
      const matchesSearch =
        !term ||
        product.title.toLowerCase().includes(term) ||
        (typeof product.description === 'string' &&
          product.description.toLowerCase().includes(term))
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      return matchesSearch && matchesCategory && matchesBrand
    })
  }, [searchTerm, selectedCategory, selectedBrand])

  const hasFilters = !!(searchTerm || selectedCategory || selectedBrand)

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCategory(null)
    setSelectedBrand(null)
  }

  const fontVars = `${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`

  return (
    <>
      <title>
        Industrial Products — High Speed Doors, Dock Levellers & More | Bevcon
        Zentry
      </title>
      <meta
        name="description"
        content="Browse our complete range of high speed doors, dock levellers, dock shelters, truck restraints, and fire-rated shutters. Premium industrial doors and loading bay equipment from top manufacturers like Nergeco and SKB."
      />
      <meta
        name="keywords"
        content="high speed doors, dock levellers, dock shelters, truck restraints, fire rated shutters, industrial doors, loading bay equipment, Nergeco doors, SKB doors, warehouse equipment"
      />
      <link rel="canonical" href="https://bevconzentry.in/products/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className={`${s.page} ${dark ? '' : s.light} ${fontVars}`}>
        <HomeNav
          scrolled={scrolled}
          dark={dark}
          onToggleTheme={() => setDark((d) => !d)}
        />

        {/* ══════════ PAGE HEADER ═════════════════════════════ */}
        <section className={s.hero}>
          <div className={s.heroInner}>
            <span className={`${s.heroEyebrow} ${s.animUp} ${s.animUp1}`}>
              Precision Equipment Catalog
            </span>
            <h1 className={`${s.heroTitle} ${s.animUp} ${s.animUp2}`}>
              Our <span className={s.heroAccent}>Products</span>
            </h1>
            <p className={`${s.heroDesc} ${s.animUp} ${s.animUp3}`}>
              Discover our complete range of industrial entrance and loading bay
              solutions — engineered for performance, safety, and longevity.
            </p>
          </div>
        </section>

        {/* ══════════ FILTER BAR ══════════════════════════════ */}
        <div className={s.filterBar}>
          <div className={s.filterInner}>
            {/* Search */}
            <div className={s.searchWrap}>
              <span className={s.searchIcon}>
                <SearchIcon />
              </span>
              <input
                type="text"
                className={s.searchInput}
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search products"
              />
              {searchTerm && (
                <button
                  className={s.searchClear}
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  <CloseIcon />
                </button>
              )}
            </div>

            {/* Divider */}
            <div className={s.filterDivider} />

            {/* Category pills */}
            <div className={s.filterGroup}>
              <span className={s.filterLabel}>Category</span>
              <div className={s.pillRow}>
                <button
                  type="button"
                  className={`${s.pill} ${selectedCategory === null ? s.pillActive : ''}`}
                  onClick={() => {
                    setSelectedCategory(null)
                    window.scrollTo(0, 0)
                  }}
                >
                  All
                </button>
                {productCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`${s.pill} ${selectedCategory === cat ? s.pillActive : ''}`}
                    onClick={() => {
                      setSelectedCategory(selectedCategory === cat ? null : cat)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className={s.filterDivider} />

            {/* Brand pills */}
            <div className={s.filterGroup}>
              <span className={s.filterLabel}>Brand</span>
              <div className={s.pillRow}>
                <button
                  type="button"
                  className={`${s.pill} ${selectedBrand === null ? s.pillActive : ''}`}
                  onClick={() => {
                    setSelectedBrand(null)
                    window.scrollTo(0, 0)
                  }}
                >
                  All
                </button>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    className={`${s.pill} ${selectedBrand === brand ? s.pillActive : ''}`}
                    onClick={() => {
                      setSelectedBrand(selectedBrand === brand ? null : brand)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results bar */}
          <div className={s.resultsBar}>
            <span className={s.resultsCount}>
              Showing <strong>{filteredProducts.length}</strong> of{' '}
              {allProducts.length} products
            </span>
            {hasFilters && (
              <button
                type="button"
                className={s.clearBtn}
                onClick={handleClearFilters}
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* ══════════ PRODUCT GRID ════════════════════════════ */}
        <section className={s.gridSection}>
          {filteredProducts.length === 0 ? (
            <div className={s.emptyState}>
              <p className={s.emptyText}>No products match your filters.</p>
              <button
                type="button"
                className={s.btnPrimary}
                onClick={handleClearFilters}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className={s.productsGrid}>
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className={s.productCard}
                  onClick={() => {
                    if (product.brand === 'Nergeco') {
                      setSelectedProduct(product)
                      setIsModalOpen(true)
                    }
                  }}
                  style={
                    product.brand !== 'Nergeco'
                      ? { cursor: 'default' }
                      : undefined
                  }
                >
                  {/* Image */}
                  <div className={s.productImgWrap}>
                    <img
                      src={getPrimaryImage(product.image)}
                      alt={product.title}
                      className={s.productImg}
                      loading="lazy"
                    />
                    {product.brand && product.brand !== 'Loading Systems' && (
                      <div className={s.productBrand}>{product.brand}</div>
                    )}
                  </div>

                  {/* Info panel — always visible */}
                  <div className={s.productBody}>
                    <div className={s.productMeta}>
                      <span className={s.productCat}>{product.category}</span>
                      {product.interior != null && (
                        <span className={s.productLocationBadge}>
                          {product.interior ? 'Interior' : 'Exterior'}
                        </span>
                      )}
                    </div>
                    <h3 className={s.productName}>{product.title}</h3>

                    {product.features && product.features.length > 0 && (
                      <ul className={s.productFeatures}>
                        {product.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className={s.productFeature}>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}

                    {product.brand === 'Nergeco' && (
                      <button type="button" className={s.productCta}>
                        View Details <ArrowIcon />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          dark={dark}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProduct(null)
          }}
        />

        <HomeFooter />
      </div>
    </>
  )
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  )
}
