import React from "react";
import { Link } from "react-router";
import ItemLink from "../../common/ItemLink";

const SideBar = () => {
  return (
    <aside
      className="flex flex-col w-64 p-4 overflow-y-auto bg-white border-r border-slate-200 dark:border-slate-800 dark:bg-slate-900 shrink-0"
      id="sidebar-component"
    >
      <div className="mb-8 space-y-1">
        <ItemLink icon={"description"} linkTo={"/"}>
          All notes
        </ItemLink>

        <ItemLink icon={"star"} linkTo={"/favorites"}>
          Favorites
        </ItemLink>

        <ItemLink icon={"history"} linkTo={"/recent"}>
          Recent
        </ItemLink>

        <ItemLink icon={"delete"} linkTo={"/deleted"}>
          Trash
        </ItemLink>
      </div>
      <div className="flex items-center justify-between px-3 mb-2">
        <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400">
          Labels
        </h3>
        <button className="text-slate-400 hover:text-primary">
          <span className="text-sm material-symbols-outlined">add</span>
        </button>
      </div>
      <div className="space-y-1">
        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          href="#"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-sm">Work</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          href="#"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-sm">Personal</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          href="#"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span className="text-sm">Ideas</span>
        </a>
        <a
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          href="#"
        >
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          <span className="text-sm">Travel</span>
        </a>
      </div>
      <div className="pt-6 mt-auto">
        <div className="p-4 border bg-primary/5 rounded-xl border-primary/10">
          <p className="mb-2 text-xs font-medium text-primary">Storage</p>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
            <div className="w-3/4 h-full bg-primary"></div>
          </div>
          <p className="text-[10px] text-slate-500">1.2 GB of 2 GB used</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
