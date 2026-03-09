import Button from "../ui/Button";
import AvatarGroup from "../ui/AvatarGroup";
import thumbnailHero from "../../assets/imgs/111.webp";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-10 px-6 py-12 md:px-10 md:py-20 md:flex-row">
      <div className="flex flex-col justify-between w-full gap-8 md:w-1/2">
        <h1 className="text-4xl font-black md:text-6xl">
          Capture your thoughts, organized effortlessly
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
          Noteworthy helps you focus on what matters...
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="px-6 text-white shadow-lg min-w-40 h-14 bg-primary">
            Get Started
          </Button>
          <Button className="px-6 border min-w-40 h-14 border-slate-300 dark:border-slate-700">
            View Demo
          </Button>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-500">
          <AvatarGroup items={["JD", "AS", "MK"]} />
          <span>Joined by 10k+ thinkers</span>
        </div>
      </div>

      <div className="relative w-full md:w-1/2">
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="relative p-3 bg-white border rounded-2xl">
          <div
            className="w-full bg-cover rounded-lg aspect-video"
            style={{
              backgroundImage: `url(${thumbnailHero})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
