import React from "react";
import { NavLink } from "react-router";

const ItemLink = ({ children, icon, linkTo }) => {
  const styleActive =
    "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/10 font-semibold";

  const styleNonActive =
    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/10  transition-colors";
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styleActive : styleNonActive)}
      to={linkTo}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-sm">{children}</span>
    </NavLink>
  );
};

export default ItemLink;
