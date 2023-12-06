import videoCard from "../Images/videoCard1.png";
import { FaCircleInfo } from "react-icons/fa6";
import videoCard2 from "../Images/videoCard2.jpeg";
import videoCard3 from "../Images/videoCard3.jpeg";
import amazingVideo from "../Images/amazingVideo.png";
const Videotab = ({asset}:any) => {
  const tagsObject = asset.node.tags.reduce((acc: any, cur: any) => {
    acc[cur.name] = cur.value;
    return acc;
  })
  return (
    <div className="pb-8 ml-12">
      <div className="pt-8 flex flex-row gap-x-12">
        <a href={`#/videoplayer/${asset.node.id}`}>
          <div className="w-60 cursor-pointer">
            <video width={"100%"} className="video rounded-lg" preload="metadata">
            <source
              className="w-60 h-40 mb-4 rounded-lg"
              src={`https://arweave.net/${asset.node.id}`}
              type="video/mp4"
            />
            </video>
            <div className="text-xs">
              <p className="text-md h-16 font-extrabold text-justify">
                {tagsObject['Title']}
              </p>
              <p>{tagsObject['Protocol-Name']}</p>
              <div className="w-72 flex flex-row gap-x-2 text-slate-600">
                <p></p>
                <p className=""></p>
                <FaCircleInfo className="w-3.5 h-3.5 place-items-end grid" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Videotab;
