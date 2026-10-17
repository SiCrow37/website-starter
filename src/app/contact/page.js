import { site } from "@/config/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
    return (
        <main id="main-content" tabIndex={-1}>
            <section className="page-intro">
                <p className="eyebrow">Contact</p>
                <h1>Tell us what you have in mind.</h1>
                <p className="intro-description">
                    Have a question or a project to discuss? Send us an email
                    with a few details.
                </p>
            </section>

            <section className="content-section contact-grid">
                <div className="card">
                    <h2>Email us</h2>
                    <p>Reach out to {site.name} to start the conversation.</p>
                    <a className="text-link" href={`mailto:${site.email}`}>
                        {site.email}
                    </a>
                </div>

                <div className="card">
                    <h2>Helpful details to include</h2>
                    <ul className="detail-list">
                        <li>Your name and preferred contact information.</li>
                        <li>A short description of your project.</li>
                        <li>Any dimensions, materials, or quantities.</li>
                        <li>Your preferred timeline.</li>
                        <li>Relevant photos or drawings.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}