import Button from "../ui/Button";
import AvatarGroup from "../ui/AvatarGroup";

export default function HeroSection() {
  return (
    <div className="w-full px-6 md:px-10 py-12 md:py-20 flex flex-col md:flex-row gap-10 items-center justify-between">
      <div className="flex flex-col gap-8 w-full md:w-1/2 justify-between">
        <h1 className="text-4xl md:text-6xl font-black">
          Capture your thoughts, organized effortlessly
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
          Noteworthy helps you focus on what matters...
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button className="min-w-40 h-14 px-6 bg-primary text-white shadow-lg">
            Get Started
          </Button>
          <Button className="min-w-40 h-14 px-6 border border-slate-300 dark:border-slate-700">
            View Demo
          </Button>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <AvatarGroup items={["JD", "AS", "MK"]} />
          <span>Joined by 10k+ thinkers</span>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="relative bg-white p-4 rounded-2xl border">
          <div
            className="w-full aspect-video bg-cover rounded-lg"
            style={{
              backgroundImage: "url('./src/assets/imgs/111.webp')",
            }}
          />
        </div>
      </div>
    </div>
  );
}
