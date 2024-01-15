import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css-sheets/home-page.css'; 
import Homepage from './components/home'
import Tripspage from './components/trips'
import 'bootstrap/dist/css/bootstrap.css'
import ControlledCarousel from './components/carousel';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='home-div'>
        <ControlledCarousel />
      </div>
      <div></div>


    
  </React.StrictMode>,
)
