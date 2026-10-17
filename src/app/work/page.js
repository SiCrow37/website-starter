import ProjectGrid from "@/components/ProjectGrid";
import CallToAction from "@/components/CallToAction";

export const metadata = { title: "Our Work", description: "Explore a selection of our projects and completed work." };

export default function Page() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Our Work</p>
        <h1>A closer look at what we do.</h1>
        <p className="intro-description">Explore a selection of our projects and completed work.</p>
      </section>
      <section className="content-section" aria-label="Our Work">
        <ProjectGrid />
      </section>
      <CallToAction />
    </main>
  );
}
