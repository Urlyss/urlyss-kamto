import {
  TAbout,
  TExperience,
  TIntro,
  TSocial,
  TSpecialization,
  TTool,
  TWork,
} from "./types";
import { getConvexServerClient } from "@/convex/client";
import { api } from "@/convex/_generated/api";

const convexClient = getConvexServerClient();

export const getSocials = async () => {
  const defaultSocialList:TSocial = {
    github: "https://github.com/urlyss",
    linkedin: "https://linkedin.com/in/urlyss",
    x: "https://x.com/odusseuskamto",
    mail: "odusseuskamto@gmail.com",
    phone: "+237690760442",
    resume:
      "https://drive.google.com/file/d/1Fp1K1C_8kQZW8KJ7gzn59Q4itP6SOiYS/view?usp=drivesdk",
  };
  try {
    const socialDoc = await convexClient.query(api.db.getSocials, {});
    if (!socialDoc) {
      return defaultSocialList;
    }
    const socialList: TSocial = {
      github: socialDoc.github ?? defaultSocialList.github,
      linkedin: socialDoc.linkedin ?? defaultSocialList.linkedin,
      x: socialDoc.x ?? defaultSocialList.x,
      mail: socialDoc.mail ?? defaultSocialList.mail,
      phone: socialDoc.phone ?? defaultSocialList.phone,
      resume: socialDoc.resume ?? defaultSocialList.resume,
    };
    return socialList;
  } catch (error) {
    console.error(error);
    return defaultSocialList
  }
};

export const getIntro = async () => {
  const defaultIntroSection: TIntro = {
    picture: "https://res.cloudinary.com/dfwwfrvok/image/upload/v1721815825/photo_2024-07-24_11-05-36_vkyxkl.jpg",
    about_me: "My name's Urlyss KAMTO. I bring user interfaces to life using modern frontend and mobile tech.",
    description: "Working closely with design teams, I enjoy ensuring that every design is faithfully translated into a pixel-perfect digital experience. With modern frontend and mobile technologies, I bring these creative ideas to life exactly as envisioned.",
    header: "Hey 👋, I'm a creative frontend and mobile developer. ",
  };
  try {
    const introDoc = await convexClient.query(api.db.getIntro, {});
    if (!introDoc) {
      return defaultIntroSection;
    }
    const aboutSection: TIntro = {
      picture: introDoc.picture ?? defaultIntroSection.picture,
      about_me: introDoc.about_me ?? defaultIntroSection.about_me,
      description: introDoc.description ?? defaultIntroSection.description,
      header: introDoc.header ?? defaultIntroSection.header,
    };
    return aboutSection;
  } catch (error) {
    console.error(error);
    return defaultIntroSection
  }
};
export const getExperiences = async () => {
  const defaultExperiencesList:TExperience[] = [
    {
      company: "Ease Travel Service",
      job_title: "Front-end developer",
      dates: "2022 - present",
      link: "https://www.ease.travel",
    },
  ];
  try {
    const experiences = await convexClient.query(api.db.getExperiences, {});
    if (!experiences || experiences.length === 0) {
      return defaultExperiencesList;
    }
    const experiencesList: TExperience[] = experiences.map((e: any) => ({
      company: e.company,
      job_title: e.job_title,
      dates: e.dates,
      link: e.link,
    }));
    return experiencesList;
  } catch (error) {
    console.error(error);
    return defaultExperiencesList
  }
};

export const getWorks = async () => {
  const defaultWorkList:TWork[] = [
    {
      name: "Summa",
      icon: "https://placehold.co/400x400?text=summa",
      link: "https://summa-navigator.urlyss.dev/",
      description: "An app that allows users to navigate and read the Summa Theologica by Thomas Aquinas, providing easy access to its sections, questions, and articles.Engage with an AI-powered assistant that helps you understand complex theological concepts.",
      tech:["nextjs"]
    },
    {
      name: "Covertune",
      icon: "https://placehold.co/400x400?text=covertune",
      link: "https://covertune.urlyss.dev/",
      description: "An app that allows users to discover music by browsing album cover art, with category selection, detailed album information, and search functionality.",
      tech:["nextjs"]
    },
    {
      name: "CoordId",
      icon: "https://placehold.co/400x400?text=coordid",
      link: "https://coordid.urlyss.dev/",
      description: "An app created for African areas that converts geographic coordinates into a unique ID, solving the address challenge in regions without formal addresses.",
      tech:["nextjs"]
    }
  ]
  try {
    const works = await convexClient.query(api.db.getWorks, {});
    if (!works || works.length === 0) {
      return defaultWorkList;
    }
    const workList: TWork[] = works.map((w: any) => ({
      name: w.name,
      icon: w.icon,
      link: w.link,
      description: w.description,
      tech: Array.isArray(w.tech) ? w.tech : [],
    }));
    return workList;
  } catch (error) {
    console.error(error);
    return defaultWorkList
  }
};

export const getAbout = async () => {
  const defaultAboutList:TAbout[] = [
    {
      title: "Rapid Prototyping & MVP",
      description:
        "From ideation and concept development through prototyping, MVP testing, and launching, building technology-driven businesses is in my DNA.",
    },
    {
      title: "Full Stack Development",
      description:
        "Over the years, I've specialized in all areas of the stack, from Front-End to Mobile Development. While I excel in these areas, Back-End and DevOps are also part of my skill set, enhancing my ability to deliver at scale.",
    },
    {
      title: "Serverless / Cloud Native",
      description:
        "An early adopter and Cloud advocate, I use state-of-the-art tools, services, and techniques to help businesses launch their products faster.",
    },
  ]
  try {
    const aboutDocs = await convexClient.query(api.db.getAbout, {});
    if (!aboutDocs || aboutDocs.length === 0) {
      return defaultAboutList;
    }
    const aboutList: TAbout[] = aboutDocs.map((a: any) => ({
      title: a.title,
      description: a.description,
    }));
    return aboutList;
  } catch (error) {
    console.error(error);
    return defaultAboutList
  }
};

export const getTools = async () => {
  const defaultToolList:TTool[] = [
    {title:"Languages",description:"JavaScript/Node, Python, Dart, PHP."},
    {title:"Frameworks",description:"React, Next.js, React Native, Flutter, Tailwind CSS, Firebase, Supabase, MongoDB Atlas"},
    {title:"DevOps",description:"GitHub, Docker, Kubernetes"},
    {title:"Platforms",description:"Google Cloud Platform"},
  ]
  try {
    const toolDocs = await convexClient.query(api.db.getTools, {});
    if (!toolDocs || toolDocs.length === 0) {
      return defaultToolList;
    }
    const toolList: TTool[] = toolDocs.map((t: any) => ({
      title: t.title,
      description: t.description,
    }));
    return toolList;
  } catch (error) {
    console.error(error);
    return defaultToolList
  }
};

export const getSpecialization = async () => {
  const defaultSpecialization:TSpecialization[] = [
    {title:"Strategy and Technological Innovation",description:"I support startups in leveraging technology for a competitive edge and help existing businesses navigate their tech evolution with effective strategies."},
    {title:"Serverless First",description:"Serverless technology is on track to dominate computing in the coming decade. By incorporating it into my work, I help businesses secure a strong advantage in tech development."},
    {title:"Growth Marketing",description:"With a keen interest in growth marketing, I apply technology, data, and performance metrics to secure customers and accelerate business growth."},
  ]
  try {
    const specializationDocs = await convexClient.query(api.db.getSpecialization,{});
    if (!specializationDocs || specializationDocs.length === 0) {
      return defaultSpecialization;
    }
    const specializationList: TSpecialization[] = specializationDocs.map(
      (s: any) => ({
        title: s.title,
        description: s.description,
      })
    );
    return specializationList;
  } catch (error) {
    console.error(error);
    return defaultSpecialization
  }
};
