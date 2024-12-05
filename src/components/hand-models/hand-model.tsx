import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { StaticImageData } from "next/image";
import { drawHand } from "./utils";
import * as fp from "fingerpose";
import ThumbsDownGesture from "../../../src/app/gestures/ThumbsDown";
import MiddleFingerGesture from "../../../src/app/gestures/MiddleFinger";
import OKSignGesture from "../../../src/app/gestures/OKSign";
import PinchedFingerGesture from "../../../src/app/gestures/PinchedFinger";
import PinchedHandGesture from "../../../src/app/gestures/PinchedHand";
import RaisedHandGesture from "../../../src/app/gestures/RaisedHand";
import LoveYouGesture from "../../../src/app/gestures/LoveYou";
import RockOnGesture from "../../../src/app/gestures/RockOn";
import CallMeGesture from "../../../src/app/gestures/CallMe";
import PointUpGesture from "../../../src/app/gestures/PointUp";
import PointDownGesture from "../../../src/app/gestures/PointDown";
import PointRightGesture from "../../../src/app/gestures/PointRight";
import PointLeftGesture from "../../../src/app/gestures/PointLeft";
import RaisedFistGesture from "../../../src/app/gestures/RaisedFist";
import FlexedBicepsGesture from "../../../src/app/gestures/FlexedBicep";

import victory from "../../app/img/victory.png";
import thumbs_up from "../../app/img/thumbs_up.png";
import thumbs_down from "../../app/img/thumbs_down.png";
import middle_finger from "../../app/img/middle_finger.png";
import ok_sign from "../../app/img/ok_sign.png";
import pinched_finger from "../../app/img/pinched_finger.png";
import pinched_hand from "../../app/img/pinched_hand.png";
import raised_hand from "../../app/img/raised_hand.png";
import love_you from "../../app/img/love_you.png";
import rock_on from "../../app/img/rock_on.png";
import call_me from "../../app/img/call_me.png";
import point_up from "../../app/img/point_up.png";
import point_down from "../../app/img/point_down.png";
import point_left from "../../app/img/point_left.png";
import point_right from "../../app/img/point_right.png";
import raised_fist from "../../app/img/raised_fist.png";
import flexed_bicep from "../../app/img/flexed-bicep.png";
const HandModel: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [emoji, setEmoji] = useState<string | null>(null);
  const images: { [key: string]: StaticImageData } = {
    thumbs_up,
    victory,
    thumbs_down,
    middle_finger,
    ok_sign,
    pinched_finger,
    pinched_hand,
    raised_hand,
    love_you,
    rock_on,
    call_me,
    point_up,
    point_down,
    point_left,
    point_right,
    raised_fist,
    flexed_bicep
  };

  const runHandpose = async () => {
    await tf.setBackend("webgl");
    await tf.ready();
    console.log(`Using backend ${tf.getBackend()}`);
    const net = await handpose.load();
    console.log("Handpose model loaded");
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net: handpose.HandPose) => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
  
      // Set video width and height
      video.width = videoWidth;
      video.height = videoHeight;
  
      // Set canvas width and height
      if (canvasRef.current) {
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
  
        // Make detection
        const hand = await net.estimateHands(video);
  
        if (hand.length > 0) {
          const landmarks = hand[0].landmarks.map(([x, y, z]) => ({ x, y, z })); // Transform landmarks
          const GE = new fp.GestureEstimator([
            fp.Gestures.VictoryGesture,
            fp.Gestures.ThumbsUpGesture,
            ThumbsDownGesture,
            MiddleFingerGesture,
            OKSignGesture,
            PinchedFingerGesture,
            PinchedHandGesture,
            RaisedHandGesture,
            LoveYouGesture,
            RockOnGesture,
            CallMeGesture,
            PointRightGesture,
            PointUpGesture,
            PointLeftGesture,
            PointDownGesture,
            RaisedFistGesture,
            FlexedBicepsGesture
          ]);
          const gesture = await GE.estimate(landmarks, 8);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            console.log("Gestures detected: ", gesture);
            const confidence = gesture.gestures.map(
              (prediction) => prediction.score
            );
            const maxConfidence = confidence.indexOf(
              Math.max(...confidence)
            );
            setEmoji(gesture.gestures[maxConfidence].name);
          } else {
            console.log("No gestures detected");
          }
        }
  
        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) drawHand(hand, ctx);
      }
    }
  };
  
  React.useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        {emoji !== null && (
          <img
            src={images[emoji]?.src}
            alt={emoji || "gesture emoji"}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 700,
              right: 0,
              textAlign: "center",
              height: 100,
              display: "none",
            }}
          />
        )}
      </header>
    </div>
  );
};

export default HandModel;
