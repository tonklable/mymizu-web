import React, {useState} from "react";
import {ShareModal} from "./ShareModal";
import {ShareButton} from "./Buttons/ShareButton";
import {RouteButton} from "./Buttons/RouteButton";
import {Marker} from "./Marker";

export const Summary = ({data}) => {
  const [shareModal, setShareModal] = useState(false);

  return (
    <div className="summary">
      <div className="title">
        <Marker category={data.categoryId}/>
        <h6>{data?.title}</h6>
      </div>
      <div className="description">
        {data.description !== null && Object.keys(data.description).map((name, index) => {
          return (
            <p>{Object.values(data.description[name].join(" • "))}</p>
          );
        })}
      </div>
      <div className="actionbuttons">
        <RouteButton latitude={data.latitude} longitude={data.longitude}/>
        <ShareButton setShareModal={setShareModal} shareModal={shareModal}/>
      </div>
      {shareModal ? (
        <div className="modal-container">
          <ShareModal data={data} setShareModal={setShareModal}/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};