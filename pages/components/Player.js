import useSWR from "swr";
import { signOut } from "next-auth/react";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Player = ({ name }) => {
  const { data } = useSWR(`/api/currently-playing/${name}`, fetcher, {
    refreshInterval: 15000,
  });

  if (data) {
    const { playing } = data;

    if (!playing || !playing.is_playing) {
      return (
        <div className="w-[870px] h-[280px] bg-[#181818] text-white rounded-xl">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-xl">
              {name} no está disfrutando de sus canciones favoritas en este
              momento.
            </h1>
            <p>{data?.message}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-[870px] h-[280px] bg-[#181818] text-white rounded-xl">
        <div className="flex flex-row justify-start items-center h-full">
          <div className="w-[202px] h-[194px] m-10">
            <img
              className="object-cover"
              src={playing.item.album.images[0].url}
              alt="Album"
            />
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="m-10 text-4xl">
              {playing.item.name} &#9679; {playing.item.album.artists[0].name}
            </h1>
            <Image
              src="/logos/Spotify_Logo_RGB_White.png"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Cargando reproductor...</h1>;
  }
};

export default Player;
