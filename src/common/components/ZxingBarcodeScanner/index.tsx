import * as React from "react";
import './BarcodeScanner.css';
import {BrowserMultiFormatOneDReader, BrowserCodeReader, IScannerControls} from '@zxing/browser';
import { read } from "fs";

export type BarcodeScannerProps = Omit<React.HTMLProps<HTMLVideoElement>, "ref"> & {
  width?: Number,
  height?: Number,
  mirrored?: Boolean,
}

interface WebcamState {
  hasUserMedia: boolean;
  src?: string;
}

const BarcodeScanner = ({
  style = {},
  width,
  height,
  mirrored
} : BarcodeScannerProps) => {
  const [reader, setReader] = React.useState<BrowserMultiFormatOneDReader | null>();
  const [videoInputDevices, setVideoInputDevices] = React.useState<MediaDeviceInfo[] | null>();
  const [selectedDeviceId, setSelectedDeviceId] = React.useState<string | undefined>();
  const [controls, setControls]  = React.useState<IScannerControls | null>(null);
  const [results, setResults] = React.useState<string>("");
  const previewEl = React.useRef<HTMLVideoElement | null>(null);

  const requestUserMedia = async () => {
  
    const vids = await BrowserCodeReader.listVideoInputDevices();
    setVideoInputDevices(vids);
  }

  const startScanning = async () => {
    if(results) {
      setResults("");
    }
    if(reader){
      const readerControls = await reader.decodeFromVideoDevice( selectedDeviceId, previewEl.current?.id, ( result, error, controls) => {
        console.log( 'Scanning Results', result);
        if(result){
          setResults(result?.getBarcodeFormat() + ": " + result?.getText());
          readerControls.stop();
        }
      })

      setControls(readerControls);
    }
  }

  const stopAndAlert = () => {
    if(controls) {
      controls.stop();
      alert('We are having issues with scanning. Please reload or try entering barcode manually');
    }
  }

  React.useEffect(() => {
    if(!reader) {
      setReader(new BrowserMultiFormatOneDReader());
    }

    if(!videoInputDevices) {
      requestUserMedia();
    }
    
    if(selectedDeviceId){
      startScanning();
    }

    return () => {
      if(controls) {
        controls.stop();
      }
    }

  }, [selectedDeviceId]);

  React.useEffect(() => {
    if(videoInputDevices){
      setSelectedDeviceId(videoInputDevices[0].deviceId);
    }
    
  }, [videoInputDevices]);

  // React.useEffect(() => {
  //   if(controls) {
  //     setTimeout(() => stopAndAlert(), 20000);
  //   }
  // }, [controls]);
  const videoStyle = mirrored ? { ...style, transform: `${style.transform || ""} scaleX(-1)` } : style;
  return (
    <div id='videoview'>
        <video
            id="video"
            ref={previewEl}
            style={videoStyle}
            width={width}
            height={height}
        />
        {results && <button onClick={startScanning}>Start Scanning</button>}
        <input type="text" value={results} readOnly={true} id="resultText" />
      </div>
    );
}

BarcodeScanner.defaultProps = {
  audio: false,
  forceScreenshotSourceSize: false,
  imageSmoothing: true,
  mirrored: false,
  onUserMedia: () => undefined,
  onUserMediaError: () => undefined,
  screenshotFormat: "image/webp",
  screenshotQuality: 0.92,
};
export default BarcodeScanner;

