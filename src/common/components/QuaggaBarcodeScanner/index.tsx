/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
//@ts-nocheck
import * as React from "react";
import config from "./config.json";
import './BarcodeScanner.css';
import Quagga from 'quagga';

const Scanner = ({ onDetected }) => {
  React.useEffect(() => {
    Quagga.init(config, err => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.stop()
      }
    });

    //detecting boxes on stream
    Quagga.onProcessed(result => {
      const drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });

    Quagga.onDetected(detected);
  }, []);

  const detected = (result: { codeResult: { code: any; }; }) => {
    onDetected(result.codeResult.code);
  };

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <div id="interactive" className="viewport" />
  );
};

const BarcodeScanner = () => {
  const [camera, setCamera] = React.useState(false);
  const [result, setResult] = React.useState(null);

  const onDetected = result => {
    setResult(result);
  };

  const stopCamera = () => {
    setCamera(!camera);
    setResult(null);
  }

  return (
    <>
      <div className="control">
        <p>{result ? result : "Scanning..."}</p>
        <button onClick={stopCamera}>
          {camera ? "Stop" : "Start"}
        </button>
      </div>
      <div className="barcodescanner">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </>
  );
}

export default BarcodeScanner;

