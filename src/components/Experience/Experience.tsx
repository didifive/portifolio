import { FaBuilding } from "react-icons/fa";
import { Card, CardContent } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { FiCalendar, FiMapPin } from "react-icons/fi";

export const Experience = () => {
  const experiences = [
    {
      company: "GFT Technologies",
      position: "Software Engineer",
      period: "Mai 2022 - Presente",
      location: "São Paulo, SP - Remoto",
      type: "Tempo Integral",
      description:
        "Atuando no desenvolvimento de soluções escaláveis para uma das maiores plataformas de e-commerce da América Latina.",
      skills: ["TypeScript", "React.js", "Node.js", "Jenkins", "Docker"],
      current: true,
    },
    {
      company: "Prefeitura Municipal de Orlândia",
      position: "Software Developer",
      period: "Abr 2007 - Mai 2022",
      location: "Orlândia, SP - Presencial",
      type: "Tempo Integral",
      description:
        "Atuei em um time multifuncional focado na construção de uma plataforma completa de gestão, desenvolvendo soluções com tecnologias modernas.",
      skills: ["React.js", "AWS ", "Node.js", "GraphQL", "React Native", "UX"],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              Experiência Profissional
            </h2>
            <p className="text-foreground/80 dark:text-white/90 text-lg">
              Minha jornada profissional através de empresas inovadoras e
              projetos desafiadores.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                      exp.current ? "bg-primary shadow-glow" : "bg-muted"
                    }`}
                  ></div>

                  {/* Card */}
                  <Card shadow="soft" interactive="hover" className="ml-16">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <div className="flex items-center text-primary font-semibold mt-1">
                            <FaBuilding className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                            {exp.company}
                            {exp.current && (
                              <Badge
                                variant="default"
                                className="ml-3 text-xs group-hover:shadow-md transition-shadow duration-300"
                              >
                                Atual
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-foreground/70 dark:text-white/80 mt-2 md:mt-0 md:text-right">
                          <div className="flex items-center md:justify-end mb-1">
                            <FiCalendar className="h-4 w-4 mr-1 group-hover:text-primary transition-colors duration-300" />
                            {exp.period}
                          </div>
                          <div className="flex items-center md:justify-end">
                            <FiMapPin className="h-4 w-4 mr-1 group-hover:text-primary transition-colors duration-300" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/80 dark:text-white/90 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-medium mb-3 text-foreground/70 dark:text-white/80">
                          Principais Tecnologias:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-105"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
