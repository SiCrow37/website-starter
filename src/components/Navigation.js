"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation">
      {navigation.map(({ href, label }) => {
        const active = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
        return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{label}</Link>;
      })}
    </nav>
  );
}
