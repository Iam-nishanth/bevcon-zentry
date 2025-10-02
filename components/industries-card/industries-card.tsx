'use client'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Tag,
  useColorModeValue,
  VStack,
  HStack,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'
import { ButtonLink } from '#components/button-link/button-link'

interface IndustriesCardProps {
  title: string
  description: string
  imageSrc: string
  category: string
  benefits: string[]
  solutions: string[]
  learnMoreHref?: string
  contactHref?: string
}

export default function IndustriesCard({
  title,
  description,
  imageSrc,
  category,
  benefits,
  solutions,
  learnMoreHref = '/products',
  contactHref = '/contact',
}: IndustriesCardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'210px'} bg={useColorModeValue('gray.100', 'gray.700')} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={imageSrc}
            fill
            alt={title}
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Stack spacing={4}>
          <Tag
            color={'primary.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
            alignSelf="flex-start">
            {category}
          </Tag>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={useColorModeValue('gray.500', 'gray.400')}>
            {description}
          </Text>

          <VStack align="stretch" spacing={3}>
            <Box>
              <Text fontWeight={600} fontSize="md" mb={2} color="gray.700">
                Key Benefits:
              </Text>
              <List spacing={1}>
                {benefits.slice(0, 3).map((benefit, index) => (
                  <ListItem key={index} fontSize="sm" color="gray.600">
                    <ListIcon as={FiCheck} color="green.500" />
                    {benefit}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Text fontWeight={600} fontSize="md" mb={2} color="gray.700">
                Our Solutions:
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {solutions.slice(0, 2).map((solution, index) => (
                  <Badge key={index} colorScheme="blue" variant="subtle" fontSize="xs">
                    {solution}
                  </Badge>
                ))}
              </HStack>
            </Box>
          </VStack>

          <HStack spacing={3} pt={4}>
            <ButtonLink size="sm" href={learnMoreHref} variant="outline">
              Learn More
            </ButtonLink>
            <ButtonLink size="sm" href={contactHref} colorScheme="primary">
              Get Quote
            </ButtonLink>
          </HStack>
        </Stack>
      </Box>
    </Center>
  )
}
