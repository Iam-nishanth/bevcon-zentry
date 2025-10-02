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
      description: ` To separate areas within your premises safely and efficiently while reducing maintenance costs when no other special feature is required.

Indoors, traffic can be busy and space restricted, increasing the risks of contact every time traffic passes through a door. It is therefore better if the door opens as late as possible and closes again quickly to protect the different areas within your premises without at the same time increasing risks caused by rubbing against the curtain.
The Nergeco Entrematic high performance door for standard logistics is a roller door to save space at floor and lintel level, and its numerous flexible stiffeners uniformly distribute pressure over the whole of the frame to withstand strong draughts and increase insulation. Its flexible closing edge can be distorted both vertically and horizontally and is responsive over a height of 15 inches reducing repair and maintenance costs.
Each time it opens, it frees access at the last moment without posing a risk if touched, then closes again at the same speed - twice as fast as traditional doors - without endangering users, vehicles or packages. It therefore reduces accidents and production stoppages, but by also shortening the time it is open, energy consumption for heating or cold production is reduced between two areas with different environments.
Designed for corrosive environments, the frame and mechanisms of the Nergeco Entrematic high performance high-speed flexible door for standard logistics are in multi-composite materials which are more resistant to corrosion than stainless steel. Multi-composite, because a formulation and design specific to each mechanical and kinematic function significantly increases its resistance to galling, twisting and denting when compared with welded solutions.
They are smooth and wear-resistant without the paint or crevices inherent in welded structures. The mechanisms are more corrosion-resistant than 316L stainless steel. The toughness of the uprights, their ability to absorb an impact without becoming permanently distorted, and the absence of paint guarantees a durable, corrosion-free appearance.
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
      description: ` Multi-composite frame more corrosion-resistant than stainless steel

Designed originally for the most corrosive food-processing environments, the frame and mechanisms of the Nergeco high performance high-speed flexible door are in multi-composite materials which are 45% more corrosion-resistant than stainless steel. Multi-composite, because a formulation and design developed specifically for each mechanical and kinematic function significantly increases its resistance to galling, twisting and denting when compared with welded solutions. They are smooth and wear-resistant without the paint or crevices inherent in welded structures. They can be pressure-washed without the need for dismantling. Allowing the water to run down and naturally ventilated, they dry quickly and are therefore completely suited to your dry or wet processes.
The mechanisms are also in multi-composite materials which are more corrosion-resistant than 316L stainless steel. The toughness of the uprights, their ability to absorb an impact without becoming permanently distorted, and the absence of paint guarantees a durable, corrosion-free appearance.
Lastly, the numerous flexible stiffeners of the Nergeco Intelligent Curtain, integrated under sealed welds, provide uniform distribution of pressure over the whole frame to stand up to any overpressure. The Intelligent Curtain increases insulation and its flexible closing edge can be distorted both vertically and horizontally and is responsive over a height of 15 inches reducing repair and maintenance costs.
Each time it opens, it frees access at the last moment without posing a risk if touched, then closes again at the same speed - twice as fast as traditional doors - without endangering users, vehicles or packages. It therefore reduces accidents and production stoppages, but by also reducing the time it is open, it reduces the energy consumption needed for your controlled atmosphere and the risks of airborne contamination by up to 32% on each cycle!
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
        "/products/nergeco/Food Processing Industry/Fully_pressure-washable_high-speed_flexible_door_for_the_food_processing_industry.jpg",
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
      description: ` Washable multi-composite structure, the curtain can withstand up to 40 Pa

Developed both in accordance with the rigorous constraints of pharmaceutical environments and the most corrosive atmospheres, the new materials for the frames and mechanisms of the high-speed flexible doors for clean processes are made from multi-composite materials which offer a number of benefits. Multi-composite, because a formulation and design specific to each mechanical and kinematic function significantly increases its resistance to tearing, twisting and denting relative to weld-fabricated solutions. They are smooth and wear-resistant without the paint or crevices inherent in welded structures. Lastly, these materials are more corrosion-resistant than 316L stainless steel making them fully compliant with the requirements of clean environments.
Fully built-in to the frame, the Nergeco Intelligent Curtain increases insulation and sealing without a complicated system trapping it in its slides: it remains free in the open shape of the slides which are kept completely accessible for cleaning. On each opening cycle, it slides without friction then, with the flexible door closed again, lays flat against the inside of the slides through the action of pressure. Its numerous stiffeners then distribute the pressure resistance force uniformly over the whole of the structure.
Free and flexible, its closure edge can be distorted both vertically and horizontally. With no heavy threshold bar or rigid transverse movement detection device, it is directly responsive over 15 in height. So, on each access, it opens at the last moment without posing a risk if touched, then closes again at the same speed - twice as fast as traditional doors - without endangering users or packages. It therefore reduces accidents and production stoppages, but by also reducing the time it is open, it reduces energy consumption and the risks of airborne contamination.
Our high-speed flexible doors for clean processes are available with three sealing systems to limit the leakage rate to the value required by the operating pressure of up to 40 pascal to suit each project.
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
      description: "A wide selection of isothermal high-speed doors, each suited to a precise cold room configuration ",
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
      description: ` Effective high-speed doors giving automatic access to emergency exits when needed

The Emergency Exit versions of Nergeco Entrematic high-speed flexible doors are both an emergency evacuation path when needed as well as effective high-performance productivity doors for each process.
Operating principle, when the door is closed, just pressing the standard "emergency open" button or anywhere on the curtain, opens the door (patented). Pressing the curtain pushes it into contact with a rear planar light barrier which detects an anomaly and triggers opening (patented).
Protection: opening is also triggered in the following cases:
• failure of power supply from the cabinet or the main power supply,
• failure of a motor component or safety device (photoelectric cell for example),
• triggering of a general alarm coupled to the cabinet.
Effectiveness: in all cases, the door clears the whole of the floor surface up to the maximum height without any component remaining suspended across the access, and remains open until reset by your authorised personnel using a special key.
Reliability: if triggered in the absence of a power supply, a counterweight is released which opens the door under natural gravity, without the use of a backup battery which is given to ageing.

In standard logistics
For efficiently separating internal areas while reducing maintenance costs, when no special feature is required other than acting as an Emergency Exit.
High-performance multi-composite frame, intelligent curtain up to 13x13 ft.

In food processes
Designed for highly-partitioned food processes, these automatic flexible doors incorporate the new Nergeco Intelligent Curtain in their frames in multi-composite materials which are more corrosion-resistant than 316L stainless steel. In the Emergency Exit version, the frame may still be high-pressure washed, and the curtain is identical to those in the other food processing versions: smooth, sealed and fully hygienic!
High-performance multi-composite frame, intelligent curtain up to 13x13 ft.

In clean processes
In laboratory processes, this high-speed flexible door is suited to clean rooms and their hygiene protocols, while offering the Emergency Exit function to make best use of laboratory floor space.
High-performance multi-composite frame, intelligent curtain up to 13x13 ft. `,
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
    // {
    //   id: "nergeco-006",
    //   title: "External High-Speed Flexible Door T-Series",
    //   model: "T-2800",
    //   sku: "NER-T2800",
    //   category: "High Speed Doors",
    //   subcategory: "External Doors",
    //   brand: "Nergeco",
    //   specifications: {
    //     opening_speed: "2.8 m/s",
    //     closing_speed: "2.8 m/s",
    //     max_width: "7000 mm",
    //     max_height: "7000 mm",
    //     wind_resistance: "Class 4 (up to 120 km/h)",
    //     temperature_range: "-30°C to +70°C"
    //   },
    //   features: [
    //     "Trekking folding technology",
    //     "Superior wind resistance",
    //     "Weather protection",
    //     "Robust construction",
    //     "All-weather operation"
    //   ],
    //   applications: [
    //     "Loading dock entrances",
    //     "Warehouse exteriors",
    //     "Industrial building access"
    //   ],
    //   tags: ["Weather Resistant", "High Wind", "External Use"],
    //   image: [
    //     "/products/nergeco/SL/High-speed flexible door lined with a fire door (SL) .jpg",
    //     "/products/nergeco/SL/Clean and contemporary design, shapes facilitating maintenance for this high-speed door (SL) .jpg"
    //   ]
    // }
  ]
}
