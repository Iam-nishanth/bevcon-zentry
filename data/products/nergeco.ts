export interface ProductSpecifications {
  opening_speed?: string
  closing_speed?: string
  max_width?: string
  max_height?: string
  wind_resistance?: string
  cycles_per_day?: string
  temperature_range?: string
  hygiene_rating?: string
  pressure_resistance?: string
  cleanliness_class?: string
  thermal_coefficient?: string
  power_out_opening?: string
  emergency_compliance?: string
  capacity?: string
  operating_range?: string
  safety_features?: string
  restraining_force?: string
  seal_pressure?: string
  fire_rating?: string
  inflation_time?: string
  deflation_time?: string
  installation?: string
  compression?: string
  power_requirements?: string
  insulation_value?: string
  operating_speed?: string
  durability?: string
  operating_cycles?: string
}

export interface Product {
  id: string
  title: string
  model: string
  sku: string
  category: string
  subcategory?: string
  specifications: ProductSpecifications
  features: string[]
  applications: string[]
  tags: string[]
  image: string | string[]
  brand?: string
  heading?: string
  description?: any;
}

export interface BrandData {
  brand: string
  description: string
  website: string
  products: Product[]
}

export const nergecoData: BrandData = {
  brand: "Nergeco",
  description: "Nergeco is a technological leader in high-speed flexible doors, offering innovative solutions for industrial applications with the patented Intelligent Curtain technology.",
  website: "https://www.nergeco.com",
  products: [
    {
      id: "nergeco-001",
      title: "Interior High-Speed Flexible Door - Standard Logistics",
      model: "SL-2000",
      sku: "NER-SL2000",
      category: "High Speed Doors",
      subcategory: "Standard Logistics",
      brand: "Nergeco",
      heading: "High-speed flexible doors for standard logistics",
      description: `Designed for efficient area separation in warehouse and logistics environments, this high-speed door offers reliable performance with minimal maintenance requirements.

This intelligent door system features a compact roller design that maximizes floor and ceiling clearance. The flexible curtain incorporates multiple stiffeners that evenly distribute structural loads across the frame, providing excellent draft protection and thermal insulation. The responsive closing edge can flex in multiple directions and detects obstacles across a 15-inch span, minimizing damage and repair needs.

Operating at speeds twice that of conventional industrial doors, it opens precisely when needed and closes rapidly to minimize exposure time. This intelligent timing reduces workplace accidents while significantly lowering energy consumption in climate-controlled facilities.

The door's construction utilizes advanced multi-composite materials engineered to outperform stainless steel in corrosive environments. Each component is specifically formulated for its mechanical function, offering superior resistance to wear, impact, and environmental degradation. The smooth, paint-free surfaces eliminate crevices where contaminants can accumulate, while the robust uprights maintain structural integrity even after repeated impacts.
`,
      specifications: {
        opening_speed: "2.0 m/s",
        closing_speed: "2.0 m/s",
        max_width: "6000 mm",
        max_height: "6000 mm",
        wind_resistance: "Class 2",
        cycles_per_day: "Up to 1000"
      },
      features: [
        "Intelligent Curtain technology",
        "Self-repairing system",
        "Reduced maintenance costs",
        "Energy efficient operation",
        "Safety light curtains"
      ],
      applications: [
        "Warehouse separation",
        "Manufacturing facilities",
        "Distribution centers"
      ],
      tags: ["Energy Efficient", "Self-Repairing", "High Traffic"],
      image: [
        "/products/nergeco/SL/High-speed flexible doors with multi-composite structure for standard logistics (SL) .jpg",
        "/products/nergeco/SL/Flexible high performance door between stockroom and sales area (SL) .jpg",
        "/products/nergeco/SL/Nergeco high speed doors between stockroom and sales area (SL).jpg",
        "/products/nergeco/SL/Clean and contemporary design, shapes facilitating maintenance for this high-speed door (SL) .jpg"
      ]
    },
    {
      id: "nergeco-002",
      title: "High-Speed Door for Food Processing",
      model: "FP-2500",
      sku: "NER-FP2500",
      category: "High Speed Doors",
      subcategory: "Food Processing",
      brand: "Nergeco",
      heading: "Easy-to-clean multi-composite high-speed doors reducing health risks in the food processing industry",
      description: `Engineered specifically for demanding food processing environments, this high-speed door combines superior hygiene standards with exceptional durability.

The door system features advanced composite materials that exceed 316L stainless steel in corrosion resistance. Each structural element is purpose-engineered for its specific function, providing enhanced protection against wear, chemical exposure, and mechanical stress. The seamless, paint-free construction eliminates potential contamination harbors and supports thorough pressure washing without disassembly.

The self-draining design and natural ventilation ensure rapid drying, making it suitable for both wet and dry processing environments. The Intelligent Curtain system incorporates sealed flexible stiffeners that distribute pressure uniformly across the frame structure, maintaining reliable operation under varying conditions.

Operating at double the speed of traditional industrial doors, the system minimizes exposure time during each cycle. The responsive safety edge detects obstacles across a 15-inch height range, ensuring safe operation around personnel and equipment. This rapid cycling reduces energy loss in climate-controlled spaces and decreases airborne contamination risk by up to 32% per operation cycle.
`,
      specifications: {
        opening_speed: "2.5 m/s",
        closing_speed: "2.5 m/s",
        max_width: "5000 mm",
        max_height: "5000 mm",
        temperature_range: "-30°C to +60°C",
        hygiene_rating: "HACCP compliant"
      },
      features: [
        "Multi-composite frame",
        "Corrosion-resistant materials",
        "Easy cleaning design",
        "Food-grade components",
        "Washable structure"
      ],
      applications: [
        "Food processing plants",
        "Cold storage facilities",
        "Pharmaceutical manufacturing"
      ],
      tags: ["Food Safe", "Corrosion Resistant", "HACCP Compliant"],
      image: [
        "/products/nergeco/Food Processing Industry/High-speed_flexible_door_with_frame_which_is_more_corrosion-resistant_than_stainless_steel.jpg",
        // "/products/nergeco/Food Processing Industry/Fully_pressure-washable_high-speed_flexible_door_for_the_food_processing_industry.jpg",
        "/products/nergeco/Food Processing Industry/Multi-composite_frame_which_may_be_cleaned_by_high-pressure_spraying.jpg"
      ]
    },
    {
      id: "nergeco-003",
      title: "Cleanroom High-Speed Door",
      model: "CR-1800",
      sku: "NER-CR1800",
      category: "High Speed Doors",
      subcategory: "Clean Processes",
      brand: "Nergeco",
      heading: "Safe high-speed flexible doors with enhanced sealing and asepsis. They combine pressure resistance, full access for cleaning and a minimum opening time to reduce sanitary risks ",
      description: `Designed for pharmaceutical and cleanroom applications, this door system combines high-pressure resistance with cleanability requirements.

The door construction utilizes specialized composite materials that meet stringent cleanroom standards while exceeding 316L stainless steel in corrosion resistance. Each component is engineered for specific mechanical functions, offering superior resistance to tearing, deformation, and environmental stress. The smooth, seamless surfaces eliminate contamination traps and support comprehensive cleaning protocols.

The Intelligent Curtain integrates directly into the frame structure without complex retention mechanisms, maintaining fully accessible slide channels for cleaning. During operation, the curtain moves friction-free through the guides and seals against the frame under pressure differential. Multiple internal stiffeners distribute pressure resistance forces evenly across the structure, supporting differential pressures up to 40 Pa.

The flexible safety edge responds to contact across a 15-inch detection zone without heavy bars or rigid sensors. Operating at twice conventional door speeds, it minimizes open-door duration to reduce contamination risk and energy loss. Three available sealing configurations allow pressure differential customization for specific cleanroom requirements.
`,
      specifications: {
        opening_speed: "1.8 m/s",
        closing_speed: "1.8 m/s",
        max_width: "4000 mm",
        max_height: "4000 mm",
        pressure_resistance: "40 Pa",
        cleanliness_class: "ISO 14644-1 Class 7"
      },
      features: [
        "Washable multi-composite structure",
        "High pressure resistance",
        "Contamination control",
        "Smooth surfaces",
        "Minimal particle generation"
      ],
      applications: [
        "Pharmaceutical cleanrooms",
        "Electronics manufacturing",
        "Medical device production"
      ],
      tags: ["Cleanroom Certified", "High Pressure", "Contamination Control"],
      image: [
        "/products/nergeco/Doors for Clean Processes/Sealed_and_washable_high-speed_flexible_doors_for_clean_environments.jpg",
        "/products/nergeco/Doors for Clean Processes/Flexible,_high-speed_curtain_easily_installed_in_clean_rooms.jpg",
        "/products/nergeco/Doors for Clean Processes/The_slides_are_smooth_and_fully_accessible_for_cleaning_with_no_dismantling_necessary.jpg"
      ]
    },
    {
      id: "nergeco-004",
      title: "High-Speed Isothermal Door",
      model: "IT-3000",
      sku: "NER-IT3000",
      category: "High Speed Doors",
      subcategory: "Cold Chain",
      brand: "Nergeco",
      heading: "Increase heat insulation and reduce maintenance costs the whole length of a complex and stringent cold chain ",
      description: "Specialized thermal door systems engineered for temperature-controlled environments, providing superior insulation while maintaining high-speed operation. These doors feature advanced thermal barrier construction optimized for cold chain management, from refrigerated storage to deep-freeze applications. The isothermal design minimizes thermal bridging and reduces energy consumption in critical temperature zones.",
      specifications: {
        opening_speed: "1.5 m/s",
        closing_speed: "1.5 m/s",
        max_width: "4500 mm",
        max_height: "4500 mm",
        thermal_coefficient: "U = 0.8 W/m²K",
        temperature_range: "-40°C to +5°C"
      },
      features: [
        "Superior insulation",
        "Energy conservation",
        "Frost prevention",
        "Temperature stability",
        "Rapid closure"
      ],
      applications: [
        "Cold storage warehouses",
        "Freezer rooms",
        "Refrigerated facilities"
      ],
      tags: ["Insulated", "Energy Saving", "Cold Storage"],
      image: [
        "/products/nergeco/Cold Chain/High-speed isothermal doors for cold rooms.jpg",
        "/products/nergeco/Cold Chain/Between Deep Freeze Areas/6 Nergeco high-speed doors with steel frame at the leading pork meat processors in the world.jpg",
        "/products/nergeco/Cold Chain/Between Deep Freeze Areas/These multi-composite high-speed doors are fitted to the automatic conveyors of the largest cold store in Europe belonging to this food processing giant (BDFA) .jpg"
      ]
    },
    {
      id: "nergeco-005",
      title: "High-Speed Emergency Exit Door",
      model: "EX-2200",
      sku: "NER-EX2200",
      category: "High Speed Doors",
      subcategory: "Emergency Exits",
      brand: "Nergeco",
      heading: "The combination of better insulation, easy and safe accesses and full adaptation to your process ",
      description: `Dual-function door system combining daily operational efficiency with emergency egress capability.

This unique door design serves as both a high-performance industrial access point and a certified emergency exit. The emergency activation system responds to multiple triggers: dedicated emergency buttons, direct curtain pressure, power failures, component malfunctions, or facility alarm systems. Upon activation, the door fully clears the opening and remains open until manually reset by authorized personnel.

The fail-safe mechanism employs a gravity-operated counterweight system that functions without electrical power or backup batteries, ensuring reliable emergency operation. The patented curtain-press activation allows evacuation even when approaching the door from either direction.

Available in multiple configurations to suit different environments:

• Standard Logistics Version: Multi-composite frame construction, curtain dimensions up to 13x13 ft, optimized for general industrial applications

• Food Processing Version: Enhanced corrosion-resistant materials, pressure-washable construction, sealed and hygienic curtain design suitable for food safety environments

• Cleanroom Version: Pharmaceutical-grade materials and construction, compatible with strict hygiene protocols while maintaining emergency egress functionality

All versions maintain EN 12453 compliance for safety and emergency applications.
`,
      specifications: {
        opening_speed: "2.2 m/s",
        closing_speed: "0.5 m/s",
        max_width: "3000 mm",
        max_height: "3000 mm",
        power_out_opening: "Yes",
        emergency_compliance: "EN 12453"
      },
      features: [
        "Power-out opening system",
        "Emergency access capability",
        "Automatic safety features",
        "Manual override option",
        "Compliance certified"
      ],
      applications: [
        "Emergency exits",
        "Fire escape routes",
        "Safety corridors"
      ],
      tags: ["Emergency Certified", "Power-Out Opening", "Safety Compliant"],
      image: [
        "/products/nergeco/Power Out Opening/High-speed Emergency Exit door for public access buildings.jpg",
        "/products/nergeco/Power Out Opening/Emergency opening of this Nergeco high-speed door for the cosmetics industry simply be pressing on the curtain.jpg"
      ]
    },
    {
      id: "nergeco-006",
      title: "External flexible folding doors T-series",
      model: "T-Series",
      sku: "NER-TSERIES",
      category: "High Speed Doors",
      subcategory: "External Doors",
      brand: "Nergeco",
      heading: "External flexible folding doors",
      description: `Advanced folding door technology engineered for extreme weather resistance and exterior applications.

The Trekking system employs a distributed stiffener design spanning the full curtain height, creating uniform tension from top to bottom. This architecture provides exceptional wind resistance up to 88 mph while maintaining weathertight sealing. The distributed load design prevents jamming and curtain flutter even under high wind loads, without requiring heavy bottom bars that pose safety risks.

The flexible closure edge responds to contact in all directions across a 15-inch detection zone. This patented safety system allows the door to open precisely when needed and close immediately afterward at high speed—cutting building exposure time and reducing air exchange energy losses by up to 32% compared to conventional doors.

The folding curtain design accommodates insulation panels of varying thicknesses, supporting multiple thermal and acoustic requirements. Available options include cold storage barriers, high-temperature oven doors, and acoustic barriers for noise control.

Frame construction options include steel for large spans (up to 2,150 sq ft) or advanced composite materials for openings up to 20x20 ft. The composite option provides superior corrosion resistance and thermal break properties. Motor configurations include transom-integrated or protected external mounting for simplified maintenance access.

Customization options include: variable curtain transparency, adjustable insulation thickness, manual operation capability, and multiple transom access configurations. Oversized guide channels allow continued operation even with damaged stiffeners, maximizing uptime.
`,
      specifications: {
        opening_speed: "2.8 m/s",
        closing_speed: "2.8 m/s",
        max_width: "7000 mm",
        max_height: "7000 mm",
        wind_resistance: "Up to 88 mph",
        temperature_range: "-30°C to +70°C"
      },
      features: [
        "Trekking folding technology",
        "Superior wind resistance",
        "Better insulation",
        "Flexible closure edge",
        "Intelligent Curtain technology",
        "Weatherproofing",
        "Corrosion-resistant materials",
        "Easy maintenance",
        "Customizable options"
      ],
      applications: [
        "Loading dock entrances",
        "Warehouse exteriors",
        "Industrial building access",
        "Shipyards",
        "Mining workshops",
        "Helicopter maintenance",
        "Cold logistics",
        "Recycling sites"
      ],
      tags: ["Weather Resistant", "High Wind", "External Use", "Windproof", "Insulated", "Acoustic", "Panoramic View"],
      image: [
        "/products/nergeco/T-Series/Large-dimension-NERGECO-T-ENDURO-5-exterior-high-speed-flexible-door.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-5-flexible-automatic-door-with-double-skin-curtain.jpg",
        "/products/nergeco/T-Series/Two-panoramic-transparent-rows-for-this-NERGECO-T-ENDURO-5-automatic-door.jpg",
        "/products/nergeco/T-Series/The-double-wall-curtain-of-this-Nergeco-Entrematic-flexible-door-closes-an-air-lock-protecting-cold-rooms.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-2-flexible-doors-for-outside-exposure-and-strong-winds-in-shipyards.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-2-automatic-flexible-door-with-high-wind-resistance-installed-on-a-mining-maintenance-workshop.jpg",
        // "/products/nergeco/T-Series/Automatic-double-acoustic-wall-NERGECO-T-ENDURO-2-folding-flexible-doors-for-helicopter-maintenance-workshop-Marine-Nationale.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-2-high-speed-flexible-doors-with-insect-curtains-to-preserve-natural-ventilation.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-2-high-speed-doors-installed-facing-the-North-Atlantic-on-the-premises-of-a-cold-logistics-company.jpg",
        "/products/nergeco/T-Series/Successful-integration-of-NERGECO-T-ENDURO-2-high-speed-doors-on-wooden-framed-building.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-2-high-speed-doors-with-total-panoramic-view-for-maximum-natural-lighting.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-2-automatic-folding-doors.jpg",
        "/products/nergeco/T-Series/Each-NERGECO-T-ENDURO-2-high-speed-flexible-door-is-made-to-measure-for-each-building-here-in-Poland-on-a-recycling-site.jpg",
        "/products/nergeco/T-Series/NERGECO-T-ENDURO-2-high-speed-flexible-doors-chosen-for-their-wind-resistance-and-their-panoramic-transparency.jpg"
      ]
    }
  ]
}
