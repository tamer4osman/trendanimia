import Image from "next/image";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const AnimeCard =({ anime: { name, kind, episodes, episodes_aired, score, image } }: Prop) =>{
  return (
    <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image src={image.original} alt={name} fill className="rounded-xl" />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {name}
          </h2>
          <div className={`py-1 px-2 bg-[#161921] rounded-sm text-white text-sm font-bold capitalize`}>
            {kind}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {episodes || episodes_aired ? (
            <div className="flex flex-row gap-2 items-center">
              <Image src="./episodes.svg" alt="episodes" width={20} height={20} className="object-contain" />
              <p className="text-base text-white font-bold">
                {episodes || episodes_aired}
              </p>
            </div>
          ) : null}
          <div className="flex flex-row gap-2 items-center">
            <Image src="./star.svg" alt="star" width={18} height={18} className="object-contain" />
            <p className="text-base font-bold text-[#FFAD49]">{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AnimeCard;