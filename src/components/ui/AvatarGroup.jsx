export default function AvatarGroup({ items }) {
  return (
    <div className="flex -space-x-2">
      {items.map((x, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full border-2 border-background-light bg-slate-300 flex items-center justify-center text-[10px] font-bold"
        >
          {x}
        </div>
      ))}
    </div>
  );
}
