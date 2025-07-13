import { NavLink, type NavLinkProps } from "react-router-dom";

export function CustomNavLink({ children, className = '', ...props }: NavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `block transition-colors ${isActive ? "font-bold text-white underline" : ""} ${className}`
      }
    >
      {children}
    </NavLink>
  );
}