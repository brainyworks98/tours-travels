import manaliHero from "@/assets/manali-hero.jpg";
import goaHero from "@/assets/goa-hero.jpg";

export const packages = [
  {
    id: "manali",
    slug: "manali",
    title: "Manali Snow Adventure – 5D/4N",
    destination: "Manali",
    duration: "5 Days / 4 Nights",
    price: "8,999",
    priceNum: 8999,
    description: "Experience the magic of snow-capped mountains, ancient temples, and thrilling adventure activities in Manali.",
    image: manaliHero,
    popular: true,
    seatsLeft: 5,
    includes: ["Hotel Stay (3-star)", "Breakfast & Dinner", "Sightseeing", "Pickup & Drop"],
    itinerary: [
      { day: 1, title: "Delhi to Manali Volvo", desc: "Overnight journey from Delhi to Manali in a comfortable Volvo bus. Enjoy scenic views of the Himalayas as you ascend." },
      { day: 2, title: "Hadimba Temple & Mall Road", desc: "Visit the ancient Hadimba Temple, explore Mall Road, try local food and shop for souvenirs." },
      { day: 3, title: "Solang Valley / Rohtang Pass", desc: "Full day adventure at Solang Valley with skiing, paragliding. Optional Rohtang Pass excursion (subject to availability)." },
      { day: 4, title: "Kullu & Manikaran", desc: "Day trip to Kullu for river rafting and Manikaran for its famous hot springs and Gurudwara." },
      { day: 5, title: "Return", desc: "Check out and board overnight Volvo back to Delhi with wonderful memories." },
    ],
  },
  {
    id: "goa",
    slug: "goa",
    title: "Goa Beach Escape – 4D/3N",
    destination: "Goa",
    duration: "4 Days / 3 Nights",
    price: "6,999",
    priceNum: 6999,
    description: "Sun, sand, and sea — enjoy Goa's finest beaches, vibrant nightlife, and stunning coastal beauty.",
    image: goaHero,
    popular: true,
    seatsLeft: 3,
    includes: ["Hotel Stay", "Breakfast", "Transfers", "Optional Water Activities"],
    itinerary: [
      { day: 1, title: "Arrival & Baga Beach", desc: "Arrive in Goa, check into your hotel, and head to Baga Beach for a relaxing evening with sunset views." },
      { day: 2, title: "North Goa Tour", desc: "Explore Fort Aguada, Calangute Beach, Anjuna Flea Market, and enjoy the vibrant nightlife." },
      { day: 3, title: "South Goa + Cruise", desc: "Visit Basilica of Bom Jesus, Miramar Beach, and enjoy an evening cruise on the Mandovi River." },
      { day: 4, title: "Departure", desc: "Leisure morning, last-minute shopping, and departure with unforgettable memories." },
    ],
  },
];
