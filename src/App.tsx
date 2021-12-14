import { useState } from 'react'

import "./App.css";
import {ZxingBarcodeScanner,  DynamsoftBarcodeScanner, QuaggaBarcodeScanner  } from './common/components';
const scanners = [  'zxing', 'dynamsoft', 'quagga'];

function App() {
  const [showScanner, setShowScanner] = useState<string>(scanners[0]);
  const switchScanner = (index: number) => {
    setShowScanner(scanners[index]);
  }
  return (

      <div className="container mx-auto">
        <div style={{minHeight: '200px'}}>
          {showScanner === scanners[0] && <ZxingBarcodeScanner width={300} height={200} />}
          {showScanner === scanners[1] && <DynamsoftBarcodeScanner />}  
          {showScanner === scanners[2] && <QuaggaBarcodeScanner />}   
        </div>
        <div className="control bottom">
          {scanners.map((item,index) => {
            return (<button style={{marginRight: '15px'}} key={item + index} onClick={() => switchScanner(index)}>Switch to {item}</button>)
          })}
        </div>   
      </div>
  );
}

export default App;
