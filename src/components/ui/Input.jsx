export default function Input({ label, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        type={type}
        className="form-input w-full rounded-lg border-slate-600 dark:border-slate-700 bg-slate-50  text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary h-12 px-2"
        {...props}
      />
    </div>
  );
}
