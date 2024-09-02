import React from 'react';
import { SiteHeader } from '@/components/navbar/site-header';

import { Metadata } from "next";


export const metadata: Metadata = {
    title: "About Us - movie-watch",
    description: "Learn more about  movie-watch.com, your ultimate destination for movies, anime, TV shows, and more. Discover how we provide an extensive collection of content tailored to your entertainment needs.",
    openGraph: {
      title: "About Us -  movie-watch",
      description: "Discover more about  movie-watch.com, your source for the latest movies, anime, and TV shows. Learn how we cater to all your entertainment needs.",
    
    },
  };
const About = () => {
  return (
    <><SiteHeader/> 
    <div className="about-container p-6 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to watch-movie.com, your go-to destination for exploring the latest and greatest in movies, anime, TV shows, and more. Our platform is dedicated to providing you with an extensive collection of content that caters to all your entertainment needs.
      </p>
      <p className="text-lg mb-4">
        Whether you’re a movie buff, an anime enthusiast, or just looking for something new to watch, we’ve got you covered. Our user-friendly interface and regularly updated library ensure that you’ll always find something that suits your taste.
      </p>
      <p className="text-lg">
        Thank you for choosing watch-movie.com as your entertainment hub. We’re constantly working to improve your experience and bring you the best content available. Happy watching!
      </p>
    </div>
    </>
  );
}

export default About;
