import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin/"], // Add any private routes here
        },
        sitemap: "https://niyilor.com/sitemap.xml", // Update with your actual domain
    };
}
