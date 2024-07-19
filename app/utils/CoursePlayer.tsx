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

  return (
    <div 
    // style={{position:"relative",overflow:"hidden"}}
    key={videoUrl}
    >
      <Plyr key={videoUrl}
            source={{
              type: "video",
              // @ts-ignore
              sources: [{ src: videoUrl, provider: "vimeo" }],
            }}
          />
    </div>
  );
};

export default CoursePlayer;
