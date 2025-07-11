import { NavLink, type NavLinkProps } from "react-router-dom";

export function CustomNavLink({ children, ...props }: NavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `hover:underline ${isActive ? "font-bold underline" : ""}`
      }
    >
      {children}
    </NavLink>
  );
}