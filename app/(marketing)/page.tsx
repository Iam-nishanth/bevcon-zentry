'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { FaLeaf } from 'react-icons/fa'
import { FaHelmetSafety } from 'react-icons/fa6'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiClock,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'
import { IoShield } from 'react-icons/io5'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ImagesSlider } from '#components/image-slider'
import { IndustriesCarousel } from '#components/industries-carousel'
import { LogoSlider } from '#components/logo-slider'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import Products from '#components/products'
import StickyScroll from '#components/sticky-scroll'
import StickyScrollSection from '#components/sticky-scroll-section'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <>
      <title>High Speed Doors & Dock Levellers | Bevcon Zentry - Industrial Door Solutions</title>
      <meta name="description" content="Leading supplier of high speed doors, dock levellers, dock shelters, and fire-rated shutters for industrial facilities. Expert installation and 24/7 support. Request a quote today!" />
      <meta name="keywords" content="high speed doors, dock levellers, industrial doors, loading bay solutions, rapid doors, warehouse doors, dock shelters, bevcon zentry" />
      <link rel="canonical" href="https://bevconzentry.in/" />
      
      {/* Product Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "High Speed Doors",
          "description": "Rapid opening doors for high-traffic areas with advanced safety features",
          "brand": {
            "@type": "Brand",
            "name": "Bevcon Zentry"
          },
          "category": "Industrial Doors",
          "offers": {
            "@type": "AggregateOffer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Dock Levellers",
          "description": "Hydraulic and mechanical levelers for seamless loading operations",
          "brand": {
            "@type": "Brand",
            "name": "Bevcon Zentry"
          },
          "category": "Loading Bay Equipment",
          "offers": {
            "@type": "AggregateOffer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR"
          }
        })}
      </script>
      
      <Box>
      <HeroSection />
      <ProductsSection />
      <StickyScrollSection />
      <LogoSlider />
      <IndustriesCarousel />
      <FaqSection />
    </Box>
    </>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 24, md: 40, lg: 60 }} pb="40" px={{ base: "15px", md: "15px" }}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Industrial Doors and
                <Br /> Warehousing Solutions
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                High-speed doors, dock levelers, truck restraints, and
                fire-rated shutters for manufacturing, warehousing, and
                logistics facilities.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={3} alignItems={{ base: 'stretch', md: 'center' }} pt="4" pb="8">
                <ButtonLink colorScheme="primary" size="lg" href="/contact">
                  Request a Quote
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/products"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View Products
                </ButtonLink>
              </Stack>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
            zIndex={0}
          >
            <Box overflow="hidden" height="100%" width="100%">
              {/* <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                /> */}

              <ImagesSlider
                images={[
                  // '/home/highspeed doors.jpg',
                  '/home/industrial-hall-1630742_1280.jpg',
                  '/home/DockLeveller.png',
                  '/home/Industrial Bay Doors.png', 
                  '/home/Roller Shutters.png',
                  ]}
                intervalMs={4000}
              />
            </Box>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Reliable Performance',
            icon: IoShield,
            description:
              'Engineered for continuous operation in demanding industrial environments',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Energy Efficiency',
            icon: FaLeaf,
            description:
              'Advanced insulation and sealing technology reduces energy costs',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Saftey First',
            icon: FaHelmetSafety,
            description:
              'Comprehensive safety features and compliance with industry standards',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Rapid Service',
            icon: FiClock,
            description:
              'Quick installation and 24/7 maintenance support nationwide',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const ProductsSection = () => {
  return (
    <Box overflow="hidden">
      <Products
        id="products"
        title="Our Product Range"
        description={
          <Text color="muted" textAlign="center">
            Complete solutions for your industrial door and loading bay needs
          </Text>
        }
        innerWidth="container.xl"
        columns={[1, 2, 2]}
        reveal={FallInPlace}
        products={[
          {
            title: 'High Speed Doors',
            description:
              'Rapid opening doors for high-traffic areas with advanced safety features',
            imageSrc: '/home/product-range/High-Speed.png',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.2,
          },
          {
            title: 'Dock Levelers',
            description:
              'Hydraulic and mechanical levelers for seamless loading operations',
            imageSrc: '/home/product-range/DockLeveller.png',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.3,
          },
          // {
          //   title: 'Truck Restraints',
          //   description:
          //     'Vehicle restraint systems ensuring safe loading and unloading',
          //   imageSrc: '/home/product-range/Truck Restraints.jpeg',
          //   learnMoreHref: '/products',
          //   enquireHref: '/contact',
          //   delay: 0.4,
          // },
          {
            title: 'Dock Shelters',
            description:
              'Weather sealing solutions for efficient temperature control',
            imageSrc: '/home/product-range/dock-shelters.png',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.5,
          },
          {
            title: 'Fire Rated Shutters',
            description:
              'Certified fire protection doors for enhanced safety compliance',
            imageSrc: '/home/product-range/Fire-shutter.png',
            learnMoreHref: '/products',
            enquireHref: '/contact',
            delay: 0.6,
          },
          // {
          //   title: 'Sectional Doors',
          //   description:
          //     'Versatile overhead doors for warehouses and industrial facilities',
          //   imageSrc: '/home/product-range/Sectional-Doors.png',
          //   learnMoreHref: '/products',
          //   enquireHref: '/contact',
          //   delay: 0.7,
          // },
        ]}
      />
    </Box>
  )
}

const WhyChooseSection = () => {
  const items = [
    {
      title: 'Industry Certifications',
      description: 'Full compliance with safety and quality standards',
      imageSrc: '/static/screenshots/landingspage.png',
    },
    {
      title: 'Expert Installation',
      description: 'Installed by certified technicians',
      imageSrc: '/static/screenshots/list.png',
    },
    {
      title: 'Comprehensive Maintenance',
      description: 'Preventive programs and emergency repairs',
      imageSrc: '/static/screenshots/dashboard.png',
    },
    {
      title: '24/7 Support',
      description: 'Around-the-clock technical support and service',
      imageSrc: '/static/screenshots/billing.png',
    },
  ]

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={10}>
          <Box flex="1">
            <Heading as="h2" size="lg" mb={6}>
              Why Choose Bevcon Zentry
            </Heading>
            <StickyScroll items={items} height="26rem" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Saas UI on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        “Saas UI helped us set up a beautiful modern UI in no time. It saved us
        hundreds of hours in development time and allowed us to focus on
        business logic for our specific use-case from the start.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic frontend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> dashboard template.
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: '#components.',
          icon: FiBox,
          description:
            'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
          variant: 'inline',
        },
        {
          title: 'Starterkits.',
          icon: FiLock,
          description:
            'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
          variant: 'inline',
        },
        {
          title: 'Documentation.',
          icon: FiSearch,
          description:
            'Extensively documented, including storybooks, best practices, use-cases and examples.',
          variant: 'inline',
        },
        {
          title: 'Onboarding.',
          icon: FiUserPlus,
          description:
            'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
          variant: 'inline',
        },
        {
          title: 'Feature flags.',
          icon: FiFlag,
          description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
          variant: 'inline',
        },
        {
          title: 'Upselling.',
          icon: FiTrendingUp,
          description:
            '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
          variant: 'inline',
        },
        {
          title: 'Themes.',
          icon: FiToggleLeft,
          description:
            'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
          variant: 'inline',
        },
        {
          title: 'Generators.',
          icon: FiTerminal,
          description:
            'Extend your design system while maintaininig code quality and consistency with built-in generators.',
          variant: 'inline',
        },
        {
          title: 'Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
