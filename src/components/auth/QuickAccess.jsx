import Input from "../ui/Input";
import Button from "../ui/Button";

export default function QuickAccess() {
  return (
    <section className="w-full bg-slate-100/50 py-16 flex justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border">
        <h2 className="text-2xl font-bold mb-2">Quick Access</h2>
        <p className="text-sm text-slate-500 mb-6">
          Experience the future of note-taking in seconds.
        </p>

        <form className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="name@company.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />

          <Button className="w-full bg-primary text-white h-12 mt-4">
            Continue with Email
          </Button>
        </form>
      </div>
    </section>
  );
}
