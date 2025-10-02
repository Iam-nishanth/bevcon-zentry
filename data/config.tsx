import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Bevcon Zentry',
    description: 'High-speed doors, dock levelers, truck restraints, and fire-rated shutters for manufacturing, warehousing, and logistics facilities',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'products',
        label: 'Products',
      },
      {
        id: 'industries',
        label: 'Industries',
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
      },
      {
        id: 'quote',
        label: 'Get a Quote',
        href: '/quote',
        variant: 'primary',
      },
    ],
  },
  footer: {
    address: {
      title: 'Address',
      lines: ['Plot No. E8/C8 - 2A, (24-60/10/11), IDA, UPPAL, Hyderabad, Telangana 500039, India'],
    },
    contact: {
      title: 'Contact',
      items: [
        {
          label: 'Email',
          value: 'corporate@bevconzentry.com',
          href: 'mailto:corporate@bevconzentry.com',
        },
      ],
    },
    sections: [
      {
        title: 'Pages',
        links: [
          { label: 'Products', href: '/products' },
          { label: 'Industries', href: '/industries' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    copyright: (
      <>
        Built by{' '}
        <Link href="mailto:nishanthalapati123@gmail.com">Nishanth</Link>
      </>
    ),
    links: [
      {
        href: '#privacy',
        label: 'Privacy Policy',
      },
      {
        href: '#terms',
        label: 'Terms of Service',
      },
      {
        href: '#cookies',
        label: 'Cookie Policy',
      },
    ],
  }
}

export default siteConfig
