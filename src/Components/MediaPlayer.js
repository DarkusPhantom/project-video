import React, { useState } from "react";

import "./css/MediaPlayer.css";
import Video from "./Video";
import ControlsVideo from "./ControlsVideo";
import VideosData from "../Data/StadisticVideo.json";

/*Trae la informacion de La lista de videos y los convierte en objetos*/
const listVideos = JSON.parse(JSON.stringify(VideosData));

/*Componente del video*/
/*En esta funcion se monta el video y los controles del video */
function MediaPlayer() {
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
  const videoProps = Object.values(listVideos)[count];

  return (
    <section className="MediaPlayer">
      <Video />
      <ControlsVideo
        video={videoProps}
        prevVideo={prevVideo}
        nextVideo={nextVideo}
      />
    </section>
  );
}

export default MediaPlayer;
