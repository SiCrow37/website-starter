import { services } from "@/config/content";

export default function ServiceGrid() {
  return <div className="card-grid">{services.map((service) => (
    <article key={service.id} className="card">
      <h3>{service.title}</h3><p>{service.description}</p>
    </article>
  ))}</div>;
}
