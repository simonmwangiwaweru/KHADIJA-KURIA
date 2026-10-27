/**
 * Lantern Serviced Apartments - Comprehensive Reference & Asset Data Store
 * Sourced directly from https://lantern.co.ke and user-uploaded high-res imagery.
 */

export interface ApartmentTier {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  roomOnlyPrice: number;
  bedAndBreakfastPrice: number;
  capacity: string;
  maxGuests: number;
  bedType: string;
  sizeSqM?: number;
  description: string;
  features: string[];
  amenities: string[];
  primaryImage: string;
  gallery: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  pricing?: {
    halfDay?: number;
    fullDay?: number;
    fullBoard?: number;
    hours?: string;
  };
  inclusions: string[];
  image: string;
  gallery: string[];
}

export const LANTERN_CONTACT_INFO = {
  brandName: 'Lantern Serviced Apartments',
  tagline: 'Your Home Away From Home in Parklands, Nairobi',
  address: 'Chemilil Road, Parklands / off Ngara Road, Nairobi, Kenya',
  locationDetails: 'Quiet, secure residential sanctuary in Parklands, minutes from Westlands, Nairobi CBD, Aga Khan Hospital, and MP Shah Hospital.',
  primaryPhone: '+254 718 199 663',
  primaryPhoneClean: '254718199663',
  alternatePhone: '+254 748 277 538',
  reservationsEmail: 'reservations@lantern.co.ke',
  infoEmail: 'info@lantern.co.ke',
  website: 'https://lantern.co.ke',
  keyContact: {
    name: 'Khadija Kuria',
    role: 'Reservations & Guest Relations Manager',
    phone: '+254 715 832 131',
    phoneClean: '254715832131',
    email: 'khadija@lantern.co.ke',
    cardAsset: '/assets/aistudio/IMG-20261022-WA0092_7226939e.jpg',
  },
  letterheadAsset: '/assets/aistudio/IMG-20261022-WA0073_652182f4.jpg',
  receptionHours: '24 Hours / 7 Days a Week',
  diningHours: '7:00 AM – 10:00 PM Daily',
};

export const LANTERN_ASSETS = {
  facadeAndExterior: [
    '/assets/aistudio/IMG-20261022-WA0090_d59faa26.jpg', // Main facade with "LANTERN SERVICED APARTMENTS" roof signage
    '/assets/aistudio/IMG-20261022-WA0054_caf1cb7f.jpg', // Promotional collage poster
  ],
  atriumAndCorridors: [
    '/assets/aistudio/IMG-20261022-WA0071_edc43952.jpg', // Multi-tier interior courtyard atrium
    '/assets/aistudio/IMG-20261022-WA0071_1__edc43952.jpg', // Architectural perspective of corridors
    '/assets/aistudio/IMG-20261022-WA0084_a87cfa3f.jpg', // Wrought iron balcony railings & guest walkways
    '/assets/aistudio/IMG-20261022-WA0068_0c0178b7.jpg', // Atrium view showing room doors & tiled floors
    '/assets/aistudio/IMG-20261022-WA0066_cde4e977.jpg', // Looking down into the courtyard garden / turf
    '/assets/aistudio/IMG-20261022-WA0066_1__cde4e977.jpg',
  ],
  boardroomAndConference: [
    '/assets/aistudio/IMG-20261022-WA0052_fe597a54.jpg', // Boardroom overview with executive leather seating
    '/assets/aistudio/IMG-20261022-WA0087_0472334e.jpg', // Boardroom angle with AV display & stationery
    '/assets/aistudio/IMG-20261022-WA0088_0f4ab870.jpg', // High-angle meeting room layout
  ],
  restaurantAndDining: [
    '/assets/aistudio/IMG-20261022-WA0051_18e480fb.jpg', // Lantern Dining interior with ambient lighting & wood tables
    '/assets/aistudio/IMG-20261022-WA0082_b5152ea9.jpg', // Restaurant dining setup with chandelier & buffet bar
    '/assets/aistudio/IMG-20261022-WA0089_8c39380c.jpg', // Cozy dining tables with artwork
  ],
  apartmentsAndSuites: [
    '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg', // Bedroom with lime accent wall, queen bed, closet
    '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg', // Bedroom view showing en-suite bathroom door
    '/assets/aistudio/IMG-20261022-WA0069_dbe1eb3f.jpg', // Bedroom angle with wooden headboard & bedside light
  ],
  stationeryAndContact: [
    '/assets/aistudio/IMG-20261022-WA0092_7226939e.jpg', // Khadija Kuria Business Card
    '/assets/aistudio/IMG-20261022-WA0073_652182f4.jpg', // Official Letterhead
  ],
  webAssets: {
    logo: 'https://lantern.co.ke/assets/images/logo/lantern-logo.png',
    facilitiesRestaurant: 'https://lantern.co.ke/assets/images/facilities/restaurant.jpg',
    facilitiesConference: 'https://lantern.co.ke/assets/images/facilities/conference-room.jpg',
    facilitiesReception: 'https://lantern.co.ke/assets/images/facilities/reception.jpg',
    facilitiesTerrace: 'https://lantern.co.ke/assets/images/facilities/terrace.jpg',
  },
};

export const APARTMENT_SUITES: ApartmentTier[] = [
  {
    id: 'normal-studio',
    name: 'Normal Studio',
    slug: 'normal-studio',
    tagline: 'Sleek, self-contained comfort ideal for solo business travelers & couples',
    roomOnlyPrice: 4000,
    bedAndBreakfastPrice: 4700,
    capacity: '1–2 Guests',
    maxGuests: 2,
    bedType: '1 Queen Bed',
    sizeSqM: 28,
    description:
      'A cozy, elegantly appointed self-contained studio tailored for productivity and deep rest. Features high-speed fiber WiFi, a modern kitchenette, executive workstation, and an en-suite bathroom with hot rainfall shower.',
    features: [
      'Self-contained open plan',
      'Comfortable Queen-size bed',
      'Fully equipped kitchenette',
      'Dedicated work desk with high-speed WiFi (25+ Mbps)',
      'Flat-screen Smart TV with satellite channels',
      'Private en-suite bathroom with instantaneous hot water',
      'Daily housekeeping & linen service',
    ],
    amenities: ['Fast WiFi', 'Kitchenette', 'Smart TV', 'Daily Housekeeping', 'Hot Shower', 'Work Desk', '24/7 Security'],
    primaryImage: '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
      '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
      '/assets/aistudio/IMG-20261022-WA0069_dbe1eb3f.jpg',
    ],
  },
  {
    id: 'deluxe-studio',
    name: 'Deluxe Studio',
    slug: 'deluxe-studio',
    tagline: 'Enhanced living space with a private balcony and premium finishings',
    roomOnlyPrice: 5000,
    bedAndBreakfastPrice: 5700,
    capacity: '1–2 Guests',
    maxGuests: 2,
    bedType: '1 Queen / King Bed',
    sizeSqM: 38,
    description:
      'Step up to additional square footage, enhanced natural illumination, and a personal private balcony. Designed with a full kitchenette, premium bedding, executive desk, and climate control.',
    features: [
      'Private scenic balcony with seating',
      'Plush Queen/King bed with orthopedic support',
      'Upgraded kitchenette with microwave, burner & electric kettle',
      'Smart TV with Netflix & streaming support',
      'Spacious wardrobe & electronic digital safe',
      'Air conditioning & ambient LED lighting',
      'En-suite rainfall shower with premium toiletries',
    ],
    amenities: ['Private Balcony', 'Fast WiFi', 'Upgraded Kitchen', 'Air Conditioning', 'Smart TV', 'Safe', 'Daily Cleaning'],
    primaryImage: '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
      '/assets/aistudio/IMG-20261022-WA0071_edc43952.jpg',
    ],
  },
  {
    id: 'one-bedroom',
    name: 'One Bedroom Apartment',
    slug: 'one-bedroom',
    tagline: 'Distinct living and sleeping quarters for long stays & family visits',
    roomOnlyPrice: 6000,
    bedAndBreakfastPrice: 6700,
    capacity: '2–4 Guests',
    maxGuests: 4,
    bedType: '1 King Bed + Living Room Sofa Bed',
    sizeSqM: 52,
    description:
      'Experience true residential comfort with separate master bedroom and an expansive living & dining lounge. Ideal for business executives requiring meeting space or families visiting Nairobi.',
    features: [
      'Separate master bedroom with King bed and extensive built-in closets',
      'Spacious living room with cozy sofa and dining table',
      'Full kitchen with full-size refrigerator, gas/electric stove, and cookware',
      'Private balcony overlooking the quiet Parklands neighborhood',
      'Dual flat-screen Smart TVs (bedroom & lounge)',
      'High-speed dedicated fiber internet (25+ Mbps)',
      'Guest powder room / en-suite master bath',
    ],
    amenities: ['Separate Living Room', 'Full Kitchen', 'Private Balcony', 'King Bed', 'Dining Table', '2x Smart TVs', 'Fast WiFi'],
    primaryImage: '/assets/aistudio/IMG-20261022-WA0069_dbe1eb3f.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0069_dbe1eb3f.jpg',
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
      '/assets/aistudio/IMG-20261022-WA0084_a87cfa3f.jpg',
      '/assets/aistudio/IMG-20261022-WA0054_caf1cb7f.jpg',
    ],
  },
  {
    id: 'two-bedroom',
    name: 'Two Bedroom Apartment',
    slug: 'two-bedroom',
    tagline: 'Our premier luxury suite — maximum space, privacy, and full home amenities',
    roomOnlyPrice: 8000,
    bedAndBreakfastPrice: 8700,
    capacity: 'Up to 6 Guests',
    maxGuests: 6,
    bedType: '1 King Bed + 1 Queen Bed + Sofa',
    sizeSqM: 78,
    description:
      'The crown jewel of Lantern Serviced Apartments. Features two private en-suite bedrooms, a grand living hall, six-seater dining suite, chef-ready kitchen, and dual private balconies. Perfect for long-term diplomatic stays, corporate groups, or large families.',
    features: [
      'Two master bedrooms with private en-suite bathrooms',
      'Expansive open-plan living room with premium leather sofas',
      'Dedicated dining room seating up to 6 persons',
      'Chef-ready kitchen with oven, microwave, large fridge, and dishware',
      'Multiple balconies with skyline and courtyard vistas',
      'Individual smart climate controls in each bedroom',
      'Smart TV in all bedrooms and the main lounge',
      'Washing machine / dedicated laundry space access',
    ],
    amenities: ['2 Full Bedrooms', '2 En-Suite Baths', 'Grand Living Area', 'Full Chef Kitchen', 'Multiple Balconies', 'Dining Suite', 'CCTV & Keycard Access'],
    primaryImage: '/assets/aistudio/IMG-20261022-WA0054_caf1cb7f.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0054_caf1cb7f.jpg',
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
      '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
      '/assets/aistudio/IMG-20261022-WA0090_d59faa26.jpg',
    ],
  },
];

export const LANTERN_FACILITIES: Facility[] = [
  {
    id: 'conference-room',
    title: 'Executive Boardroom & Conference Facility',
    category: 'Meetings & Events',
    description:
      'A professional, sound-insulated conference environment equipped for corporate meetings, strategy sessions, seminars, and high-level training. Fitted with an executive walnut boardroom table, leather chairs, high-definition digital display, and high-speed Wi-Fi.',
    pricing: {
      halfDay: 1500,
      fullDay: 4000,
      fullBoard: 10000,
    },
    inclusions: [
      'High-Definition Screen & HDMI/Wireless Projection',
      'Stationery: Lantern executive pens, notepads, and folders',
      'Ultra-fast dedicated optical fiber internet (50+ Mbps)',
      'Whiteboard, flip charts & dry-erase markers',
      'Complimentary chilled bottled water & mints',
      'Mid-morning and mid-afternoon tea/coffee with assorted pastries',
      'Full buffet lunch served at Lantern Dining (Full Day package)',
    ],
    image: '/assets/aistudio/IMG-20261022-WA0052_fe597a54.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0052_fe597a54.jpg',
      '/assets/aistudio/IMG-20261022-WA0087_0472334e.jpg',
      '/assets/aistudio/IMG-20261022-WA0088_0f4ab870.jpg',
    ],
  },
  {
    id: 'lantern-dining',
    title: 'Lantern Dining & Restaurant',
    category: 'Culinary & Dining',
    description:
      'Warm ambient lighting, chandeliers, rich timber finishes, and an exquisite culinary menu. Serving fresh à la carte breakfast, buffet lunches, international cuisine, and authentic Kenyan delicacies prepared fresh by our resident chefs.',
    pricing: {
      hours: '7:00 AM – 10:00 PM Daily',
    },
    inclusions: [
      'Daily hot buffet breakfast (7:00 AM – 10:00 AM)',
      'À la carte lunch & dinner menu',
      'In-room dining & room service delivery',
      'Catering for conferences & private group banquets',
      'Fresh barista espresso coffees, herbal teas, and fresh juices',
    ],
    image: '/assets/aistudio/IMG-20261022-WA0051_18e480fb.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0051_18e480fb.jpg',
      '/assets/aistudio/IMG-20261022-WA0082_b5152ea9.jpg',
      '/assets/aistudio/IMG-20261022-WA0089_8c39380c.jpg',
    ],
  },
  {
    id: 'atrium-courtyard',
    title: 'Open Sky Atrium & Courtyard Garden',
    category: 'Relaxation & Ambiance',
    description:
      'Our signature architectural multistory central atrium allows natural sunlight and cool breezes to cascade through every floor. Designed with ornate wrought-iron railings, lush turf, and tranquil outdoor seating.',
    inclusions: [
      'Open-air natural ventilation and sunny courtyard',
      'Quiet seating spots for morning reading or evening relaxation',
      'Ornate architectural walkways connecting all residential suites',
      'Safe, enclosed internal environment with 24/7 CCTV surveillance',
    ],
    image: '/assets/aistudio/IMG-20261022-WA0071_edc43952.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0071_edc43952.jpg',
      '/assets/aistudio/IMG-20261022-WA0084_a87cfa3f.jpg',
      '/assets/aistudio/IMG-20261022-WA0068_0c0178b7.jpg',
      '/assets/aistudio/IMG-20261022-WA0066_cde4e977.jpg',
    ],
  },
  {
    id: 'guest-services',
    title: 'Concierge, Security & Comprehensive Guest Services',
    category: 'Convenience & Security',
    description:
      'We combine the freedom of private apartment living with the security and round-the-clock pampering of a premier hotel.',
    inclusions: [
      '24/7 Front Desk & Concierge reception',
      'Airport transfer pickup & drop-off (Jomo Kenyatta Int’l / Wilson)',
      'Free secure gated on-site parking with 24/7 guarded access & CCTV',
      'High-speed WiFi (25+ Mbps) throughout the entire property',
      'Doctor on Call & emergency medical liaison',
      'Professional laundry, dry cleaning & daily housekeeping',
      'Elevator / lift access across all floors',
    ],
    image: '/assets/aistudio/IMG-20261022-WA0090_d59faa26.jpg',
    gallery: [
      '/assets/aistudio/IMG-20261022-WA0090_d59faa26.jpg',
      '/assets/aistudio/IMG-20261022-WA0073_652182f4.jpg',
    ],
  },
];

export const SPECIAL_OFFERS = [
  {
    id: 'weekend-special',
    title: 'Weekend Getaway Offer',
    badge: '5% OFF',
    discountPercent: 5,
    validDays: 'Friday to Sunday stays',
    description:
      'Unwind in luxury over the weekend. Enjoy 5% off any studio or suite from Friday through Sunday with complimentary high-speed WiFi and free parking.',
    code: 'WEEKEND5',
  },
  {
    id: 'long-stay-deal',
    title: 'Extended Stay Privilege',
    badge: '10% OFF',
    discountPercent: 10,
    validDays: '5 nights or longer',
    description:
      'Staying 5 nights or more? Unlock 10% off your entire booking, including weekly deep cleaning, discounted laundry service, and priority dining reservations.',
    code: 'LONGSTAY10',
  },
];
