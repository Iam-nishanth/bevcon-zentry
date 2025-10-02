'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

interface ProductCarouselProps {
  images: string[]
  alt: string
}

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, alt }) => {
  const [slider, setSlider] = React.useState<Slider | null>(null)
  
  const top = useBreakpointValue({ base: '50%', md: '50%' })
  const side = useBreakpointValue({ base: '10px', md: '10px' })

  if (images.length <= 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        w="full"
        h="200px"
        objectFit="cover"
        _hover={{ transform: 'scale(1.05)' }}
        transition="transform 0.3s ease"
      />
    )
  }

  return (
    <Box position="relative" height="200px" width="full" overflow="hidden">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      
      {/* Left Arrow */}
      <IconButton
        aria-label="previous-image"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        size="sm"
        bg="whiteAlpha.800"
        _hover={{ bg: 'whiteAlpha.900' }}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="20px" />
      </IconButton>
      
      {/* Right Arrow */}
      <IconButton
        aria-label="next-image"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        size="sm"
        bg="whiteAlpha.800"
        _hover={{ bg: 'whiteAlpha.900' }}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="20px" />
      </IconButton>
      
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((image, index) => (
          <Box key={index} height="200px" position="relative">
            <Image
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              w="full"
              h="200px"
              objectFit="cover"
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.3s ease"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
