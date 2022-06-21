import { NavLink } from "../../atoms/NavLink/NavLink";

export const Navbar = () => {
  return (
    <nav className="flex gap-2">
      <NavLink href="/">Homepage</NavLink>
      <NavLink href="/about">About</NavLink>
    </nav>
  );
};
