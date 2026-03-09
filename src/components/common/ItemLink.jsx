import React from "react";
import { Link } from "react-router";

const ItemLink = ({ children, icon, active, linkTo }) => {
  const styleActive =
    "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/10 font-semibold";

  const styleNonActive =
    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-primary/10  transition-colors";
  return (
    <Link className={active ? styleActive : styleNonActive} to={linkTo}>
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-sm">{children}</span>
    </Link>
  );
};

export default ItemLink;
