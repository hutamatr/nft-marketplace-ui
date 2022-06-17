import React, { useState, useEffect, Fragment } from "react";

import Card from "../../UI/Card";
import useGet from "../../../hooks/use-get";
import artistAvatar from "../../UI/Avatars";

const TopArtist = () => {
  const { isError, requestHttp } = useGet();
  const [topArtist, setTopArtist] = useState([]);
  // const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const TopArtistConf = (topArtistData) => {
      setTopArtist(topArtistData);
    };

    requestHttp(
      {
        method: "get",
        url: "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/top-artist",
      },
      TopArtistConf
    );
  }, [requestHttp]);

  return (
    <Card className={"rounded-xl bg-sub-background-1 p-5"}>
      <h1 className="mb-4 text-xl font-semibold text-white">Top Artist</h1>
      {isError.error ? (
        <p className="text-center text-lg font-semibold text-white">
          {isError.errorMessage}!
        </p>
      ) : (
        <Fragment>
          <ol className="flex max-h-72 flex-col gap-y-6 overflow-auto">
            {topArtist.map((artist, index) => {
              return (
                <li
                  className="flex flex-row items-center justify-between gap-x-2"
                  key={artist.id}
                >
                  <div className="flex flex-row items-center justify-center gap-x-4">
                    <span className="w-5 text-left text-xl font-semibold text-white">
                      {artist.id}.
                    </span>
                    {/* can't get the avatar artist image from the API, because the image link in the "avatar" property doesn't work */}
                    <img
                      src={artistAvatar[index]}
                      alt=""
                      className="h-12 w-12"
                    />
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <p className="text-sm font-medium text-white">
                        {artist.name}
                      </p>
                      <span className="text-xs text-slate-500">
                        @{artist.username}
                      </span>
                    </div>
                  </div>
                  <button className="rounded-lg bg-gradient-to-r from-[#6763FD] to-[#B84EF1] py-2 px-3 text-sm font-medium text-white">
                    Follow
                  </button>
                </li>
              );
            })}
          </ol>
        </Fragment>
      )}
    </Card>
  );
};

export default TopArtist;
