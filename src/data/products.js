// ============================================================================
// PATEL PLY & HARDWARE SANITARY — ARCHITECTURAL PRODUCT ARCHIVE DATA
// Data Architecture: Category -> Products[]
// Flexible, extensible structure ready for live showroom data replacement.
// ============================================================================

export const CATEGORIES = [
  {
    id: 'ceramic-water-taps',
    slug: 'ceramic-water-taps',
    name: 'CERAMIC WATER TAPS',
    shortName: 'Ceramic Water Taps',
    headline: 'CERAMIC\nWATER TAPS',
    badge: 'PRECISION WATER ARCHITECTURE',
    description: 'Contemporary taps and water fittings designed for modern spaces.',
    longDescription: 'Curated deck-mounted and concealed wall water fittings engineered with high-density ceramic disc cartridges, acoustic aerators, and durable PVD titanium finishes for timeless tactile precision.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=85',
    itemCountText: '6 Curated Fittings',
    products: [
      {
        id: 'tap-01',
        slug: 'monolithic-basin-mixer-brushed-bronze',
        categoryId: 'ceramic-water-taps',
        categorySlug: 'ceramic-water-taps',
        categoryName: 'Ceramic Water Taps',
        name: 'Monolithic Single-Lever Basin Mixer',
        code: 'TAP-C101',
        descriptor: 'Deck-mounted single-lever mixer with laminar waterfall aerator',
        description: 'Forged from heavy dezincification-resistant brass with a precision 35mm Kerox ceramic disc core. Finished in multilayer PVD Brushed Bronze that resists mineral buildup, saline coastal atmospheres, and fingerprints.',
        image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'CARTRIDGE CORE', val: 'Kerox 35mm Ceramic Disc (500,000 Cycles)' },
          { label: 'BASE MATERIAL', val: 'Dezincification Resistant Solid Brass' },
          { label: 'SURFACE PROCESS', val: 'Multilayer PVD Titanium Vapor Deposition' },
          { label: 'AERATOR SYSTEM', val: 'Swiss Neoperl Cascade Laminar Flow' },
          { label: 'OPERATING PRESSURE', val: '0.5 bar to 5.0 bar High Flow Calibrated' },
          { label: 'WATER EFFICIENCY', val: 'Eco-Smart 5.2 Litres / Minute Flow Limiter' }
        ],
        finishes: ['Brushed Bronze PVD', 'Satin Champagne Gold', 'Matte Charcoal Black', 'Polished Chrome'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'tap-02',
        slug: 'concealed-wall-mounted-basin-spout',
        categoryId: 'ceramic-water-taps',
        categorySlug: 'ceramic-water-taps',
        categoryName: 'Ceramic Water Taps',
        name: 'Concealed Wall Spout & Ceramic Valve',
        code: 'TAP-C102',
        descriptor: 'Architectural wall-mounted spout with concealed universal rough-in box',
        description: 'Eliminates deck clutter with pure geometric projection. Features a counterbalanced ceramic disc valve that delivers silky modulation between ice-cold and tempered warm water.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'PROJECTION SPAN', val: '210 mm Centre-to-Centre Reach' },
          { label: 'ROUGH-IN BODY', val: 'Cast Brass In-Wall Mounting Box Included' },
          { label: 'CARTRIDGE', val: 'Rotary Ceramic Headwork with Soft Damping' },
          { label: 'FINISH', val: 'Deep Honed Charcoal PVD' },
          { label: 'NOISE CLASS', val: 'Acoustic Group 1 (< 20 dB at 3 bar)' },
          { label: 'CONNECTION', val: 'Standard 1/2" BSP Female Threaded' }
        ],
        finishes: ['Matte Charcoal', 'Brushed Bronze', 'Champagne Brass', 'Brushed Nickel'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'tap-03',
        slug: 'architectural-high-arc-pillar-tap',
        categoryId: 'ceramic-water-taps',
        categorySlug: 'ceramic-water-taps',
        categoryName: 'Ceramic Water Taps',
        name: 'Architectural High-Arc Pillar Tap',
        code: 'TAP-C103',
        descriptor: 'Tall swivel spout engineered for sculptural countertop stone vessels',
        description: 'An elongated silhouette specifically proportioned for deep countertop marble and monolithic ceramic basins. Full 360-degree smooth swivel with quarter-turn ceramic sealing.',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'HEIGHT OVERALL', val: '315 mm Tall Clearance' },
          { label: 'ROTATION RADIUS', val: '360° Teflon-Bearing Swivel Action' },
          { label: 'VALVE PROFILE', val: 'Quarter-Turn Ceramic Disc Cartridge' },
          { label: 'WATERWAY', val: '100% Lead-Free Inner Fluid Channel' },
          { label: 'COATING', val: 'Satin Champagne Gold Electro-Polished' },
          { label: 'BASE RING', val: 'Concealed Rubber O-Ring Counter Seal' }
        ],
        finishes: ['Satin Champagne Gold', 'Brushed Bronze', 'Matte Black', 'Chrome Mirror'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'tap-04',
        slug: 'dual-flow-thermostatic-bath-mixer',
        categoryId: 'ceramic-water-taps',
        categorySlug: 'ceramic-water-taps',
        categoryName: 'Ceramic Water Taps',
        name: 'Dual-Flow Thermostatic Bath Mixer',
        code: 'TAP-C104',
        descriptor: 'Concealed thermostatic module with 38°C safety interlock',
        description: 'Engineered for luxury master suites. Features dual independent ceramic volume diverters and an instant-reacting wax/ceramic thermostatic core that locks water temperature at exactly 38°C.',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'THERMOSTATIC CORE', val: 'Vernet High-Precision Wax/Ceramic Capsule' },
          { label: 'SAFETY STOP', val: '38°C Automatic Safety Temperature Override' },
          { label: 'CHANNELS', val: '2-Way Diverter (Overhead Rain & Handset)' },
          { label: 'ESCUTCHEON', val: 'Solid 4mm CNC Forged Faceplate' },
          { label: 'BURST PRESSURE', val: 'Tested to 25 bar Static Hydraulic Load' },
          { label: 'FINISH', val: 'Brushed Gunmetal PVD Titanium' }
        ],
        finishes: ['Brushed Gunmetal', 'Brushed Bronze', 'Matte Charcoal Black', 'Warm Champagne'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'tap-05',
        slug: 'minimalist-angular-tall-basin-mixer',
        categoryId: 'ceramic-water-taps',
        categorySlug: 'ceramic-water-taps',
        categoryName: 'Ceramic Water Taps',
        name: 'Minimalist Angular Tall Basin Mixer',
        code: 'TAP-C105',
        descriptor: 'Sharp geometric body engineered for contemporary washstands',
        description: 'Clean chamfered architectural facets designed to pair seamlessly with square-edge vanity counters. Ceramic disc control lever glides with effortless tactile weight.',
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'PROFILE GEOMETRY', val: 'Right-Angle Chamfered Architectural Spout' },
          { label: 'CARTRIDGE', val: 'Sedal 28mm Slim Ceramic Disc' },
          { label: 'FLOW ANGLE', val: '15° Forward Projected Aerated Jet' },
          { label: 'HOSES INCLUDED', val: '600mm Stainless Braided PEX Feed Pipes' },
          { label: 'FINISH', val: 'Raw Brushed Nickel Satin PVD' },
          { label: 'TEMPERATURE RANGE', val: 'Max 90°C Working Temp' }
        ],
        finishes: ['Brushed Nickel', 'Matte Charcoal', 'Brushed Bronze', 'Mirror Chrome'],
        filterTag: 'featured',
        isPopular: false,
        isNew: false
      },
      {
        id: 'tap-06',
        slug: 'ribbon-cascade-waterfall-basin-spout',
        categoryId: 'ceramic-water-taps',
        categorySlug: 'ceramic-water-taps',
        categoryName: 'Ceramic Water Taps',
        name: 'Ribbon Cascade Waterfall Spout',
        code: 'TAP-C106',
        descriptor: 'Open channel laminar waterfall delivery with soothing acoustics',
        description: 'An open-channel spout crafted to deliver water as a tranquil natural ribbon. Custom ceramic cartridge ensures non-splattering, quiet laminar flow onto porcelain surfaces.',
        image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'SPOUT DELIVERY', val: 'Open Ribbon Laminar Cascade (Non-Aerated)' },
          { label: 'VALVE SYSTEM', val: 'High-Volume Ceramic Disc Regulation' },
          { label: 'SURFACE BODY', val: 'Solid Forged Brass Block Construction' },
          { label: 'FINISH', val: 'Matte Alabaster & Warm Bronze Dual Tone' },
          { label: 'FLOW SPREAD', val: '45mm Wide Natural Water Ribbon' },
          { label: 'CERTIFICATION', val: 'EN 817 Sanitary Tapware Standard' }
        ],
        finishes: ['Matte Alabaster / Bronze', 'Brushed Bronze Monolith', 'Charcoal PVD'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      }
    ]
  },
  {
    id: 'berger-colors',
    slug: 'berger-colors',
    name: 'BERGER COLORS',
    shortName: 'Berger Colors',
    headline: 'BERGER\nCOLORS',
    badge: 'ARCHITECTURAL COATINGS & FINISHES',
    description: 'Colours and finishes for walls, interiors and everyday spaces.',
    longDescription: 'Engineered architectural emulsions, mineral artisan textures, and resilient exterior weather coats from Berger. Developed with advanced polyurethane binders, low-VOC pigments, and light-fast mineral dispersions.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85',
    itemCountText: '6 Curated Finishes',
    products: [
      {
        id: 'col-01',
        slug: 'silk-glamor-luxury-emulsion-linen',
        categoryId: 'berger-colors',
        categorySlug: 'berger-colors',
        categoryName: 'Berger Colors',
        name: 'Silk Glamor Luxury Emulsion — Earthen Linen',
        code: 'COL-B201',
        descriptor: 'Ultra-luxurious rich sheen interior emulsion with soft pearl undertones',
        description: 'Formulated with ultra-fine crystal technology and high-purity polyurethane binders. Delivers an opulent eggshell touch that scatters ambient light evenly across interior gypsum and lime plasters.',
        image: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'SHEEN LEVEL', val: 'Rich Silk / Soft Pearl (18–22% at 60°)' },
          { label: 'WASHABILITY', val: '10,000+ Continuous Scrub Cycles' },
          { label: 'VOLATILE ORGANIC', val: 'Ultra-Low VOC (< 15 g/L), Near-Zero Odour' },
          { label: 'THEORETICAL SPREAD', val: '140 – 160 sq.ft / Litre (2 Coats)' },
          { label: 'DRYING PROFILE', val: 'Touch Dry: 30 Mins • Recoat: 3–4 Hours' },
          { label: 'ANTIMICROBIAL', val: 'Silver-Ion Active Film Protection' }
        ],
        finishes: ['Earthen Linen', 'Desert Sand', 'Warm Greige', 'Misty Alabaster'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'col-02',
        slug: 'weathercoat-long-life-exterior-system',
        categoryId: 'berger-colors',
        categorySlug: 'berger-colors',
        categoryName: 'Berger Colors',
        name: 'WeatherCoat Long Life Exterior System',
        code: 'COL-B202',
        descriptor: 'Heavy-duty PU silicone exterior shield with solar heat reflection',
        description: 'A robust architectural coating designed to protect exterior facades from severe Gujarat monsoon downpours and blazing UV heat. Incorporates PU cross-linking and anti-algal nano-capsules.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'WARRANTY RATING', val: '10-Year Weather & Performance Guarantee' },
          { label: 'POLYMER BASE', val: 'Siliconized Pure Acrylic & PU Cross-linking' },
          { label: 'SOLAR REFLECTANCE', val: 'SRI > 105 (Reduces Surface Temp up to 5°C)' },
          { label: 'ELONGATION', val: 'Bridge Hairline Cracks up to 1.5mm' },
          { label: 'DIRT PICKUP', val: 'Self-Cleaning Hydrophobic Rain Sheeting' },
          { label: 'SPREAD RATE', val: '60 – 70 sq.ft / Litre (2 Coats)' }
        ],
        finishes: ['Raw Desert Stone', 'Limestone White', 'Modern Terracotta', 'Granite Charcoal'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'col-03',
        slug: 'imperia-artisan-texture-honed-travertine',
        categoryId: 'berger-colors',
        categorySlug: 'berger-colors',
        categoryName: 'Berger Colors',
        name: 'Imperia Artisan Wall Texture — Honed Travertine',
        code: 'COL-B203',
        descriptor: 'Mineral stone aggregate composition with tactile fluted trowel finish',
        description: 'Handcrafted architectural wall texture containing genuine Carrara marble flour and lime-polymeric binders. Brings tactile earthen dimension to double-height living walls, stairwells, and foyer feature planes.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'COMPOSITION', val: 'Select Italian Marble Aggregates & Lime Matrix' },
          { label: 'APPLICATION', val: 'Stainless Steel Venetian Trowel & Texturing' },
          { label: 'SURFACE EFFECT', val: 'Honed Travertine Pitted Relief Texture' },
          { label: 'BREATHABILITY', val: 'High Vapor Permeability (Class V1)' },
          { label: 'FIRE STANDARD', val: 'Class A Non-Combustible Flame Spread' },
          { label: 'TOPCOAT SEAL', val: 'Imperia Hydrophobic Matte Wax Sealer' }
        ],
        finishes: ['Honed Travertine', 'Cast Concrete Ash', 'Warm Pitted Sand', 'Clay Monolith'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'col-04',
        slug: 'breathe-easy-interior-matte-warm-alabaster',
        categoryId: 'berger-colors',
        categorySlug: 'berger-colors',
        categoryName: 'Berger Colors',
        name: 'Breathe Easy Anti-Pollution Interior Matte',
        code: 'COL-B204',
        descriptor: 'Zero-VOC active air-purifying emulsion with dead-flat velvety texture',
        description: 'Specially engineered for bedrooms and private sanctuaries. Features active formaldehyde-absorbing molecular sieves and zero VOCs, imparting a tranquil, non-reflective velvety aura to architectural rooms.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'FINISH SHEEN', val: 'Architectural Dead Matte (< 3% at 85°)' },
          { label: 'VOC EMISSION', val: '0 g/L (Green Pro & RoHS Certified)' },
          { label: 'AIR PURIFYING', val: 'Absorbs Airborne Free Formaldehyde' },
          { label: 'SPREADING CAPACITY', val: '150 – 170 sq.ft / Litre per Coat' },
          { label: 'ANTIFUNGAL', val: 'Active Micro-Shield Prevents Black Spores' },
          { label: 'ODOUR PROFILE', val: 'Zero Chemical Scent / Immediate Room Occupancy' }
        ],
        finishes: ['Warm Alabaster', 'Chalk Off-White', 'Muted Sage', 'Feather Grey'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'col-05',
        slug: 'silk-glamor-metallic-illusion-champagne',
        categoryId: 'berger-colors',
        categorySlug: 'berger-colors',
        categoryName: 'Berger Colors',
        name: 'Silk Glamor Metallic Illusion — Champagne Ochre',
        code: 'COL-B205',
        descriptor: 'Designer accent finish infused with micro-pearl metallic pigments',
        description: 'Refracts directional spotlights into a subtle shimmering metallic patina. Used extensively for boutique dining backdrops, bed headboard niches, and hotel hospitality focal points.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'METALLIC EFFECT', val: 'Micro-Mica Pearl Light Refraction' },
          { label: 'TOOL TECHNIQUES', val: 'Architectural Spatula, Sponge, or Cross-Hatch' },
          { label: 'BASE COAT', val: 'Tinted Acrylic Primer Intercoat Required' },
          { label: 'ABRASION', val: 'Scrub Resistant Polyurethane Binder' },
          { label: 'TOUCH DRY', val: '45 Minutes at 25°C' },
          { label: 'COATING TYPE', val: '100% Water-Based Specialty Acrylic' }
        ],
        finishes: ['Champagne Ochre', 'Antique Bronze Gold', 'Silver Nickel Sheen', 'Smoked Copper'],
        filterTag: 'featured',
        isPopular: false,
        isNew: false
      },
      {
        id: 'col-06',
        slug: 'imperia-pu-wood-finish-clear-matte',
        categoryId: 'berger-colors',
        categorySlug: 'berger-colors',
        categoryName: 'Berger Colors',
        name: 'Imperia Luxury Polyurethane Wood Finish — Clear Matte',
        code: 'COL-B206',
        descriptor: 'Italian resin transparent timber coating preserving natural grain tactility',
        description: 'Preserves the organic look and raw touch of calibrated Gurjan veneers and teak solid woods without yellowing over time. Highly resistant to scalding hot coffee spills, alcohol, and scratches.',
        image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'RESIN SYSTEM', val: '2-Pack Aliphatic Polyurethane (Non-Yellowing)' },
          { label: 'GLOSS PROFILE', val: 'Dead-Matte 5% / Satin 25% / High Gloss 90%' },
          { label: 'PENCIL HARDNESS', val: '3H Extreme Mechanical Scratch Resistance' },
          { label: 'CHEMICAL TEST', val: 'Passes 24h Tea, Coffee & Spirit Stain Barrier' },
          { label: 'UV STABILIZER', val: 'HALS UV-Filter Shield for Natural Timber' },
          { label: 'MIXING RATIO', val: 'Base to Hardener 2:1 by Volume' }
        ],
        finishes: ['Dead-Matte 5%', 'Silk Satin 25%', 'Deep Piano Gloss 95%'],
        filterTag: 'featured',
        isPopular: false,
        isNew: false
      }
    ]
  },
  {
    id: 'kitchen-hardware',
    slug: 'kitchen-hardware',
    name: 'KITCHEN HARDWARE',
    shortName: 'Kitchen Hardware',
    headline: 'KITCHEN\nHARDWARE',
    badge: 'MICRO-MECHANICAL PRECISION',
    description: 'Functional hardware and accessories for refined kitchen spaces.',
    longDescription: 'Engineered drawer box systems, concealed synchronised slides, pneumatic lift-up flaps, and architectural Gola profiles that turn kitchen cabinetry into silent, weightless culinary environments.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    itemCountText: '6 Precision Systems',
    products: [
      {
        id: 'khw-01',
        slug: 'concealed-soft-close-tandem-drawer-box',
        categoryId: 'kitchen-hardware',
        categorySlug: 'kitchen-hardware',
        categoryName: 'Kitchen Hardware',
        name: 'Slim-Wall Soft-Close Tandem Drawer System',
        code: 'KHW-K301',
        descriptor: '13mm straight metal side drawer box with synchronized undermount runners',
        description: 'Featuring razor-thin 13mm straight interior walls for maximum storage volume. Dynamic rack-and-pinion synchronized runners guarantee featherlight glide even under heavy 45kg cast-iron cookware loads.',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'LOAD RATING', val: '45 kg Dynamic / 60 kg Static Load' },
          { label: 'DRAWER WALL', val: '13 mm Ultra-Slim Straight Metal Profile' },
          { label: 'SYNCHRONIZATION', val: 'Rack-and-Pinion Precision Full Extension' },
          { label: '3D ADJUSTMENT', val: 'Tool-Free Cam Height, Side & Tilt Alignment' },
          { label: 'CYCLE LIFE', val: '100,000+ Cycles EN 15338 Level 3 Certified' },
          { label: 'FINISH', val: 'Powder-Coated Anthracite Silk & Pure White' }
        ],
        finishes: ['Matte Anthracite', 'Silk Stone White', 'Champagne Metallic'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'khw-02',
        slug: 'bifold-hydraulic-cabinet-lift-up-system',
        categoryId: 'kitchen-hardware',
        categorySlug: 'kitchen-hardware',
        categoryName: 'Kitchen Hardware',
        name: 'Bi-Fold Hydraulic Cabinet Lift-Up Mechanism',
        code: 'KHW-K302',
        descriptor: 'Pneumatic stay for overhead double-flap cabinetry with variable stop',
        description: 'Effortlessly glides two overhead cabinet doors upwards and completely out of the chef’s work envelope. Features an adjustable spring counter-balance that holds the door steady in any open angle.',
        image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'CABINET HEIGHT', val: 'Accommodates 600mm to 1040mm Carcasses' },
          { label: 'DOOR WIDTH', val: 'Supports Panel Widths up to 1200 mm' },
          { label: 'VARIABLE STOP', val: 'Stays Balanced at Any Desired Height' },
          { label: 'SOFT CLOSE', val: 'Pneumatic Fluid Brake for Silent Impact-Free Closing' },
          { label: 'FINGER SAFETY', val: 'Center Hinge with Integrated Pinch Protection' },
          { label: 'POWER FACTOR', val: 'Adjustable Hex-Tension Calibration' }
        ],
        finishes: ['Titanium Grey Cap', 'Matte White Cap', 'Deep Anthracite'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'khw-03',
        slug: 'pvd-knurled-brass-cabinet-pulls',
        categoryId: 'kitchen-hardware',
        categorySlug: 'kitchen-hardware',
        categoryName: 'Kitchen Hardware',
        name: 'PVD Knurled Solid Brass Cabinet Pulls & T-Bars',
        code: 'KHW-K303',
        descriptor: 'Heavy forged brass cabinet pulls featuring diamond tactile knurling',
        description: 'Milled from monolithic architectural solid brass with diamond-cut knurling that offers reassuring grip even with damp hands. Sealed with advanced PVD to repel culinary oils and spices.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'MATERIAL', val: 'Solid Forged CW617N Brass' },
          { label: 'SURFACE COATING', val: 'Hardened Titanium PVD Coating' },
          { label: 'CENTRE SIZES', val: '160mm, 224mm, 320mm & Matching T-Knobs' },
          { label: 'PROJECTION', val: '38 mm Generous Finger Clearance' },
          { label: 'FASTENERS', val: 'M4 Breakaway Snap-Off Screws Included' },
          { label: 'WEIGHT', val: 'Substantial Weighted Solid Core Feel' }
        ],
        finishes: ['Brushed Bronze PVD', 'Satin Champagne Gold', 'Matte Charcoal Black', 'Antique Brass'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'khw-04',
        slug: 'rotating-blind-corner-carousel-pullout',
        categoryId: 'kitchen-hardware',
        categorySlug: 'kitchen-hardware',
        categoryName: 'Kitchen Hardware',
        name: 'Rotating Blind Corner Carousel Unit',
        code: 'KHW-K304',
        descriptor: 'Double kidney shelf pull-out bringing deep blind corners fully into view',
        description: 'Transforms unreachable L-corner dead zones into fluid architectural storage. Each organic contoured tray swings smoothly outside the cabinet carcass with independent motion and soft damping.',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'TRAY CAPACITY', val: '25 kg Per Tray Dynamic Payload' },
          { label: 'SURFACE BASE', val: 'Textured Non-Slip Anti-Slide Base Matting' },
          { label: 'RETRACTION', val: 'Self-Closing Soft-Motion Damping' },
          { label: 'DOOR COMPATIBILITY', val: 'Suits 450mm, 500mm & 600mm Corner Openings' },
          { label: 'COLUMN HEIGHT', val: 'Telescopic Axial Pivot (650mm – 850mm)' },
          { label: 'SURROUNDING RAIL', val: 'Cast Aluminum Flat Architectural Gallery Wire' }
        ],
        finishes: ['Anthracite & Champagne Rail', 'Pure White & Polished Chrome'],
        filterTag: 'featured',
        isPopular: false,
        isNew: false
      },
      {
        id: 'khw-05',
        slug: 'architectural-recessed-gola-profile-system',
        categoryId: 'kitchen-hardware',
        categorySlug: 'kitchen-hardware',
        categoryName: 'Kitchen Hardware',
        name: 'Architectural Recessed Gola Profile System',
        code: 'KHW-K305',
        descriptor: 'Continuous aluminum channel system for handleless kitchen cabinetry',
        description: 'Creates unbroken horizontal and vertical shadow lines across kitchen islands and wall banks. Eliminates conventional protruding knobs for a serene, monolithic European kitchen aesthetic.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'PROFILE TYPES', val: 'Horizontal C-Shape (Intermediate) & L-Shape (Top Edge)' },
          { label: 'ALLOY GRADE', val: 'Architectural Extruded Aluminum 6063-T6' },
          { label: 'FINISH PROCESS', val: 'Deep Anodized Matte Velvet Coating' },
          { label: 'STANDARD LENGTH', val: '3000 mm Extrusions with Corner Castings' },
          { label: 'ACCESSORIES', val: 'Concealed Fixing Brackets & End Caps Included' },
          { label: 'ERGONOMICS', val: 'Ergonomic 35mm Deep Finger Recess' }
        ],
        finishes: ['Matte Charcoal Black', 'Brushed Champagne Gold', 'Natural Silver Anodized'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'khw-06',
        slug: 'undersink-modular-stainless-waste-organizer',
        categoryId: 'kitchen-hardware',
        categorySlug: 'kitchen-hardware',
        categoryName: 'Kitchen Hardware',
        name: 'Under-Sink Stainless Modular Waste Organizer',
        code: 'KHW-K306',
        descriptor: 'Full-extension heavy drawer pull-out dual bin system with odor seal',
        description: 'Engineered to fit precisely under sink plumbing traps. Integrates two high-density polymer bins with an anti-microbial charcoal lid filter and smooth soft-closing full-extension rails.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'CAPACITY', val: '42 Litres Total (2 × 21L Dual Compartments)' },
          { label: 'RUNNER MECHANISM', val: 'Heavy-Duty 40 kg Synchronized Undermount' },
          { label: 'LID SEAL', val: 'Automatic Closing Lid with Activated Carbon Filter' },
          { label: 'BODY FRAME', val: 'Grade 304 Stainless Steel Side Racks' },
          { label: 'CLEANING', val: 'Removable Buckets with Sturdy Steel Carry Handles' },
          { label: 'CABINET WIDTH', val: 'Engineered for 600mm Carcass Units' }
        ],
        finishes: ['Matte Anthracite & 304 Steel', 'Slate Grey'],
        filterTag: 'featured',
        isPopular: false,
        isNew: false
      }
    ]
  },
  {
    id: 'hardware',
    slug: 'hardware',
    name: 'HARDWARE',
    shortName: 'Hardware',
    headline: 'HARDWARE',
    badge: 'ARCHITECTURAL JOINERY & APPOINTMENTS',
    description: 'Reliable hardware solutions for construction, furniture and everyday applications.',
    longDescription: 'Heavy solid brass mortise handles, 3D concealed hinges, magnetic acoustic latches, and heavy sliding door systems crafted for 200,000+ seamless cycles and lifelong structural integrity.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
    itemCountText: '6 Architectural Solutions',
    products: [
      {
        id: 'hdw-01',
        slug: 'solid-brass-architectural-mortise-quadra',
        categoryId: 'hardware',
        categorySlug: 'hardware',
        categoryName: 'Hardware',
        name: 'Solid Brass Architectural Mortise Handle — Quadra',
        code: 'HDW-H401',
        descriptor: 'Architectural chamfered lever set on monolithic concealed round rose',
        description: 'Forged from high-tensile brass alloy with crisp chamfered proportions. Internal dual-spring cassette ensures zero sag over decades of commercial or luxury residential use.',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'MATERIAL CORE', val: 'Forged Solid Brass (CuZn39Pb2)' },
          { label: 'COATING SPEC', val: 'Titanium Vapor PVD Brushed Bronze' },
          { label: 'SPRING CASSETTE', val: 'Dual Heavy Return Springs (Zero Droop)' },
          { label: 'DURABILITY CLASS', val: 'EN 1906 Grade 4 (200,000+ Verified Cycles)' },
          { label: 'SPINDLE SIZE', val: '8mm Hardened Solid Steel Split Spindle' },
          { label: 'DOOR THICKNESS', val: 'Suitable for 35 mm to 55 mm Timber Doors' }
        ],
        finishes: ['Brushed Bronze PVD', 'Satin Champagne Gold', 'Matte Charcoal Black', 'Antique Brushed Brass'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'hdw-02',
        slug: 'concealed-3d-adjustable-door-hinge',
        categoryId: 'hardware',
        categorySlug: 'hardware',
        categoryName: 'Hardware',
        name: 'Concealed 3D Adjustable Architectural Door Hinge',
        code: 'HDW-H402',
        descriptor: 'Completely invisible flush door hinge with three-axis micro-alignment',
        description: 'Mounted flush inside the timber frame and door leaf so that hinges become 100% invisible when the door is closed. Allows independent adjustment in height, depth, and side alignment without unhanging the door.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'LOAD CAPACITY', val: '120 kg Load Rating (Per Pair of 2 Hinges)' },
          { label: 'OPENING ANGLE', val: '180° Full Architectural Sweep' },
          { label: '3D ADJUSTMENT', val: 'Vertical ±2.5mm • Horizontal ±2mm • Depth ±1mm' },
          { label: 'BEARINGS', val: 'Self-Lubricating Maintenance-Free Polyacetal' },
          { label: 'COVER PLATES', val: 'Concealed Magnetic Screw Cover Caps' },
          { label: 'FIRE RATED', val: 'UL 10C / EN 1634-1 60-Minute Fire Rated' }
        ],
        finishes: ['Brushed Bronze', 'Matte Architectural Black', 'Satin Chrome', 'Champagne Brass'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'hdw-03',
        slug: 'heavyduty-synchronized-sliding-door-system',
        categoryId: 'hardware',
        categorySlug: 'hardware',
        categoryName: 'Hardware',
        name: 'Heavy-Duty Synchronized Sliding Door Track System',
        code: 'HDW-H403',
        descriptor: 'Ceiling-recessed smooth sliding track with dual soft-stop dampers',
        description: 'Engineered for expansive floor-to-ceiling wooden partitions and pocket doors. Precision ball-bearing polymer wheels glide inside an extruded aircraft-grade aluminum rail with two-way hydraulic soft-stop damping.',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'DOOR WEIGHT', val: 'Up to 100 kg per Single Timber Leaf' },
          { label: 'TRACK PROFILE', val: 'Heavy Extruded 6063-T6 Aluminum (Mill/Anodized)' },
          { label: 'BRAKING SYSTEM', val: 'Dual-Way Air Hydraulic Soft Dampers' },
          { label: 'ROLLERS', val: '8-Wheel Balanced Precision Ball-Bearing Assembly' },
          { label: 'FLOOR GUIDE', val: 'Zero Threshold Concealed Bottom Channel' },
          { label: 'DOOR WIDTH', val: 'Supports Panels 750mm to 1600mm Wide' }
        ],
        finishes: ['Anodized Silver', 'Matte Black Anodized', 'Mill Finish Concealed'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'hdw-04',
        slug: 'magnetic-acoustic-silent-door-latch',
        categoryId: 'hardware',
        categorySlug: 'hardware',
        categoryName: 'Hardware',
        name: 'Magnetic Acoustic Silent Door Latch & Privacy Bolt',
        code: 'HDW-H404',
        descriptor: 'Retractable magnetic latch bolt for completely silent closing',
        description: 'Replaces noisy mechanical spring latches. The neodymium magnetic latch remains retracted flush inside the door body when open and only snaps silently into the magnetic strike plate when the door meets the frame.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'LATCH ACTION', val: 'Contactless Neodymium Magnetic Throw' },
          { label: 'NOISE REDUCTION', val: 'Acoustically Dampened Strike Box (< 15 dB)' },
          { label: 'BACKSET', val: '50mm & 60mm Standard European Backsets' },
          { label: 'FACEPLATE', val: 'Solid Brass 2.5mm CNC Beveled Faceplate' },
          { label: 'TESTED LIFE', val: '300,000+ Cycles Without Lubrication Need' },
          { label: 'COMPATIBILITY', val: 'Accepts Standard Euro-Profile Cylinders' }
        ],
        finishes: ['Brushed Bronze', 'Matte Charcoal Black', 'Satin Brass', 'Brushed Nickel'],
        filterTag: 'popular',
        isPopular: true,
        isNew: false
      },
      {
        id: 'hdw-05',
        slug: 'architectural-flush-pull-pocket-doors',
        categoryId: 'hardware',
        categorySlug: 'hardware',
        categoryName: 'Hardware',
        name: 'Architectural Flush Pull Handle for Pocket Doors',
        code: 'HDW-H405',
        descriptor: 'Deep-recessed rectangular flush handle with integrated edge pull',
        description: 'Designed for pocket doors that slide entirely flush into drywall cavities. Includes a spring-loaded finger edge pull that ejects the door leaf smoothly with a gentle fingertip tap.',
        image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'MATERIAL', val: 'CNC Milled Solid Brass Monolith' },
          { label: 'RECESSED DEPTH', val: '14 mm Generous Finger Grasp Depth' },
          { label: 'EDGE PULL', val: 'Concealed Pop-Out Ring Edge Mechanism' },
          { label: 'ROUTING', val: 'Standard CNC Template Supplied' },
          { label: 'FINISH', val: 'Satin Champagne Gold & Bronze PVD' },
          { label: 'DOOR LEAF', val: 'Suitable for 38mm to 50mm Pocket Leaves' }
        ],
        finishes: ['Satin Champagne Gold', 'Brushed Bronze PVD', 'Matte Black', 'Brushed Chrome'],
        filterTag: 'new',
        isPopular: false,
        isNew: true
      },
      {
        id: 'hdw-06',
        slug: 'pivot-door-bearing-set-concealed-closer',
        categoryId: 'hardware',
        categorySlug: 'hardware',
        categoryName: 'Hardware',
        name: 'Heavy Pivot Door Bearing Set with Concealed Floor Closer',
        code: 'HDW-H406',
        descriptor: 'Architectural pivot hinge system for oversized grand entrance doors',
        description: 'Engineered to carry oversized architectural timber and metal pivot doors weighing up to 250 kg. Integrated hydraulic dampening smoothly brakes the swing and holds open at 90 degrees.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85'
        ],
        specs: [
          { label: 'PAYLOAD RATING', val: '250 kg Maximum Door Leaf Weight' },
          { label: 'DOOR DIMENSIONS', val: 'Max 3000mm Height × 1500mm Width' },
          { label: 'HOLD OPEN', val: 'Automatic 90° Detent & Self-Close from 85°' },
          { label: 'HYDRAULIC VALVE', val: 'Dual Independent Speed & Latching Regulation' },
          { label: 'FLOOR ANCHOR', val: 'Requires Only 8mm Shallow Floor Anchor' },
          { label: 'HARDWARE METAL', val: 'Stainless Steel 316 Internal Needle Bearings' }
        ],
        finishes: ['Satin Stainless Steel 316', 'PVD Brushed Bronze Cover', 'Matte Black Cover'],
        filterTag: 'featured',
        isPopular: false,
        isNew: false
      }
    ]
  }
];

// Helper Query Functions
export function getAllCategories() {
  return CATEGORIES;
}

export function getCategoryBySlug(slug) {
  return CATEGORIES.find(c => c.slug === slug);
}

export function getProductBySlugs(categorySlug, productSlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.products.find(p => p.slug === productSlug) || null;
}

export function getRelatedProducts(categorySlug, currentProductSlug, count = 3) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return category.products
    .filter(p => p.slug !== currentProductSlug)
    .slice(0, count);
}

export function searchAllProducts(query) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  const results = [];
  CATEGORIES.forEach(cat => {
    cat.products.forEach(prod => {
      const match = 
        prod.name.toLowerCase().includes(q) ||
        prod.code.toLowerCase().includes(q) ||
        prod.descriptor.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q);
      if (match) {
        results.push({ ...prod, categoryName: cat.name, categorySlug: cat.slug });
      }
    });
  });
  return results;
}
