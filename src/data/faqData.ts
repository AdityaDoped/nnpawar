// FAQ data for the civil engineering chatbot
// Each entry has: question, answer, and keywords for matching

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: "approvals" | "structural" | "materials" | "process" | "costs" | "general";
}

export const faqData: FAQItem[] = [
  // ── APPROVALS ──────────────────────────────────────────────────────────────
  {
    id: "building-plan-approval",
    question: "What is the building plan approval process in Pune?",
    answer:
      "Building plan approval in Pune involves submitting drawings to the relevant authority — PMC (Pune Municipal Corporation) for city limits, PMRDA for ring road areas, or Grampanchayat for village zones. The process includes:\n\n• Submission of architectural & structural drawings\n• Payment of development charges\n• Scrutiny by the authority\n• Issuance of IOD (Intimation of Disapproval) or sanction letter\n\nTypically takes 30–90 days depending on the zone and project size. We handle the entire approval process for our clients.",
    keywords: ["approval", "plan", "pmc", "pmrda", "sanction", "building permit", "licence", "permission", "municipal", "authority"],
    category: "approvals",
  },
  {
    id: "commencement-certificate",
    question: "What is a Commencement Certificate (CC)?",
    answer:
      "A Commencement Certificate (CC) is an official document issued by the municipal authority (PMC/PMRDA) that permits you to begin construction. It is obtained after the building plan is sanctioned and the required fees are paid.\n\nWithout a CC, construction is illegal and can be demolished by the authority. We assist clients in obtaining the CC as part of our licensed engineering services.",
    keywords: ["commencement", "cc", "start construction", "begin", "iod"],
    category: "approvals",
  },
  {
    id: "completion-certificate",
    question: "What is an Occupancy / Completion Certificate (OC)?",
    answer:
      "An Occupancy Certificate (OC) or Completion Certificate is issued after construction is complete and an inspection confirms the building was built as per the approved plan. It is mandatory before:\n\n• Moving into / occupying the building\n• Obtaining utility connections (electricity, water)\n• Registering the property\n\nWithout an OC, the building is legally unauthorized. We supervise construction to ensure OC can be obtained smoothly.",
    keywords: ["occupancy", "oc", "completion certificate", "handover", "finish"],
    category: "approvals",
  },
  {
    id: "na-order",
    question: "What is an NA (Non-Agricultural) order?",
    answer:
      "An NA order converts agricultural land to non-agricultural use, which is legally required before any residential, commercial, or industrial construction. Without it, you cannot obtain a building plan sanction.\n\nThe process involves applying to the Collector's office with relevant documents. It can take 3–12 months. We guide clients through this process as part of our pre-construction services.",
    keywords: ["na", "non agricultural", "na order", "agricultural land", "conversion", "collector"],
    category: "approvals",
  },
  {
    id: "fsi",
    question: "What is FSI (Floor Space Index) and how does it affect my project?",
    answer:
      "FSI (Floor Space Index), also called FAR (Floor Area Ratio), is the ratio of the total built-up area to the plot area.\n\nExample: If your plot is 500 sq.m and the FSI is 1.5, you can build a maximum of 750 sq.m.\n\nFSI varies by zone in Pune:\n• Residential (core city): 1.10 – 1.75\n• Residential (suburbs): up to 2.0\n• Commercial: up to 3.0\n• TDR (Transfer of Development Rights) can boost FSI further\n\nWe calculate FSI and maximize usable area within legal limits for every project.",
    keywords: ["fsi", "floor space index", "far", "floor area ratio", "tdr", "built up area", "coverage"],
    category: "approvals",
  },
  {
    id: "setback",
    question: "What are setback requirements for a building?",
    answer:
      "Setbacks are mandatory open spaces that must be left between the building and the plot boundary. In Pune, typical setbacks for residential buildings:\n\n• Front (road side): 3 – 6 metres (depends on road width)\n• Side: 1.5 – 3 metres\n• Rear: 3 metres\n\nFor commercial and high-rise buildings, setbacks are larger. Setback violations are among the most common reasons for building plan rejection. We carefully design within all setback norms.",
    keywords: ["setback", "margin", "open space", "boundary", "side margin", "front margin"],
    category: "approvals",
  },

  // ── STRUCTURAL ─────────────────────────────────────────────────────────────
  {
    id: "foundation-types",
    question: "What type of foundation is best for my building?",
    answer:
      "The right foundation depends on soil type, load, and building height:\n\n• **Isolated Footing** — for independent columns in good soil (most common for bungalows)\n• **Combined Footing** — when columns are close together\n• **Raft/Mat Foundation** — when soil is weak or load is heavy (apartments)\n• **Pile Foundation** — for very weak/black cotton soil or tall buildings\n\nWe conduct soil investigation before every project and design the foundation accordingly for maximum safety and cost efficiency.",
    keywords: ["foundation", "footing", "pile", "raft", "soil", "base", "ground"],
    category: "structural",
  },
  {
    id: "rcc-vs-load-bearing",
    question: "What is the difference between RCC and load-bearing construction?",
    answer:
      "**RCC (Reinforced Cement Concrete) Frame Structure:**\n• Columns and beams carry the load\n• Walls are non-structural (partition walls)\n• Suitable for multi-storey buildings (G+2 and above)\n• More flexible for layouts, openings, and future changes\n• Preferred for most modern construction\n\n**Load-Bearing Structure:**\n• Walls carry the load directly to the foundation\n• Economical for small single-storey structures\n• Not suitable for more than 2 floors\n• Less flexible for modifications later\n\nFor most residential and commercial projects, we recommend RCC frame construction for durability and safety.",
    keywords: ["rcc", "load bearing", "reinforced", "frame", "column", "beam", "brick", "structure"],
    category: "structural",
  },
  {
    id: "structural-design",
    question: "Why is a structural design/drawing necessary?",
    answer:
      "A structural design is a detailed engineering document that specifies:\n\n• Size and spacing of columns, beams, and slabs\n• Reinforcement (rebar) details\n• Foundation design based on soil capacity\n• Load calculations (dead load, live load, wind load, seismic load)\n\nIt is mandatory for PMC/PMRDA plan approval and ensures your building is safe. As licensed engineers, we prepare IS-code-compliant structural designs for all our projects.",
    keywords: ["structural design", "drawing", "rebar", "reinforcement", "load calculation", "structural drawing", "engineering drawing"],
    category: "structural",
  },
  {
    id: "earthquake",
    question: "Is Pune in an earthquake zone? How is my building protected?",
    answer:
      "Pune falls in **Seismic Zone III** as per IS 1893. This means moderate earthquake risk. All buildings must be designed to resist seismic forces.\n\nKey design measures include:\n• Proper column-beam ductile detailing\n• Confinement reinforcement in columns\n• Shear walls for tall buildings\n• Correct RCC mix and cover\n\nWe follow the Bureau of Indian Standards (BIS) earthquake-resistant design codes for every project.",
    keywords: ["earthquake", "seismic", "zone", "tremor", "quake", "safe"],
    category: "structural",
  },

  // ── MATERIALS ──────────────────────────────────────────────────────────────
  {
    id: "concrete-grade",
    question: "Which grade of concrete should be used for a residential building?",
    answer:
      "Concrete grade refers to its compressive strength (in N/mm²):\n\n• **M20** — Minimum for RCC columns, beams, slabs in residential buildings\n• **M25** — Recommended for ground floor columns and foundations\n• **M30+** — Used for high-rise buildings and heavy-load areas\n\nM15 or M10 is used only for plain concrete (PCC) in bedding. We specify the appropriate grade in our structural designs as per IS 456:2000.",
    keywords: ["concrete", "grade", "m20", "m25", "m30", "mix", "cement", "rcc mix"],
    category: "materials",
  },
  {
    id: "steel-grade",
    question: "What type of steel (rebar) is used in construction?",
    answer:
      "The most commonly used steel in India for reinforcement:\n\n• **Fe 415** — Older standard, being phased out\n• **Fe 500 / Fe 500D** — Most commonly used today. Higher strength and ductility\n• **Fe 550D** — Used in high-rise and heavy structures\n\nWe specify Fe 500D (D = ductile) in our structural designs for better earthquake performance. Always buy TMT steel from reputed brands (Tata, SAIL, JSW, etc.) with proper mill certificates.",
    keywords: ["steel", "rebar", "fe500", "tmt", "reinforcement bar", "iron", "rod"],
    category: "materials",
  },
  {
    id: "brick-types",
    question: "What types of bricks or blocks are used in Pune?",
    answer:
      "Common masonry options in Pune:\n\n• **Red clay bricks** — Traditional, good thermal mass, but water absorption is high\n• **Fly ash bricks (AAC)** — Lightweight, less water absorption, eco-friendly, good for partitions\n• **AAC (Autoclaved Aerated Concrete) blocks** — Excellent thermal insulation, lightweight, reduces slab load\n• **Hollow concrete blocks** — For boundary walls and utility areas\n\nFor RCC frame structures, we recommend AAC or fly ash blocks for partition walls — they reduce cost and structural load.",
    keywords: ["brick", "block", "aac", "fly ash", "masonry", "wall material", "red brick", "hollow block"],
    category: "materials",
  },

  // ── PROCESS ────────────────────────────────────────────────────────────────
  {
    id: "how-to-start",
    question: "How do I start a construction project with N.N. Pawar & Associates?",
    answer:
      "Getting started is simple:\n\n1. **Initial Consultation** — Share your plot details, requirements, and budget with us (free of charge)\n2. **Site Visit** — We visit and assess the site, soil, orientation, and local regulations\n3. **Concept Design** — We prepare preliminary floor plans and elevations for your feedback\n4. **Final Design & Drawings** — Architectural + structural drawings prepared\n5. **Plan Approval** — We submit and follow up with PMC/PMRDA on your behalf\n6. **Construction Supervision** — We oversee the build to ensure quality\n\nContact us via WhatsApp or call +91 9422322195 to begin!",
    keywords: ["start", "begin", "how to", "process", "steps", "hire", "contact", "approach"],
    category: "process",
  },
  {
    id: "timeline",
    question: "How long does it take to build a bungalow?",
    answer:
      "A typical G+1 residential bungalow (2,000–4,000 sq.ft) takes:\n\n• **Design & drawings:** 2–4 weeks\n• **Plan approval (PMC/PMRDA):** 1–3 months\n• **Construction (structure):** 6–10 months\n• **Finishing work:** 2–4 months\n\n**Total: approximately 12–18 months** from design to handover, depending on complexity and approvals.\n\nFactors that affect timeline: site conditions, approval speed, material availability, and scope changes.",
    keywords: ["timeline", "duration", "how long", "time", "months", "bungalow", "construction time"],
    category: "process",
  },
  {
    id: "vastu",
    question: "Do you design Vastu-compliant buildings?",
    answer:
      "Yes, we offer Vastu-compliant design as an optional service. We work with clients who prefer to incorporate Vastu Shastra principles into their floor plans, including:\n\n• Main door orientation\n• Kitchen and prayer room placement\n• Master bedroom direction\n• Staircase positioning\n• Plot orientation analysis\n\nNote: We always ensure Vastu recommendations are balanced with structural requirements and building regulations.",
    keywords: ["vastu", "vastu shastra", "direction", "orientation", "east facing", "north facing"],
    category: "process",
  },

  // ── COSTS ──────────────────────────────────────────────────────────────────
  {
    id: "construction-cost",
    question: "What is the approximate construction cost per sq.ft in Pune?",
    answer:
      "Construction costs in Pune (2024–25 estimate):\n\n• **Basic quality:** ₹1,400 – ₹1,800 per sq.ft\n• **Standard quality:** ₹1,800 – ₹2,400 per sq.ft\n• **Premium quality:** ₹2,500 – ₹3,500+ per sq.ft\n\n⚠️ These are approximate figures and vary based on materials, finishes, location, and current market rates.\n\nThis typically **excludes**: land cost, approval fees, interior furniture, and landscaping. We provide detailed BOQ (Bill of Quantities) estimates for each project.",
    keywords: ["cost", "rate", "price", "sq ft", "budget", "estimate", "how much", "expensive"],
    category: "costs",
  },
  {
    id: "architect-fees",
    question: "What are typical architect/engineering consultant fees?",
    answer:
      "Architectural and engineering consultant fees in India are typically charged as:\n\n• **Percentage of construction cost:** 3% – 8% (varies by scope)\n• **Per sq.ft rate:** ₹40 – ₹120 per sq.ft (design + drawings + approvals)\n• **Fixed fee:** For specific services like only structural drawings or only approvals\n\nFees vary based on project complexity, services included (design only vs. full supervision), and the consultant's experience. Contact us for a tailored quote.",
    keywords: ["fee", "fees", "architect fee", "consultant fee", "charges", "rate", "how much charge"],
    category: "costs",
  },

  // ── GENERAL ────────────────────────────────────────────────────────────────
  {
    id: "difference-architect-engineer",
    question: "What is the difference between an architect and a licensed engineer?",
    answer:
      "**Architect:**\n• Focuses on design, aesthetics, space planning, and livability\n• Registered with the Council of Architecture (COA)\n• Signs architectural drawings for plan approval\n\n**Licensed Engineer (Civil):**\n• Focuses on structural safety, load calculations, and compliance\n• Registered with the local municipal body as a licensed professional\n• Signs structural drawings and is responsible for structural safety\n\n**N.N. Pawar & Associates** combines both roles — offering architectural design AND licensed engineering expertise, giving clients a single-window solution.",
    keywords: ["architect", "engineer", "difference", "licensed", "civil engineer", "structural engineer"],
    category: "general",
  },
  {
    id: "black-cotton-soil",
    question: "What is black cotton soil and why is it problematic for construction?",
    answer:
      "Black cotton soil (BC soil) is an expansive clay soil found in parts of Maharashtra. It is problematic because:\n\n• It swells significantly when wet and shrinks when dry\n• This swelling/shrinking causes cracks in foundations and walls\n• Very low bearing capacity in wet conditions\n\n**Solutions:**\n• Replace BC soil with stable fill (3–5 ft replacement)\n• Use raft or pile foundations to go deeper\n• Chemical stabilization with lime\n• Proper drainage to prevent water ingress\n\nWe assess soil conditions on every project site before designing foundations.",
    keywords: ["black cotton", "bc soil", "soil", "crack", "expansive", "clay soil", "shrink", "swell"],
    category: "structural",
  },
  {
    id: "waterproofing",
    question: "What waterproofing methods are used in construction?",
    answer:
      "Common waterproofing methods used in Pune:\n\n• **Terrace/Roof:** Integral waterproofing compound in concrete + brick bat coba + IPS finish. Or membrane-based systems (APP/SBS)\n• **Bathroom/Wet areas:** Crystalline waterproofing or Dr. Fixit/STP polymer coatings\n• **Basement/Underground:** Bituminous membrane + drainage layer\n• **External walls:** Textured exterior paint + proper coping at parapet\n\nWaterproofing is critical in Pune due to heavy monsoon rains. Poor waterproofing is the most common post-construction complaint. We specify and supervise proper waterproofing on all projects.",
    keywords: ["waterproof", "leakage", "seepage", "water", "terrace", "roof", "basement", "moisture", "crack"],
    category: "materials",
  },
];

export function searchFAQ(query: string): FAQItem[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const scored = faqData.map((item) => {
    let score = 0;
    // Check keywords
    item.keywords.forEach((kw) => {
      if (q.includes(kw)) score += 3;
      if (kw.includes(q)) score += 1;
    });
    // Check question text
    const words = q.split(/\s+/);
    words.forEach((word) => {
      if (word.length > 2 && item.question.toLowerCase().includes(word)) score += 2;
      if (word.length > 2 && item.answer.toLowerCase().includes(word)) score += 1;
    });
    return { item, score };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.item);
}

export const suggestedQuestions = [
  "How do I get building plan approval in Pune?",
  "What is FSI in Pune?",
  "What foundation is best for my plot?",
  "How much does construction cost per sq.ft?",
  "What is the difference between RCC and load-bearing?",
  "How long does it take to build a bungalow?",
  "What is an Occupancy Certificate?",
  "Is Pune in an earthquake zone?",
];
