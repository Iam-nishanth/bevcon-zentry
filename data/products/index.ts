import { nergecoData } from './nergeco'
import { skbData } from './skb'
import { loadingSystemsData } from './loading-systems'

export * from './nergeco'
// export * from './bluegiant'
export * from './skb'
export * from './loading-systems'

// Combined product data from all brands
export const allBrands = [nergecoData, skbData]

// All products combined
export const allProducts = [
  ...nergecoData.products,
  // ...blueGiantData.products,
  ...skbData.products,
  ...loadingSystemsData.products
]

// Get products by brand
export const getProductsByBrand = (brandName: string) => {
  const brand = allBrands.find(b => b.brand.toLowerCase() === brandName.toLowerCase())
  return brand?.products || []
}

// Get products by category
export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  )
}

// Get all unique categories
export const getAllCategories = () => {
  const categories = new Set(allProducts.map(product => product.category))
  return Array.from(categories)
}

// Get all brands
export const getAllBrands = () => {
  return allBrands.map(brand => brand.brand)
}

// Search products
export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase()
  return allProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm) ||
    (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}
