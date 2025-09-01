import { Hero } from "@/components/Hero";
import { 
  LazyAbout, 
  LazyExperience, 
  LazyProjects, 
  LazyContact, 
  LazyFooter 
} from "@/components/LazyComponents";

export default function Home() {
  return (
    <>
      <Hero />
      <LazyAbout />
      <LazyExperience />
      <LazyProjects />
      <LazyContact />
      <LazyFooter />
    </>
  );
}
