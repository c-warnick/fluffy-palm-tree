import { useState } from 'react'

import "./App.css";
import ZxingBarcodeScanner from "./common/components/ZxingBarcodeScanner";
import DynamsoftBarcodeScanner from "./common/components/DynamsoftBarcodeScanner";


function App() {
  const [showScanner, setShowScanner] = useState<boolean>(false);
  const switchScanner = () => {
    setShowScanner(!showScanner);
  }
  return (

      <div className="container mx-auto">
        <div style={{minHeight: '200px'}}>
          {!showScanner && <ZxingBarcodeScanner width={300} height={200} />}
          {showScanner && <DynamsoftBarcodeScanner />}    
        </div>
        <div style={{position:'relative', textAlign: 'center'}}>
          <button onClick={switchScanner}>Switch reader</button>
        </div>   
      </div>
  );
}

export default App;
