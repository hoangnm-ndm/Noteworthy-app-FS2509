export default function Footer() {
  return (
    <footer className="w-full py-12 bg-white border-t dark:bg-background-dark">
      <div className="flex flex-col items-center justify-between gap-8 px-6 mx-auto max-w-7xl md:px-10 md:flex-row">
        <div className="flex items-center gap-2 text-primary">
          <div className="flex items-center justify-center text-white rounded size-6 bg-primary">
            <span className="text-sm material-symbols-outlined">edit_note</span>
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
