import Image from "next/image";
import { MotionDiv } from "./Motion";

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number | null;
  episodes_aired: number | null;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const AnimeCard = ({ anime, index }: Prop) => {
  const { name, kind, episodes, episodes_aired, score, image } = anime;

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh] rounded-xl overflow-hidden">
        <Image src={`https://shikimori.one${image.original}`} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="py-4 px-3 flex flex-col gap-3 bg-[#161921]">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {name}
          </h2>
          <div className="py-1 px-2 rounded-sm text-white text-sm font-bold capitalize">
            {kind}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {episodes || episodes_aired ? (
            <div className="flex flex-row gap-2 items-center">
              <Image src="/episodes.svg" alt="episodes" width={20} height={20} className="object-contain" />
              <p className="text-base text-white font-bold">
                {episodes || episodes_aired}
              </p>
            </div>
          ) : null}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" alt="star" width={18} height={18} className="object-contain" />
            <p className="text-base font-bold text-[#FFAD49]">{score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;