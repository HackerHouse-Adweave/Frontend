import React from "react";
import ReactPlayer from "react-player";
import video from "../videos/video1.mp4";
import { IoArrowBackCircle } from "react-icons/io5";

const VideoPlayer = () => {
  return (
    <>
      <div className="mt-4 ml-4">
        <a className="w-fit" href="#/">
          <IoArrowBackCircle className="w-8 h-8" />
        </a>
        <div className="container m-auto mt-8 flex flex-auto gap-x-6 text-justify font-josefin font-normal">
          <div className="rounded-xl">
            <ReactPlayer
              url={video}
              muted={true}
              playing={true}
              controls={true}
            />
          </div>
          <div className="leading loose mt-6">
            <p className="text-lg font-bold">Title: Amazing Video</p>
            <p>
              <span className="text-lg font-bold">Desc:</span> In the vast
              landscape of online content, a captivating video title serves as
              the gateway to a world of entertainment, education, and wonder.
              "Amazing Video" is not just a title; it's a promise, a beckoning
              call to embark on an extraordinary voyage into unexplored
              territories of excitement and discovery.
            </p>
            <div className="flex flex-row gap-x-2 pt-2">
              <p className="text-lg pt-1.25 font-bold">Tags: </p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">Sponsored</p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">Comedy</p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">Funny</p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">Joke</p>
              <p className="p-1 text-sky-600 border border-solid border-sky-600">Drama</p>
            </div>
            <p><span className="text-lg font-bold">Creator:</span> Amazing Guy</p>
            <p><span className="text-lg font-bold">Views:</span> 20M</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
