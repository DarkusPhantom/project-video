import React, { useState, useEffect } from "react";

import "./css/MediaPlayer.css";
import Video1 from "../video/video_1.mp4";
import Video2 from "../video/video_2.mp4";
import Video3 from "../video/video_3.mp4";
import Video4 from "../video/video_4.mp4";

import Video from "./Video";
import ControlsVideo from "./ControlsVideo";
import VideosData from "../Data/StadisticVideo.json";

/*Trae la informacion de La lista de videos y los convierte en objetos*/
const listVideosData = JSON.parse(JSON.stringify(VideosData));

/*Componente del video*/
/*En esta funcion se monta el video y los controles del video */
function MediaPlayer() {
  /*Lista de videos*/
  const listVideos = [Video1, Video2, Video3, Video4];

  /*Funcion que resetea el contador cuando llega al maximo o al minimo para avanzar o retroceder el video*/
  function useMinMax(max) {
    const [count, setCount] = useState(0);

    if (count >= max) {
      setCount(0);
    } else if (count <= -1) {
      setCount(3);
    }

    return [count, setCount];
  }

  /*Contador para compararlo con el id de los videos*/
  const [count, setCount] = useMinMax(4);

  /*Funcion para pasar al siguiente video*/
  const nextVideo = () => {
    setCount(count + 1);
  };

  /*Funcion para pasar al video anterior*/
  const prevVideo = () => {
    setCount(count - 1);
  };

  /*Guarda el video actual para enviarlo como parametro*/
  const videoProps = Object.values(listVideosData)[count];

  return (
    <section className="MediaPlayer">
      <Video video={listVideos[count]} />
      <ControlsVideo
        video={videoProps}
        prevVideo={prevVideo}
        nextVideo={nextVideo}
      />
    </section>
  );
}

export default MediaPlayer;
