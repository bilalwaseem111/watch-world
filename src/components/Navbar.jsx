"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="logo">Watch World</div>
      <ul className="nav-links">
        <li>
          <Link href="/shop" aria-current={pathname === "/shop" ? "page" : undefined}>
            Shop
          </Link>
        </li>
        <li>
          <Link href="/info" aria-current={pathname === "/info" ? "page" : undefined}>
            Info
          </Link>
        </li>
        <li>
          <Link href="#about" scroll={true} aria-current={pathname === "#about" ? "page" : undefined}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
