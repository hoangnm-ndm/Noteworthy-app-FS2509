export default function Footer() {
  return (
    <footer className="w-full border-t py-12 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 text-primary">
          <div className="size-6 bg-primary text-white rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">edit_note</span>
          </div>
          <h2 className="font-bold">Noteworthy</h2>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Contact Support</a>
        </div>

        <p className="text-sm text-slate-500">© 2024 Noteworthy Inc.</p>
      </div>
    </footer>
  );
}
