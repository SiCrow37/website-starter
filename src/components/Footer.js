import { site } from "@/config/site";

export default function Footer() {
    return (
        <footer>
            <p>{site.name}</p>
            <p>All rights reserved.</p>
        </footer>
    );
}