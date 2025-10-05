'use client'

import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Text,
  VStack,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { FiSearch } from 'react-icons/fi'

import React, { useMemo, useState } from 'react'

import { FallInPlace } from '#components/motion/fall-in-place'
import { ProductCard } from '#components/product-card'
import { ProductDetailsModal } from '#components/product-details-modal'
import {
  Product,
  allProducts,
  getAllBrands,
  getAllCategories,
} from '#data/products'

const brands = getAllBrands()
const productCategories = getAllCategories()

const ProductsPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('best-seller')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sidebarBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && typeof product.description === 'string'
          ? product.description.toLowerCase().includes(searchTerm.toLowerCase())
          : false)
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
      const matchesBrand =
        selectedBrands.length === 0 ||
        (product.brand && selectedBrands.includes(product.brand))

      return matchesSearch && matchesCategory && matchesBrand
    })

    // Sort products
    switch (sortBy) {
      case 'name-az':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'name-za':
        filtered.sort((a, b) => b.title.localeCompare(a.title))
        break
      case 'best-seller':
      default:
        // Keep original order for best-seller
        break
    }

    return filtered
  }, [searchTerm, selectedCategories, selectedBrands, sortBy])

  const animationSeed = useMemo(
    () =>
      [
        searchTerm,
        selectedCategories.join(','),
        selectedBrands.join(','),
        sortBy,
      ].join('|'),
    [searchTerm, selectedCategories, selectedBrands, sortBy],
  )

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCategories([])
    setSelectedBrands([])
    setSortBy('best-seller')
  }

  const handleShowDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <title>Products - Bevcon Zentry</title>
      <meta
        name="description"
        content="Discover our complete range of products for industrial solutions"
      />
      <Box bg={bgColor} minH="100vh">
        {/* Hero Section */}
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container maxW="container.xl" pt={{ base: '6', md: '8' }}>
            <VStack spacing="6" align="center" textAlign="center">
              <Flex
                pb={{ base: '8', md: '10' }}
                pt={{ base: '16', md: '24' }}
                gap="2"
                direction="column"
                align="center"
              >
                <FallInPlace>
                  <Box textAlign="center">
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="primary.500"
                      textTransform="uppercase"
                      mb="4"
                    >
                      Precision Equipment Catalog
                    </Text>
                    <Heading
                      fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
                      mb="6"
                      bgGradient="linear(to-r, primary.400, primary.600)"
                      bgClip="text"
                    >
                      Our Products
                    </Heading>
                    <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" mx="auto">
                      Discover our complete range of products for industrial solutions
                    </Text>
                  </Box>
                </FallInPlace>
              </Flex>
              {/* Results count and sort */}
              <Flex justify="space-between" align="center" w="full">
                {/* <Text id="results-summary" fontWeight="semibold">
                  {filteredProducts.length} Products Found
                </Text>
                <HStack spacing="4">
                  <Text fontSize="sm" color="muted">
                    Sort by:
                  </Text>
                  <Select
                    size="sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    w="auto"
                    bg={useColorModeValue('white', 'gray.800')}
                  >
                    <option value="best-seller">Featured</option>
                    <option value="name-az">Name: A to Z</option>
                    <option value="name-za">Name: Z to A</option>
                  </Select>
                </HStack> */}
              </Flex>
            </VStack>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxW="container.xl" py={{ base: '6', md: '8' }}>
          <Grid
            templateColumns={{ base: '1fr', lg: '300px 1fr' }}
            gap={{ base: '6', md: '8' }}
            alignItems="start"
          >
            {/* Sidebar */}
            <GridItem as="aside" aria-labelledby="filters-heading">
              <FallInPlace>
                <Box
                  bg={sidebarBg}
                  borderRadius="lg"
                  borderWidth="1px"
                  borderColor={borderColor}
                  p={{ base: '5', md: '6' }}
                  position={{ base: 'static', lg: 'sticky' }}
                  top={{ base: 'auto', lg: '24' }}
                  maxH={{ base: 'none', lg: 'calc(100vh - 192px)' }}
                  overflowY={{ base: 'visible', lg: 'auto' }}
                >
                  <VisuallyHidden id="filters-heading">Filters</VisuallyHidden>
                  <VStack spacing="6" align="stretch">
                    {/* Search */}
                    <Box>
                      <Text fontWeight="semibold" mb="3">
                        Search
                      </Text>
                      <InputGroup>
                        <InputLeftElement>
                          <Icon as={FiSearch} color="muted" />
                        </InputLeftElement>
                        <Input
                          placeholder="Search products..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </InputGroup>
                    </Box>

                    <Divider />

                    {/* Categories */}
                    <Box>
                      <Text fontWeight="semibold" mb="3">
                        Product Categories
                      </Text>
                      <CheckboxGroup
                        value={selectedCategories}
                        onChange={(values) =>
                          setSelectedCategories(values as string[])
                        }
                      >
                        <VStack align="start" spacing="2">
                          {productCategories.map((category) => (
                            <Checkbox key={category} value={category}>
                              <HStack justify="space-between" w="full">
                                <Text fontSize="sm">{category}</Text>
                                <Text fontSize="xs" color="muted">
                                  (
                                  {
                                    allProducts.filter(
                                      (p) => p.category === category,
                                    ).length
                                  }
                                  )
                                </Text>
                              </HStack>
                            </Checkbox>
                          ))}
                        </VStack>
                      </CheckboxGroup>
                    </Box>

                    <Divider />

                    {/* Brands */}
                    <Box>
                      <Text fontWeight="semibold" mb="3">
                        Strategic Partners
                      </Text>
                      <CheckboxGroup
                        value={selectedBrands}
                        onChange={(values) =>
                          setSelectedBrands(values as string[])
                        }
                      >
                        <VStack align="start" spacing="2">
                          {brands.map((brand) => (
                            <Checkbox key={brand} value={brand}>
                              <HStack justify="space-between" w="full">
                                <Text fontSize="sm">{brand}</Text>
                                <Text fontSize="xs" color="muted">
                                  (
                                  {
                                    allProducts.filter((p) => p.brand === brand)
                                      .length
                                  }
                                  )
                                </Text>
                              </HStack>
                            </Checkbox>
                          ))}
                        </VStack>
                      </CheckboxGroup>
                    </Box>

                    <Button variant="outline" onClick={handleClearFilters}>
                      Clear Filters
                    </Button>
                  </VStack>
                </Box>
              </FallInPlace>
            </GridItem>

            {/* Scrollable Products Grid */}
            <GridItem
              as="section"
              role="region"
              aria-label="Products list"
              aria-describedby="results-summary"
            >
              <Box
                maxH={{ base: 'none', lg: 'calc(100vh - 192px)' }}
                overflowY={{ base: 'visible', lg: 'auto' }}
                pr={{ base: 0, lg: '1' }}
                overscrollBehavior={{ base: 'auto', lg: 'contain' }}
                sx={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  '::-webkit-scrollbar': {
                    display: 'none',
                  },
                }}
              >
                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing="6">
                  {filteredProducts.map((product, index) => (
                    <FallInPlace
                      key={`${product.id}-${animationSeed}`}
                      initial={{ opacity: 0, translateY: '8px' }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: 'easeInOut',
                        delay: index * 0.04,
                      }}
                    >
                      <ProductCard
                        product={product}
                        showDetails={product.brand === 'Nergeco'}
                        onShowDetails={() => handleShowDetails(product)}
                      />
                    </FallInPlace>
                  ))}
                </SimpleGrid>

                {filteredProducts.length === 0 && (
                  <Box textAlign="center" py="12">
                    <Text fontSize="lg" color="muted" mb="4">
                      No products found matching your filters.
                    </Text>
                    <Button colorScheme="primary" onClick={handleClearFilters}>
                      Clear Filters
                    </Button>
                  </Box>
                )}
              </Box>
            </GridItem>
          </Grid>
        </Container>

        {/* Product Details Modal */}
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Box>
    </>
  )
}

export default ProductsPage
