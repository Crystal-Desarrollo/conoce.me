import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    cardLayout: z.string(),
    logo: z.string(),
    favIcon: z.string().optional(),
    name: z.string(),
    description: z.union([z.string(), z.array(z.string())]).optional(),
    social: z
      .object({
        facebook: z.string().optional(),
        instagram: z.string().optional(),
        x: z.string().optional(),
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        tiktok: z.string().optional(),
        youtube: z.string().optional(),
        whatsapp: z.string().optional(),
        maps: z.string().optional(),
        email: z.string().optional(),
        cbu: z.string().optional(),
      })
      .optional(),
    links: z
      .array(
        z.object({
          icon: z.string().optional(),
          title: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    style: z
      .object({
        body: z.string().optional(),
        name: z.string().optional(),
        socialIcons: z.string().optional(),
        description: z.string().optional(),
        links: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };
