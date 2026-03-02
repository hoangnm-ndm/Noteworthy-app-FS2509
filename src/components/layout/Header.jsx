import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2 text-primary">
        <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
          <span className="material-symbols-outlined text-xl">edit_note</span>
        </div>
        <h2 className="text-xl font-bold">Noteworthy</h2>
      </div>

      <div className="flex flex-1 justify-end gap-4 md:gap-8">
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "About"].map((x) => (
            <a
              key={x}
              className="text-slate-700 dark:text-slate-300 hover:text-primary text-sm font-medium"
            >
              {x}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <Button className="h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
            Login
          </Button>
          <Button className="h-10 px-4 bg-primary text-white shadow-sm">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
