import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, error, type = "text", className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {label}
          </label>
        )}

        <input
          ref={ref}
          type={type}
          className={`w-full h-12 px-3 rounded-lg border bg-slate-50
          text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary
          ${error ? "border-red-500" : "border-slate-300"}
          ${className}`}
          {...props}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
