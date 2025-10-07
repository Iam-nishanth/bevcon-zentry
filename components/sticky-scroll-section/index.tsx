'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { RiArrowDownDoubleFill } from 'react-icons/ri'

import React from 'react'

export interface StickyScrollItem {
  id: number
  title: string
  description: string
  imageSrc: string
}

export interface StickyScrollSectionProps {
  items?: StickyScrollItem[]
}

const defaultItems: StickyScrollItem[] = [
  {
    id: 1,
    title: 'Industry Certifications',
    description:
      'Our products meet the highest industry standards with comprehensive certifications including CE marking, ISO compliance, and fire safety ratings. We ensure full regulatory compliance across all manufacturing, warehousing, and logistics applications to keep your operations safe and legally compliant.',
    imageSrc: '/home/why-choose/certified(1).png',
  },
  {
    id: 2,
    title: 'Expert Installation',
    description:
      'Our certified technicians bring years of specialized experience to every installation project. From initial site assessment to final commissioning, we handle complex industrial door systems with precision, ensuring optimal performance and seamless integration with your existing infrastructure.',
    imageSrc: '/home/why-choose/Expert installation.jpeg',
  },
  {
    id: 3,
    title: 'Comprehensive Maintenance',
    description:
      'Maximize uptime and extend equipment life with our proactive maintenance programs. Our scheduled inspections, preventive care, and rapid emergency response services minimize costly downtime while ensuring your industrial doors and loading bay equipment operate at peak efficiency year-round.',
    imageSrc: '/home/why-choose/maintenance.png',
  },
  {
    id: 4,
    title: 'Dedicated Support',
    description:
      'Our support specialists stay closely aligned with your operations, offering tailored service agreements, proactive performance monitoring, and rapid-response repair teams. We combine on-site expertise with remote diagnostics to resolve issues quickly and keep your critical infrastructure dependable.',
    imageSrc: '/home/why-choose/Comprehensive-support.png',
  },
]

const MotionBox = motion.div
const MotionSpan = motion.span

const StickyScrollSection: React.FC<StickyScrollSectionProps> = ({
  items = defaultItems,
}) => {
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, gray.100)',
    'linear(to-br, gray.900, gray.800)',
  )

  return (
    <>
      {/* Mobile/Tablet Layout */}
      <Box display={{ base: 'block', lg: 'none' }}>
        <Box bgGradient={bgGradient} py={16}>
          {items.map((item, index) => (
            <Box key={item.id} mb={index < items.length - 1 ? 16 : 0}>
              <Container maxW="container.xl">
                <Flex direction="column" gap={8} align="center">
                  {/* Content */}
                  <Box textAlign="center" maxW="lg">
                    <Heading
                      fontSize={{ base: '2xl', md: '3xl' }}
                      fontWeight="extrabold"
                      mb={4}
                      color={useColorModeValue('gray.900', 'white')}
                      lineHeight="shorter"
                    >
                      {item.title}
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color={useColorModeValue('gray.500', 'gray.400')}
                      lineHeight="relaxed"
                    >
                      {item.description}
                    </Text>
                  </Box>

                  {/* Image */}
                  <Box
                    position="relative"
                    w="full"
                    maxW={{ base: '400px', md: '500px' }}
                    h={{ base: '250px', md: '350px' }}
                    borderRadius="2xl"
                    overflow="hidden"
                    shadow="xl"
                    border="1px"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                    />
                  </Box>
                </Flex>
              </Container>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Desktop Sticky Layout */}
      <Box display={{ base: 'none', lg: 'block' }}>
        {/* Desktop Scroll Logic - Only runs when desktop layout is active */}
        {(() => {
          const containerRef = React.useRef<HTMLDivElement | null>(null)
          const [activeIndex, setActiveIndex] = React.useState(0)
          const [scrollDirection, setScrollDirection] = React.useState<'down' | 'up'>('down')
          const [showScrollIndicator, setShowScrollIndicator] = React.useState(false)
          const prevProgressRef = React.useRef(0)

          const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ['start start', 'end end'],
          })

          const sectionIndex = useTransform(
            scrollYProgress,
            [0, 0.8],
            [0, items.length - 1],
          )

          useMotionValueEvent(sectionIndex, 'change', (latest) => {
            const clamped = Math.min(Math.max(latest, 0), items.length - 1)
            setActiveIndex(Math.round(clamped))
          })

          useMotionValueEvent(scrollYProgress, 'change', (latest) => {
            const clamped = Math.min(Math.max(latest, 0), 1)
            const nextDirection = clamped >= prevProgressRef.current ? 'down' : 'up'
            if (nextDirection !== scrollDirection) {
              setScrollDirection(nextDirection)
            }

            const shouldShow = clamped > 0.02 && clamped < 0.98
            if (shouldShow !== showScrollIndicator) {
              setShowScrollIndicator(shouldShow)
            }

            prevProgressRef.current = clamped
          })

          const clampIndex = React.useCallback(
            (value: number) => {
              return Math.min(Math.max(value, 0), items.length - 1)
            },
            [items.length],
          )

          const scrollToProgress = React.useCallback(
            (progress: number) => {
              if (!containerRef.current) return
              const container = containerRef.current
              const rect = container.getBoundingClientRect()
              const containerTop = window.scrollY + rect.top
              const containerHeight = container.offsetHeight
              const viewportHeight = window.innerHeight
              const maxScrollable = Math.max(containerHeight - viewportHeight, 0)
              const clampedProgress = Math.min(Math.max(progress, 0), 1)
              const targetScrollY = containerTop + maxScrollable * clampedProgress

              window.scrollTo({ top: targetScrollY, behavior: 'smooth' })
            },
            [],
          )

          const handleIndicatorClick = React.useCallback(() => {
            if (items.length <= 1) return
            const direction = scrollDirection
            const nextIndex = clampIndex(
              direction === 'down' ? activeIndex + 1 : activeIndex - 1,
            )

            if (nextIndex === activeIndex) {
              const boundaryProgress = direction === 'down' ? 1 : 0
              scrollToProgress(boundaryProgress)
              return
            }

            const progressSpan = items.length > 1 ? 0.8 : 0
            const targetProgress =
              items.length > 1
                ? (nextIndex / (items.length - 1)) * progressSpan
                : 0

            scrollToProgress(targetProgress)
          }, [
            items.length,
            scrollDirection,
            activeIndex,
            clampIndex,
            scrollToProgress,
          ])

          return (
            <Box
              ref={containerRef}
              minH={`${(items.length + 2) * 100}vh`}
              bgGradient={bgGradient}
              position="relative"
            >
              <Box
                position="sticky"
                top={0}
                minH="100vh"
                display="flex"
                alignItems="center"
              >
                <Container maxW="container.xl">
                  <Flex direction="row" minH="100vh" align="center" gap={20}>
                    {/* Left content */}
                    <Box
                      flex={1}
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      minH="100vh"
                      py={10}
                    >
                      {/* Section title */}
                      <Box mb={6}>
                        <Text
                          fontSize="lg"
                          fontWeight="semibold"
                          color="primary.500"
                          mb={3}
                        >
                          Why Choose Bevcon Zentry
                        </Text>
                      </Box>

                      {/* Animated sections */}
                      {items.map((item, index) => (
                        <MotionBox
                          key={item.id}
                          style={{
                            position:
                              activeIndex === index ? 'static' : 'absolute',
                            opacity: activeIndex === index ? 1 : 0,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: activeIndex === index ? 1 : 0,
                            scale: activeIndex === index ? 1 : 0.8,
                            y: activeIndex === index ? 0 : 20,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        >
                          <Box>
                            <Heading
                              fontSize={['lg', '4xl']}
                              fontWeight="extrabold"
                              mb={6}
                              color={useColorModeValue('gray.900', 'white')}
                              lineHeight="shorter"
                            >
                              {item.title}
                            </Heading>
                            <Text
                              fontSize={['lg', 'xl']}
                              color={useColorModeValue('gray.500', 'gray.400')}
                              lineHeight="relaxed"
                              maxW="lg"
                            >
                              {item.description}
                            </Text>
                          </Box>
                        </MotionBox>
                      ))}
                    </Box>

                    {/* Right image */}
                    <Box
                      flex={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      minH="100vh"
                      py={10}
                    >
                      <Box position="relative" w="full" maxW="600px" h="480px">
                        {items.map((item, index) => (
                          <MotionBox
                            key={item.id}
                            style={{
                              position: 'absolute',
                              inset: 0,
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                              opacity: activeIndex === index ? 1 : 0,
                              scale: activeIndex === index ? 1 : 0.9,
                              rotateY: activeIndex === index ? 0 : 10,
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [0.4, 0, 0.2, 1],
                              delay: activeIndex === index ? 0.1 : 0,
                            }}
                          >
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              w="full"
                              h="full"
                              objectFit="cover"
                              borderRadius="2xl"
                              shadow="2xl"
                              border="1px"
                              borderColor={useColorModeValue(
                                'gray.200',
                                'gray.700',
                              )}
                            />
                          </MotionBox>
                        ))}

                        {/* Progress indicator */}
                        <Box
                          position="absolute"
                          bottom={-12}
                          left="50%"
                          transform="translateX(-50%)"
                          display="flex"
                          gap={2}
                        >
                          {items.map((_, index) => (
                            <Box
                              key={index}
                              w={activeIndex === index ? '24px' : '8px'}
                              h="8px"
                              borderRadius="full"
                              bg={
                                activeIndex === index
                                  ? 'primary.500'
                                  : useColorModeValue('gray.300', 'gray.600')
                              }
                              transition="all 0.3s ease"
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                </Container>
                <Box
                  position="absolute"
                  bottom={8}
                  left="50%"
                  transform="translateX(-50%)"
                  zIndex={1}
                >
                  <AnimatePresence>
                    {showScrollIndicator && (
                      <MotionBox
                        key="scroll-indicator"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      >
                        <MotionBox
                          animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                          }}
                          whileHover={{ scale: 1.05, opacity: 1 }}
                        >
                          <IconButton
                            aria-label="Scroll down"
                            variant="outline"
                            colorScheme="primary"
                            size="lg"
                            borderRadius="full"
                            boxShadow="lg"
                            onClick={handleIndicatorClick}
                            icon={
                              <MotionSpan
                                animate={{ rotate: scrollDirection === 'down' ? 0 : 180 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <RiArrowDownDoubleFill size={24} />
                              </MotionSpan>
                            }
                          />
                        </MotionBox>
                      </MotionBox>
                    )}
                  </AnimatePresence>
                </Box>
              </Box>
            </Box>
          )
        })()}
      </Box>
    </>
  )
}

export default StickyScrollSection
