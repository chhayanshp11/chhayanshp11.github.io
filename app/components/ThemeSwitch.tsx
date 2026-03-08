import { ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/navigation";
import { fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";

type Props = {
  speed: number;
};

function PersonaToggle({ speed }: Props) {
  const router = useRouter();

  return (
    <ParallaxLayer offset={0} speed={speed} className="pointer-events-none">
      <div
        className="pointer-events-auto absolute right-2 top-40 m-px flex h-10 flex-row items-center gap-0 rounded-full bg-[#001520]/80 backdrop-blur-md border border-white/10 shadow-lg duration-300 hover:scale-105 active:scale-95 md:left-8 md:right-auto md:top-8"
      >
        {/* Engineer — active on main page */}
        <div
          className={cn(
            "flex items-center gap-1.5 px-4 h-full rounded-full transition-all duration-300",
            "bg-[#a2fff4]/20 text-[#a2fff4]",
            fontInter.className,
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="font-semibold text-sm">Engineer</span>
        </div>

        <div className="h-5 w-px bg-white/10" />

        {/* Traveller — navigates to /photography */}
        <div
          onClick={() => router.push("/photography")}
          className={cn(
            "flex items-center gap-1.5 px-4 h-full rounded-full transition-all duration-300 cursor-pointer",
            "text-white/50 hover:text-[#f0c56d] hover:bg-[#f0c56d]/10",
            fontInter.className,
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span className="font-semibold text-sm">Traveller</span>
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default PersonaToggle;
