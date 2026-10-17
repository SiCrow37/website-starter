import Link from "next/link";
import { site } from "@/config/site";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header>
      <Link className="brand" href="/">{site.name}</Link>
      <Navigation />
    </header>
  );
}
