export type Project = {
  id: number;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Township";
  location: string;
  year: number;
  description: string;
  shortDesc: string;
  images: string[];
  featured: boolean;
  // Extended project details
  client?: string;
  plotArea?: string;
  builtUpArea?: string;
  type?: string;
  status?: string;
  configuration?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "vishwa-vihar",
    title: "Vishwa Vihar Township",
    category: "Township",
    location: "Manchar, Maharashtra",
    year: 2023,
    description:
      "Vishwa Vihar is a premium residential township consisting of four seven-storey residential towers arranged around a landscaped central community space. The development combines modern architectural aesthetics with efficient planning to create a vibrant and welcoming living environment. Spacious residences, ample open areas, dedicated recreational facilities, and thoughtfully designed circulation networks enhance the overall quality of life. A central temple, children's play zones, pergolas, and green lawns establish a strong sense of community while promoting wellness and social interaction. The project reflects a harmonious balance between contemporary urban living and natural surroundings, delivering comfort, functionality, and enduring architectural appeal.",
    shortDesc: "Premium gated residential township with full amenities",
    images: ["/images/vv9.jpeg", "/images/vv7.jpeg", "/images/vv3.jpeg", "/images/vv2.jpeg"],
    featured: true,
    client: "Vishwa Builders",
    plotArea: "9850 sq.m",
    builtUpArea: "10765 sq.m",
    configuration: "4 Buildings | 7 Floors",
    type: "Residential Township",
    status: "Completed",
  },
  {
    id: 2,
    slug: "nanded-bungalow-gurjar",
    title: "Dr. Gurjar Residence",
    category: "Residential",
    location: "Nanded City, Pune",
    year: 2024,
    description:
      "Defined by simplicity and precision, this modern residence presents a harmonious balance of form, function, and elegance. The sculpted façade, featuring bold framing elements and sleek glass railings, creates a distinctive architectural statement. Carefully proportioned openings maximize natural light while maintaining privacy and visual comfort. The interplay of textures, recessed balconies, and vertical detailing adds depth and sophistication to the overall design. Surrounded by landscaped greenery, the villa offers a serene living environment that celebrates openness and contemporary aesthetics. The result is a refined residential landmark that reflects innovation, sophistication, and modern architectural excellence.",
    shortDesc: "Contemporary villa with sculpted façade and sleek glass railings",
    images: ["/images/bungalow3.jpeg"],
    featured: true,
    client: "Dr. Gurjar",
    plotArea: "223 sq.m",
    builtUpArea: "220 sq.m",
    type: "Contemporary Villa",
    status: "Completed",
  },
  {
    id: 3,
    slug: "nanded-bungalow-shingare",
    title: "Dr. Shingare Residence",
    category: "Residential",
    location: "Nanded City, Pune",
    year: 2024,
    description:
      "This elegant residence draws inspiration from neo-classical architecture, blending timeless design principles with contemporary living standards. The grand façade is accentuated by symmetrical proportions, decorative balustrades, and refined column elements that create a sense of prestige and sophistication. Expansive balconies and thoughtfully positioned openings allow abundant natural light while enhancing the visual depth of the structure. The elevated stilt level seamlessly integrates parking functionality without compromising architectural elegance. Warm ceiling finishes and intricate detailing add richness and character to the overall composition. Surrounded by lush landscaping, the residence stands as a distinguished expression of luxury, comfort, and enduring architectural beauty.",
    shortDesc: "Neo-classical bungalow with ornate detailing and grand entrance",
    images: ["/images/bungalow2.jpeg"],
    featured: true,
    client: "Dr. Shingare",
    plotArea: "223 sq.m",
    builtUpArea: "220 sq.m",
    type: "Luxury Neo-Classical Residence",
    status: "Completed",
  },
  {
    id: 4,
    slug: "commercial-complex",
    title: "Commercial Healthcare Complex",
    category: "Commercial",
    location: "Manchar, Maharashtra",
    year: 2022,
    description:
      "This contemporary mixed-use commercial development is designed to create a dynamic urban destination that seamlessly integrates healthcare, retail, and professional spaces within a single architectural framework. The façade features a balanced composition of geometric forms, vertical screening elements, and modern material finishes, establishing a strong visual identity. Large commercial frontages at the ground level enhance visibility and accessibility, while the upper floors are thoughtfully planned to accommodate institutional or office functions with maximum efficiency. Expansive glazing and well-proportioned openings ensure abundant natural light and a comfortable indoor environment. The building's clean architectural expression reflects professionalism, functionality, and modern design sensibilities. Positioned as a prominent landmark, it offers a versatile and future-ready environment for business, healthcare, and community engagement.",
    shortDesc: "Mixed-use commercial development integrating healthcare, retail and offices",
    images: ["/images/bungalow5.jpeg"],
    featured: true,
    client: "Vishwa Builders",
    plotArea: "1425 sq.m",
    builtUpArea: "1806 sq.m",
    type: "Mixed-Use Commercial Development",
    status: "Completed",
  },
  {
    id: 5,
    slug: "mixed-use-building",
    title: "Nandekar Hillside Residences",
    category: "Commercial",
    location: "Bavdhan, Pune",
    year: 2023,
    description:
      "This contemporary residential tower is thoughtfully designed to respond to its sloping terrain, creating a harmonious relationship between architecture and landscape. The façade combines exposed brick textures with sleek modern finishes, producing a warm yet sophisticated visual identity. Clean geometric volumes, recessed balconies, and expansive glazing contribute to a dynamic elevation while maximizing natural light and panoramic views. The stilt-level parking and efficient vertical circulation demonstrate a practical approach to urban residential planning. Rooftop recreational spaces and integrated greenery enhance the living experience, offering residents a connection to nature within a modern setting. The project embodies contemporary elegance, sustainability, and refined urban living.",
    shortDesc: "Contemporary residential tower with brick facade and panoramic views",
    images: ["/images/cam01.jpeg"],
    featured: false,
    client: "Narendra Nandekar",
    plotArea: "465 sq.m",
    builtUpArea: "1455 sq.m",
    type: "Residential Apartment Tower",
    status: "Completed",
  },
  {
    id: 6,
    slug: "masalwadi-bungalow",
    title: "Tele Residence, Atpadi",
    category: "Residential",
    location: "Masalwadi, Atpadi, Sangli",
    year: 2023,
    description:
      "A proposed bungalow for Mr. Sanjay Tele at Masalwadi, Atpadi. The design features a striking vertical tower element with louver cladding, a covered porch with an orange canopy, and a compact functional layout.",
    shortDesc: "Modern compact bungalow with striking vertical tower element",
    images: ["/images/bungalow4.jpeg"],
    featured: false,
  },
  {
    id: 7,
    slug: "classic-grand-villa",
    title: "Sasar Estate Residence",
    category: "Residential",
    location: "Sus, Pune",
    year: 2021,
    description:
      "This magnificent neo-classical residence is a celebration of timeless architectural grandeur, distinguished by its symmetrical composition, stately colonnades, and meticulously crafted ornamental detailing. Inspired by classical European design principles, the façade exudes elegance through its majestic pediment, decorative cornices, and refined proportions. Expansive verandahs and grand balconies create seamless transitions between indoor luxury and the surrounding natural landscape. Elevated on a beautifully crafted stone podium, the residence commands a strong visual presence while enhancing privacy and prestige. Every architectural element has been carefully orchestrated to evoke sophistication, permanence, and aristocratic charm. The result is an iconic family estate that embodies luxury, heritage, and enduring architectural excellence.",
    shortDesc: "Iconic neo-classical estate with stately colonnades and grand proportions",
    images: ["/images/sfh7.jpeg"],
    featured: false,
    client: "Mr. Sasar",
    plotArea: "1094 sq.m",
    builtUpArea: "2000 sq.m",
    type: "Luxury Neo-Classical Villa",
    status: "Completed",
  },
  {
    id: 8,
    slug: "hillside-apartments",
    title: "Hillside Apartment Complex",
    category: "Residential",
    location: "Pune, Maharashtra",
    year: 2024,
    description:
      "A premium hillside apartment complex featuring exposed brick cladding, generous balconies, and a rooftop garden terrace. Elevated on pilotis to accommodate basement parking, making excellent use of the sloped site.",
    shortDesc: "Premium hillside apartments with rooftop garden and brick facade",
    images: ["/images/bungalow1.jpeg"],
    featured: false,
    client: "V.K. Sahasrabudhe",
    plotArea: "371 sq.m",
    builtUpArea: "473 sq.m",
    type: "Multi-Family Residential Building",
    status: "Completed",
  },
  {
    id: 9,
    slug: "compact-apartments",
    title: "Compact Apartment Building",
    category: "Residential",
    location: "Pune, Maharashtra",
    year: 2022,
    description:
      "A well-proportioned compact apartment building with a clean white and brown facade, stilt parking, and generous balconies on each floor. Designed for efficient living with a focus on natural light.",
    shortDesc: "Clean compact apartment building with stilt parking",
    images: ["/images/bungalow6.jpeg"],
    featured: false,
  },
];
