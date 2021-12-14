/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import "./DynamsoftBarcodeScanner.css";
import DBR from "../../utility/DBR/dbr";

export type BarcodeScannerProps = Omit<React.HTMLProps<HTMLVideoElement>, "ref"> & {
  appendMessage: Function
}
const Scanner = ({ appendMessage } : BarcodeScannerProps) => {
  const [destroyed, setDestroyed] = React.useState<boolean>(false);
  const [scanner, setScanner] = React.useState<any>(null);
  const elRef = React.useRef<any>(null);

  const configureScanner = async () => {
    try {
      if (!scanner) {
        const newScanner = await DBR.BarcodeScanner.createInstance();
        setScanner(newScanner);
      }
    } catch (ex: any) {
      appendMessage({ msg: ex.message, type: "error" });
      console.error(ex);
    }
  };

  const openScanner = async () => {
    elRef.current.appendChild(scanner.getUIElement());
    scanner.onFrameRead = (results: any) => {
      for (const result of results) {
        console.log(result.barcodeFormatString + ": " + result.barcodeText);
        appendMessage({ format: result.barcodeFormatString, text: result.barcodeText, type: "result" });
        if (result.barcodeText.indexOf("Attention(exceptionCode") !== -1) {
          appendMessage({ msg: result.exception.message, type: "error" });
      }
      }
    }
    await scanner.open();
  };

  const destroyScanner = async () => {
    setDestroyed(true);
    if (scanner) {
      await scanner.destroy();
    }
  };

  //Component mount useEffect
  React.useEffect(() => {
    configureScanner();

    return () => {
      destroyScanner();
    };
  }, []);

  React.useEffect(() => {
    if (scanner) {
      openScanner();
    }
  }, [scanner]);

  return <div ref={elRef}></div>;
};

const BarcodeScanner = () => {
  const [libLoaded, setLibLoaded] = React.useState(false);
  const [resultValue, setResultValue] = React.useState("");
  const [showScanner, setShowScanner] = React.useState(false);

  const loasWASM = async () => {
    try {
      await DBR.BarcodeScanner.loadWasm();
      setLibLoaded(true);
      setShowScanner(true);
    } catch (ex: any) {
      alert(ex.message);
      throw ex;
    }
  };

  const appendMessage = (message: { type: any; format: string; text: string; msg: React.SetStateAction<string>; }) => {
    switch (message.type) {
      case "result":
        setResultValue(message.format + ": " + message.text);
        break;
      case "error":
        setResultValue(message.msg);
        break;
      default: break;
    }
  }

  React.useEffect(() => {
    loasWASM();
  }, []);

  return (
    <div className="helloWorld">
      <div className="control">
        {resultValue}
      </div>
      <div id="UIElement">
        {!libLoaded && (<span>Loading Library...</span>)}
        {showScanner && (<Scanner appendMessage={appendMessage}></Scanner>)}
      </div>
      
    </div>
  );
};

export default BarcodeScanner;
