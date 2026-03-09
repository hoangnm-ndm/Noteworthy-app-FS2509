import React from "react";

const HeaderMain = () => {
  return (
    <header
      className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-200 dark:border-slate-800 dark:bg-slate-900 shrink-0"
      id="top-nav-component"
    >
      <div className="flex items-center flex-1 gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="text-2xl material-symbols-outlined">
              sticky_note_2
            </span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Noteworthy
          </h1>
        </div>
        <div className="flex-1 max-w-xl search-bar-container">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 transition-colors pointer-events-none text-slate-400 group-focus-within:text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="block w-full py-2 pl-10 pr-3 text-sm transition-all border-none bg-slate-100 dark:bg-slate-800 rounded-xl placeholder-slate-500 focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-slate-700"
              placeholder="Search your notes, ideas, or labels..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-8">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all shadow-sm bg-primary hover:bg-primary/90 rounded-xl new-note-button">
          <span className="text-lg material-symbols-outlined">add</span>
          <span>New Note</span>
        </button>
        <div className="w-px h-8 mx-2 bg-slate-200 dark:bg-slate-800"></div>
        <div className="flex items-center gap-2">
          <button className="p-2 transition-colors rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="overflow-hidden border rounded-full size-9 bg-primary/10 border-primary/20"
            data-alt="User profile avatar icon placeholder"
          >
            <img
              alt="Profile"
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzgjHfFDErj5-0-VpVm1iEPiZoU6xXeDk016Y3QcimVn1xCDGlyxxyFBKGSdkrXOiCjfCOX9vq1MP4akfavEtxH7pkeU6cThBkq8Dj_QUmOlt0fRf_yus-NokmsaqS-slmqNnhtwdUZxUlxJQFVfl2aX6kKrP5_KOzgqEfbv-h8l20Plk3JagvEmg0SugEJmndNWNA6dm_frt-ATaxyOwopkd7f1RcO5Dn0Eq9-5wLxYp5XjayKUjzz4xnI-gVN688Rse33HK8lMXd"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
