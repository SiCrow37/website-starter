import Link from "next/link";

const services = [
    {
        id: "service-one",
        title: "Service one",
        description:
            "Describe your main service and the customer need it addresses.",
    },
    {
        id: "service-two",
        title: "Service two",
        description:
            "Describe another capability and what customers can expect.",
    },
    {
        id: "service-three",
        title: "Service three",
        description:
            "Describe a specialized offering or additional support.",
    },
];

export default function ServicesPage() {
    return (
        <main>
            <section className="page-intro">
                <p className="eyebrow">Our services</p>
                <h1>What we can do for you.</h1>
                <p className="intro-description">
                    Explore our capabilities, then tell us what you have in mind.
                </p>
            </section>

            <section
                className="content-section"
                aria-label="Available services"
            >
                <div className="card-grid">
                    {services.map((service) => (
                        <article key={service.id} className="card">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="callout">
                <h2>Have something specific in mind?</h2>
                <p>Contact us to discuss your requirements.</p>
                <Link href="/contact" className="button-primary">
                    Discuss your project
                </Link>
            </section>
        </main>
    );
}