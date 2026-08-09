/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         🎬 NETFLIX LOVE APP — EDIT EVERYTHING HERE          ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Sirf is ek file mein saara content change karo!            ║
 * ║  Thumbnail, video, title, description — sab yahan hai.      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────
//  WHO'S WATCHING — Profile Screen
// ─────────────────────────────────────────────
export const PROFILE = {
  name: "Rushali Belapurkar",
  image: "/thumb/main1.jpg",
};

// ─────────────────────────────────────────────
//  HERO — Main Billboard Section
// ─────────────────────────────────────────────
export const HERO = {
  // Desktop background (laptop/tablet pe dikhega)
  backgroundSrc: "/thumb/main.png",

  // Mobile background — phone pe yeh image dikhegi
  backgroundMobileSrc: "/thumb/mainph.png",

  // Hero Video — Hero Play button dabaane par FULLSCREEN mein chalega
  videoSrc: "/videos/main.mp4",

  // Thumbnail — Video se pehle dikhega (hero background ke upar nahi, sirf player mein)
  videoThumbnail: "/thumb/img1.png",

  // Labels & Title
  badgeLabel: "Series",
  title: "Something\nSpecial",
  match: "99% Match",
  year: "2026",
  duration: "1 Season",
  quality: "4K Ultra",
  ageRating: "13+",

  description:
    "Some people take months to trust. With some people, it just happens naturally. Ours somehow became one of those bonds",
};

// ─────────────────────────────────────────────
//  ROWS — Thumbnail Grid Sections
// ─────────────────────────────────────────────
export const ROWS = [
  {
    id: "row-popular",
    rowTitle: "Popular on Netflix",
    items: [
      {
        id: "p1",
        title: "The Birthday Episode",
        img: "/thumb/img1.png",
        videoSrc: "/videos/v7.mp4",
        tags: ["Birthday • Team • Memories"],
        match: "98% Match",
        age: "13+",
        duration: "10s",
        desc: "Some people wished you on camera, some needed a little help getting there… but the message was the same — you matter to this team And admittedly, to some people here a little more than they probably should. 😉.",
      },
      {
        id: "p2",
        title: "Sun, Sea & That Smile",
        img: "/thumb/img2.png",
        videoSrc: "/videos/v6.mp4",
        tags: ["Heartfelt", "Deep Connections"],
        match: "95% Match",
        age: "16+",
        duration: "27s",
        desc: "A day by the sea with her favourite little travel companion, a lot of exploring, and enough spontaneous reactions to make the whole trip entertaining. Honestly, the beach was lucky to have the company. 😉.",
      },
      {
        id: "p3",
        title: "Dance Mode: ON",
        img: "/thumb/img3.png",
        videoSrc: "/videos/v5.mp4",
        tags: ["Dance • Friends • Fun"],
        match: "99% Match",
        age: "All",
        duration: "16s",
        desc: "When “Shower” by Becky G comes on, apparently there's only one option — turn the music up and dance. A fun little memory full of energy, laughter and some seriously good moves.",
      },
      {
        id: "p4",
        title: "The Two-Ponytail Incident",
        img: "/thumb/img8.png",
        videoSrc: "/videos/v8.mp4",
        tags: ["Team • Fun • Chaos"],
        match: "92% Match",
        age: "13+",
        duration: "1 Season",
        desc: "A completely normal training day… until Rushali decided those long locks needed some attention. Two ponytails later, the training room had officially become a salon. 😂
",
      },
      {
        id: "p5",
        title: "The Campus Concert",
        img: "/thumb/img9.png",
        videoSrc: "/videos/v9.mp4",
        tags: ["Karaoke • Team • Music"],
        match: "89% Match",
        age: "18+",
        duration: "2 Seasons",
        desc: " Jeancheng picks up the guitar and suddenly the whole place has a soundtrack. One by one, everyone joins in until the entrance turns into an impromptu concert — the kind of office memory that definitely wasn't on the schedule.
",
      },
    ],
  },
  {
    id: "row-trending",
    rowTitle: "Trending Now",
    items: [
      {
        id: "t1",
        title: "Special Days",
        img: "/thumb/img6.png",
        videoSrc: "/videos/v2.mp4",
        tags: ["Celebration", "Feel-good"],
        match: "97% Match",
        age: "All",
        duration: "1h 15m",
        desc: "Every anniversary, birthday, and random surprise date packed into a high-energy saga of joy. A beautiful reminder that everyday moments become historic milestones.",
      },
      {
        id: "t2",
        title: "13 Reason Why",
        img: "/thumb/img7.png",
        videoSrc: "/videos/v1.mp4",
        tags: ["Calm", "Intimate", "Friendship"],
        match: "94% Match",
        age: "13+",
        duration: "3h 05m",
        desc: "They're the apple of my eye... even when they're the reason why I need coffee.",
      },
      {
        id: "t3",
        title: "First Impression",
        img: "/thumb/main.png",
        videoSrc: "/videos/v10.mp4",
        tags: ["Awkward", "Adorable"],
        match: "91% Match",
        age: "13+",
        duration: "25m",
        desc: "The untold behind-the-scenes thoughts from the very first meeting. Unfiltered, slightly clumsy, completely endearing reflections of two souls meeting their favorite destiny.",
      },
      {
        id: "t4",
        title: "Inside Jokes",
        img: "/thumb/img4.png",
        videoSrc: "/videos/v4.mp4",
        tags: ["Hilarious", "Eccentric"],
        match: "96% Match",
        age: "All",
        duration: "5 Seasons",
        desc: "A secret language built over shared glances across crowded rooms. Warning: High doses of humor that absolutely no one else in the world will ever understand.",
      },
      {
        id: "t5",
        title: "Infinite Love",
        img: "/thumb/img5.png",
        videoSrc: "/videos/v3.mp4",
        tags: ["Timeless", "Masterpiece"],
        match: "99% Match",
        age: "All",
        duration: "Forever",
        desc: "The grand finale that never ends. A deep, cinematic exploration of commitment, shared dreams, and a bond configured to outlast the stars themselves.",
      },
    ],
  },
];

// ─────────────────────────────────────────────
//  AUDIO
// ─────────────────────────────────────────────
export const AUDIO = {
  introSound: "/videos/netflix.mp3",
  bgMusic: "/videos/netflix.mp3",
};
