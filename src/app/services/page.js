import ServiceGrid from "@/components/ServiceGrid";
import CallToAction from "@/components/CallToAction";

export const metadata = { title: "Services", description: "Explore our services and discuss your project requirements." };

export default function Page() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">Services</p>
        <h1>What we can do for you.</h1>
        <p className="intro-description">Explore our services and discuss your project requirements.</p>
      </section>
      <section className="content-section" aria-label="Services">
        <ServiceGrid />
      </section>
      <CallToAction />
    </main>
  );
}
