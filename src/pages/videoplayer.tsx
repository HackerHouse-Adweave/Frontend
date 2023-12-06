import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import video from "../videos/video1.mp4";
import { IoArrowBackCircle } from "react-icons/io5";
import Arweave from "arweave";

const arweave = Arweave.init({});
const emptyAsset = {
  id: "",
  tags: [],
  owner: {
    address: "",
  },
  fee: {
    ar: "",
    winston: "",
  },
  quantity: {
    ar: "",
    winston: "",
  },
  block: {
    id: "",
    timestamp: 0,
  },
  data: {
    size: "",
    type: "",
  },
};
const VideoPlayer = () => {
  const [asset, setAsset] = useState(emptyAsset);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const path = window.location.hash.split("/");
    if (!!path[2]) {
      console.log("path: ", path[2]);
      getAsset(path[2]);
    }
  }, []);

  const getAsset = async (id: string) => {
    if (id == undefined) {
      setNotFound(true);
      return;
    }
    try {
      const queryObject = {
        query: `
            {
                transaction(
                id:"${id}"
                ) {
            
                    id
                anchor
                signature
                recipient
                owner {
                  address
                }
                fee{
                  ar
                  winston
                }
                quantity{
                  ar
                  winston
                }
                data{
                  size
                  type
                }
                tags{
                  name
                  value
                }
                block{
                  id
                  timestamp
                }
                }
            }
            `,
      };
      setIsLoading(true);
      const results = await arweave.api.post("/graphql", queryObject);
      if (!!results.data.data.transaction) {
        setAsset(results.data.data.transaction);
      } else {
        console.log("not found");
        setNotFound(true);
      }
      setIsLoading(false);
    } catch (err) {
      console.log("err: ", err);
      setNotFound(true);
    }
  };

  return (
    <>
      <div className="mt-4 ml-4">
        <a className="w-8" href="#/">
          <IoArrowBackCircle className="w-8 h-8" />
        </a>
        <div className="container m-auto mt-8 flex flex-auto gap-x-6 text-justify font-josefin font-normal">
          <div className="rounded-xl">
            <ReactPlayer
              url={`https://arweave.net/${asset.id}`}
              muted={true}
              playing={true}
              controls={true}
            />
          </div>
          <div className="leading loose mt-6">
            <p className="text-lg font-bold">Title: Permahacks Winner Trophy #1</p>
            <p>
              <span className="text-lg font-bold">Desc:</span> The Permaweb
              Hackathon is an open-source event that encourages developers to
              build innovative applications on top of the Arweave permaweb
              protocol. Arweave is a decentralized storage network that
              permanently stores data on the blockchain, ensuring that it
              remains accessible and tamper-proof indefinitely.
            </p>
            <div className="flex flex-row gap-x-2 pt-2">
              <p className="text-lg pt-1.25 font-bold">Tags: </p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">
                Sponsored
              </p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">
                Comedy
              </p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">
                Funny
              </p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">
                Joke
              </p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">
                Drama
              </p>
            </div>
            <p>
              <span className="text-lg font-bold">Creator:</span> Arweave
            </p>
            <p>
              <span className="text-lg font-bold">Views:</span> 200K
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
