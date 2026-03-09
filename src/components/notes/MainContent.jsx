import React from "react";

const MainContent = () => {
  return (
    <main className="flex flex-col flex-1 overflow-hidden bg-background-light dark:bg-background-dark">
      <div
        className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-background-light/50 backdrop-blur-sm"
        id="content-toolbar-component"
      >
        <h2 className="text-lg font-bold">All Notes</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            <span className="text-lg material-symbols-outlined">
              calendar_today
            </span>
            <span>Sort by Date</span>
            <span className="text-lg material-symbols-outlined">
              expand_more
            </span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-colors">
            <span className="text-lg material-symbols-outlined">label</span>
            <span>Filter by Label</span>
            <span className="text-lg material-symbols-outlined">
              expand_more
            </span>
          </button>
          <div className="flex p-1 rounded-lg bg-slate-200 dark:bg-slate-800">
            <button className="p-1.5 bg-white dark:bg-slate-700 shadow-sm rounded-md">
              <span className="text-lg material-symbols-outlined">
                grid_view
              </span>
            </button>
            <button className="p-1.5 text-slate-500">
              <span className="text-lg material-symbols-outlined">
                view_list
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          id="notes-grid-component"
        >
          <div className="relative p-5 transition-all bg-white border cursor-pointer group dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 note-card-component">
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase rounded leading-none">
                Work
              </span>
              <button className="transition-opacity opacity-0 text-slate-400 group-hover:opacity-100">
                <span className="text-lg material-symbols-outlined">
                  more_vert
                </span>
              </button>
            </div>
            <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
              Q4 Project Brainstorming
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
              Initial ideas for the user interface refresh and backend
              optimization. Focus on performance metrics and accessibility
              standards...
            </p>
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm material-symbols-outlined">
                  schedule
                </span>
                <span className="text-[11px]">2 hours ago</span>
              </div>
              <span className="text-lg material-symbols-outlined text-primary/40">
                star
              </span>
            </div>
          </div>

          <div className="p-5 transition-all bg-white border cursor-pointer group dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 note-card-component">
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase rounded leading-none">
                Personal
              </span>
              <button className="transition-opacity opacity-0 text-slate-400 group-hover:opacity-100">
                <span className="text-lg material-symbols-outlined">
                  more_vert
                </span>
              </button>
            </div>
            <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
              Weekend Grocery List
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
              - Almond milk (unsweetened)
              <br />- Fresh basil and tomatoes
              <br />- Whole grain bread
              <br />- Greek yogurt...
            </p>
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm material-symbols-outlined">
                  schedule
                </span>
                <span className="text-[11px]">Yesterday</span>
              </div>
              <span className="text-lg material-symbols-outlined text-slate-300">
                star
              </span>
            </div>
          </div>

          <div className="relative p-5 overflow-hidden transition-all bg-white border cursor-pointer group dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 note-card-component">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-amber-500"></div>
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase rounded leading-none">
                Ideas
              </span>
              <button className="transition-opacity opacity-0 text-slate-400 group-hover:opacity-100">
                <span className="text-lg material-symbols-outlined">
                  more_vert
                </span>
              </button>
            </div>
            <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
              App Startup Concept
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
              A platform that connects local artisans directly with interior
              designers for bespoke furniture projects...
            </p>
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm material-symbols-outlined">
                  schedule
                </span>
                <span className="text-[11px]">3 days ago</span>
              </div>
              <span className="text-lg material-symbols-outlined text-amber-400 fill-amber-400">
                star
              </span>
            </div>
          </div>

          <div className="p-5 transition-all bg-white border cursor-pointer group dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 note-card-component">
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase rounded leading-none">
                Travel
              </span>
              <button className="transition-opacity opacity-0 text-slate-400 group-hover:opacity-100">
                <span className="text-lg material-symbols-outlined">
                  more_vert
                </span>
              </button>
            </div>
            <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
              Japan Trip Itinerary
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
              Flight lands at Narita. Take the Skyliner to Ueno. Dinner in
              Shinjuku Golden Gai area...
            </p>
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm material-symbols-outlined">
                  schedule
                </span>
                <span className="text-[11px]">Oct 12, 2023</span>
              </div>
              <span className="text-lg material-symbols-outlined text-slate-300">
                star
              </span>
            </div>
          </div>

          <div className="p-5 transition-all bg-white border cursor-pointer group dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 note-card-component">
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase rounded leading-none">
                Work
              </span>
              <button className="transition-opacity opacity-0 text-slate-400 group-hover:opacity-100">
                <span className="text-lg material-symbols-outlined">
                  more_vert
                </span>
              </button>
            </div>
            <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
              Meeting Notes: Client Feedback
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
              Client requested more emphasis on the dark mode implementation and
              smoother transitions between dashboard widgets...
            </p>
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm material-symbols-outlined">
                  schedule
                </span>
                <span className="text-[11px]">Oct 10, 2023</span>
              </div>
              <span className="text-lg material-symbols-outlined text-slate-300">
                star
              </span>
            </div>
          </div>
          <div className="p-5 transition-all bg-white border cursor-pointer group dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 note-card-component">
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold uppercase rounded leading-none">
                Unlabeled
              </span>
              <button className="transition-opacity opacity-0 text-slate-400 group-hover:opacity-100">
                <span className="text-lg material-symbols-outlined">
                  more_vert
                </span>
              </button>
            </div>
            <h3 className="mb-2 font-bold text-slate-900 dark:text-slate-100 line-clamp-1">
              Quick Note - Password Reset
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
              Reminder to update the recovery email for the development staging
              environment before the next release cycle...
            </p>
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-sm material-symbols-outlined">
                  schedule
                </span>
                <span className="text-[11px]">Oct 08, 2023</span>
              </div>
              <span className="text-lg material-symbols-outlined text-slate-300">
                star
              </span>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="flex items-center justify-between px-8 py-4 bg-white border-t border-slate-200 dark:border-slate-800 dark:bg-slate-900 shrink-0"
        id="pagination-footer-component"
      >
        <p className="text-sm text-slate-500">Showing 1 to 12 of 48 notes</p>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center border rounded-lg size-9 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
            disabled=""
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="flex items-center justify-center text-sm font-semibold text-white rounded-lg size-9 bg-primary">
            1
          </button>
          <button className="flex items-center justify-center text-sm rounded-lg size-9 hover:bg-slate-100 dark:hover:bg-slate-800">
            2
          </button>
          <button className="flex items-center justify-center text-sm rounded-lg size-9 hover:bg-slate-100 dark:hover:bg-slate-800">
            3
          </button>
          <span className="px-1 text-slate-400">...</span>
          <button className="flex items-center justify-center text-sm rounded-lg size-9 hover:bg-slate-100 dark:hover:bg-slate-800">
            12
          </button>
          <button className="flex items-center justify-center border rounded-lg size-9 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </footer>
    </main>
  );
};

export default MainContent;
