import { BrandData } from './nergeco'

export const skbData: BrandData = {
  brand: "SKB",
  description: "SKB specializes in roller shutters and industrial doors, providing reliable solutions for various applications.",
  website: "https://www.skb-shutters.com",
  products: [
    {
      id: "skb-001",
      title: "Aluminium Roller Shutter",
      model: "Aluminium Roller Shutter",
      sku: "",
      category: "Fire Rated Shutters",
      subcategory: "Standard",
      specifications: {
        max_width: "7000mm",
        max_height: "6000mm"
      },
      features: ["Motorised and Non-motorised method of closure", "Powder coated wood effect", "Air pressure safety bottom sensor", "Extra upper limit safety switch", "Steel wind lock at both ends", "Wireless remote control", "Stainless steel guides", "Guide silencer strips"],
      applications: ["Shop fronts", "Garage openings", "Small and low-value warehouses", "Stairwell opening", "Car parks"],
      tags: ["Cost effective", "Security", "Durable", "Light", "Easy to handle"],
      brand: "SKB",
      image: ["/products/skb/aluminium-roller-shutter.jpg"]
    },
    {
      id: "skb-002",
      title: "Automatic Reset for Fire Shutters (ER-A)",
      model: "ER-A",
      sku: "",
      category: "Fire Rated Shutters",
      subcategory: "Fire Rated",
      specifications: {},
      features: ["Automatic reset to standby mode", "Prevents forgetting to reset", "Reduces maintenance effort", "Gravity descent during fire mode"],
      applications: ["Fire safety systems", "Buildings with fire shutters"],
      tags: ["Fire Safety", "Automatic", "Maintenance Reduction"],
      brand: "SKB",
      image: ["/products/skb/fire-resistance-roller-shutter.jpg"]
    },
    // {
    //   id: "skb-003",
    //   title: "Double-Wall Roller Shutter",
    //   model: "F7D, F7DA, F7DAA6, F100DA, F100DAV, F100DASS, F100DAT",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Insulated",
    //   specifications: {
    //     operating_speed: "500mm per second",
    //     wind_resistance: "100 to 220km/h",
    //     operating_cycles: "100 cycles per minute",
    //     durability: "30 years",
    //     power_requirements: "230v Single Phase 50 Hz or 415v 3 Phase 60 Hz"
    //   },
    //   features: ["High Wind Resistance", "Air Tightness", "Sound Insulation up to 32dB", "Security Barrier", "Riot Protection", "Sandstorm Protection", "Harsh Weather Protection", "Weapon Storage Door", "Obstruction detection sensor", "Safety Brake Arrester"],
    //   applications: ["Weather-proof and clean room applications", "Security", "High performance doors"],
    //   tags: ["High Performance", "Durable", "Insulated"],
    //   brand: "SKB",
    //   image: ["/products/skb/double-wall-roller-shutter.jpg"]
    // },
    // {
    //   id: "skb-004",
    //   title: "Fast Action Spiral Door",
    //   model: "Fast Action Spiral Door",
    //   sku: "",
    //   category: "Doors",
    //   subcategory: "Spiral",
    //   specifications: {
    //     operating_speed: "Up to 2500mm/second"
    //   },
    //   features: ["Heavy duty", "High speed", "Energy saving", "Fuss-free maintenance", "Insulated sandwich panels", "Aluminium extrusion with vision panels", "Swift and quiet operation"],
    //   applications: ["3S service centres", "Display showrooms", "Industrial and residential garage", "Sound and temperature insulation zones"],
    //   tags: ["High Speed", "Energy Saving", "Security", "Insulated"],
    //   brand: "SKB",
    //   image: ["/products/skb/fast-action-spiral-door.jpg"]
    // },
    {
      id: "skb-005",
      title: "Fire Resistance Roller Shutter",
      model: "Fire Resistance Roller Shutter",
      sku: "",
      category: "Fire Rated Shutters",
      subcategory: "Fire Rated",
      specifications: {
        fire_rating: "1-hour, 2-hour or 4-hour",
        max_height: "12000mm (Vertical), 5000mm (Horizontal), 40000mm (Lateral)",
        max_width: "8000mm (Vertical), 23000mm (Horizontal), 7000mm (Lateral)",
        power_requirements: "Single Phase 230V 50Hz, 3 Phase 415V 60Hz"
      },
      features: ["Single skin or double walled insulated design", "Manual chain override", "One unit push button switch", "Gravity drop level", "Insulation class E", "Fail-safe 24vdc E-S-400 electric releaser", "Extra upper limit safety switch", "Air pressure safety bottom sensor", "Wireless remote control", "Typhoon rated designs", "Guide silencer strips"],
      applications: ["Fire protection", "Escalators", "High-rise buildings"],
      tags: ["Fire Rated", "Insulated", "Certified"],
      brand: "SKB",
      image: ["/products/skb/fire-resistance-roller-shutter.jpg"]
    },
    {
      id: "skb-006",
      title: "Fold Up Door",
      model: "Fold Up Door",
      sku: "",
      category: "Fire Rated Shutters",
      subcategory: "Fold Up",
      specifications: {},
      features: ["Motorised and Non-motorised method of closure", "LED traffic lights", "Powder coated wood effect", "Air pressure safety bottom sensor", "Extra upper limit safety switch", "Steel wind lock at both ends", "Wireless remote control", "Stainless steel guides", "Guide silencer strips", "Nylon belts", "Heavy duty aluminium surface mounted guide"],
      applications: ["Enclosed areas", "Warehouses"],
      tags: ["Aesthetic", "Customizable", "Full opening"],
      brand: "SKB",
      image: ["/products/skb/fold-up-door.jpg"]
    },
    // {
    //   id: "skb-007",
    //   title: "Heavy Duty Shutter",
    //   model: "Heavy Duty Shutter",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Heavy Duty",
    //   specifications: {
    //     max_width: "10000mm",
    //     max_height: "8000mm"
    //   },
    //   features: ["Concealed and surface mounted installation", "Single or double wall design", "Window shutter designs", "Guide rail with wind lock", "Powder coated wood effect", "Air pressure safety bottom sensor", "Extra upper limit safety switch", "Steel wind lock at both ends", "Wireless remote control", "Stainless steel guides", "Guide silencer strips"],
    //   applications: ["Distribution warehouses", "Shop fronts", "Garages", "Manufacturing facilities", "Shopping malls", "Car park entrances", "High rise buildings"],
    //   tags: ["Durable", "Cost Effective", "High Volume"],
    //   brand: "SKB",
    //   image: ["/products/skb/heavy-duty-shutter.jpg"]
    // },
    // {
    //   id: "skb-008",
    //   title: "Horizontal Fire-rated Shutters",
    //   model: "Horizontal Fire-rated Shutters",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Fire Rated",
    //   specifications: {
    //     fire_rating: "1-hour, 2-hour or 4-hour"
    //   },
    //   features: ["Straight or Escalator travel path", "Single-span or double-span", "Motorised and non-motorised", "Fail-safe 24vdc E-S-400 electric releaser", "Extra upper limit safety switch", "Air pressure safety bottom sensor", "Wireless remote control", "Typhoon rated designs", "Guide silencer strips"],
    //   applications: ["Void areas", "Escalators", "Travelators", "Truck dumping access", "Sky roof", "Fire protection"],
    //   tags: ["Fire Rated", "Horizontal", "Certified"],
    //   brand: "SKB",
    //   image: ["/products/skb/horizontal-fire-rated-shutters.jpg"]
    // },
    {
      id: "skb-009",
      title: "Insulated Fire Shutter",
      model: "Insulated Fire Shutter",
      sku: "",
      category: "Fire Rated Shutters",
      subcategory: "Insulated",
      specifications: {
        fire_rating: "240 minutes",
        insulation_value: "240 minutes"
      },
      features: ["Durable and sustainable", "Heat insulation and fire resistance on both sides", "Low maintenance", "Flat surface for marketing", "Resistant to vandalism and weather", "Aesthetically presentable", "Solid and rigid", "Gravity drop-close safety", "Thermal fusible link", "Delay timer", "Audible alarm and flash warning lights", "Safety bottom sensor"],
      applications: ["Basement car parks", "Commercial buildings", "Shopping malls"],
      tags: ["Insulated", "Fire Rated", "Certified"],
      brand: "SKB",
      image: ["/products/skb/insulated-fire-shutter.jpg"]
    },
    // {
    //   id: "skb-010",
    //   title: "Lateral Sliding Pathwinder Shutters",
    //   model: "Lateral Sliding Pathwinder Shutters",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Sliding",
    //   specifications: {
    //     fire_rating: "1-hour, 2-hour or 4-hour"
    //   },
    //   features: ["Flexible traveling path with no bottom guide", "Straight or curving path", "Single or double span", "Motorised and non-motorised", "Fail-safe 24vdc E-S-400 electric releaser", "Extra upper limit safety switch", "Air pressure safety bottom sensor", "Wireless remote control", "Typhoon rated designs", "Guide silencer strips"],
    //   applications: ["Atriums", "Architectural voids", "Kiosk and shop fronts", "Large and tall openings", "Hotels", "Malls", "Car parks", "Escalator voids"],
    //   tags: ["Sliding", "Fire Rated", "Flexible Path"],
    //   brand: "SKB",
    //   image: ["/products/skb/lateral-sliding-pathwinder-shutters.jpg"]
    // },
    // {
    //   id: "skb-011",
    //   title: "Lightweight Greaseless Roller Shutters",
    //   model: "Lightweight Greaseless Roller Shutters",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Lightweight",
    //   specifications: {
    //     max_width: "6000mm (Vertical), 8000mm (Sliding)",
    //     max_height: "6000mm (Vertical), 4000mm (Sliding)"
    //   },
    //   features: ["Greaseless guide rails", "Patented riveting system", "Nylon guided bottom bar", "Anti-theft locking latch", "Motorised and Non-motorised", "Air pressure safety bottom sensor", "Extra upper limit safety switch", "Wireless remote control", "Stainless steel guide"],
    //   applications: ["Commercial and residential garage", "Retail store entrances", "Factory and warehouse openings", "Convenience store"],
    //   tags: ["Lightweight", "Greaseless", "Cost Effective"],
    //   brand: "SKB",
    //   image: ["/products/skb/lightweight-greaseless-roller-shutters.jpg"]
    // },
    // {
    //   id: "skb-012",
    //   title: "Motorised Shutters DC Motor",
    //   model: "DC Motor",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Motorised",
    //   specifications: {},
    //   features: ["Battery power up to 8 cycles", "IR safety beam sensor", "Flash light and alarm signals", "Wireless remote control", "Endless chain links", "Replaceable DC battery", "Auto charges battery", "Low maintenance", "Safety fuse", "Push button switches", "Easy-lift during power failure"],
    //   applications: ["Roller grilles", "Shutters"],
    //   tags: ["Motorised", "Battery Powered", "Safety"],
    //   brand: "SKB",
    //   image: ["/products/skb/lightweight-greaseless-roller-shutters.jpg"]
    // },
    // {
    //   id: "skb-013",
    //   title: "Motorized Shutters Safety Beam Sensor",
    //   model: "SKB-IR-5020",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Motorised",
    //   specifications: {},
    //   features: ["Infra-Red Light Beams", "Protection Steel Covers", "Stop for AC Motor", "Stop & Reverse for DC Motor"],
    //   applications: ["All type of shutters"],
    //   tags: ["Safety", "Sensor", "Motorised"],
    //   brand: "SKB",
    //   image: ["/products/skb/roller-grille.jpg"]
    // },
    // {
    //   id: "skb-014",
    //   title: "Outdoor Heavy Duty Design Shutter (Vision 7-OHD)",
    //   model: "Vision 7-OHD",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Outdoor",
    //   specifications: {
    //     max_width: "10000mm",
    //     max_height: "8000mm",
    //     operating_speed: "250mm per second"
    //   },
    //   features: ["High impact resistance Polycarbonate sheets", "Aluminium alloy 6063", "Steel wind locks", "LED traffic lights", "Heavy duty high speed motor", "Wireless remote control", "Guide rail with wind locking groove", "Sound deduction PVC strips", "Double angle bottom bar"],
    //   applications: ["Fire brigades", "Hospitals", "Car and airplane display sites", "High value industrial and commercial display", "Large size showrooms", "Shopping mall entrances", "Commercial car park entrances"],
    //   tags: ["Heavy Duty", "Transparent", "Outdoor"],
    //   brand: "SKB",
    //   image: ["/products/skb/outdoor-heavy-duty-design-shutter.png"]
    // },
    // {
    //   id: "skb-015",
    //   title: "PALUS (Powerless Auto Lift Up Safety)",
    //   model: "PALUS",
    //   sku: "",
    //   category: "Accessories",
    //   subcategory: "Safety",
    //   specifications: {},
    //   features: ["Powerless operation", "Releases motor brake", "Elderly and kid-friendly", "Light force required"],
    //   applications: ["Garage shutters", "Residential security shutters", "Retail shop fronts", "Commercial buildings emergency exits"],
    //   tags: ["Safety", "Powerless", "Emergency"],
    //   brand: "SKB",
    //   image: ["/products/skb/palus.jpg"]
    // },
    // {
    //   id: "skb-016",
    //   title: "Powerless Fail-Safe Flood Shutter",
    //   model: "Powerless Fail-Safe Flood Shutter",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Flood Resistant",
    //   specifications: {},
    //   features: ["No back-up power required", "Link to disaster operation centre", "Reusable and long-lasting", "Witnessed test by SIRIM"],
    //   applications: ["Shopping Mall", "Underground Carpark", "Storage Warehouse", "Industrial Plant", "Commercial & Office Building", "Community Centre", "Disaster Relief Centre", "Hospital and Emergency Care"],
    //   tags: ["Flood Protection", "Powerless", "Fail-Safe"],
    //   brand: "SKB",
    //   image: ["/products/skb/powerless-fail-safe-flood-shutter.jpg"]
    // },
    // {
    //   id: "skb-017",
    //   title: "Roller Grille",
    //   model: "Roller Grille",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Grille",
    //   specifications: {},
    //   features: ["Light but strong", "Air ventilation", "Aluminium and stainless steel types"],
    //   applications: ["Staircase", "Garage", "Terrace/patios", "Outdoor kitchen", "Indoors and outdoors"],
    //   tags: ["Grille", "Ventilation", "Barrier"],
    //   brand: "SKB",
    //   image: ["/products/skb/roller-grille.jpg"]
    // },
    // {
    //   id: "skb-018",
    //   title: "Roller Grille and See-Thru Shutters",
    //   model: "Roller Grille and See-Thru Shutters",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "See-Thru",
    //   specifications: {},
    //   features: ["Perforation holes for visibility and air ventilation", "Light but strong", "Aluminium and stainless steel types"],
    //   applications: ["Shop front or back", "Warehouses", "Garages", "Indoors and outdoors"],
    //   tags: ["See-Thru", "Ventilation", "Visibility"],
    //   brand: "SKB",
    //   image: ["/products/skb/roller-grille.jpg"]
    // },
    // {
    //   id: "skb-019",
    //   title: "Roller Shutter with Swing Door",
    //   model: "SKB-RSSD-S, SKB-RSSD-F",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "With Door",
    //   specifications: {},
    //   features: ["Door within a door", "Swing door for entry without opening shutter", "Can be adapted with various shutter profiles"],
    //   applications: ["Openings with limited space", "Premises needing quick entry/exit"],
    //   tags: ["With Door", "Convenience", "Safety"],
    //   brand: "SKB",
    //   image: ["/products/skb/roller-shutter-with-swing-door.jpg"]
    // },
    // {
    //   id: "skb-020",
    //   title: "Safety Arrester Brakes",
    //   model: "Safety Arrester Brakes",
    //   sku: "",
    //   category: "Accessories",
    //   subcategory: "Safety",
    //   specifications: {},
    //   features: ["Prevents sudden descend", "Acts as shock absorber", "Stops shutter on chain break", "Returns to standby after repair"],
    //   applications: ["All SKB roller shutters"],
    //   tags: ["Safety", "Brakes", "Emergency"],
    //   brand: "SKB",
    //   image: ["/products/skb/safety-arrester-brakes.jpg"]
    // },
    // {
    //   id: "skb-021",
    //   title: "Security Staircase Shutter",
    //   model: "Security Staircase Shutter",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Security",
    //   specifications: {
    //     max_width: "1600mm",
    //     max_height: "2000mm"
    //   },
    //   features: ["Strong and durable", "Easy to maintain", "Heavy duty guide rails", "Manual winding in power failure", "No hacking needed", "Various curtain designs", "Safety sensors"],
    //   applications: ["Staircase landing", "Residential homes", "Commercial premises"],
    //   tags: ["Security", "Staircase", "Residential"],
    //   brand: "SKB",
    //   image: ["/products/skb/security-staircase-shutter.jpg"]
    // },
    // {
    //   id: "skb-022",
    //   title: "SKB-UPS600 Back-Up Battery",
    //   model: "SKB-UPS600",
    //   sku: "",
    //   category: "Accessories",
    //   subcategory: "Power",
    //   specifications: {},
    //   features: ["Smart battery pack", "Backup power for roller shutter", "Only consumes power when activated", "Auto shuts off after 120 seconds"],
    //   applications: ["Roller shutters during power failure"],
    //   tags: ["Power", "Backup", "Battery"],
    //   brand: "SKB",
    //   image: ["/products/skb/skb-ups600-back-up-battery.jpg"]
    // },
    // {
    //   id: "skb-023",
    //   title: "Transparent Shutter (Malaysian Patent No. MY-128431-A)",
    //   model: "VISION-7",
    //   sku: "",
    //   category: "Roller Shutters",
    //   subcategory: "Transparent",
    //   specifications: {
    //     max_width: "8000mm",
    //     max_height: "6000mm"
    //   },
    //   features: ["High impact resistant polycarbonate panels", "Aluminium hinges", "Patented design", "Energy-saving", "Anti-theft", "Excellent powder coat finishing", "Motorised and Non-motorised", "Vertical and lateral sliding"],
    //   applications: ["Display sites", "Jewellery boutiques", "Banks", "Art galleries", "Shopping malls", "Garages", "Residential homes"],
    //   tags: ["Transparent", "Patented", "Security", "Visibility"],
    //   brand: "SKB",
    //   image: ["/products/skb/transparent-shutter.jpg"]
    // },
    // {
    //   id: "skb-024",
    //   title: "Wireless Remote Control",
    //   model: "Rolling Code Security Remote Control",
    //   sku: "",
    //   category: "Accessories",
    //   subcategory: "Control",
    //   specifications: {},
    //   features: ["Plug-and-play", "Rolling code with 10 million codes", "Anti-learning 433 MHz frequency", "Secure operation"],
    //   applications: ["Roller shutters"],
    //   tags: ["Control", "Wireless", "Security"],
    //   brand: "SKB",
    //   image: ["/products/skb/wireless-remote-control.jpg"]
    // }
  ]
}
