import React from "react";
import {FormattedMessage} from "react-intl";
import ReactGA from "react-ga4";

export const ShareButton = ({ setShareModal, id }) => {

  const onClickShare = () => {
    ReactGA.event({
      category: 'Refill Spot',
      action: 'Clicked share button',
      label: id,
    });
    setShareModal(true)
  }
  return (
    <button className="share-button" onClick={() => onClickShare()}>
      <FormattedMessage id="spot.share" />
    </button>
  );
};
