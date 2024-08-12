import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type TIntro = {
  picture: string;
  description: string;
  about_me: string;
  header: string;
}
export type TSection = {
  description: string;
  title: string;
}

export type TAbout = TSection
export type TTool = TSection
export type TSpecialization = TSection

export type TExperience = {
  company: string;
  job_title: string;
  dates: string;
  link: string;
}

export type TWork = {
  name: string;
  icon: string;
  link: string;
  description:string
}

export type TSocial = {
  github: string;
  linkedin: string;
  x: string;
  mail: string;
  phone: string;
  resume: string;
}