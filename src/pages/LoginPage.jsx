import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function LoginPage() {
  return (
    <section className="flex justify-center w-full py-16 bg-slate-100/50">
      <div className="w-full max-w-md p-8 bg-white border shadow-xl rounded-2xl">
        <h2 className="mb-2 text-2xl font-bold">Quick Access</h2>
        <p className="mb-6 text-sm text-slate-500">
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

          <Button className="w-full h-12 mt-4 text-white bg-primary">
            Continue with Email
          </Button>
        </form>
      </div>
    </section>
  );
}
