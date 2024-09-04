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
    path: "/movie/848116/rocky and rani",
    title: "Watch Movie",
  },
  {
    image: "https://i.ibb.co/kgyXp2c/1.png",
    path: "/anime/112151",
    title: "Top Anime",
  },
  {
    image: "https://i.ibb.co/mzT1JHw/3.png",
    path: "/movie/872906/jawan",
    title: "jawan",
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
    image: "https://imgur.com/w7qGhD9.png",
    path: "/watch/1136418",
    title: "Watch Again",
  },
];
