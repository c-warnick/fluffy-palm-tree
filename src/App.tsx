import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import packageInfo from '../package.json'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import ZxingBarcodeScanner from "./common/components/ZxingBarcodeScanner";
import DynamsoftBarcodeScanner from "./common/components/DynamsoftBarcodeScanner";



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


function App() {
  const [showScanner, setShowScanner] = useState<Boolean>(false);
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
