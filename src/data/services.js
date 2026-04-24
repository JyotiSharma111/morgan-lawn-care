export const services = [
  {
    id: 1,
    slug: "lawn-mowing-maintenance",
    name: "Lawn Mowing & Maintenance",
    shortName: "Lawn Mowing",
    image:"mowing.jpeg",
    excerpt:
      "Professional mowing, edging, and trimming to keep your lawn clean, healthy, and curb-appeal ready.",
    description:
      "Morgan Lawn Care & Landscaping provides reliable, professional lawn mowing and maintenance in Providence Village, Little Elm, and surrounding areas. We handle mowing, edging, trimming, and clean-up so your yard always looks sharp and well cared for.",
    bullets: [
      "Consistent, reliable mowing schedule",
      "Clean edging along driveways, sidewalks, and flower beds",
      "String trimming around fences, trees, and tight areas",
      "Full clean-up and blow-off of hard surfaces",
    ],
    keywords: [
      "lawn mowing Providence Village TX",
      "lawn care Little Elm TX",
      "lawn maintenance near me",
    ],
  },
  {
    id: 2,
    slug: "shrub-bush-trimming",
    name: "Shrub & Bush Trimming",
    shortName: "Shrub Trimming",
    image:"mowing2.jpeg",
    excerpt:
      "Shape and maintain shrubs and bushes to keep your landscape neat and healthy.",
    description:
      "Overgrown shrubs can make a property look messy. We carefully trim and shape shrubs and bushes to improve curb appeal while protecting plant health.",
    bullets: [
      "Seasonal trimming and shaping",
      "Removal of dead or damaged growth",
      "Clean-up and haul-away of clippings",
      "Helps maintain plant health and structure",
    ],
    keywords: [
      "shrub trimming Providence Village",
      "bush trimming Little Elm",
      "landscaping Aubrey TX",
    ],
  },
  {
    id: 3,
    slug: "spring-fall-cleanups",
    name: "Spring & Fall Clean Ups",
    shortName: "Seasonal Clean Ups",
    image:"mowing3.jpeg",
    excerpt:
      "Full property clean-ups to get your yard ready for the season ahead.",
    description:
      "Seasonal clean-ups remove leaves, branches, and debris that build up over time. We prepare your lawn and landscape for the growing season or winter months.",
    bullets: [
      "Leaf and debris removal",
      "Bed clean-out and light pruning",
      "Haul-away of yard waste",
      "Perfect before listing or hosting events",
    ],
    keywords: [
      "yard clean up Providence Village",
      "spring clean up Little Elm",
      "fall clean up near me",
    ],
  },
  {
    id: 4,
    slug: "landscape-projects",
    name: "Landscape Projects",
    shortName: "Landscape Projects",
    image:"mowing4.jpeg",
    excerpt:
      "Custom landscape projects including plant installations, bed redesigns, and light hardscaping.",
    description:
      "From refreshing your front beds to adding new planting areas, Morgan Lawn Care & Landscaping can help design and install landscape projects that fit your property and budget.",
    bullets: [
      "New plant and flower installations",
      "Bed redesigns and border updates",
      "Light hardscaping accents",
      "Collaborative planning with property owners",
    ],
    keywords: [
      "landscaping Providence Village TX",
      "landscape design Little Elm",
      "landscaper near me",
    ],
  },
  {
    id: 5,
    slug: "mulch-installation",
    name: "Mulch Installation",
    shortName: "Mulch Installation",
    image:"mowing5.jpeg",
    excerpt:
      "Professional mulch installation to refresh beds and protect your plants.",
    description:
      "Mulch not only looks great, it also helps retain moisture and control weeds. We install natural hardwood, dyed black, or dyed red mulch to match your home and landscape.",
    bullets: [
      "Natural hardwood, dyed black, or dyed red mulch",
      "Proper bed preparation and weed removal",
      "Even, consistent mulch depth",
      "Instant curb appeal upgrade",
    ],
    keywords: [
      "mulch installation Providence Village",
      "mulch Little Elm TX",
      "landscaping Aubrey TX",
    ],
  },
  {
    id: 6,
    slug: "weed-removal-fertilizing",
    name: "Weed Removal & Fertilizing",
    shortName: "Weed & Fertilizing",
    image:"mowing6.jpeg",
    excerpt:
      "Targeted weed removal and fertilizing to support a thick, healthy lawn.",
    description:
      "Weeds compete with your grass for nutrients and water. Our weed removal and fertilizing services help your lawn grow thicker and greener over time.",
    bullets: [
      "Spot-treatment and removal of visible weeds",
      "Fertilizing to support healthy growth",
      "Customized approach based on lawn condition",
      "Helps improve color and density",
    ],
    keywords: [
      "weed control Providence Village",
      "lawn fertilizing Little Elm",
      "lawn treatment near me",
    ],
  },
  {
    id: 7,
    slug: "tree-trimming",
    name: "Tree Trimming",
    shortName: "Tree Trimming",
    image:"mowing7.jpeg",
    excerpt:
      "Light tree trimming to remove low branches and improve safety and appearance.",
    description:
      "We provide light tree trimming to remove low-hanging or nuisance branches, improve clearance, and keep your property looking clean and open.",
    bullets: [
      "Light trimming of low branches",
      "Improves clearance over walkways and driveways",
      "Enhances curb appeal and visibility",
      "Debris clean-up and haul-away",
    ],
    keywords: [
      "tree trimming Providence Village",
      "tree service Little Elm",
      "landscaping Aubrey TX",
    ],
  },
  {
    id: 8,
    slug: "sod-installation",
    name: "Sod Installation",
    shortName: "Sod Installation",
    image:"mowing8.jpeg",
    excerpt:
      "New sod installation for an instant green lawn in bare or damaged areas.",
    description:
      "If your lawn is thin, patchy, or bare, new sod can transform it quickly. We handle soil prep, sod installation, and post-install guidance.",
    bullets: [
      "Removal of existing dead grass and debris",
      "Soil preparation and grading",
      "Professional sod installation",
      "Care instructions for best results",
    ],
    keywords: [
      "sod installation Providence Village",
      "new lawn Little Elm",
      "sod near me",
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
