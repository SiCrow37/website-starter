import Link from "next/link";
import { site } from "@/config/site";
import { home } from "@/config/content";
import ServiceGrid from "@/components/ServiceGrid";
import ProjectGrid from "@/components/ProjectGrid";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero">
        <p className="hero-eyebrow">{site.name}</p>
        <h1>{home.heading}</h1>
        <p className="hero-description">{home.description}</p>
        <div className="hero-actions">
          <Link href="/contact" className="button-primary">Discuss your project</Link>
          <Link href="/work" className="button-secondary">Explore our work</Link>
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading"><h2>Our services</h2><Link href="/services">Explore services →</Link></div>
        <ServiceGrid />
      </section>
      <section className="content-section">
        <div className="section-heading"><h2>Selected work</h2><Link href="/work">Explore our work →</Link></div>
        <ProjectGrid />
      </section>
      <CallToAction />
    </main>
  );
}
