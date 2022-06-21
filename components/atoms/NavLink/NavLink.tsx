import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const { asPath } = useRouter();

  const activeClass = asPath === href ? "text-red-400" : "text-black";

  return (
    <Link
      href={{
        pathname: href,
      }}
    >
      {/* {React.cloneElement(children, { className: activeClass || null })} */}
      <a className={activeClass}>{children}</a>
    </Link>
  );
};
