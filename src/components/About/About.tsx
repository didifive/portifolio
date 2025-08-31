import { FaRocket } from "react-icons/fa";
import { FiCode, FiTarget, FiUsers } from "react-icons/fi";
import { Badge } from "../ui/Badge";
import { Card, CardContent } from "../ui/Card";

export const About = () => {
  const highlights = [
    {
      icon: <FiCode className="h-6 w-6" />,
      title: "Full Stack Developer",
      description:
        "Especializado em tecnologias modernas como React, Node.js e TypeScript",
    },
    {
      icon: <FaRocket className="h-6 w-6" />,
      title: "Experiência Enterprise",
      description:
        "Trabalhou em empresas de destaque como Mercado Livre e PagBank",
    },
    {
      icon: <FiUsers className="h-6 w-6" />,
      title: "Trabalho em Equipe",
      description:
        "Experiência em times multidisciplinares e metodologias ágeis",
    },
    {
      icon: <FiTarget className="h-6 w-6" />,
      title: "Foco em Qualidade",
      description:
        "Comprometido com código limpo, escalabilidade e boas práticas",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              Sobre Mim
            </h2>
            <p className="text-foreground/80 dark:text-white/90 text-lg max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia com mais de 4 anos de
              experiência criando soluções inovadoras e escaláveis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground dark:text-white">
                  Minha Jornada
                </h3>
                <p className="text-foreground/80 dark:text-white/90 leading-relaxed">
                  Comecei minha carreira como desenvolvedor em 2020 na Stefanini
                  Group, focando em desenvolvimento Front-End com React. Desde
                  então, evoluí constantemente, trabalhando em projetos
                  desafiadores em empresas como PagBank, Radix e atualmente no
                  Mercado Livre.
                </p>
                <p className="text-foreground/80 dark:text-white/90 leading-relaxed">
                  Minha paixão está em criar aplicações que não apenas funcionem
                  bem, mas que proporcionem uma experiência excepcional aos
                  usuários. Trabalho com tecnologias modernas e sempre busco
                  aprender novas ferramentas que possam agregar valor aos
                  projetos.
                </p>
              </div>

              {/* Skills Categories */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground dark:text-white">
                  Principais Competências
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-foreground/70 dark:text-white/80 mb-2 block">
                      Frontend
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                      ].map((skill) => (
                        <Badge
                          key={skill}
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
                      Backend
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "GraphQL", "APIs REST", "Microserviços"].map(
                        (skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground/70 dark:text-white/80 mb-2 block">
                      DevOps & Cloud
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {["AWS", "Docker", "Jenkins", "Kubernetes"].map(
                        (skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
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
