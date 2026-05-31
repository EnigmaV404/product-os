import { Mail, Linkedin, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { closingStatement, profile } from "@/data/portfolio";
import { safeMailto } from "@/lib/helpers";

type ContactSectionProps = {
  profileData: typeof profile;
  closing: typeof closingStatement;
};

export function ContactSection({ profileData, closing }: ContactSectionProps) {
  return (
    <section
      className="section-shell border-t border-ink/10 bg-ink text-paper"
      id="contact"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="kicker text-brass">Contact</p>
        <h2 className="display mt-4 text-5xl leading-none sm:text-7xl">
          {closing.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-paper/70">
          {closing.text}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="outline">
            <a href={safeMailto(profileData.contact.email)}>
              <Mail size={17} />
              Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={profileData.contact.linkedin}>
              <Linkedin size={17} />
              LinkedIn
            </a>
          </Button>
          <Button asChild>
            <a href={profileData.contact.resume}>
              <FileText size={17} />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
