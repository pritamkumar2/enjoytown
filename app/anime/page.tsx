

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import Popular from "@/components/sections/anime/popular";
import Trending from "@/components/sections/anime/trending";
import AiringSchedule from "@/components/sections/anime/airing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anime",
  description: "Discover the latest trending, popular, and upcoming anime.",
  openGraph: {
    title: "Anime",
    description: "Discover the latest trending, popular, and upcoming anime.",
   
  },
};
const Carousal = dynamic(() => import("@/components/carousal/anime"), {
  ssr: false,
  loading: () => (
    <>
      <div className="flex md:hidden h-[70vh] relative">
        <Skeleton className="absolute inset-0" />
      </div>
      <div className="relative h-[70vh] md:flex w-full hidden mx-auto">
        <Skeleton className="object-cover rounded-xl transition-all w-full relative h-[70vh] container grid items-center gap-6 pb-8 pt-6 md:py-10" />
      </div>
    </>
  ),
});

export default async function Home() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Carousal/>
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="w-full grid grid-cols-3 pb-4">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="airing">Airing Soon</TabsTrigger>
          </TabsList>
          <TabsContent value="trending">
            <div className="flex items-center justify-between gap-2 pb-4 py-4">
              <div>
                <h1 className="text-2xl font-mono leading-tight tracking-tighter md:text-4x font-bold">
                  Trending Anime
                </h1>

                <p className="text-muted-foreground">
                  Anime ordered by trending.
                </p>
              </div>
            </div>
            <Trending />
          </TabsContent>
          <TabsContent value="popular">
            <div className="flex items-center justify-between gap-2 pb-4 py-4">
              <div>
                <h1 className="text-2xl font-mono leading-tight tracking-tighter md:text-4x font-bold">
                  Popular Anime
                </h1>

                <p className="text-muted-foreground">
                  Anime that are all-time popular.
                </p>
              </div>
            </div>
            <Popular />
          </TabsContent>
          <TabsContent value="airing">
            <div className="flex items-center justify-between gap-2 pb-4 py-4">
              <div>
                <h1 className="text-2xl font-mono leading-tight tracking-tighter md:text-4x font-bold">
                  Airing Soon
                </h1>

                <p className="text-muted-foreground">Upcoming anime</p>
              </div>
            </div>
            <AiringSchedule />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
