
"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-white hover:text-white"
          : "text-[#5A698F] hover:text-[#FC4747]"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
