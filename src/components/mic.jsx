import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faEarListen } from "@fortawesome/free-solid-svg-icons";

const Mic = (props) => {
  const [micStatus, setMicStatus] = useState(faMicrophone);
  const { add, prev } = props;

  function handleMicOn() {
    setMicStatus(faEarListen);
    const API = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (API) {
      var recognition = new API();

      recognition.continuous = true;
      recognition.lang = "en-US";

      if (micStatus.iconName === "microphone") {
        recognition.start();

        recognition.onresult = (event) => {
          const result = event.results;
          console.log(result[0][0].transcript);

          if (result[0].isFinal) {
            let obj = { id: prev.length + 1, name: result[0][0].transcript };
            add([obj, ...prev]);
            setMicStatus(faMicrophone);
            return recognition.stop();
          }
        };
      } else {
        setMicStatus(faMicrophone);
        return recognition.stop();
      }
    }
  }

  function handleMicOff() {}

  return (
    <React.Fragment>
      <p id="listening">{micStatus === faEarListen ? "Listening..." : null}</p>
      <div id="mic">
        <FontAwesomeIcon icon={micStatus} onClick={handleMicOn} />
      </div>
    </React.Fragment>
  );
};

export default Mic;
