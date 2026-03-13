import Image, { StaticImageData } from "next/image";

type Props = {
  path: StaticImageData;
  scrollOffset?: number;
  speed?: number;
};

function BackgroundLayer({ path, scrollOffset = 0, speed = 0 }: Props) {
  const yPos = scrollOffset * speed;

  return (
    <div
      className="absolute inset-0 pointer-events-none flex flex-col items-center"
      style={{
        transform: `translateY(${yPos}px)`,
        willChange: "transform",
      }}
    >
      <div className="aspect-[1920/1080] h-full relative w-full">
        <Image
          src={path}
          alt=""
          fill
          placeholder="blur"
          className="object-cover"
          priority={speed > 0.5} // Priority for closer layers
        />
      </div>
    </div>
  );
}

export default BackgroundLayer;
