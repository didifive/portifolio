import { Button } from "../ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Badge } from "../ui/Badge";
import { FaCode, FaHeart } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";

export const Projects = () => {
  const projects = [
    {
      title: "DevPool",
      description:
        "A plataforma Devpool é uma ferramenta que visa conectar empresas e desenvolvedores de forma eficiente e transparente. O profissional pode criar o seu perfil e o recrutador pode encontrar e conectar com esses profissionais de acordo com as necessidades da vaga.",
      image: <FaCode color="red" />,
      tech: ["Next", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
      github: "#",
      url: "https://devpoolbr.com.br",
      featured: true,
    },
    {
      title: "Meu selo",
      description:
        "O site Meu selo foi um projeto simples desenvolvido como uma brincadeira no Linkedin que permite ao usuário uma foto de perfil e criar o próprio selo simulando o #OpenToWork. O site ja teve mais de 50 mil acessos e hoje é usado por empresas, produtores de eventos que criam os selos e compartilham para que seus seguidores possam replicar e compartilhar nas redes sociais.",
      image: <BsPersonSquare color="blue" />,
      tech: ["Next", "Node.js", "TypeScript", "Firebase"],
      github: "https://github.com/maykonsousa/stamp-generator",
      url: "https://meuselo.com",
      featured: true,
    },
    {
      title: "Panela Cheia bot",
      description:
        "Sistema criado para automatizar pedidos de clientes de uma restaurante via whatsapp. A cliente envia uma mensagem para o numero do restaurante e vai respondendo os ingredientes que deseja em sua marmitex a partir de um cardápio diário e o pedido confirmado é enviado ao restaurante que produz, entrega e recebe o pagamento",
      image: <IoFastFood color="pink" />,
      tech: ["React", "Node.js", "Whatsapp API", "PostgreSQL"],
      github: "#",
      url: "#",
      featured: false,
    },
    {
      title: "D.O.E",
      description:
        "O aplicativo Doe foi um projeto desenvolvido para possibilitar que o usuário pudesse localizar pontos de doação de sangue próximos a ele e também pudesse solicitar doação de um tipo sanguíneo específico.",
      image: <FaHeart color="red" />,
      tech: ["React", "React Native", "TypeScript", "Node.js", "Expo"],
      github: "#",
      url: "#",
      featured: false,
    },
    {
      title: "Share Code",
      description:
        "O site Share Code foi um projeto construído com outros Devs cujo a ideia era uma plataforma de compartilhamento de video aulas de programação. O desenvolvedor poderia procurar videos no youtube e compartilhar na plataforma para montar uma playlist própria de estudos e estes videos também era disponibilizado para os outros usuários que poderiam adicionar também às suas próprias playlists",
      image: <FaCode color="green" />,
      tech: ["React", "Node.js", "TypeScript", "Firebase"],
      github: "#",
      url: "https://devpool.com.br",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
              Projetos
            </h2>
            <p className="text-foreground/80 dark:text-white/90 text-lg max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, demonstrando diferentes
              tecnologias e soluções para problemas complexos.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground dark:text-white">
              Projetos em Destaque
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  shadow="soft"
                  interactive="smooth"
                  className="flex flex-col h-full"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl mb-4">{project.image}</div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghostHover"
                          size="icon"
                          disabled={project.github === "#"}
                          href={project.github}
                          target="_blank"
                        >
                          <FiGithub className="h-4 w-4 text-foreground/70 dark:text-white/80" />
                        </Button>
                        <Button
                          variant="ghostHover"
                          size="icon"
                          href={project.url}
                          disabled={project.url === "#"}
                          target="_blank"
                        >
                          <FiExternalLink className="h-4 w-4 text-foreground/70 dark:text-white/80" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <p className="text-foreground/80 dark:text-white/90 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="default"
                        size="sm"
                        disabled={project.github === "#"}
                        href={project.github}
                        target="_blank"
                      >
                        <FiGithub className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={project.url === "#"}
                        href={project.url}
                        target="_blank"
                      >
                        <FiExternalLink className="h-4 w-4 mr-2" />
                        Acessar
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground dark:text-white">
              Outros Projetos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-medium transition-smooth group flex flex-col h-full"
                >
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl">{project.image}</div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth hover:bg-accent/50 dark:hover:bg-accent/20 hover:text-primary dark:hover:text-primary disabled:opacity-0 disabled:group-hover:opacity-100"
                          disabled={project.github === "#"}
                          href={project.github}
                          target="_blank"
                        >
                          <FiGithub className="h-4 w-4 text-foreground/70 dark:text-white/80" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-smooth hover:bg-accent/50 dark:hover:bg-accent/20 hover:text-primary dark:hover:text-primary disabled:opacity-0 disabled:group-hover:opacity-100"
                          disabled={project.url === "#"}
                          href={project.url}
                          target="_blank"
                        >
                          <FiExternalLink className="h-4 w-4 text-foreground/70 dark:text-white/80" />
                        </Button>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-foreground/80 dark:text-white/90 text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs cursor-pointer"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-foreground/80 dark:text-white/90 mb-6">
              Interessado em ver mais projetos ou discutir uma colaboração?
            </p>
            <Button variant="hero" size="lg">
              <FiGithub className="h-5 w-5 mr-2" />
              Ver Mais no GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
