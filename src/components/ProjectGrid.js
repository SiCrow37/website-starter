import { projects } from "@/config/content";

export default function ProjectGrid() {
  return <div className="card-grid">{projects.map((project) => (
    <article key={project.id} className="card">
      <div className="image-placeholder">Project photo coming soon</div>
      <p className="eyebrow">{project.category}</p>
      <h3>{project.title}</h3><p>{project.description}</p>
    </article>
  ))}</div>;
}
