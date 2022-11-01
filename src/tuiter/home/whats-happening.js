import { useState } from "react";
import { createTuit } from "../reducers/tuit-reducer";
import { useDispatch } from "react-redux";

import "./index.css";

import TextareaAutosize from "react-textarea-autosize";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      text: whatsHappening,
    };
    dispatch(createTuit(newTuit));
  };

  return (
    <div className="list-group-item">
      <h5 className="mb-3">Home</h5>
      <div className="row">
        <div className="col-auto pe-3">
          <img
            src="https://mushucdn.b-cdn.net/Dennis_Headshot_Portrait.jpg"
            className="wd-icon-width rounded-circle"
          />
        </div>
        <div className="col ps-0">
          <TextareaAutosize
            value={whatsHappening}
            placeholder="What's happening?"
            className="wd-disable-resize form-control form-control-lg shadow-none border-0 rounded-0 px-0 py-2"
            onChange={(e) => setWhatsHappening(e.target.value)}
          />
          <div className="d-flex flex-row text-primary fs-5 pt-2 align-items-center">
            <i className="bi bi-card-image me-4" />
            <i className="bi bi-filetype-gif me-4" />
            <i className="bi bi-bar-chart-line me-4" />
            <i className="bi bi-emoji-smile me-4" />
            <i className="bi bi-geo-alt me-4" />
            <button
              className="rounded-pill btn btn-primary ms-auto fw-bold wd-tuit-width"
              onClick={tuitClickHandler}
            >
              Tuit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;
