/**
 * Lantern Serviced Apartments - Global Business & Content Configuration
 */

export const CONTACT_CONFIG = {
  executive: {
    name: 'Khadija Kuria',
    title: 'Reservations & Guest Relations Manager',
    phone: '+254 715 832 131',
    whatsappDigits: '254715832131',
    email: 'khadija@lantern.co.ke',
  },
  central: {
    brandName: 'Lantern Serviced Apartments',
    phonePrimary: '+254 718 199 663',
    phoneSecondary: '+254 748 277 538',
    whatsappDigits: '254718199663',
    emailReservations: 'reservations@lantern.co.ke',
    emailInfo: 'info@lantern.co.ke',
    address: 'Chemilil Road, Parklands, Nairobi, Kenya',
    hours: '24/7 Reception & Concierge',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lantern+Serviced+Apartments+Chemilil+Road+Parklands+Nairobi',
  },
};

export type BoardType = 'room_only' | 'bed_and_breakfast';

export interface SuiteItem {
  id: string;
  name: string;
  guests: string;
  bed: string;
  size: string;
  roomOnlyPrice: number;
  bedBreakfastPrice: number;
  features: string[];
  description: string;
  imageGalleryKeys: string[];
  primaryImage: string;
}

export const SUITES_DATA: SuiteItem[] = [
  {
    id: 'normal-studio',
    name: 'Normal Studio',
    guests: '1–2 Guests',
    bed: '1 Queen Bed',
    size: '28 m²',
    roomOnlyPrice: 4000,
    bedBreakfastPrice: 4700,
    features: [
      'Kitchenette with stove & kettle',
      'Work desk with 25+ Mbps Wi-Fi',
      'Hot rainfall shower (instantaneous)',
      'Flat-screen Smart TV',
      'Daily housekeeping & fresh linen',
    ],
    description: 'An open-concept studio designed for single professionals or couples seeking self-contained comfort with dedicated work space and fast Wi-Fi.',
    primaryImage: '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
    imageGalleryKeys: [
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
      '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
    ],
  },
  {
    id: 'deluxe-studio',
    name: 'Deluxe Studio',
    guests: '1–2 Guests',
    bed: '1 Queen or King Bed',
    size: '38 m²',
    roomOnlyPrice: 5000,
    bedBreakfastPrice: 5700,
    features: [
      'Private scenic balcony with seating',
      'Upgraded kitchenette (microwave, fridge)',
      'Individual air conditioning',
      'In-room electronic digital safe',
      'Premium bathroom fixtures & toiletries',
    ],
    description: 'Generously proportioned studio boasting an outdoor balcony, upgraded appliances, climate control, and superior natural lighting.',
    primaryImage: '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
    imageGalleryKeys: [
      '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
      '/assets/aistudio/IMG-20261022-WA0069_dbe1eb3f.jpg',
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
    ],
  },
  {
    id: 'one-bedroom',
    name: 'One Bedroom Apartment',
    guests: '2–4 Guests',
    bed: '1 King Bed + Living-room Sofa Bed',
    size: '52 m²',
    roomOnlyPrice: 6000,
    bedBreakfastPrice: 6700,
    features: [
      'Completely separate private master bedroom',
      'Spacious living & dining lounge',
      'Full kitchen with full-size fridge & stove',
      'Private balcony overlooking Parklands',
      'Two flat-screen Smart TVs (lounge & bed)',
    ],
    description: 'A genuine residential apartment with distinct living, dining, and sleeping zones. Perfect for extended business assignments and visiting families.',
    primaryImage: '/assets/aistudio/IMG-20261022-WA0069_dbe1eb3f.jpg',
    imageGalleryKeys: [
      '/assets/aistudio/IMG-20261022-WA0069_dbe1eb3f.jpg',
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
      '/assets/aistudio/IMG-20261022-WA0084_a87cfa3f.jpg',
    ],
  },
  {
    id: 'two-bedroom',
    name: 'Two Bedroom Apartment',
    guests: 'Up to 6 Guests',
    bed: '1 King Bed + 1 Queen Bed',
    size: '78 m²',
    roomOnlyPrice: 8000,
    bedBreakfastPrice: 8700,
    features: [
      'Two independent en-suite bedrooms',
      'Two complete bathrooms',
      'Grand living room with leather sofas',
      '6-seater dining table & chef kitchen',
      'Multiple balconies & washing machine access',
    ],
    description: 'Our premier luxury residence offering total privacy with dual master suites, large entertaining lounge, and private laundry provisions.',
    primaryImage: '/assets/aistudio/IMG-20261022-WA0054_caf1cb7f.jpg',
    imageGalleryKeys: [
      '/assets/aistudio/IMG-20261022-WA0054_caf1cb7f.jpg',
      '/assets/aistudio/IMG-20261022-WA0065_8e2a8628.jpg',
      '/assets/aistudio/IMG-20261022-WA0080_e3e27907.jpg',
      '/assets/aistudio/IMG-20261022-WA0090_d59faa26.jpg',
    ],
  },
];

export interface BoardroomPackage {
  id: string;
  name: string;
  pricePerDelegate: number;
  duration: string;
  highlight: string;
}

export const BOARDROOM_PACKAGES: BoardroomPackage[] = [
  {
    id: 'half-day',
    name: 'Half Day Package',
    pricePerDelegate: 1500,
    duration: 'Up to 4 Hours (Morning or Afternoon)',
    highlight: 'Ideal for board meetings, briefings, and interview panels',
  },
  {
    id: 'full-day',
    name: 'Full Day Package',
    pricePerDelegate: 4000,
    duration: 'Full Day (8:00 AM – 5:00 PM)',
    highlight: 'Includes full buffet lunch at Lantern Dining',
  },
  {
    id: 'full-board',
    name: 'Full Board Package',
    pricePerDelegate: 10000,
    duration: 'Full Day Conference + Overnight Suite',
    highlight: 'Complete executive bundle with all meals & serviced accommodation',
  },
];

export const BOARDROOM_INCLUSIONS = [
  'HD presentation screen with wireless casting & HDMI connectivity',
  'Dedicated 50+ Mbps optical fiber Wi-Fi throughout the boardroom',
  'Lantern executive branded stationery: notebooks, pens & presentation folders',
  'Magnetic whiteboard, flipchart stand & dry-erase markers',
  'Chilled mineral water bottles and fresh mints per delegate',
  '10:00 AM & 4:00 PM tea and barista coffee breaks with hot pastries and samosas',
  'Complimentary on-site gated parking with 24/7 security for all attendees',
];

export const DINING_INFO = {
  hours: 'Open Daily: 7:00 AM – 10:00 PM',
  breakfast: 'Hot Buffet Breakfast: 7:00 AM – 10:00 AM',
  cuisine: 'Authentic Kenyan delicacies, continental grills, fresh salads & barista coffee',
  roomService: 'In-room suite delivery & private meeting banquet catering available',
};

export const LOCATION_LANDMARKS = [
  { name: 'Nairobi CBD', distance: '10 Mins Drive' },
  { name: 'Westlands Commercial Hub', distance: '8 Mins Drive' },
  { name: 'Aga Khan University Hospital', distance: '5 Mins Drive' },
  { name: 'MP Shah Hospital', distance: '6 Mins Drive' },
  { name: 'Sarit Centre & Westgate Mall', distance: '8 Mins Drive' },
  { name: 'Jomo Kenyatta Airport (JKIA)', distance: '30 Mins via Expressway' },
];
