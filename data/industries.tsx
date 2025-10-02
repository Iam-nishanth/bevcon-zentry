export interface Industry {
  title: string
  description: string
  imageSrc: string
  category: string
  benefits: string[]
  solutions: string[]
}

const industries: { [key: string]: Industry } = {
  pharma: {
    title: 'Pharmaceutical',
    description: 'Ensure compliance, contamination control, and operational efficiency in pharmaceutical manufacturing and research facilities.',
    imageSrc: '/home/industrial-hall-1630742_1280.jpg',
    category: 'Healthcare & Life Sciences',
    benefits: [
      'Clean room compatibility',
      'Temperature-controlled environments',
      'Regulatory compliance (GMP, FDA)',
      'Contamination prevention',
      'Automated access control'
    ],
    solutions: [
      'High-speed clean room doors',
      'Fire-rated pharmaceutical shutters',
      'Temperature-controlled sectional doors',
      'Automated docking systems',
      'Sanitization-friendly materials'
    ]
  },
  beverages: {
    title: 'Beverages',
    description: 'Optimize production flow, maintain hygiene standards, and ensure product quality in beverage manufacturing and bottling facilities.',
    imageSrc: '/home/Industrial Bay Doors.png',
    category: 'Food & Beverage',
    benefits: [
      'Hygienic design standards',
      'Rapid access for production lines',
      'Temperature regulation',
      'Wash-down resistant materials',
      'Energy-efficient operation'
    ],
    solutions: [
      'Food-grade high-speed doors',
      'Temperature-controlled environments',
      'Automated loading systems',
      'Sanitary dock shelters',
      'Impact-resistant doors for heavy traffic'
    ]
  },
  cold: {
    title: 'Cold Storage',
    description: 'Maintain precise temperature control and energy efficiency in cold storage warehouses and distribution centers.',
    imageSrc: '/home/Highspeed doors.webp',
    category: 'Temperature Controlled',
    benefits: [
      'Superior insulation properties',
      'Temperature stability',
      'Energy cost reduction',
      'Frost-resistant operation',
      'Rapid access capabilities'
    ],
    solutions: [
      'Insulated high-speed freezer doors',
      'Temperature-controlled sectional doors',
      'Automated cold storage systems',
      'Energy-efficient loading bays',
      'Climate-controlled dock shelters'
    ]
  },
  warehouse: {
    title: 'Warehouse & Logistics',
    description: 'Enhance operational efficiency, safety, and throughput in modern warehouse and distribution facilities.',
    imageSrc: '/home/DockLeveller.png',
    category: 'Logistics & Distribution',
    benefits: [
      'High-traffic durability',
      'Safety compliance',
      'Operational efficiency',
      'Space optimization',
      'Automated systems integration'
    ],
    solutions: [
      'High-speed warehouse doors',
      'Automated docking systems',
      'Vehicle restraint systems',
      'Loading bay equipment',
      'Safety interlock systems'
    ]
  },
  food: {
    title: 'Food Processing',
    description: 'Meet strict hygiene requirements while maintaining efficient production processes in food processing facilities.',
    imageSrc: '/home/Roller Shutters.png',
    category: 'Food & Beverage',
    benefits: [
      'HACCP compliance',
      'Easy-to-clean surfaces',
      'Temperature regulation',
      'Pest prevention',
      'Production efficiency'
    ],
    solutions: [
      'Sanitary processing doors',
      'Temperature-controlled environments',
      'Wash-down resistant equipment',
      'Automated access systems',
      'Food-safe materials throughout'
    ]
  }
}

export default industries
