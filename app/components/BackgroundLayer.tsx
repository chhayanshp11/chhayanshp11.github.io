import Image, { StaticImageData } from "next/image";

type Props = {
  path: StaticImageData;
};

function BackgroundLayer({ path }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center">
      <div className="aspect-[1920/1080] h-full">
        <Image
          src={path}
          alt=""
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default BackgroundLayer;
