import { about, personal, recruiterSummary, workingStyle } from "@/data/portfolio";
import { splitParagraphs } from "@/lib/helpers";

type HumanSectionProps = {
  aboutData: typeof about;
  personalData: typeof personal;
  workingStyleData: typeof workingStyle;
  recruiterData: typeof recruiterSummary;
};

export function HumanSection({
  aboutData,
  personalData,
  workingStyleData,
  recruiterData
}: HumanSectionProps) {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.54fr_0.46fr]">
        <div>
          <p className="kicker">{aboutData.title}</p>
          <h2 className="display mt-3 text-4xl leading-tight sm:text-6xl">
            A product manager shaped by ambiguity, systems, and impatience with repetitive work.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-ink/72">
            {splitParagraphs(aboutData.content).slice(0, 6).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.5rem] border border-ink/10 bg-white/55 p-6 shadow-line">
            <p className="kicker">{workingStyleData.title}</p>
            <div className="mt-5 space-y-4">
              {workingStyleData.principles.map((principle) => (
                <div className="border-t border-ink/10 pt-4" key={principle.title}>
                  <h3 className="font-bold">{principle.title}</h3>
                  <p className="mt-1 leading-7 text-ink/66">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-ink/10 bg-ink p-6 text-paper shadow-soft">
            <p className="kicker text-brass">{recruiterData.title}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {recruiterData.points.slice(0, 4).map((point) => (
                <div className="rounded-2xl bg-paper/8 p-4" key={point.title}>
                  <h3 className="font-bold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-paper/62">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-ink/10 bg-white/55 p-6 shadow-line">
            <p className="kicker">{personalData.title}</p>
            <div className="mt-5 space-y-5 leading-8 text-ink/72">
              {splitParagraphs(personalData.content).slice(-5).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
