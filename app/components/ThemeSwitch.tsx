import { useRouter } from "next/navigation";
import { fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";

type Props = {
  speed?: number;
};

function PersonaToggle({ speed = 0 }: Props = {}) {
  const router = useRouter();

  return (
    <div 
      className="absolute left-4 top-4 md:left-8 md:top-8 m-px flex h-8 md:h-10 flex-row items-center gap-0 rounded-full bg-[#001520]/80 backdrop-blur-md border border-white/10 shadow-lg duration-300 hover:scale-105 active:scale-95"
      style={{ transform: `translateY(calc(var(--hero-scroll, 0px) * ${speed}))`, willChange: "transform" }}
    >
      {/* Engineer — active on main page */}
      <div
        className={cn(
          "flex items-center gap-0.5 md:gap-1.5 px-1 md:px-4 h-full rounded-full transition-all duration-300",
          "bg-[#a2fff4]/20 text-[#a2fff4]",
          fontInter.className,
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        <span className="font-semibold text-[10px] md:text-sm">Engineer</span>
      </div>

      <div className="h-3 w-px bg-white/10" />

      {/* Traveller — navigates to /photography */}
      <div
        onClick={() => router.push("/photography")}
        className={cn(
          "flex items-center gap-0.5 md:gap-1.5 px-1 md:px-4 h-full rounded-full transition-all duration-300 cursor-pointer",
          "text-white/50 hover:text-[#f0c56d] hover:bg-[#f0c56d]/10",
          fontInter.className,
        )}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span className="font-semibold text-[10px] md:text-sm">Traveller</span>
      </div>
    </div>
  );
}

export default PersonaToggle;
