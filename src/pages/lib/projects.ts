import logoSchedule from "@/assets/images/logos/calendar.jpg";
import logoStarWars from "@/assets/images/logos/starwars.png";
import logoAstronaut from "@/assets/images/logos/astronaut.jpg";
import logoMyWeather from "@/assets/images/logos/weather.jpg";

export const projects = [
  {
    id: 1,
    name: "Astro Browser",
    description:
      "Desenvolvi um navegador em Python com foco no desenvolvimento.",
    link: {
      href: "#",
      label: "astrobrowser.com",
      repo: "github.com/astrobrowser",
    },
    logo: logoAstronaut,
  },

  // {
  //   id: 2,
  //   name: "Star Wars Libray",
  //   description:
  //     "High performance web animation library, hand-written in optimized WASM.",
  //   link: {
  //     href: "#",
  //     label: "starwarslibrary.com",
  //     repo: "github.com/starwarslibrary",
  //   },
  //   logo: logoStarWars,
  // },
  // {
  //   id: 3,
  //   name: "Schedule Date",
  //   description:
  //     "Creating technology to empower civilians to explore space on their own terms.",
  //   link: { href: "#", label: "schedule.tech", repo: "github.com/schedule" },
  //   logo: logoSchedule,
  // },
  // {
  //   id: 4,
  //   name: "My Weather",
  //   description:
  //     "The operating system that powers our Planetaria space shuttles.",
  //   link: { href: "#", label: "myweather.com", repo: "github.com/myweather" },
  //   logo: logoMyWeather,
  // },
];
