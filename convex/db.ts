import { query, mutation } from "./_generated/server";

export const getIntro = query({
  args: {},
  handler: async (ctx) => {
    const intro = await ctx.db.query("intro").first();
    return intro;
  },
});

export const getSocials = query({
  args: {},
  handler: async (ctx) => {
    const socials = await ctx.db.query("socials").first();
    return socials;
  },
});

export const getExperiences = query({
  args: {},
  handler: async (ctx) => {
    const experiences = await ctx.db.query("experiences").collect();
    return experiences;
  },
});

export const getWorks = query({
  args: {},
  handler: async (ctx) => {
    const works = await ctx.db.query("works").collect();
    return works;
  },
});

export const getAbout = query({
  args: {},
  handler: async (ctx) => {
    const about = await ctx.db.query("about").collect();
    return about;
  },
});

export const getTools = query({
  args: {},
  handler: async (ctx) => {
    const tools = await ctx.db.query("tools").collect();
    return tools;
  },
});

export const getSpecialization = query({
  args: {},
  handler: async (ctx) => {
    const specialization = await ctx.db
      .query("specializations")
      .collect();
    return specialization;
  },
});

export const initDefaults = mutation({
  args: {},
  handler: async (ctx) => {
    // Intro
    const existingIntro = await ctx.db.query("intro").first();
    if (!existingIntro) {
      await ctx.db.insert("intro", {
        picture:
          "https://res.cloudinary.com/dfwwfrvok/image/upload/v1721815825/photo_2024-07-24_11-05-36_vkyxkl.jpg",
        about_me:
          "My name's Urlyss KAMTO. I bring user interfaces to life using modern frontend and mobile tech.",
        description:
          "Working closely with design teams, I enjoy ensuring that every design is faithfully translated into a pixel-perfect digital experience. With modern frontend and mobile technologies, I bring these creative ideas to life exactly as envisioned.",
        header: "Hey 👋, I'm a creative frontend and mobile developer. ",
      });
    }

    // Socials
    const existingSocials = await ctx.db.query("socials").first();
    if (!existingSocials) {
      await ctx.db.insert("socials", {
        github: "https://github.com/urlyss",
        linkedin: "https://linkedin.com/in/urlyss",
        x: "https://x.com/odusseuskamto",
        mail: "odusseuskamto@gmail.com",
        phone: "+237690760442",
        resume:
          "https://drive.google.com/file/d/1Fp1K1C_8kQZW8KJ7gzn59Q4itP6SOiYS/view?usp=drivesdk",
      });
    }

    // Experiences
    const existingExperiences = await ctx.db.query("experiences").take(1);
    if (existingExperiences.length === 0) {
      await ctx.db.insert("experiences", {
        company: "Ease Travel Service",
        job_title: "Front-end developer",
        dates: "2022 - present",
        link: "https://www.ease.travel",
      });
    }

    // Works
    const existingWorks = await ctx.db.query("works").take(1);
    if (existingWorks.length === 0) {
      await ctx.db.insert("works", {
        name: "Summa",
        icon: "https://placehold.co/400x400?text=summa",
        link: "https://summa-navigator.urlyss.dev/",
        description:
          "An app that allows users to navigate and read the Summa Theologica by Thomas Aquinas, providing easy access to its sections, questions, and articles.Engage with an AI-powered assistant that helps you understand complex theological concepts.",
        tech: ["nextjs"],
      });
      await ctx.db.insert("works", {
        name: "Covertune",
        icon: "https://placehold.co/400x400?text=covertune",
        link: "https://covertune.urlyss.dev/",
        description:
          "An app that allows users to discover music by browsing album cover art, with category selection, detailed album information, and search functionality.",
        tech: ["nextjs"],
      });
      await ctx.db.insert("works", {
        name: "CoordId",
        icon: "https://placehold.co/400x400?text=coordid",
        link: "https://coordid.urlyss.dev/",
        description:
          "An app created for African areas that converts geographic coordinates into a unique ID, solving the address challenge in regions without formal addresses.",
        tech: ["nextjs"],
      });
    }

    // About
    const existingAbout = await ctx.db.query("about").take(1);
    if (existingAbout.length === 0) {
      await ctx.db.insert("about", {
        title: "Rapid Prototyping & MVP",
        description:
          "From ideation and concept development through prototyping, MVP testing, and launching, building technology-driven businesses is in my DNA.",
      });
      await ctx.db.insert("about", {
        title: "Full Stack Development",
        description:
          "Over the years, I've specialized in all areas of the stack, from Front-End to Mobile Development. While I excel in these areas, Back-End and DevOps are also part of my skill set, enhancing my ability to deliver at scale.",
      });
      await ctx.db.insert("about", {
        title: "Serverless / Cloud Native",
        description:
          "An early adopter and Cloud advocate, I use state-of-the-art tools, services, and techniques to help businesses launch their products faster.",
      });
    }

    // Tools
    const existingTools = await ctx.db.query("tools").take(1);
    if (existingTools.length === 0) {
      await ctx.db.insert("tools", {
        title: "Languages",
        description: "JavaScript/Node, Python, Dart, PHP.",
      });
      await ctx.db.insert("tools", {
        title: "Frameworks",
        description:
          "React, Next.js, React Native, Flutter, Tailwind CSS, Firebase, Supabase,Convex,Vercel AI, MongoDB Atlas",
      });
      await ctx.db.insert("tools", {
        title: "DevOps",
        description: "GitHub, Docker, Kubernetes",
      });
      await ctx.db.insert("tools", {
        title: "Platforms",
        description: "Google Cloud Platform",
      });
    }

    // Specializations
    const existingSpecs = await ctx.db.query("specializations").take(1);
    if (existingSpecs.length === 0) {
      await ctx.db.insert("specializations", {
        title: "Strategy and Technological Innovation",
        description:
          "I support startups in leveraging technology for a competitive edge and help existing businesses navigate their tech evolution with effective strategies.",
      });
      await ctx.db.insert("specializations", {
        title: "Serverless First",
        description:
          "Serverless technology is on track to dominate computing in the coming decade. By incorporating it into my work, I help businesses secure a strong advantage in tech development.",
      });
      await ctx.db.insert("specializations", {
        title: "Growth Marketing",
        description:
          "With a keen interest in growth marketing, I apply technology, data, and performance metrics to secure customers and accelerate business growth.",
      });
    }

    return { ok: true };
  },
});
