import Link from "next/link";
import { site } from "@/config/site";

export default function Header() {
    return (
        <header>
            <Link href="/">{site.name}</Link>

            <nav aria-label="Main navigation">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/work">Our Work</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}