// All imagery lives here. Swap any URL for a local file (e.g. /images/udaipur.jpg placed in /public/images)
// or your own CDN. Images use Unsplash as high-quality placeholders — replace with licensed/own photography for launch.
const u = (id) => `https://images.unsplash.com/photo-${id}`

export const IMG = {
  hero: u('1477587458883-47145ed94245'),
  udaipur: u('1477587458883-47145ed94245'),
  jaipur: u('1599661046289-e31897846e41'),
  jodhpur: u('1514222134-b57cbb8ce073'),
  jaisalmer: u('1537633552985-df8429e8048b'),
  ranthambore: u('1524492412937-b28074a5d7da'),
  pushkar: u('1587474260584-136574528ed5'),
  couple: u('1519741497674-611481863552'),
  table: u('1511795409834-ef04bbd61622'),
  mandap: u('1465495976277-4387d4b0b4c6'),
  reception: u('1519225421980-715cb0215aed'),
  floral: u('1478146896981-b80fe463b330'),
  bride: u('1507504031003-b417219a0fde'),
  goa: u('1507525428034-b723cf961d3e'),
  kerala: u('1602216056096-3b40cc0c9944'),
  agra: u('1524492412937-b28074a5d7da'),
  rishikesh: u('1506905925346-21bda4d32df4'),
  italy: u('1552832230-c0197dd311b5'),
  france: u('1502602898657-3e91760cbb34'),
  greece: u('1570077188670-e3a8d69ac5ff'),
  dubai: u('1512453979798-5ea266f8880c'),
  bali: u('1537996194471-e657df975ab4'),
  maldives: u('1514282401047-d79a71a590e8'),
  switzerland: u('1506905925346-21bda4d32df4'),
}

export const NAV = [
  { to: '/', label: 'Home' }, { to: '/destinations', label: 'Destinations' },
  { to: '/experiences', label: 'Experiences' }, { to: '/weddings', label: 'Weddings' },
  { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' },
]

export const RAJASTHAN = [
  { name: 'Udaipur', tag: 'City of Lakes', img: IMG.udaipur, text: 'Marble palaces mirrored in still water. Candlelit boat arrivals, lakeside vows, and sunsets that need no styling.' },
  { name: 'Jaipur', tag: 'The Pink City', img: IMG.jaipur, text: 'Rose-hued ramparts and living heritage. Elephant-led baraats, courtyard sangeets and a Mughal-Rajput grandeur.' },
  { name: 'Jodhpur', tag: 'The Blue City', img: IMG.jodhpur, text: 'Mehrangarh watching over indigo rooftops. Fort-top ceremonies with a scale few places on earth can offer.' },
  { name: 'Jaisalmer', tag: 'The Golden City', img: IMG.jaisalmer, text: 'Dunes, sandstone and silence. Desert camps of quiet luxury beneath an unbroken field of stars.' },
  { name: 'Ranthambore', tag: 'The Wild Palace', img: IMG.ranthambore, text: 'Royal hunting lodges at the edge of a tiger reserve. Intimate, wild, unforgettable.' },
  { name: 'Pushkar', tag: 'The Sacred Lake', img: IMG.pushkar, text: 'A spiritual setting of ghats and desert light, for ceremonies rooted in tradition and meaning.' },
]

export const SERVICES = [
  ['Complete Wedding Planning', 'One house, every detail — from first vision to final farewell.'],
  ['Destination Wedding Planning', 'Multi-day celebrations orchestrated across palaces, forts and continents.'],
  ['Venue Selection', 'Private access to India’s most coveted palaces and heritage estates.'],
  ['Hospitality & Guest Management', 'Seamless arrivals, curated stays and a concierge for every guest.'],
  ['Décor & Floral Design', 'Immersive installations designed with in-house artisans and florists.'],
  ['Entertainment', 'Performers, orchestras and headline artists, scored to each evening.'],
  ['Luxury Transportation', 'Vintage cars, chartered flights, horses and royal processions.'],
  ['Catering', 'Regional and global menus by master chefs, from banquet to tasting.'],
  ['Photography & Cinematography', 'Editorial imagery and cinematic films, told with restraint.'],
  ['Artist Management', 'Musicians, choreographers and performers, directed end to end.'],
  ['Guest Experiences', 'Polo, desert safaris, private tours — hospitality beyond the ceremony.'],
  ['Wedding Logistics', 'Permits, security, protocol and teams, invisibly managed.'],
  ['Bespoke Celebrations', 'Engagements, sangeets, anniversaries — each given its own narrative.'],
]

export const INDIA = [
  { name: 'Goa', tag: 'Coastal Luxury', img: IMG.goa },
  { name: 'Kerala', tag: 'Backwater Retreats', img: IMG.kerala },
  { name: 'Delhi', tag: 'Imperial Grandeur', img: IMG.agra },
  { name: 'Mumbai', tag: 'Art Deco & Sea', img: IMG.reception },
  { name: 'Agra', tag: 'Beside the Taj', img: IMG.agra },
  { name: 'Rishikesh', tag: 'Himalayan Serenity', img: IMG.rishikesh },
]

export const INTERNATIONAL = [
  { name: 'Italy', tag: 'Lake Como · Tuscany · Amalfi', img: IMG.italy },
  { name: 'France', tag: 'Riviera · Provence · Paris', img: IMG.france },
  { name: 'Greece', tag: 'Santorini · Mykonos', img: IMG.greece },
  { name: 'Dubai & UAE', tag: 'Desert & Skyline', img: IMG.dubai },
  { name: 'Bali', tag: 'Cliffs & Jungle', img: IMG.bali },
  { name: 'Thailand', tag: 'Phuket · Koh Samui', img: IMG.goa },
  { name: 'Maldives', tag: 'Private Islands', img: IMG.maldives },
  { name: 'Switzerland', tag: 'Alpine Elegance', img: IMG.switzerland },
]

export const VENUES = [
  { name: 'The Lake Palace Estate', place: 'Udaipur', type: 'Palace', img: IMG.udaipur, guests: 'Up to 600' },
  { name: 'The Fort of Blue Ramparts', place: 'Jodhpur', type: 'Fort', img: IMG.jodhpur, guests: 'Up to 1,200' },
  { name: 'The Rose Haveli', place: 'Jaipur', type: 'Heritage', img: IMG.jaipur, guests: 'Up to 800' },
  { name: 'The Dune Camp', place: 'Jaisalmer', type: 'Desert Resort', img: IMG.jaisalmer, guests: 'Up to 400' },
]

export const STORIES = [
  { couple: 'Aanya & Rohan', place: 'Udaipur', venue: 'A lakeside palace', concept: 'Three days of ivory and champagne florals, with a candlelit boat procession at dusk.', img: IMG.mandap, gallery: [IMG.couple, IMG.table, IMG.floral] },
  { couple: 'Isabelle & Karan', place: 'Jodhpur', venue: 'A hilltop fort', concept: 'A French–Marwari union staged on fort ramparts, with a Rajasthani folk orchestra.', img: IMG.bride, gallery: [IMG.jodhpur, IMG.reception, IMG.couple] },
  { couple: 'Meera & Arjun', place: 'Jaisalmer', venue: 'A private desert estate', concept: 'Sandstone, sheer drapes and a thousand lanterns across the dunes.', img: IMG.jaisalmer, gallery: [IMG.table, IMG.floral, IMG.mandap] },
]

export const APPROACH = [
  ['Listen', 'We begin with your families, your heritage and the feeling you want the weekend to leave behind.'],
  ['Design', 'Venues, narrative, décor and entertainment are composed into a single bespoke vision.'],
  ['Orchestrate', 'Our teams manage every guest, vendor and detail with discretion and precision.'],
  ['Celebrate', 'You are present for every moment. We remain quietly in the background.'],
]

export const GALLERY = [IMG.couple, IMG.udaipur, IMG.table, IMG.jodhpur, IMG.floral, IMG.mandap, IMG.bride, IMG.jaisalmer]

export const TESTIMONIALS = [
  { quote: 'Every detail felt considered, and yet nothing felt staged. Our families still speak of those three days.', by: 'Aanya & Rohan', place: 'Udaipur' },
  { quote: 'They managed seven hundred guests with the calm of a private concierge. We simply enjoyed our wedding.', by: 'The Kapoor Family', place: 'Jaipur' },
  { quote: 'An extraordinary eye for place. The fort had never looked so quietly magnificent.', by: 'Isabelle & Karan', place: 'Jodhpur' },
]
