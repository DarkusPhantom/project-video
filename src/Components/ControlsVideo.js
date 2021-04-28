import React, { Fragment, useState, useEffect } from "react";

import "./css/ControlsVideo.css";
import { ReactComponent as Heart } from "../Images/Icons/heart.svg";
import { ReactComponent as HeartBroken } from "../Images/Icons/heart-broken.svg";

function ControlsVideo({ video, prevVideo, nextVideo }) {
  /*Estado del boton para mostrar mas informacion del video*/
  const [info, setInfo] = useState(false);

  /*Conteo de Likes*/
  const [countLike, setCountLike] = useState(video.likes);

  /*Conteo de Dislike*/
  const [countDislike, setCountDislike] = useState(video.dislike);

  /*Cambia el valores de los likes y dislikes cada vez que cambia de video*/
  useEffect(() => {
    setCountLike(video.likes);
    setCountDislike(video.dislike);
  }, [video.name]);

  /*Funcion para mostrar u ocultar el contenido cada vez que hace click*/
  const showInfo = () => {
    /*Si el valor anterior es falso, lo retorna verdadero y viceversa*/
    setInfo((prevValue) => !prevValue);
  };

  /*Funcion que crea la estructura de contenido que va en
   * Mas Informacion del video*/
  const moreInfo = () => {
    return (
      <div className="more-info slidein">
        <p className="name">
          <span className="title-info">Nombre:</span>
          <br />
          {video.name}
        </p>
        <p className="likes">
          <span className="title-info">Likes:</span>
          <br />
          {countLike}
        </p>
        <p className="dislikes">
          <span className="title-info">Dislikes:</span>
          <br />
          {countDislike}
        </p>
        <p className="views">
          <span className="title-info">Views</span>
          <br />
          {video.views}
        </p>
      </div>
    );
  };

  return (
    <Fragment>
      {
        //Si el estado de info es verdadero, muestra la informacion
        //Caso contrario, no muestra nada
        info && moreInfo()
      }
      <div className="controls">
        <button
          className="btn btn-reaction like"
          onClick={() => setCountLike(countLike + 1)}
        >
          <Heart />
        </button>
        <button
          className="btn btn-reaction dislike"
          onClick={() => setCountDislike(countDislike + 1)}
        >
          <HeartBroken />
        </button>
        <button className="btn btn-prev" onClick={prevVideo}>
          ◄
        </button>
        <button className="btn btn-next" onClick={nextVideo}>
          ►
        </button>
        <button className="btn btn-more-info" onClick={showInfo}>
          Info Video
        </button>
      </div>
    </Fragment>
  );
}

export default ControlsVideo;
