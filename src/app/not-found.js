import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-intro">
        <p className="eyebrow">404</p><h1>Page not found.</h1>
        <p className="intro-description">That page may have moved, or the address may be incorrect.</p>
        <div className="hero-actions"><Link href="/" className="button-primary">Return home</Link></div>
      </section>
    </main>
  );
}
