import { Link } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 md:px-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="flex items-center gap-2 text-primary">
        <div className="flex items-center justify-center text-white rounded-lg size-8 bg-primary">
          <span className="text-xl material-symbols-outlined">edit_note</span>
        </div>
        <h2 className="text-xl font-bold">Noteworthy</h2>
      </div>

      <div className="flex justify-end flex-1 gap-4 md:gap-8">
        <nav className="items-center hidden gap-8 md:flex">
          {["Features", "Pricing", "About"].map((x) => (
            <Link
              key={x}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary"
            >
              {x}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          <Link className="h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
            Login
          </Link>
          <Link className="h-10 px-4 text-white shadow-sm bg-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
