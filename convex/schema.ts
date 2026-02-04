import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  intro: defineTable({
    picture: v.string(),
    description: v.string(),
    about_me: v.string(),
    header: v.string(),
  }),
  socials: defineTable({
    github: v.string(),
    linkedin: v.string(),
    x: v.string(),
    mail: v.string(),
    phone: v.string(),
    resume: v.string(),
  }),
  experiences: defineTable({
    company: v.string(),
    job_title: v.string(),
    dates: v.string(),
    link: v.string(),
  }),
  works: defineTable({
    name: v.string(),
    icon: v.string(),
    link: v.string(),
    description: v.string(),
    tech: v.array(v.string()),
  }),
  about: defineTable({
    title: v.string(),
    description: v.string(),
  }),
  tools: defineTable({
    title: v.string(),
    description: v.string(),
  }),
  specializations: defineTable({
    title: v.string(),
    description: v.string(),
  }),
});

