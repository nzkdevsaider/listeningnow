import useSWR from "swr";
import { signOut } from "next-auth/react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Player = ({ name }) => {
  const { data } = useSWR(`/api/currently-playing/${name}`, fetcher, {
    refreshInterval: 15000,
  });

  if (data) {
    const { playing } = data;

    if (!playing) {
      return (
        <div className="bg-[#1F1F1F] w-[870px] h-[280px] rounded-3xl">
          <div className="flex flex-col justify-center items-center h-full">
            <h1>
              {name} no está disfrutando de sus canciones favoritas en este
              momento.
            </h1>
            <p>{data?.message}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-[#1F1F1F] w-[870px] h-[280px] rounded-3xl">
        <div className="flex flex-row justify-center items-center h-full">
          {playing.is_playing ? (
            <>
              <div className="w-[202px] h-[194px] m-5">
                <img
                  className="object-fill rounded"
                  src={playing.item.album.images[0].url}
                  alt="Album"
                />
              </div>
              <h1 className="m-5 text-4xl">
                {playing.item.name} &#9679; {playing.item.album.artists[0].name}
              </h1>
            </>
          ) : (
            <>
              <h1>{name} no está reproduciendo nada en este momento.</h1>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Cargando reproductor...</h1>;
  }
};

export default Player;
