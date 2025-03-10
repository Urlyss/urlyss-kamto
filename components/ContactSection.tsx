import React from "react";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import { getSocials } from "@/lib/db";

const ContactSections = async ({ id }: { id: string }) => {
  const socialContent = await getSocials();
  return (
    <SectionWrapper
      id={`${id}`}
      className="bg-secondary text-secondary-foreground"
    >
      <div className="max-w-xl flex flex-col gap-10">
        <h1 className="lg:text-4xl text-lg font-semibold">Contact me</h1>
        <h2 className="lg:text-2xl font-semibold">
          {`If you have a project idea, need help, would like to make an enquiry
          or say hello just select one of the following options. I'm currently
          open to work and looking forward to new collaborations.`}
        </h2>
        <div className="space-y-5 text-sm lg:text-xl">
          <div>
          <Link
            className="underline hover:text-primary"
            href={`mailto:${socialContent.mail}`}
          >
            Send me a mail now
          </Link>
          </div>
          <div>or</div>
          <div>
            <Link
              className="underline hover:text-primary"
              href={`tel:${socialContent.phone}`}
            >
              Call me
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSections;
