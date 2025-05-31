import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    cases: defineCollection({
      source: "cases/*.md",
      type: "page",
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        title: z.string(),
        date: z.date(),
        background: z.string(),
        color: z.string(),
        description: z.string(),
      }),
    }),
  },
});
