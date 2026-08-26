import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy Cleaning',
    shortDescription: 'Comprehensive tenancy handover clean tailored to estate agent and landlord inventory standards.',
    fullDescription: 'Designed specifically for tenants, landlords, and letting agents across Greater Manchester. We clean top-to-bottom according to standard UK check-out inventory checklists, giving peace of mind ahead of final property inspections.',
    badge: 'Popular with Renters & Landlords',
    idealFor: 'Tenants moving out, landlords preparing for new tenants, and estate agents',
    estimatedDuration: '4 - 7 hours (team of 2)',
    features: [
      'Comprehensive inventory-compliant room checklist',
      'Degreasing of kitchen hobs, splashbacks & extractor fans',
      'Descaling of bathroom tiles, taps, screens & sanitary ware',
      'Interior cupboards, drawers, skirting boards & door frames'
    ],
    checklist: [
      {
        category: 'Kitchen',
        items: [
          'Degrease and wipe down all kitchen countertops & tiles',
          'Clean inside and outside of all cupboards & drawers',
          'Polish sink, taps and remove limescale buildup',
          'Wipe microwave, toaster, kettle & appliance exteriors',
          'Clean and degrease extractor hood & filter casing'
        ]
      },
      {
        category: 'Bathrooms & En-suites',
        items: [
          'Full descaling and polishing of taps, showerheads & fittings',
          'Scrub and sanitize bath, shower enclosure & glass screens',
          'Deep clean and disinfect toilet bowl, seat and cistern',
          'Wipe down mirrors, vanity cabinets and wall tiles',
          'Mop and disinfect tiled floors'
        ]
      },
      {
        category: 'Bedrooms & Living Areas',
        items: [
          'Dust and wipe down all skirting boards, switches & sockets',
          'Wipe interior window sills and ledges',
          'Clean inside empty wardrobes and drawers',
          'Vacuum carpets thoroughly and mop all hard flooring',
          'Remove cobwebs from corners and ceiling edges'
        ]
      }
    ]
  },
  {
    id: 'domestic',
    title: 'Domestic Cleaning',
    shortDescription: 'Reliable, bespoke home cleaning tailored to keep your living space fresh, healthy, and pristine.',
    fullDescription: 'Our domestic cleaning service delivers consistent high standards for flats and houses throughout Manchester. Whether you need a helping hand each week or an occasional lift, we adapt to your household routine.',
    badge: 'Flexible Home Care',
    idealFor: 'Busy professionals, families, and homeowners wanting more free time',
    estimatedDuration: '2 - 4 hours',
    features: [
      'Personalized task list tailored to your priority rooms',
      'Dusting of all reachable surfaces, ornaments & furniture',
      'Sanitizing kitchens and bathrooms thoroughly',
      'Vacuuming all floor coverings and damp mopping hard floors'
    ],
    checklist: [
      {
        category: 'General Home',
        items: [
          'Dust reachable surfaces, shelves, and side tables',
          'Empty household bins and replace liners',
          'Vacuum rugs, carpets, and runners',
          'Mop hard wood, laminate, or tiled floors',
          'Tidy cushions, throws, and living area surfaces'
        ]
      },
      {
        category: 'Kitchen & Dining',
        items: [
          'Wipe exterior surfaces of cupboards and white goods',
          'Scrub and polish kitchen sink and chrome fixtures',
          'Wipe down dining table, chairs, and worktops',
          'Spot clean exterior fridge and microwave surfaces'
        ]
      },
      {
        category: 'Bathrooms',
        items: [
          'Clean and sanitize washbasin, bathtub, and shower cubicle',
          'Disinfect toilet bowl and outer porcelain',
          'Buff mirrors and glass panels to a streak-free shine'
        ]
      }
    ]
  },
  {
    id: 'office',
    title: 'Office & Commercial Cleaning',
    shortDescription: 'Discreet, high-standard workplace cleaning to maintain productive and welcoming environments.',
    fullDescription: 'From boutique city-centre studios in central Manchester to tech spaces in MediaCity and offices in Trafford, we keep workplaces clean, hygienic, and ready for clients and staff every business day.',
    badge: 'Commercial Standards',
    idealFor: 'Offices, studios, co-working spaces, and commercial premises',
    estimatedDuration: 'Custom schedule (Daily / Weekly / After-hours)',
    features: [
      'Early morning, daytime, or evening scheduling',
      'Desk sanitation, keyboard dusting & high-touch points',
      'Communal kitchen and breakroom degreasing & restocking',
      'Washroom deep cleaning and waste bin management'
    ],
    checklist: [
      {
        category: 'Workstations & Communal Areas',
        items: [
          'Sanitize shared desks, conference tables, and meeting rooms',
          'Disinfect door handles, light switches & elevator buttons',
          'Vacuum office carpeting, under-desk areas & reception rugs',
          'Empty all individual desk bins and communal recycling stations'
        ]
      },
      {
        category: 'Kitchenette & Breakroom',
        items: [
          'Wipe kitchen counters, sink, tap, and splashbacks',
          'Clean exterior microwave, coffee machine & kettle',
          'Wipe exterior of office fridges and cupboards',
          'Mop and disinfect kitchen flooring'
        ]
      },
      {
        category: 'Washrooms',
        items: [
          'Disinfect all toilet cubicles, urinals, and sinks',
          'Refill soap dispensers, hand towels & toilet paper',
          'Mop floors with commercial-grade antibacterial sanitizer'
        ]
      }
    ]
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    shortDescription: 'An intensive, meticulous top-to-bottom scrub tackling built-up grime, scale, and hard-to-reach areas.',
    fullDescription: 'When your property needs more than routine maintenance, our deep cleaning service goes into every nook and cranny. We address accumulated limescale, behind large furniture, high ledges, and deep surface grease.',
    badge: 'Total Refresh',
    idealFor: 'Seasonal spring cleans, neglected spaces, or pre-event preparations',
    estimatedDuration: '4 - 8 hours',
    features: [
      'Intense limescale treatment on tiles, taps & grout lines',
      'Behind and under accessible furniture and appliances',
      'Deep dusting of skirting boards, door tops, and radiators',
      'Detailed wipe-down of all interior door frames and light switches'
    ],
    checklist: [
      {
        category: 'Deep Detail Work',
        items: [
          'Wipe behind and beneath accessible sofas and tables',
          'Detailed scrubbing of tile grout lines and silicone seals',
          'Dust and wash interior doors, handles, and architraves',
          'Thorough cleaning inside window reveals and sills',
          'Dusting radiator fronts, tops, and surrounding skirting'
        ]
      },
      {
        category: 'Kitchen Deep Scrub',
        items: [
          'Scrub kitchen splashback tiles and remove heavy grease',
          'Clean tops of kitchen cabinets and fridge exterior',
          'Deep clean sink drainage rim and polish taps',
          'Degrease extractor hood casing and surrounding tiles'
        ]
      }
    ]
  },
  {
    id: 'one-off',
    title: 'One-Off Cleaning',
    shortDescription: 'A single, high-impact cleaning visit booked on-demand whenever you need a fast, thorough reset.',
    fullDescription: 'No ongoing commitments or contracts. Book a dedicated cleaning team for a single visit when preparing for guests, recovering from a family event, or simply catching up on household chores.',
    badge: 'No Commitment Needed',
    idealFor: 'Special occasions, post-party cleanups, or a spontaneous reset',
    estimatedDuration: '3 - 5 hours',
    features: [
      'Book on short notice subject to local team availability',
      'Focus the team on specific priority rooms or the whole property',
      'All standard cleaning supplies and equipment provided',
      'Direct, flat transparent quoting'
    ],
    checklist: [
      {
        category: 'One-Off Priorities',
        items: [
          'Full vacuuming and floor mopping throughout the property',
          'Intensive bathroom and kitchen sanitization',
          'Dusting all flat surfaces, window ledges, and shelving',
          'Rubbish removal and bin liner replacement'
        ]
      }
    ]
  },
  {
    id: 'regular',
    title: 'Regular Cleaning',
    shortDescription: 'Consistent weekly, fortnightly, or monthly visits by reliable local cleaners who know your preferences.',
    fullDescription: 'Keep your home or workplace consistently immaculate with a recurring schedule. Enjoy the convenience of a dedicated routine, predictable visits, and a fresh environment every single week.',
    badge: 'Most Convenient',
    idealFor: 'Homeowners and tenants seeking ongoing maintenance without hassle',
    estimatedDuration: '2 - 3.5 hours per visit',
    features: [
      'Choose weekly, fortnightly, or monthly schedules',
      'Same dedicated cleaner or team whenever possible',
      'Flexible rescheduling with advance notice',
      'Customized checklist based on your lifestyle'
    ],
    checklist: [
      {
        category: 'Recurring Routine',
        items: [
          'Kitchen worktop, sink, and hob wiped and degreased',
          'Bathroom shower, bath, sink, and toilet sanitized',
          'All bedrooms dusted and beds made upon request',
          'Complete vacuuming and mopping of all high-traffic areas'
        ]
      }
    ]
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleaning',
    shortDescription: 'Specialist builders clean to remove fine plaster dust, paint specks, and renovation debris.',
    fullDescription: 'Renovations, extensions, and plastering leave pervasive dust across every surface. Our post-construction cleaning service tackles fine airborne residue, labels, and construction grime to leave newly finished rooms ready for living.',
    badge: 'Builders & Renovation Clean',
    idealFor: 'Newly renovated homes, property developments, and commercial fit-outs',
    estimatedDuration: '5 - 9 hours',
    features: [
      'Removal of fine plaster dust from ceilings, walls & ledges',
      'Paint fleck and silicone residue removal from glass and tiles',
      'Sparkle clean finish for newly installed kitchens & bathrooms',
      'Thorough multi-stage vacuuming with HEPA filtration'
    ],
    checklist: [
      {
        category: 'Dust & Debris Management',
        items: [
          'Wipe down walls, doors, and trim to remove settled plaster dust',
          'Vacuum inside new joinery, wardrobes, and kitchen cabinetry',
          'Remove manufacturer stickers and protective film from fixtures',
          'Multi-pass HEPA vacuuming on carpets and hard floor surfaces'
        ]
      },
      {
        category: 'Finishing Touches',
        items: [
          'Streak-free cleaning of window panes, frames, and tracks',
          'Polish new sanitaryware, chrome taps, and stainless steel sinks',
          'Final damp mop to remove dusty footprints'
        ]
      }
    ]
  },
  {
    id: 'moving-in-out',
    title: 'Moving-In / Moving-Out Cleaning',
    shortDescription: 'A fresh, sanitized start before unpacking into your new Manchester property or handing back the keys.',
    fullDescription: 'Moving house is stressful enough without worrying about the cleanliness of your new or old home. We sanitize cupboards, appliances, bathrooms, and floors so your family can unpack into a completely fresh space.',
    badge: 'Stress-Free Relocation',
    idealFor: 'Home buyers, sellers, and renters undergoing a relocation',
    estimatedDuration: '4 - 6 hours',
    features: [
      'Disinfection of all food storage cabinets and fridge spaces',
      'Sanitizing bathrooms and bedrooms before luggage arrival',
      'All floors vacuumed, deep washed, and ready for furniture',
      'Interior window cleaning and ledge dust removal'
    ],
    checklist: [
      {
        category: 'Move-In Sanitation',
        items: [
          'Disinfect all kitchen cabinets inside and out before food is stored',
          'Thoroughly sanitize all bathroom fixtures, baths, and toilets',
          'Wipe clean all wardrobe interiors, drawers, and shelving',
          'Deep clean skirting boards, light switches, and radiators',
          'Complete floor washing for pristine move-in comfort'
        ]
      }
    ]
  }
];
