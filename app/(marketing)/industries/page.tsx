'use client'

import {
  Box,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

import { ButtonLink } from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { IndustriesCard } from '#components/industries-card'
import { FallInPlace } from '#components/motion/fall-in-place'
import industries from '#data/industries'

export default function IndustriesPage() {
  const industryKeys = Object.keys(industries)
  const heroHeadingColor = useColorModeValue('gray.900', 'white')
  const heroDescriptionColor = useColorModeValue('gray.600', 'gray.300')
  const outlineButtonColorScheme = useColorModeValue('primary', 'gray')

  return (
    <>
      <title>Industries - Bevcon Zentry</title>
      <meta
        name="description"
        content="Discover our specialized industrial doors and loading bay solutions for diverse industries"
      />
      <Box>
        {/* Hero Section */}
        <Box position="relative" overflow="hidden">
          <BackgroundGradient height="100%" zIndex="-1" />
          <Container
            maxW="container.xl"
            pt={{ base: 32, lg: 32 }}
            pb={['10', '20', '20', '20']}
          >
            <VStack spacing={8} textAlign="center">
              <FallInPlace>
                <Box textAlign="center">
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    color="primary.500"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    mb={['2', '4', '4', '4']}
                  >
                    Strategic Industries Landscape
                  </Text>
                  <Heading
                    fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}
                    mb={['2', '4', '4', '4']}
                    bgGradient="linear(to-r, primary.400, primary.600)"
                    bgClip="text"
                  >
                    Industries We Serve
                  </Heading>
                  <Text
                    color="muted"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    maxW="2xl"
                    mx="auto"
                  >
                    Bevcon Zentry's specialized Industrial and Warehousing
                    solutions
                  </Text>
                </Box>
              </FallInPlace>
              <FallInPlace>
                <HStack spacing={4} pt={4}>
                  <ButtonLink href="/products" colorScheme="primary" size="lg">
                    View All Products
                  </ButtonLink>
                  <ButtonLink
                    href="/contact"
                    variant="outline"
                    size="lg"
                    colorScheme={outlineButtonColorScheme}
                  >
                    Contact Us
                  </ButtonLink>
                </HStack>
              </FallInPlace>
            </VStack>
          </Container>
        </Box>

        {/* Industries Grid */}
        <Container maxW="container.xl" py={20}>
          <FallInPlace>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {industryKeys.map((key) => {
                const industry = industries[key]
                return (
                  <IndustriesCard
                    key={key}
                    title={industry.title}
                    description={industry.description}
                    imageSrc={industry.imageSrc}
                    category={industry.category}
                    benefits={industry.benefits}
                    solutions={industry.solutions}
                  />
                )
              })}
            </SimpleGrid>
          </FallInPlace>
        </Container>

        {/* CTA Section */}
        <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20}>
          <Container maxW="container.xl" textAlign="center">
            <VStack spacing={6}>
              <FallInPlace>
                <Heading
                  fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}
                  color={useColorModeValue('gray.800', 'white')}
                >
                  Ready to Transform Your Facility?
                </Heading>
              </FallInPlace>
              <FallInPlace>
                <Text
                  color={useColorModeValue('gray.600', 'gray.300')}
                  maxW="2xl"
                  mx="auto"
                >
                  Contact our experts to discuss how Bevcon Zentry can optimize
                  your industrial operations with our comprehensive range of
                  doors and loading bay solutions.
                </Text>
              </FallInPlace>
              <FallInPlace>
                <HStack spacing={4}>
                  <ButtonLink href="/contact" colorScheme="primary" size={["md", "lg"]}>
                    Get Custom Quote
                    <FiArrowRight style={{ marginLeft: '8px' }} />
                  </ButtonLink>
                  <ButtonLink href="/products" variant="outline" size={["md", "lg"]}>
                    View Products
                  </ButtonLink>
                </HStack>
              </FallInPlace>
            </VStack>
          </Container>
        </Box>
      </Box>
    </>
  )
}
