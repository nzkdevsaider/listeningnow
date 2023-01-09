import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Player = () => {
  const { data } = useSWR("/api/currently-playing", fetcher, {
    refreshInterval: 15000,
  });

  if (data) {
    return (
      <div className="bg-[#1F1F1F] w-[870px] h-[280px] rounded-3xl">
        <div className="flex flex-row justify-center items-center h-full">
          {data.is_playing ? (
            <>
              <div className="w-[202px] h-[194px] m-5">
                <img
                  className="object-fill rounded"
                  src={data.item.album.images[0].url}
                  alt="Album"
                />
              </div>
              <h1 className="m-5 text-4xl">{data.item.name} &#9679; {data.item.album.artists[0].name}</h1>
            </>
          ) : (
            <>
              <h1>No estás reproduciendo nada.</h1>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Player;
