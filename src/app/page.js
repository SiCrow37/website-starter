import Link from "next/link";
import { site } from "@/config/site";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <p className="hero-eyebrow">{site.name}</p>

                <h1>Quality work. Built around your needs.</h1>

                <p className="hero-description">
                    From your first idea to the finished project, we bring
                    experience, care, and attention to detail.
                </p>

                <div className="hero-actions">
                    <Link href="/contact" className="button-primary">
                        Discuss your project
                    </Link>

                    <Link href="/work" className="button-secondary">
                        Explore our work
                    </Link>
                </div>
            </section>
        </main>
    );
}