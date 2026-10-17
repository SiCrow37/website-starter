import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="callout">
      <h2>Let’s talk about your project.</h2>
      <p>Tell us what you have in mind and we’ll discuss the next steps.</p>
      <Link href="/contact" className="button-primary">Get in touch</Link>
    </section>
  );
}
