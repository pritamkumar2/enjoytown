// Define the type for a carousel item
interface CarouselItem {
  image: string;
  path: string;
  title: string;
}

// Define the data with the correct types
export const homeCarouselData: CarouselItem[] = [
  {
    image: "https://i.ibb.co/LkDZhTR/2.png",
    path: "/movie/848116",
    title: "Watch Movie",
  },
  {
    image: "https://i.ibb.co/kgyXp2c/1.png",
    path: "/anime/Watch?category=top",
    title: "Top Anime",
  },
  {
    image: "https://i.ibb.co/mzT1JHw/3.png",
    path: "/movie/Watch?category=Watch",
    title: "Watch Again",
  },
];

export const southmovieData: CarouselItem[] = [
  {
    image: "https://imgur.com/W7DTG43.png",
    path: "/movie/1118224",
    title: "Watch Movie",
  },
  {
    image: "https://imgur.com/1eK5d6v.png",
    path: "/movie/472221",
    title: "Top Movie",
  },
  {
    image: "https://imgur.com/zPlwI8q.png",
    path: "/movie/587412",
    title: "Watch Again",
  },
];
