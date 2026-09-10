export interface EventItem {
  title: string;
  date: string;
  place: string;
  description: string;
  image: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export interface ProfileItem {
  name: string;
  kicker: string;
  image: string;
  alt: string;
  short: string;
  detail: string;
}

export interface BlessingItem {
  quote: string;
  cite: string;
  image: string;
  keepsake?: boolean;
}

export const EVENTS: EventItem[] = [
  {
    title: "Mehfil-e-Shaam",
    date: "19 February · 7:00 pm",
    place: "The Courtyard",
    description: "An evening of old songs, new stories, and the first toast to the weekend that brought us all here.",
    image: "/images/couple-flowers.jpg"
  },
  {
    title: "Rang Barse",
    date: "20 February · 11:00 am",
    place: "Rang Mahal",
    description: "Colour, rhythm, and an open invitation to dance before the serious business of forever begins.",
    image: "/images/event-hands.jpg"
  },
  {
    title: "Saat Phere",
    date: "21 February · 5:30 pm",
    place: "The Lake Pavilion",
    description: "Seven promises beside the water, surrounded by the people who made our story possible.",
    image: "/images/event-saat-phere.jpg"
  },
  {
    title: "Vidaai Brunch",
    date: "22 February · 10:30 am",
    place: "The Garden Terrace",
    description: "One last slow morning together, with sunlight, sweet things, and a little reluctance to say goodbye.",
    image: "/images/couple-nikkah.jpg"
  }
];

export const JOURNEY: JourneyItem[] = [
  {
    year: "2018",
    title: "Knowing",
    description: "A shared table, an overlong conversation, and the first feeling that this was something worth staying for."
  },
  {
    year: "2022",
    title: "Introduction",
    description: "Two families, one very full living room, and enough food to make the meeting feel like home."
  },
  {
    year: "2026",
    title: "Promise",
    description: "A question beside a quiet lake. A yes that made every future feel suddenly close."
  }
];

export const PROFILES: Record<"meera" | "aarav", ProfileItem> = {
  meera: {
    name: "Meera",
    kicker: "Her way",
    image: "/images/bride-makeup.jpg",
    alt: "Portrait of Meera getting ready",
    short: "She notices the small things, remembers every birthday, and can turn an ordinary afternoon into a reason to gather. Meera brings warmth wherever she goes.",
    detail: "She collects little rituals: the first cup of tea, a song for every mood, and a reason to make one more person feel at home. Meera believes the best days are made of small, beautiful details."
  },
  aarav: {
    name: "Aarav",
    kicker: "His way",
    image: "/images/groom-sherwani.jpg",
    alt: "Portrait of Aarav in his sherwani",
    short: "He carries the long stories, the steady laugh, and an instinct for making room at the table. Aarav makes every place feel a little more like home.",
    detail: "He brings the long stories, the steady laugh, and an instinct for making room at the table. Aarav finds joy in the unplanned detours and always knows when it is time to stay a little longer."
  }
};

export const BLESSINGS: BlessingItem[] = [
  {
    quote: "May you always find your way back to the same table.",
    cite: "With love, always",
    image: "/images/flower-gold.png"
  },
  {
    quote: "For all the days ahead: more laughter than luggage.",
    cite: "Your favourite people",
    image: "/images/flower-gold.png"
  },
  {
    quote: "A beautiful beginning to a very long story.",
    cite: "From our hearts",
    image: "/images/flower-gold.png"
  },
  {
    quote: "May your home always hold a little light for everyone who comes to it.",
    cite: "A keepsake for the road",
    image: "/images/flower-gold.png",
    keepsake: true
  }
];
