import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  // const [videoData, setVideoData] = useState({
  //   otp: "",
  //   playbackInfo: "",
  // });

  useEffect(() => {
    // axios
    //   .post("http://localhost:8000/api/v1/getVdoCipherOTP", {
    //     videoId: videoUrl,
    //   })
    //   .then((res) => {
    //     setVideoData(res.data);
    //   });
  }, [videoUrl]);

  return (
    <div 
    style={{position:"relative",overflow:"hidden"}}
    key={videoUrl}
    >
      <Plyr 
            source={{
              type: "video",
              // @ts-ignore
              sources: [{ src: 953129433, provider: "vimeo" }],
            }}
          />
        {/* <iframe
          src={videoUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe> */}

    </div>
  );
};

export default CoursePlayer;
