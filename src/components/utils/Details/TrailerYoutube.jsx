import Youtube from "react-youtube";
import { FiXCircle } from "react-icons/fi";
import { useState } from "react";

const TrailerYoutube = ({ youtubeID }) => {
  const [showTrailer, setShowTrailer] = useState(true);

  const opt = {
    height: "250",
    width: "250",
  };

  const handleVideo = () => {
    setShowTrailer(!showTrailer);
  };

  const ButtonClose = () => {
    return (
      <button
        className="m-0 p-0 hover:scale-110 transition-all duration-300 absolute -right-2 -top-4"
        onClick={handleVideo}
      >
        <FiXCircle
          size={30}
          className="text-softLight bg-secondary rounded-full"
        />
      </button>
    );
  };

  const YoutubeVideo = () => {
    return (
      <>
        <ButtonClose />
        <Youtube
          videoId={youtubeID}
          opts={opt}
          onReady={(event) => event.target.pauseVideo()}
          onError={() =>
            alert(
              "Something went wrong for this trailer, please try again later."
            )
          }
        />
      </>
    );
  };

  return (
    <div className="fixed bottom-2 right-2">
      <div className="relative">
        {showTrailer ? (
          <YoutubeVideo />
        ) : (
          <button
            className="font-poppins bg-secondary shadow-md rounded-md px-2 py-1 text-light hover:scale-110 transition-all duration-300"
            onClick={handleVideo}
          >
            Watch Trailer
          </button>
        )}
      </div>
    </div>
  );
};

export default TrailerYoutube;
