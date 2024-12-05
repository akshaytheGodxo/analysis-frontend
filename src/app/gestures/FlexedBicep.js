// FlexedBiceps.js
import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

// Define the Flexed Biceps gesture
const FlexedBicepsGesture = new GestureDescription("flexed_biceps");

// Thumb: Half-curl
FlexedBicepsGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
FlexedBicepsGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// Index: Full-curl
FlexedBicepsGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

// Middle: Full-curl
FlexedBicepsGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// Ring: Full-curl
FlexedBicepsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// Pinky: Full-curl
FlexedBicepsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// Optional: Adjust directions for more precision
FlexedBicepsGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
FlexedBicepsGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
FlexedBicepsGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

export default FlexedBicepsGesture;
