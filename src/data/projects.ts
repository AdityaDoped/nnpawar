export type Project = {
  id: number;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Township";
  location: string;
  year: string;
  description: string;
  shortDesc: string;
  images: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1, slug: "vishwa-vihar", title: "Vishwa Vihar", category: "Township",
    location: "Pune, Maharashtra", year: "2023",
    description: "A premium residential township designed for harmonious community living. Vishwa Vihar features spacious multi-storey apartments with modern amenities including landscaped gardens, a children's play area, dedicated parking, and a temple courtyard — all within a secure gated complex.",
    shortDesc: "Premium gated residential township with full amenities",
    images: ["/images/vv9.jpeg","/images/vv7.jpeg","/images/vv3.jpeg","/images/vv2.jpeg"],
    featured: true,
  },
  {
    id: 2, slug: "nanded-bungalow-gurjar", title: "Residence at Nanded City", category: "Residential",
    location: "Nanded City, Pune", year: "2024",
    description: "A proposed contemporary bungalow for Dr. Narendra Madhav Gurjar on Plot No. 49, Nanded City, Pune. The design features a clean grey and white facade, open glass balconies, a rooftop pergola, and a modern gate with landscaped frontage.",
    shortDesc: "Contemporary bungalow with open balconies and rooftop pergola",
    images: ["/images/bungalow3.jpeg"],
    featured: true,
  },
  {
    id: 3, slug: "nanded-bungalow-shingare", title: "Dr. Shingare Residence", category: "Residential",
    location: "Nanded City, Pune", year: "2024",
    description: "A proposed bungalow on Plot No. 75, Nanded City, Pune for Dr. Vilas Changdev Shingare. This neo-classical design features arched ground-floor entries, ornate wrought iron railings, open terraces, and a grand gated entrance.",
    shortDesc: "Neo-classical bungalow with ornate detailing and grand entrance",
    images: ["/images/bungalow2.jpeg"],
    featured: true,
  },
  {
    id: 4, slug: "commercial-complex", title: "Commercial Complex", category: "Commercial",
    location: "Pune, Maharashtra", year: "2022",
    description: "A mixed-use commercial building housing a hospital, retail outlets including Raymond and BIBA, and office spaces across multiple floors. The bold red and grey facade with vertical fins creates strong visual identity.",
    shortDesc: "Mixed-use commercial building with retail and hospital",
    images: ["/images/bungalow5.jpeg"],
    featured: true,
  },
  {
    id: 5, slug: "mixed-use-building", title: "Mixed-Use Urban Building", category: "Commercial",
    location: "Pune, Maharashtra", year: "2023",
    description: "A modern mixed-use building combining ground-floor commercial spaces with residential units above. Exposed brick texture and large curtain-wall glazing create a contemporary urban presence.",
    shortDesc: "Urban mixed-use building with brick facade and glass frontage",
    images: ["/images/bungalow1.jpeg"],
    featured: false,
  },
  {
    id: 6, slug: "masalwadi-bungalow", title: "Tele Residence, Atpadi", category: "Residential",
    location: "Masalwadi, Atpadi, Sangli", year: "2023",
    description: "A proposed bungalow for Mr. Sanjay Tele at Masalwadi, Atpadi. The design features a striking vertical tower element with louver cladding, a covered porch with an orange canopy, and a compact functional layout.",
    shortDesc: "Modern compact bungalow with striking vertical tower element",
    images: ["/images/bungalow4.jpeg"],
    featured: false,
  },
  {
    id: 7, slug: "classic-grand-villa", title: "Classic Grand Villa", category: "Residential",
    location: "Pune, Maharashtra", year: "2021",
    description: "A grand classical-style villa featuring Corinthian columns, ornate cornices, wrought iron balcony railings with stained glass accents, and a majestic orange tiled roof. Set against lush green surroundings.",
    shortDesc: "Grand classical villa with Corinthian columns and ornate detailing",
    images: ["/images/sfh7.jpeg"],
    featured: false,
  },
  {
    id: 8, slug: "hillside-apartments", title: "Hillside Apartment Complex", category: "Residential",
    location: "Pune, Maharashtra", year: "2024",
    description: "A premium hillside apartment complex featuring exposed brick cladding, generous balconies, and a rooftop garden terrace. Elevated on pilotis to accommodate basement parking, making excellent use of the sloped site.",
    shortDesc: "Premium hillside apartments with rooftop garden and brick facade",
    images: ["/images/cam01.jpeg"],
    featured: false,
  },
  {
    id: 9, slug: "compact-apartments", title: "Compact Apartment Building", category: "Residential",
    location: "Pune, Maharashtra", year: "2022",
    description: "A well-proportioned compact apartment building with a clean white and brown facade, stilt parking, and generous balconies on each floor. Designed for efficient living with a focus on natural light.",
    shortDesc: "Clean compact apartment building with stilt parking",
    images: ["/images/bungalow6.jpeg"],
    featured: false,
  },
];
