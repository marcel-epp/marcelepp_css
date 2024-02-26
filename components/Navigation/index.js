import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation({ isActive, ontoggleStateActive }) {
  const router = useRouter();

  return (
    <nav className={isActive ? "navigation navigation--open" : "navigation"}>
      <ul className="navigation__ul">
        <li>
          <Link
            className={
              router.pathname === "/"
                ? "navigation__link--active"
                : "navigation__link"
            }
            href="/"
            onClick={ontoggleStateActive}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              router.pathname === "/posts"
                ? "navigation__link--active"
                : "navigation__link"
            }
            href="/posts"
            onClick={ontoggleStateActive}>
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
