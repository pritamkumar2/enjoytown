import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/admin/",
                    "/login/",
                    "/register/",
                    "/private/"
                ],
            }
        ],
        sitemap: "https://www.movie-watch.com/",
    };
}
