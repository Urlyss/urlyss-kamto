import { Client } from "@notionhq/client";
import {
  TAbout,
  TExperience,
  TIntro,
  TSocial,
  TSpecialization,
  TTool,
  TWork,
} from "./utils";

export class NotionClient {
  private static instance: NotionClient;
  private notion: Client;

  private constructor() {
    this.notion = new Client({ auth: process.env.NOTION_API_KEY });
  }

  public static getInstance(): NotionClient {
    if (!NotionClient.instance) {
      NotionClient.instance = new NotionClient();
    }
    return NotionClient.instance;
  }

  public async queryDatabase(databaseId: string) {
      const response = await this.notion.databases.query({
        database_id: databaseId,
      });
      return response;
  }
}

export const getSocials = async () => {
  const defaultSocialList:TSocial = {
    github: "https://github.com/urlyss",
    linkedin: "https://linkedin.com/in/urlyss",
    x: "https://x.com/odusseuskamto",
    mail: "odusseuskamto@gmail.com",
    phone: "+237690760442",
    resume:
      "https://drive.google.com/file/d/19lkM3afivegnzkyVdjCT16viw0qbCZjo/view?usp=embed_facebook",
  };
  try {
    const socialList:TSocial = {...defaultSocialList}
  const notionClient = NotionClient.getInstance();
  const databaseId = process.env.NOTION_SOCIAL_DATABASE_ID || "";
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((ab) => {
    //@ts-ignore
    Object.entries(ab.properties).forEach(([propertyName, propertyValue]) => {
      //@ts-ignore
      socialList[propertyName] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => cat.plain_text
          )
          .join("\n");
    });
  });
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
    const aboutSection = { ...defaultIntroSection };
    const notionClient = NotionClient.getInstance();
  const databaseId = process.env.NOTION_INTRO_DATABASE_ID || "";
  const response = await notionClient.queryDatabase(databaseId);

  response?.results.forEach((ab) => {
    //@ts-ignore
    Object.entries(ab.properties).forEach(([propertyName, propertyValue]) => {
      //@ts-ignore
      aboutSection[propertyName] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => {
              return cat.plain_text.split("\n");
            }
          )
          .join("\n");
    });
  });
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
    const experiencesList: TExperience[] = [];
  const notionClient = NotionClient.getInstance();
  const databaseId = process.env.NOTION_EXPERIENCE_DATABASE_ID || "";
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((ab) => {
    const exp = { company: "", job_title: "", dates: "", link: "" };
    //@ts-ignore
    Object.entries(ab.properties).forEach(([propertyName, propertyValue]) => {
      //@ts-ignore
      exp[propertyName] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => cat.plain_text
          )
          .join("\n");
    });
    experiencesList.push(exp);
  });

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
      link: "https://summa-explorer.vercel.app/",
      description: "A web app that allows users to navigate and read the Summa Theologica by Thomas Aquinas, providing easy access to its sections, questions, and articles.",
    },
    {
      name: "Covertune",
      icon: "https://placehold.co/400x400?text=covertune",
      link: "https://covertune.vercel.app/",
      description: "A web app that allows users to discover music by browsing album cover art, with category selection, detailed album information, and search functionality.",
    },
    {
      name: "CoordId",
      icon: "https://placehold.co/400x400?text=coordid",
      link: "https://coordid.vercel.app/",
      description: "A web app created for African areas that converts geographic coordinates into a unique ID, offering reverse lookup, map localization, and solving the address challenge in regions without formal addresses.",
    }
  ]
  try {
    const workList: TWork[] = [];
    const databaseId = process.env.NOTION_WORK_DATABASE_ID || "";
  const notionClient = NotionClient.getInstance();
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((work) => {
    const finalWork = {
      name: "",
      icon: "",
      link: "",
      description: "",
    };
    //@ts-ignore
    Object.entries(work.properties).forEach(([propertyName, propertyValue]) => {
      switch (propertyName) {
        case "icon":
          //@ts-ignore
          finalWork["icon"] = propertyValue.rich_text
            //@ts-ignore
            .map((rt) => rt.plain_text)
            .join("\n");
          break;
        case "link":
          //@ts-ignore
          finalWork["link"] = propertyValue.rich_text
            //@ts-ignore
            .map((rt) => rt.plain_text)
            .join("\n");
          break;
        case "name":
          //@ts-ignore
          finalWork["name"] = propertyValue.title
            //@ts-ignore
            .map((rt) => rt.plain_text)
            .join("\n");
          break;
        case "description":
          //@ts-ignore
          finalWork["description"] = propertyValue.rich_text
            //@ts-ignore
            .map((rt) => rt.plain_text)
            .join("\n");
          break;
        default:
          break;
      }
    });
    workList.push(finalWork);
  });
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
    const aboutList: TAbout[] = [];
  const databaseId = process.env.NOTION_ABOUT_DATABASE_ID || "";
  const notionClient = NotionClient.getInstance();
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((work) => {
    const finalAbout = { title: "", description: "" };
    //@ts-ignore
    Object.entries(work.properties).forEach(([propertyName, propertyValue]) => {
      switch (propertyName) {
        case "title":
          //@ts-ignore
          finalAbout["title"] = propertyValue.title
          //@ts-ignore
          .map((rt) => rt.plain_text)
          .join("\n");
            break;
        case "description":
          //@ts-ignore
          finalAbout["description"] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => {
              return cat.plain_text.split("\n");
            }
          )
          .join("\n");
          break;
        default:
          break;
      }
    });
    aboutList.push(finalAbout);
  });
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
    const toolList: TTool[] = [];
  const databaseId = process.env.NOTION_TOOL_DATABASE_ID || "";
  const notionClient = NotionClient.getInstance();
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((work) => {
    const finalTool = { title: "", description: "" };
    //@ts-ignore
    Object.entries(work.properties).forEach(([propertyName, propertyValue]) => {
      switch (propertyName) {
        case "title":
          //@ts-ignore
          finalTool["title"] = propertyValue.title
          //@ts-ignore
          .map((rt) => rt.plain_text)
          .join("\n");
          break;
        case "description":
          //@ts-ignore
          finalTool["description"] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => {
              return cat.plain_text.split("\n");
            }
          )
          .join("\n");
          break;
        default:
          break;
      }
    });
    toolList.push(finalTool);
  });
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
    const specializationList: TSpecialization[] = [];
  const databaseId = process.env.NOTION_SPECIALIZATION_DATABASE_ID || "";
  const notionClient = NotionClient.getInstance();
  const response = await notionClient.queryDatabase(databaseId);
  response?.results.forEach((work) => {
    const finalSpecialization = { title: "", description: "" };
    //@ts-ignore
    Object.entries(work.properties).forEach(([propertyName, propertyValue]) => {
      switch (propertyName) {
        case "title":
          //@ts-ignore
          finalSpecialization["title"] = propertyValue.title
          //@ts-ignore
          .map((rt) => rt.plain_text)
          .join("\n");
          break;
        case "description":
          //@ts-ignore
          finalSpecialization["description"] = propertyValue.rich_text && propertyValue.rich_text
          .map(
            //@ts-ignore
            (cat) => {
              return cat.plain_text.split("\n");
            }
          )
          .join("\n");
          break;
        default:
          break;
      }
    });
    specializationList.push(finalSpecialization);
  });
  return specializationList;
  } catch (error) {
    console.error(error);
    return defaultSpecialization
  }
};
