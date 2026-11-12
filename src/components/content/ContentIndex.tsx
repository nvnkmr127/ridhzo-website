import type { ContentSummary } from "@/lib/content";
import type { ContentRoute } from "@/lib/content-routes";
import { appUrl } from "@/lib/config";
import { Accent, HomeButton, HomeSection } from "@/components/site/primitives";
import { PageHero } from "@/components/site/PageHero";
import { SiteCta } from "@/components/site/SiteCta";
import { ContentCard } from "./ContentCard";
import { BlogView } from "./BlogView";
import { AllFeaturesView } from "./AllFeaturesView";
import { HowToView } from "./HowToView";

export interface ContentGroup {
  id: string;
  label: string;
  description?: string;
}

const FEATURE_SECTION_SPLIT = new Set(["capture", "engage", "automate", "manage"]);

function indexHeroProps(route: ContentRoute): {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  titleClassName?: string;
  aside?: React.ReactNode;
} {
  switch (route.type) {
    case "features":
      return {
        eyebrow: "ONE CONNECTED WAY TO SELL",
        title: (
          <>
            LESS ADMIN.
            <br />
            <span className="hero-outline-cutout">MORE MOMENTUM.</span>
          </>
        ),
        description: route.description,
      };
    case "blog":
      return {
        eyebrow: "READ / LEARN / DECIDE",
        titleClassName: "text-[36px] sm:text-[52px] lg:text-[68px] xl:text-[80px]",
        title: (
          <>
            DISCOVER THE LATEST{" "}
            <span className="hero-outline-cutout">TRENDS, NEWS</span> AND{" "}
            <span className="hero-outline-cutout">UPDATES</span>
          </>
        ),
        description: route.description,
      };
    case "how-to":
      return {
        eyebrow: "THE RIDHZO TOOLKIT",
        title: (
          <>
            SMALL STEPS.
            <br />
            <span className="hero-outline-cutout">REAL PROGRESS.</span>
          </>
        ),
        description: route.description,
        aside: (
          <div className="flex max-w-[480px] flex-col items-start gap-6">
            <p className="font-inter text-[20px] font-medium leading-[30px] tracking-[-0.8px] text-white sm:text-[24px] sm:leading-[36px] sm:tracking-[-1.3px]">
              Clear instructions for the moments that matter. Follow one complete{" "}
              <span className="italic text-[#5ee878]">walkthrough</span> or{" "}
              <span className="italic text-[#5ee878]">jump directly</span> to the step you need.
            </p>
            <HomeButton href={appUrl("/signup")} size="lg" variant="primary">
              Start 14-Day Free Trial
            </HomeButton>
          </div>
        ),
      };
    case "usecases":
      return {
        eyebrow: "BUILT FOR HIGH-VELOCITY TEAMS",
        title: (
          <>
            RIDHZO BY <Accent>INDUSTRY.</Accent>
          </>
        ),
        description: route.description,
      };
    case "help":
      return {
        eyebrow: "SUPPORT & ANSWERS",
        title: (
          <>
            HELP <Accent>CENTER.</Accent>
          </>
        ),
        description: route.description,
      };
  }
}

export function ContentIndex({
  route,
  items,
  groups,
}: {
  route: ContentRoute;
  items: ContentSummary[];
  groups?: readonly ContentGroup[];
}) {
  if (route.type === "features") {
    return <AllFeaturesView />;
  }

  if (route.type === "blog") {
    return <BlogView items={items} />;
  }

  if (route.type === "how-to") {
    return <HowToView items={items} />;
  }

  const hero = indexHeroProps(route);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(route.type === "help"
      ? [{ label: "Resources", href: "/blog" }]
      : [{ label: "Product", href: "/features" }]),
    { label: route.label },
  ];

  const grouped = groups?.map((g, idx) => ({
    ...g,
    index: String(idx + 1).padStart(2, "0"),
    items: items.filter((i) => i.category === g.id),
  })).filter((g) => g.items.length > 0);

  const primaryGroups = grouped?.filter((g) => FEATURE_SECTION_SPLIT.has(g.id)) ?? [];
  const secondaryGroups = grouped?.filter((g) => !FEATURE_SECTION_SPLIT.has(g.id)) ?? [];

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleClassName={hero.titleClassName}
        description={hero.description}
        aside={hero.aside}
      />

      {grouped && grouped.length > 0 ? (
        <>
          <HomeSection theme="light">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="type-h2 text-black">
                ALL YOU NEED.
                <br />
                <span className="text-[#5ee878]">NO REPETITION.</span>
              </h2>
              <p className="type-body-lg max-w-[440px] text-black/[0.64]">
                A clear place for every major workflow. Each capability connects lead capture, follow-ups, and team accountability.
              </p>
            </div>

            <nav aria-label="Feature categories" className="mt-10 flex flex-wrap gap-2">
              {grouped.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="focus-ring focus-ring-light rounded-full border border-black/20 px-4 py-1.5 font-sans text-[13px] font-medium text-black transition-colors hover:border-black hover:bg-black hover:text-white"
                >
                  {g.index} · {g.label}
                </a>
              ))}
            </nav>

            <div className="mt-14 space-y-16">
              {primaryGroups.map((g) => (
                <div key={g.id} id={g.id} className="scroll-mt-24">
                  <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-black/20 pb-4">
                    <div>
                      <span className="type-label text-black/[0.48]">
                        {g.index} / WORKFLOW
                      </span>
                      <h3 className="type-h3 mt-1 text-black">
                        {g.label}
                      </h3>
                    </div>
                    {g.description ? (
                      <p className="type-body-sm text-black/[0.64]">{g.description}</p>
                    ) : null}
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    {g.items.map((item) => (
                      <ContentCard
                        key={item.slug}
                        item={item}
                        surface="light"
                        variant="chapter"
                        eyebrow={`${g.index} / ${g.label.toUpperCase()}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </HomeSection>

          {secondaryGroups.length > 0 && (
            <HomeSection theme="dark">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="type-label text-[#5ee878]">
                    DEEPER INTO THE DETAILS
                  </span>
                  <h2 className="type-h2 mt-3 text-white">
                    PLATFORM TOOLS.
                    <br />
                    <span className="text-[#5ee878]">BIG DIFFERENCE.</span>
                  </h2>
                </div>
                <p className="type-body-lg max-w-[440px] text-white/[0.64]">
                  Analytics, reporting, native integrations, and role-based security built into the core workspace.
                </p>
              </div>

              <div className="mt-12 space-y-12">
                {secondaryGroups.map((g) => (
                  <div key={g.id} id={g.id} className="scroll-mt-24">
                    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.16] pb-3">
                      <h3 className="type-h4 text-white">
                        {g.label}
                      </h3>
                      {g.description ? (
                        <p className="type-body-sm text-white/[0.64]">{g.description}</p>
                      ) : null}
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {g.items.map((item) => (
                        <ContentCard
                          key={item.slug}
                          item={item}
                          surface="dark"
                          eyebrow={g.label.toUpperCase()}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </HomeSection>
          )}
        </>
      ) : (
        <HomeSection theme="light">
          <div
            className={
              route.type === "how-to"
                ? "grid gap-6 md:grid-cols-2"
                : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            }
          >
            {items.map((item) => (
              <ContentCard
                key={item.slug}
                item={item}
                headingLevel="h2"
                surface="light"
                variant={route.type === "how-to" ? "howto" : "default"}
              />
            ))}
          </div>
        </HomeSection>
      )}

      <SiteCta />
    </>
  );
}
