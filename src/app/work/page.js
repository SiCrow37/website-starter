import Link from "next/link";

const projects = [
    {
        id: "project-one",
        title: "Project one",
        category: "Project category",
        description:
            "Describe the customer’s goal, the work completed, and the result.",
    },
    {
        id: "project-two",
        title: "Project two",
        category: "Project category",
        description:
            "Highlight the requirements and details that made this project unique.",
    },
    {
        id: "project-three",
        title: "Project three",
        category: "Project category",
        description:
            "Explain how the finished work met the customer’s needs.",
    },
];

export default function WorkPage() {
    return (
        <main>
            <section className="page-intro">
                <p className="eyebrow">Our work</p>
                <h1>A closer look at what we do.</h1>
                <p className="intro-description">
                    A selection of projects, from the initial idea to the
                    finished result.
                </p>
            </section>

            <section
                className="content-section"
                aria-label="Featured projects"
            >
                <div className="card-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="card">
                            <div className="image-placeholder">
                                Project photo coming soon
                            </div>
                            <p className="eyebrow">{project.category}</p>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="callout">
                <h2>What would you like to create?</h2>
                <Link href="/contact" className="button-primary">
                    Start a conversation
                </Link>
            </section>
        </main>
    );
}