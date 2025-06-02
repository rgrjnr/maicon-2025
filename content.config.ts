import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    cases: defineCollection({
      source: "cases/*.md",
      type: "page",

      // Define custom schema for docs collection
      schema: z.object({
        agency: z.string(),
        background: z.string(),
        client: z.string(),
        color: z.string(),
        date: z.date(),
        function: z.string(),
        subtitle: z.string(),
        tags: z.array(z.string()),
        title: z.string(),
      }),
    }),
  },
});
