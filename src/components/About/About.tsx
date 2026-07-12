import { getTranslations } from "next-intl/server";
import { FaRocket } from "react-icons/fa";
import { FiCode, FiTarget, FiUsers } from "react-icons/fi";
import { Badge } from "../ui/Badge";
import { Card, CardContent } from "../ui/Card";
import { getYearsOfExperienceIT, getYearsOfExperienceDev } from "@/lib/utils";

export const About = async () => {
  const yearsIT = getYearsOfExperienceIT();
  const yearsDev = getYearsOfExperienceDev();
  const t = await getTranslations("about");
  const journey = t.raw("journey") as string[];
  const backendSkills = t.raw("skills.backend") as string[];
  const frontendSkills = t.raw("skills.frontend") as string[];
  const cloudSkills = t.raw("skills.cloud") as string[];
  const highlights = [
    {
      icon: <FiCode className="h-6 w-6" />,
      title: t("highlights.backend.title"),
      description: t("highlights.backend.description"),
    },
    {
      icon: <FaRocket className="h-6 w-6" />,
      title: t("highlights.enterprise.title"),
      description: t("highlights.enterprise.description"),
    },
    {
      icon: <FiUsers className="h-6 w-6" />,
      title: t("highlights.team.title"),
      description: t("highlights.team.description"),
    },
    {
      icon: <FiTarget className="h-6 w-6" />,
      title: t("highlights.quality.title"),
      description: t("highlights.quality.description"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              {t("title")}
            </h2>
            <p className="text-foreground/80 dark:text-white/90 text-lg max-w-2xl mx-auto">
              {t("intro", { yearsIT, yearsDev })}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground dark:text-white">
                  {t("journeyTitle")}
                </h3>
                <p>
                  {journey[0]}
                </p>
                <p>
                  {t("journey.1", { yearsIT })}
                </p>
                <p>
                  {t("journey.2", { yearsDev })}
                </p>
              </div>

              {/* Skills Categories */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground dark:text-white">
                  {t("skillsTitle")}
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-foreground/70 dark:text-white/80 mb-2 block">
                      Backend
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((skill, i) => (
                        <Badge
                          key={`${skill}-${i}`}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground/70 dark:text-white/80 mb-2 block">
                      Frontend
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((skill, i) => (
                        <Badge
                          key={`${skill}-${i}`}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground/70 dark:text-white/80 mb-2 block">
                      DevOps & Cloud
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cloudSkills.map((skill, i) => (
                        <Badge
                          key={`${skill}-${i}`}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="grid gap-6">
              {highlights.map((item) => (
                <Card
                  key={item.title}
                  className="group shadow-soft hover:shadow-medium transition-all duration-300 dark:border-accent/10 border cursor-pointer hover:scale-[1.02] dark:hover:bg-accent/5 dark:hover:border-accent/20 hover:shadow-lg dark:hover:shadow-primary/10"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
                        <div className="group-hover:rotate-3 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-foreground/70 dark:text-white/80 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
