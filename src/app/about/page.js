import Link from "next/link";
import { site } from "@/config/site";

export default function AboutPage() {
    return (
        <main>
            <section className="page-intro">
                <p className="eyebrow">About us</p>
                <h1>Meet {site.name}.</h1>
                <p className="intro-description">
                    Introduce your company, the people behind it, and what
                    matters most in the work you do.
                </p>
            </section>

            <section className="content-section">
                <h2>Our story</h2>
                <p className="reading-width">
                    Share how the company began, the experience your team brings,
                    and the customers you serve.
                </p>
            </section>

            <section className="content-section">
                <h2>How we work</h2>

                <div className="card-grid">
                    <article className="card">
                        <h3>Understand the goal</h3>
                        <p>Describe how you learn about each customer’s needs.</p>
                    </article>

                    <article className="card">
                        <h3>Plan the details</h3>
                        <p>Explain how you establish the scope and expectations.</p>
                    </article>

                    <article className="card">
                        <h3>Deliver with care</h3>
                        <p>Describe your approach to quality and communication.</p>
                    </article>
                </div>
            </section>

            <section className="callout">
                <h2>Let’s talk about your project.</h2>
                <Link href="/contact" className="button-primary">
                    Get in touch
                </Link>
            </section>
        </main>
    );
}